from django.urls import path
from Places.views import PlaceList, CommentList, ImageList, PlaceSearchView

# from account.views import UserRegistrationView
urlpatterns = [
    path("places/", PlaceList.as_view(), name="places"),
    path("comments/", CommentList.as_view(), name="comments"),
    path("images/", ImageList.as_view(), name="images"),
    path("place/search/", PlaceSearchView.as_view(), name="place_search"),
]
