from rest_framework import serializers
from account.models import User,Admin
# from django.utils.encoding import smart_str, force_bytes, DjangoUnicodeDecodeError
# from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
# from django.contrib.auth.tokens import PasswordResetTokenGenerator
# from account.utils import Util

#!has to implement the rate limiting functionality for improved security.(To protect the site from brute force atttacks)
#!has to check whether built in data sanitization layer could be applied to the code fro improved security.(To prevent sql injection attacks.)




class AdminRegistrationSerializer(serializers.ModelSerializer):
  # We are writing this bcoz we need to confirm password field in our Registratin Request
  password2 = serializers.CharField(style={'input_type':'password'}, write_only=True)
  class Meta:
    model = User
    fields=['adminId','email', 'adminName', 'password', 'password2','country']
    extra_kwargs={
      'password':{'write_only':True}
    }

  # Validating Password and Confirm Password while Registration
  #attrs is a dictionary containing password and confirm password

  def validate(self, attrs):
    password = attrs.get('password')
    password2 = attrs.get('password2')
    if password != password2:
      raise serializers.ValidationError("password and Confirm Password doesn't match each other")
    return attrs

  def create(self, validate_data):
    return Admin.objects.create_user(**validate_data)





class UserRegistrationSerializer(serializers.ModelSerializer):
  # We are writing this bcoz we need to confirm password field in our Registratin Request
  password2 = serializers.CharField(style={'input_type':'password'}, write_only=True)
  class Meta:
    model = User
    fields=['userId','email', 'name', 'password', 'password2','isBanned','country','type']
    extra_kwargs={
      'password':{'write_only':True}
    }

  # Validating Password and Confirm Password while Registration
  #attrs is a dictionary containing password and confirm password

  def validate(self, attrs):
    password = attrs.get('password')
    password2 = attrs.get('password2')
    if password != password2:
      raise serializers.ValidationError("password and Confirm Password doesn't match each other")
    return attrs

  def create(self, validate_data):
    return User.objects.create_user(**validate_data)

class UserLoginSerializer(serializers.ModelSerializer):
  email = serializers.EmailField(max_length=255)
  class Meta:
    model = User
    fields = ['email', 'password']

class UserProfileSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ['userId', 'email', 'name', 'country', 'type']

class UserChangePasswordSerializer(serializers.Serializer):
  Password = serializers.CharField(max_length=255, style={'input_type':'password'}, write_only=True)
  Password2 = serializers.CharField(max_length=255, style={'input_type':'password'}, write_only=True)
  class Meta:
    fields = ['password', 'password2']

  def validate(self, attrs):
    password = attrs.get('password')
    password2 = attrs.get('password2')
    user = self.context.get('user')
    if password != password2:
      raise serializers.ValidationError("Password and Confirm Password doesn't match")
    user.set_password(password)
    user.save()
    return attrs


  