from rest_framework.response import Response
from rest_framework import status, generics
from rest_framework.views import APIView
from account.serializers import (
    UserChangePasswordSerializer,
    UserLoginSerializer,
    UserProfileSerializer,
    UserRegistrationSerializer,
    SendPasswordResetEmailSerializer,
    AdminRegistrationSerializer,
    SetNewPasswordSerializer,
    LogoutUserSerializer,
)
from django.contrib.auth import authenticate
from account.renderers import UserRenderer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from django.utils.encoding import smart_str, DjangoUnicodeDecodeError
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from .models import User, OneTimePassword
from rest_framework.generics import GenericAPIView
from django.utils.http import urlsafe_base64_decode
from .utils import Util


# Generate Token Manually
def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        "refresh": str(refresh),
        "access": str(refresh.access_token),
    }


# class AdminRegistrationView(APIView):
#     renderer_classes = [UserRenderer]

#     def post(self, request, format=None):
#         serializer = AdminRegistrationSerializer(data=request.data)
#         serializer_1= UserRegistrationSerializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         serializer_1.is_valid(raise_exception=True)
#         admin = serializer.save()
#         user = serializer_1.save()
#         token = get_tokens_for_user(user)
#         return Response(
#             {"token": token, "msg": "Registration Successful"},
#             status=status.HTTP_201_CREATED,
#         )


class AdminRegistrationView(APIView):
    renderer_classes = [UserRenderer]

    def post(self, request, format=None):
        # Step 1: Create and save admin user
        admin_serializer = AdminRegistrationSerializer(data=request.data)
        if admin_serializer.is_valid():
            admin_user = admin_serializer.save()
        else:
            return Response(
                {"msg": "Admin Registration Failed", "errors": admin_serializer.errors},
                status=status.HTTP_400_BAD_REQUEST,
            )

        user_data = request.data.copy()
        user_data["adminId"] = admin_user.adminId
        user_data["userName"] = admin_user.adminName
        user_serializer = UserRegistrationSerializer(data=user_data)

        if user_serializer.is_valid():
            user = user_serializer.save()

            token = get_tokens_for_user(user)

            return Response(
                {"token": token, "msg": "Admin Registration Successful"},
                status=status.HTTP_201_CREATED,
            )
        else:
            admin_user.delete()

            return Response(
                {"msg": "User Registration Failed", "errors": user_serializer.errors},
                status=status.HTTP_400_BAD_REQUEST,
            )


class UserRegistrationView(APIView):
    renderer_classes = [UserRenderer]

    def post(self, request, format=None):
        serializer = UserRegistrationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        Util.send_code_to_user(user.email)
        token = get_tokens_for_user(user)

        user_data = UserRegistrationSerializer(user).data
        return Response(
            {
                "token": token,
                "msg": f"Hi {user.userName} thanks for signing up. A passcode has been sent to your email.",
            },
            status=status.HTTP_201_CREATED,
        )


class VerifyUserEmailView(GenericAPIView):
    def post(self, request):
        try:
            passcode = request.data.get("otp")
            user_pass_obj = OneTimePassword.objects.get(otp=passcode)
            user = user_pass_obj.user
            if not user.isVerified:
                user.isVerified = True
                user.save()
                return Response(
                    {"message": "account email verified successfully"},
                    status=status.HTTP_200_OK,
                )
            return Response(
                {"message": "passcode is invalid user is already verified"},
                status=status.HTTP_204_NO_CONTENT,
            )
        except OneTimePassword.DoesNotExist as identifier:
            return Response(
                {"message": "passcode not provided"}, status=status.HTTP_400_BAD_REQUEST
            )


class UserLoginView(APIView):
    renderer_classes = [UserRenderer]

    def post(self, request, format=None):
        serializer = UserLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        email = serializer.data.get("email")
        password = serializer.data.get("password")
        user = authenticate(email=email, password=password)
        user_data = UserProfileSerializer(user).data
        if user is not None:
            token = get_tokens_for_user(user)
            return Response(
                {"user": user_data, "token": token, "msg": "Login Success"},
                status=status.HTTP_200_OK,
            )
        else:
            return Response(
                {"errors": {"non_field_errors": ["Email or Password is not Valid"]}},
                status=status.HTTP_404_NOT_FOUND,
            )


class TestAuthenticationView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        data = {"msg": "It works"}
        return Response(data, status=status.HTTP_200_OK)


class UserProfileView(APIView):
    renderer_classes = [UserRenderer]
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        serializer = UserProfileSerializer(request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)


class UserChangePasswordView(APIView):
    renderer_classes = [UserRenderer]
    permission_classes = [IsAuthenticated]

    def post(self, request, format=None):
        serializer = UserChangePasswordSerializer(
            data=request.data, context={"user": request.user}
        )
        serializer.is_valid(raise_exception=True)
        return Response(
            {"msg": "Password Changed Successfully"}, status=status.HTTP_200_OK
        )


class SendPasswordResetEmailView(APIView):
    renderer_classes = [UserRenderer]
    serializer_class = SendPasswordResetEmailSerializer

    def post(self, request):
        serializer = self.serializer_class(
            data=request.data, context={"request": request}
        )
        serializer.is_valid(raise_exception=True)
        return Response(
            {"msg": "Password Reset link send. Please check your Email"},
            status=status.HTTP_200_OK,
        )


class UserPasswordResetView(APIView):
    renderer_classes = [UserRenderer]

    def get(self, request, uidb64, token):
        try:
            user_id = smart_str(urlsafe_base64_decode(uidb64))
            user = User.objects.get(userId=user_id)

            if not PasswordResetTokenGenerator().check_token(user, token):
                return Response(
                    {"message": "token is invalid or has expired"},
                    status=status.HTTP_401_UNAUTHORIZED,
                )
            return Response(
                {
                    "success": True,
                    "message": "credentials are valid",
                    "uidb64": uidb64,
                    "token": token,
                },
                status=status.HTTP_200_OK,
            )

        except DjangoUnicodeDecodeError as identifier:
            return Response(
                {"message": "token is invalid or has expired"},
                status=status.HTTP_401_UNAUTHORIZED,
            )


class SetNewPasswordView(APIView):
    serializer_class = SetNewPasswordSerializer

    def patch(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(
            {"success": True, "message": "password reset is succesful"},
            status=status.HTTP_200_OK,
        )


class LogoutApiView(GenericAPIView):
    serializer_class = LogoutUserSerializer
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(
            {"message": "logout successful"}, status=status.HTTP_204_NO_CONTENT
        )


class UserDeleteView(generics.DestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserProfileSerializer

    lookup_url_kwarg = "email"

    def get_object(self):
        email = self.request.data.get("email")
        return self.get_queryset().get(email=email)

    def destroy(self, request, *args, **kwargs):
        email = request.data.get("email", None)

        if not email:
            return Response(
                {"error": "Email must be provided in the request body."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        instance = self.get_object()
        self.perform_destroy(instance)

        return Response(
            {"msg": "User deleted successfully"}, status=status.HTTP_204_NO_CONTENT
        )


class UserCountView(APIView):
    def get(self, request, *args, **kwargs):
        total_users = User.objects.count()
        data = {"title": "Users", "amount": total_users}
        return Response(data, status=200)


class UserListView(APIView):
    def get(self, request):

        users = User.objects.all()
        serializer = UserProfileSerializer(users, many=True)

        return Response(serializer.data, status=200)
