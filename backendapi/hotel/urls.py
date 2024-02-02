from django.urls import path
from hotel.views import SaveHotelCommentView

urlpatterns = [
    path("save-comment/", SaveHotelCommentView.as_view(), name="save-comment"),
]
