from django.urls import path
from hotel.views import SaveHotelCommentView, HotelCountView

urlpatterns = [
    path("save-comment/", SaveHotelCommentView.as_view(), name="save-comment"),
    path("hotel-count/", HotelCountView.as_view(), name="hotel-count"),
]
