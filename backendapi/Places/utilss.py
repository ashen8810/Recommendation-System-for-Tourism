from rest_framework.filters import SearchFilter, OrderingFilter
from googleapiclient.discovery import build
from google.oauth2 import service_account
from googleapiclient.http import MediaIoBaseUpload
from io import BytesIO

SCOPES = ["https://www.googleapis.com/auth/drive"]
SERVICE_ACCOUNT_FILE = "Places/service_account.json"
PARENT_FOLDER_ID = "1LHMclKindgjiJ72oTjlIdrV9MtGA0qAC"


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
