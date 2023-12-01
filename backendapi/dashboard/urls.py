from django.urls import path
from dashboard.views import EventViewSet, OverallStatViewSet

urlpatterns = [
    path(
        "overall/",
        OverallStatViewSet.as_view({"get": "list", "post": "create"}),
        name="overall",
    ),
    path(
        "event/", EventViewSet.as_view({"get": "list", "post": "create"}), name="event"
    ),
    # path("images/", ImageList.as_view(), name="images"),
    # path("place/search/", PlaceSearchView.as_view(), name="place_search"),
]
