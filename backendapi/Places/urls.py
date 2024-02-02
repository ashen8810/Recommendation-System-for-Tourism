from django.urls import path
from Places.views import (
    PlaceList,
    CommentList,
    PlaceSearchView,
    PlaceDetailsView,
)

# from account.views import UserRegistrationView
urlpatterns = [
    path("places/", PlaceList.as_view(), name="places"),
    path("comments/", CommentList.as_view(), name="comments"),
    path("place/search/", PlaceSearchView.as_view(), name="place_search"),
    path("place-details/", PlaceDetailsView.as_view(), name="place-details"),
]
