from django.urls import path
from .views import UserScheduleListView

urlpatterns = [
    path(
        "user-schedules/<str:user_id>/",
        UserScheduleListView.as_view(),
        name="user-schedule-list",
    ),
]
from django.urls import path
from schedule.views import SchedulerCreate

# from account.views import UserRegistrationView
urlpatterns = [
    path("createSchedule/", SchedulerCreate.as_view(), name="createSchedule"),
]
