from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .hotel import requirementbased
from .Attractionfinal import requirementbasedatt
from datetime import datetime
from rest_framework.generics import ListAPIView

# from rest_framework import permissions
from .models import  Schedule
from .serializers import ScheduleSerializer


class UserScheduleListView(ListAPIView):
    serializer_class = ScheduleSerializer
    # permission_classes = [permissions.IsAuthenticated]  # Adjust as needed

    def get_queryset(self):
        user_id = self.kwargs["user_id"]
        user_schedules = Schedule.objects.filter(userId_id=user_id).select_related(
            "scheduleId"
        )
        schedules = [user_schedule.scheduleId for user_schedule in user_schedules]
        return schedules


class SchedulerCreate(APIView):
    def post(self, request):
        data = request.data
        start_date = data["from"]
        end_date = data["to"]
        start = datetime.strptime(start_date, "%Y-%m-%d")
        end = datetime.strptime(end_date, "%Y-%m-%d")
        hotel = requirementbased(
            data["dest"], int(data["people"]), float(data["max"]), data["hotel"]
        )
        att = requirementbasedatt(data["dest"], data["trip"])
        #   days = int(end) - int(start)
        days = end - start
        days = days.days
        hotellen = len(hotel)
        triplen = len(att)
        data = []
        print(hotel)
        index = 0
        for i in range(days):
            ho = hotel["Name"][i : i + 1]
            if i == 0:
                tr = att["Name"][0 : int(triplen / days)]
            elif i == days - 1:
                tr = att["Name"][index:]

            else:
                tr = att["Name"][index : int(triplen / days) + index]
            print(ho)
            index = index + int(triplen / days)
            data.append({"day": "Day " + str(i + 1), "plans": tr, "hotel": ho})

        out = {"itinerary": data}
        
        return Response(out, status=status.HTTP_200_OK)
