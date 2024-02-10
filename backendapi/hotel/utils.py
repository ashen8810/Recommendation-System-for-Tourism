from django.core.mail import EmailMessage
from account.models import User, Admin
import os


class Util:
    def send_code_to_admin(userId):
        subject = "Profanity detected"
        current_site = "mywebsite.com"
        user = User.objects.get(userId=userId)
        admin_emails = Admin.objects.values_list("email", flat=True)
        email_body = f" {user.userName} has used profanity words.necessary actions needed. email:{user.email}"
        from_email = os.environ.get("EMAIL_FROM")
        # send the email
        for admin_email in admin_emails:
            email_message = EmailMessage(
                subject=subject,
                body=email_body,
                from_email=from_email,
                to=[admin_email],
            )
            email_message.send()
