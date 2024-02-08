from django.urls import path
from account.views import (
    UserChangePasswordView,
    UserLoginView,
    UserProfileView,
    UserRegistrationView,
    SendPasswordResetEmailView,
    UserPasswordResetView,
    AdminRegistrationView,
    TestAuthenticationView,
    SetNewPasswordView,
    VerifyUserEmailView,
    LogoutApiView,
    UserDeleteView,
    UserCountView,
    UserListView,
    BanUserView,
)

from rest_framework_simplejwt.views import TokenRefreshView

# from account.views import UserRegistrationView
urlpatterns = [
    path("register/", UserRegistrationView.as_view(), name="register"),
    path("register-admin/", AdminRegistrationView.as_view(), name="Admin-register"),
    path("verify-email/", VerifyUserEmailView.as_view(), name="verify"),
    path("login/", UserLoginView.as_view(), name="login"),
    path("test/", TestAuthenticationView.as_view(), name="test"),
    path("profile/", UserProfileView.as_view(), name="profile"),
    path("changepassword/", UserChangePasswordView.as_view(), name="changepassword"),
    path(
        "password-reset/",
        SendPasswordResetEmailView.as_view(),
        name="password-reset",
    ),
    path(
        "reset-password-confirm/<uidb64>/<token>",
        UserPasswordResetView.as_view(),
        name="reset-password-confirm",
    ),
    path(
        "set-new-password/",
        SetNewPasswordView.as_view(),
        name="reset-password-confirm",
    ),
    path("logout/", LogoutApiView.as_view(), name="logout"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token-refresh"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token-refresh"),
    path("delete/", UserDeleteView.as_view(), name="user-delete"),
    path("user-count/", UserCountView.as_view(), name="user-count"),
    path("users/", UserListView.as_view(), name="users"),
    path("ban/", BanUserView.as_view(), name="ban"),
]
