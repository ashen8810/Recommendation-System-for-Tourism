from django.core.mail import EmailMessage
import os
import random
from django.contrib.sites.shortcuts import get_current_site
from .models import User, OneTimePassword


class Util:
    @staticmethod
    def send_email(data):
        print("sending the email")
        email = EmailMessage(
            subject=data["subject"],
            body=data["body"],
            from_email=os.environ.get("EMAIL_FROM"),
            to=[data["to_email"]],
        )
        email.send()
        print("email sent")

    def generateOtp():
        otp = ""
        for i in range(6):
            otp += str(random.randint(1, 9))
        return otp

    # get_current_site(request).domain
    def send_code_to_user(email):
        subject = "One time passcode for Email verification"
        otp = random.randint(1000, 9999)
        current_site = "mywebsite.com"
        user = User.objects.get(email=email)
        email_body = f"Hi {user.userName} thanks for signing up on {current_site} please verify your email with the \n one time passcode {otp}"
        from_email = os.environ.get("EMAIL_FROM")
        otp_obj = OneTimePassword.objects.create(user=user, otp=otp)
        # send the email
        d_email = EmailMessage(
            subject=subject, body=email_body, from_email=from_email, to=[user.email]
        )
        d_email.send()
