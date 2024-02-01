from django.urls import path
from schedule.views import SchedulerCreate

# from account.views import UserRegistrationView
urlpatterns = [
    path("createSchedule/", SchedulerCreate.as_view(), name="createSchedule"),
]
