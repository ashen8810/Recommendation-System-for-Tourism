from django.urls import path
from .views import UserScheduleListView

urlpatterns = [
    path(
        "user-schedules/<str:user_id>/",
        UserScheduleListView.as_view(),
        name="user-schedule-list",
    ),
]
