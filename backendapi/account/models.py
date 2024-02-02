from django.db import models
import random
import string
import uuid
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser


#  Custom User Manager
class UserManager(BaseUserManager):
    def create_user(
        self,
        email,
        userName,
        password=None,
        password2=None,
        isBanned=False,
        country="",
        user_type="hotel owner",
    ):
        """
        Creates and saves a User with the given parameters.
        """
        if not email:
            raise ValueError("User must have an email address")

        user = self.model(
            userName=userName,
            email=self.normalize_email(email),
            isBanned=isBanned,
            country=country,
            user_type=user_type,
            userId=self.model().generate_user_id(),
        )

        user.set_password(
            password
        )  # This hashes the user password before storing in the database.
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None):
        """
        Creates and saves a superuser with the given email, name and password.
        """
        user = self.create_user(
            email,
            password=password,
        )
        user.is_admin = True
        user.save(using=self._db)
        return user


# Admin user manager
class AdminManager(BaseUserManager):
    def create_admin(self, email, adminName, country, password=None, password2=None):
        if not email or not adminName or not country:
            raise ValueError("Email,adminname and country must be required fields.")

        admin = self.model(
            email=self.normalize_email(email),
            adminName=adminName,
            country=country,
            adminId=self.model().generate_admin_id(),
        )
        admin.set_password(password)  # Hashes the admin password before storing it.
        admin.save(using=self._db)
        return admin


# Admin user model
class Admin(AbstractBaseUser):
    PREFIX = "A"

    adminId = models.CharField(
        primary_key=True,
        editable=False,
        null=False,
        blank=False,
        db_column="adminId",
        max_length=255,
    )
    # adminId = models.CharField(max_length=10, primary_key=True, unique=True, editable=False,null=False,blank=False)
    adminName = models.CharField(
        max_length=100, null=False, blank=False, db_column="adminName"
    )  # adminname cannot be null
    email = models.EmailField(
        verbose_name="Email",
        max_length=225,
        unique=True,
        null=False,
        blank=False,
        db_column="email",
    )  # email cannot be null
    country = models.CharField(
        max_length=100, null=False, blank=False, db_column="country"
    )  # country cannot be null

    objects = AdminManager()
    is_SuperUser = "none"
    # last_login = "none"

    class Meta:
        db_table = "admin"

    def generate_admin_id(self):
        random_digits = "".join(random.choices(string.digits, k=4))
        return f"{self.PREFIX}{random_digits}"

    USERNAME_FIELD = "email"

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True


AUTH_PROVIDERS = {"email": "email", "google": "google", "facebook": "facebook"}


#  Custom User Model
class User(AbstractBaseUser):
    userId = models.CharField(
        primary_key=True,
        editable=False,
        blank=False,
        null=False,
        db_column="userId",
        max_length=255,
    )
    adminId = models.ForeignKey(
        Admin, on_delete=models.CASCADE, null=True, blank=True, db_column="adminId"
    )  # Foreign key reference to Admin model
    userName = models.CharField(max_length=200, db_column="userName")
    email = models.EmailField(
        verbose_name="Email",
        max_length=255,
        unique=True,
        null=False,
        blank=False,
        db_column="email",
    )

    isBanned = models.CharField(max_length=255, db_column="isBanned", default="false")
    country = models.CharField(max_length=15, db_column="country")
    user_type = models.CharField(max_length=15, db_column="type", default="traveler")
    auth_provider = models.CharField(
        max_length=50, blank=False, null=False, default=AUTH_PROVIDERS.get("email")
    )
    isVerified = models.CharField(max_length=8, db_column="isVerified", default=0)

    # last_login = "none"

    class Meta:
        db_table = "user"

    objects = UserManager()

    #  Email can be used as username
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email

    def generate_user_id(self):
        random_digits = "".join(random.choices(string.digits, k=4))
        return f"U{random_digits}"

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        return self.is_admin

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        return True

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        return self.is_admin


##########################################################################
class OneTimePassword(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    otp = models.CharField(max_length=6)

    def __str__(self):
        return f"{self.user.first_name} - otp code"


##############################################################################3


###############################################################################################


class Notification(models.Model):
    notificationId = models.CharField(
        primary_key=True, editable=False, db_column="NotificationId", max_length=255
    )
    adminId = models.ForeignKey(Admin, on_delete=models.CASCADE)
    content = models.CharField(max_length=255)
    dateTime = models.DateTimeField()

    def __str__(self):
        return f"{self.notificationId} - {self.content}"


class GetNotification(models.Model):
    notificationId = models.ForeignKey(
        Notification, on_delete=models.CASCADE, db_column="NotificationId"
    )
    userId = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)

    def __str__(self):
        return f"{self.notificationId} - {self.userId.email}"
