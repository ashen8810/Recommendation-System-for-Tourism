from rest_framework import serializers
from account.models import User, Admin, Notification

from django.utils.encoding import smart_str, force_bytes, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from account.utils import Util

from django.utils.encoding import force_bytes, force_str, smart_bytes
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
import uuid
from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse
from rest_framework_simplejwt.tokens import RefreshToken, TokenError
from rest_framework.exceptions import AuthenticationFailed


# from account.utils import Util

#!has to implement the rate limiting functionality for improved security.(To protect the site from brute force atttacks)
#!has to check whether built in data sanitization layer could be applied to the code fro improved security.(To prevent sql injection attacks.)


class AdminRegistrationSerializer(serializers.ModelSerializer):
    # We are writing this bcoz we need to confirm password field in our Registratin Request
    password2 = serializers.CharField(style={"input_type": "password"}, write_only=True)

    class Meta:
        model = Admin
        fields = ["adminId", "email", "adminName", "password", "password2", "country"]
        extra_kwargs = {"password": {"write_only": True}}

    # Validating Password and Confirm Password while Registration
    # attrs is a dictionary containing password and confirm password

    def validate(self, attrs):
        password = attrs.get("password")
        password2 = attrs.get("password2")
        if password != password2:
            raise serializers.ValidationError(
                "password and Confirm Password doesn't match each other"
            )
        return attrs

    def create(self, validate_data):
        return Admin.objects.create_admin(**validate_data)


class UserRegistrationSerializer(serializers.ModelSerializer):
    # We are writing this bcoz we need to confirm password field in our Registratin Request
    password2 = serializers.CharField(style={"input_type": "password"}, write_only=True)

    class Meta:
        model = User
        fields = [
            "userId",
            "userName",
            "email",
            "password",
            "password2",
            "isBanned",
            "country",
            "user_type",
            "adminId",
            "isVerified",
        ]
        extra_kwargs = {"password": {"write_only": True}}

    # Validating Password and Confirm Password while Registration
    # attrs is a dictionary containing password and confirm password

    def validate(self, attrs):
        password = attrs.get("password")
        password2 = attrs.get("password2")
        if password != password2:
            raise serializers.ValidationError(
                "password and Confirm Password doesn't match each other"
            )
        return attrs

    def create(self, validate_data):
        admin_id = validate_data.pop("adminId", None)
        print(f"Received adminId: {admin_id}")

        user = User.objects.create_user(**validate_data)
        # user.type = User._meta.get_field("type").default
        if admin_id:
            user.adminId = admin_id
            user.save()
        return user


class UserLoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=255)

    class Meta:
        model = User
        fields = ["email", "password"]


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["userId", "email", "userName", "country", "user_type"]


class UserListSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "userId",
            "email",
            "userName",
            "country",
            "user_type",
            "isBanned",
            "banExpirationDate",
        ]


class UserChangePasswordSerializer(serializers.Serializer):
    password = serializers.CharField(
        max_length=255, style={"input_type": "password"}, write_only=True
    )
    password2 = serializers.CharField(
        max_length=255, style={"input_type": "password"}, write_only=True
    )

    class Meta:
        fields = ["password", "password2"]

    def validate(self, attrs):
        password = attrs.get("password")
        password2 = attrs.get("password2")
        user = self.context.get("user")
        if password != password2:
            raise serializers.ValidationError(
                "Password and Confirm Password doesn't match"
            )
        user.set_password(password)
        user.save()
        return attrs


class SendPasswordResetEmailSerializer(serializers.Serializer):
    email = serializers.EmailField(max_length=255)

    class Meta:
        fields = ["email"]

    def validate(self, attrs):
        email = attrs.get("email")
        if User.objects.filter(email=email).exists():
            user = User.objects.get(email=email)
            uidb64 = urlsafe_base64_encode(smart_bytes(user.userId))
            # uid = str(user.userId)
            # print("Encoded UID", uid)
            # decoded_uid = urlsafe_base64_decode(uid)
            # original_uuid = uuid.UUID(bytes=decoded_uid)
            # print("Original_db UID", user.userId)
            # print("original UID", original_uuid)
            token = PasswordResetTokenGenerator().make_token(user)
            request = self.context.get("request")
            current_site = get_current_site(request).domain
            relative_link = reverse(
                "reset-password-confirm", kwargs={"uidb64": uidb64, "token": token}
            )
            abslink = f"http://localhost:3000/reset-password-confirm/{uidb64}/{token}"
            print(abslink)

            # Send EMail
            body = f"Click The Following Link to Reset Your Password {abslink}"
            data = {
                "subject": "Reset Your Password",
                "body": body,
                "to_email": user.email,
            }
            Util.send_email(data)
            return super().validate(attrs)
        else:
            raise serializers.ValidationError("You are not a Registered User")


##############################################################################################
# class UserPasswordResetSerializer(serializers.Serializer):
#     password = serializers.CharField(
#         max_length=255, style={"input_type": "password"}, write_only=True
#     )
#     password2 = serializers.CharField(
#         max_length=255, style={"input_type": "password"}, write_only=True
#     )

#     class Meta:
#         fields = ["password", "password2"]

#     def validate(self, attrs):
#         user = None
#         try:
#             password = attrs.get("password")
#             password2 = attrs.get("password2")
#             uid = self.context.get("uid")
#             token = self.context.get("token")
#             if password != password2:
#                 raise serializers.ValidationError(
#                     "Password and Confirm Password doesn't match"
#                 )
#             print(uid)
#             decoded_uid = urlsafe_base64_decode(uid)
#             original_uuid = uuid.UUID(bytes=decoded_uid)
#             print(original_uuid)
#             # id = smart_str(urlsafe_base64_decode(uid))
#             user = User.objects.get(userId=original_uuid)
#             if not PasswordResetTokenGenerator().check_token(user, token):
#                 raise serializers.ValidationError("Token is not Valid or Expired")
#             user.set_password(password)
#             user.save()
#             return attrs
#         except DjangoUnicodeDecodeError as identifier:
#             PasswordResetTokenGenerator().check_token(user, token)
#             raise serializers.ValidationError("Token is not Valid or Expired")

#################################################################################3


class SetNewPasswordSerializer(serializers.Serializer):
    password = serializers.CharField(max_length=100, write_only=True)
    confirm_password = serializers.CharField(max_length=100, write_only=True)
    uidb64 = serializers.CharField(min_length=1, write_only=True)
    token = serializers.CharField(min_length=3, write_only=True)

    class Meta:
        fields = ["password", "confirm_password", "uidb64", "token"]

    def validate(self, attrs):
        try:
            token = attrs.get("token")
            uidb64 = attrs.get("uidb64")
            password = attrs.get("password")
            confirm_password = attrs.get("confirm_password")

            user_id = force_str(urlsafe_base64_decode(uidb64))
            user = User.objects.get(userId=user_id)
            if not PasswordResetTokenGenerator().check_token(user, token):
                raise AuthenticationFailed("reset link is invalid or has expired", 401)
            if password != confirm_password:
                raise AuthenticationFailed("passwords do not match")
            user.set_password(password)
            user.save()
            return user
        except Exception as e:
            return AuthenticationFailed("link is invalid or has expired")


class LogoutUserSerializer(serializers.Serializer):
    refresh_token = serializers.CharField()

    default_error_message = {"bad_token": ("Token is expired or invalid")}

    def validate(self, attrs):
        self.token = attrs.get("refresh_token")

        return attrs

    def save(self, **kwargs):
        try:
            token = RefreshToken(self.token)
            token.blacklist()
        except TokenError:
            return self.fail("bad_token")


class BanUserSerializer(serializers.Serializer):
    email = serializers.EmailField()
    duration = serializers.IntegerField()


class NotificationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Notification
        fields = "__all__"
