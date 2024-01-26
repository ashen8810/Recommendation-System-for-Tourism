from django.shortcuts import render
from rest_framework.generics import ListAPIView

# from rest_framework import permissions
from .models import UserSchedule, Schedule
from .serializers import ScheduleSerializer


class UserScheduleListView(ListAPIView):
    serializer_class = ScheduleSerializer
    # permission_classes = [permissions.IsAuthenticated]  # Adjust as needed

    def get_queryset(self):
        user_id = self.kwargs["user_id"]
        user_schedules = UserSchedule.objects.filter(userId_id=user_id).select_related(
            "scheduleId"
        )
        schedules = [user_schedule.scheduleId for user_schedule in user_schedules]
        return schedules
