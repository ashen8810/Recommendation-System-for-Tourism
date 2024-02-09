from django.urls import path
from hotel.views import(
    HotelList,
    HotelCountView,
    Hotel,
    CommentDetail,
    HotelSearchView,
    CommentList,
    UserImagesListView,
    HotelDetailsView
)

urlpatterns = [
    path("hotels/", HotelList.as_view(), name="hotels"),
    path("comments/", CommentList.as_view(), name="comments"),
    path("place/search/", HotelSearchView.as_view(), name="place_search"),
    path("hotel-details/", HotelDetailsView.as_view(), name="hotel-details"),
    path("hotel-count/", HotelCountView.as_view(), name="place-count"),
    path("user-images/<str:userId>/", UserImagesListView.as_view(), name="user-images"),
]

