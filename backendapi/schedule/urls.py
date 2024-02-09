from django.urls import path
from .views import UserScheduleListView
from schedule.views import SchedulerCreate

urlpatterns = [
    path(
        "user-schedules/",
        UserScheduleListView.as_view(),
        name="user-schedule-list",
    ),
    path("createSchedule/", SchedulerCreate.as_view(), name="createSchedule"),
    # path("schedule-count/", ScheduleCountView.as_view(), name="schedule-count"),
]
