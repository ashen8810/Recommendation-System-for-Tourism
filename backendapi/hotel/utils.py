from django.core.mail import EmailMessage
from account.models import User, Admin
import os
from googleapiclient.discovery import build
from google.oauth2 import service_account
from googleapiclient.http import MediaIoBaseUpload
from io import BytesIO

SCOPES = ["https://www.googleapis.com/auth/drive"]
SERVICE_ACCOUNT_FILE = "Places/service_account.json"
PARENT_FOLDER_ID = "1LHMclKindgjiJ72oTjlIdrV9MtGA0qAC"

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


def authenticate():
    creds = service_account.Credentials.from_service_account_file(
        SERVICE_ACCOUNT_FILE, scopes=SCOPES
    )
    return creds

def upload_photo(data):

    creds = authenticate()
    service = build("drive", "v3", credentials=creds)
    file = {"name": "image", "parents": [PARENT_FOLDER_ID]}
    media = MediaIoBaseUpload(BytesIO(data), mimetype="image/png")
    file = (
        service.files()
        .create(body=file, media_body=media, fields="webViewLink")
        .execute()
    )
    url = file.get("webViewLink")
    prefix = "https://lh3.googleusercontent.com/d/"
    url = prefix + url.split("/")[-2]
    return url