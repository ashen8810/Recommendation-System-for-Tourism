# from django.db import models
# import random
# import string
# import uuid
# from django.contrib.auth.models import BaseUserManager, AbstractBaseUser


# #  Custom User Manager
# class UserManager(BaseUserManager):
#     def create_user(
#         self,
#         email,
#         name,
#         password=None,
#         password2=None,
#         isBanned=False,
#         country="",
#         type="",
#     ):
#         """
#         Creates and saves a User with the given parameters.
#         """
#         if not email:
#             raise ValueError("User must have an email address")

#         user = self.model(
#             email=self.normalize_email(email),
#             name=name,
#             isBanned=isBanned,
#             country=country,
#             type=type,
#         )

#         user.set_password(
#             password
#         )  # This hashes the user password before storing in the database.
#         user.save(using=self._db)
#         return user

#     def create_superuser(self, email, name, password=None):
#         """
#         Creates and saves a superuser with the given email, name and password.
#         """
#         user = self.create_user(
#             email,
#             password=password,
#             name=name,
#         )
#         user.is_admin = True
#         user.save(using=self._db)
#         return user


# # Admin user manager
# class AdminManager(BaseUserManager):
#     def create_admin(self, email, adminName, country, password=None, password2=None):
#         if not email or not adminName or not country:
#             raise ValueError("Email,adminname and country must be required fields.")

#         admin = self.model(
#             email=self.normalize_email(email),
#             adminName=adminName,
#             country=country,
#             is_staff=True,
#             is_superuser=True,
#         )
#         admin.set_password(password)  # Hashes the admin password before storing it.
#         admin.save(using=self._db)
#         return admin


# # Admin user model
# class Admin(AbstractBaseUser):
#     # PREFIX = 'A'

#     adminId = models.UUIDField(
#         primary_key=True,
#         default=uuid.uuid4,
#         editable=False,
#         null=False,
#         blank=False,
#         db_column="AdminId",
#     )
#     # adminId = models.CharField(max_length=10, primary_key=True, unique=True, editable=False,null=False,blank=False)
#     adminName = models.CharField(
#         max_length=100, null=False, blank=False, db_column="AdminName"
#     )  # adminname cannot be null
#     email = models.EmailField(
#         verbose_name="Email",
#         max_length=225,
#         unique=True,
#         null=False,
#         blank=False,
#         db_column="Email",
#     )  # email cannot be null
#     country = models.CharField(
#         max_length=100, null=False, blank=False, db_column="Country"
#     )  # country cannot be null
#     is_active = models.BooleanField(default=True)
#     is_staff = models.BooleanField(
#         default=True
#     )  # Set as True to grant admin staff privileges
#     is_superuser = models.BooleanField(
#         default=True
#     )  # Set as True to grant superuser privileges

#     # def save(self, *args, **kwargs):
#     #     if not self.adminId:
#     #         self.adminId = self.generate_admin_id()
#     #     super(Admin, self).save(*args, **kwargs)

#     # def generate_admin_id(self):
#     #     random_digits = ''.join(random.choices(string.digits, k=4))
#     #     return f'{self.PREFIX}{random_digits}'

#     objects = AdminManager()

#     USERNAME_FIELD = "email"

#     def has_perm(self, perm, obj=None):
#         return True

#     def has_module_perms(self, app_label):
#         return True


# #  Custom User Model
# class User(AbstractBaseUser):
#     userId = models.UUIDField(
#         primary_key=True,
#         default=uuid.uuid4,
#         editable=False,
#         blank=False,
#         null=False,
#         db_column="UserId",
#     )
#     # userId = models.CharField(
#     #     max_length=5,
#     #     unique=True,
#     #     # editable=False,
#     #     primary_key=True,
#     #     null=False,
#     #     blank=False,
#     #     db_column="UserId",
#     # )
#     adminId = models.ForeignKey(
#         Admin, on_delete=models.CASCADE, null=True, blank=True, db_column="AdminId"
#     )  # Foreign key reference to Admin model
#     name = models.CharField(max_length=200, db_column="Name")
#     email = models.EmailField(
#         verbose_name="Email",
#         max_length=255,
#         unique=True,
#         null=False,
#         blank=False,
#         db_column="Email",
#     )
#     is_active = models.BooleanField(default=True)
#     is_admin = models.BooleanField(default=False)
#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)
#     isBanned = models.BooleanField(default=False, db_column="IsBanned")
#     country = models.CharField(max_length=15, db_column="Country")
#     type = models.CharField(max_length=15, db_column="Type")

#     class Meta:
#         db_table = "User"

#     objects = UserManager()

#     #  Email can be used as username
#     USERNAME_FIELD = "email"
#     REQUIRED_FIELDS = ["name"]

#     # ? methods to create custom user id's
#     #   def generate_user_id(self):
#     #         prefix = 'U'
#     #         random_digits = ''.join(random.choices(string.digits, k=4))
#     #         return f'{prefix}{random_digits}'

#     #   def save(self, *args, **kwargs):
#     #         if not self.userId:
#     #             self.userId = self.generate_user_id()
#     #         super(User, self).save(*args, **kwargs)

#     def __str__(self):
#         return self.email

#     def has_perm(self, perm, obj=None):
#         "Does the user have a specific permission?"
#         return self.is_admin

#     def has_module_perms(self, app_label):
#         "Does the user have permissions to view the app `app_label`?"
#         return True

#     @property
#     def is_staff(self):
#         "Is the user a member of staff?"
#         return self.is_admin


from django.db import models

class Admin(models.Model):
    adminId = models.CharField(max_length=5, primary_key=True)
    adminName = models.CharField(max_length=50)
    email = models.EmailField(max_length=50)
    pwd = models.CharField(max_length=50)
    country = models.CharField(max_length=50)

    def __str__(self):
        return self.adminName

class User(models.Model):
    userId = models.CharField(max_length=5, primary_key=True)
    adminId = models.ForeignKey(Admin, on_delete=models.CASCADE)
    userName = models.CharField(max_length=50)
    email = models.EmailField(max_length=50)
    pwd = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    isBanned = models.CharField(max_length=3)
    type = models.CharField(max_length=50)

    def __str__(self):
        return self.userName

class Notification(models.Model):
    notificationId = models.CharField(max_length=5, primary_key=True)
    adminId = models.ForeignKey(Admin, on_delete=models.CASCADE)
    content = models.CharField(max_length=255)
    dateTime = models.DateTimeField()

    def __str__(self):
        return f"{self.notificationId} - {self.content}"

class GetNotification(models.Model):
    notificationId = models.ForeignKey(Notification, on_delete=models.CASCADE)
    userId = models.ForeignKey(User, on_delete=models.CASCADE, primary_key=True)

    def __str__(self):
        return f"{self.notificationId} - {self.userId.userName}"
