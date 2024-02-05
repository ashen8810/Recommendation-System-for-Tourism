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
    def get(self, request):
        user_id = request.GET.get("user_id")
        print(user_id)
        user_schedules = Schedule.objects.filter(userId=user_id)
        serializer = ScheduleSerializer(user_schedules, many=True) 
        serializer.data[0]["att"] = serializer.data[0]["att"].split('\n')[1:]
        serializer.data[0]["hotels"] = serializer.data[0]["hotels"].split('\n')[1:]
        hotel = serializer.data[0]["hotels"]
        att =serializer.data[0]["att"]

        data1 = []
        index = 0
        start = datetime.strptime( serializer.data[0]["fromDate"], "%Y-%m-%dT%H:%M:%SZ")
        end = datetime.strptime(serializer.data[0]["toDate"], "%Y-%m-%dT%H:%M:%SZ")
        days = end - start
        days = days.days
        print(days)
        for i in range(days):
            ho = hotel[i : i + 1]
            if i == 0:
                tr = att[0 : int(len(att) / days)]
            elif i == days - 1:
                tr = att[index:]

            else:
                tr = att[index : int(len(att) / days) + index]
            print(ho)
            index = index + int(len(att) / days)
            data1.append({"day": "Day " + str(i + 1), "plans": tr, "hotel": ho})


        return Response(data1)


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
        data1 = []
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
            data1.append({"day": "Day " + str(i + 1), "plans": tr, "hotel": ho})

        out = {"itinerary": data1}
        print(data)
        togo = {

            "partner":data["people"] ,
            "fromDate": start_date,
            "toDate":  end_date,
            "destination":data["dest"] ,
            "description": "Description of schedule 1",
            "type": data["trip"],
            "att": str(att),
            "hotels": str(hotel),
            "userId":1
        }
        serializer = ScheduleSerializer( data = togo)
        print(serializer.is_valid())

        if serializer.is_valid():
            serializer.save()
                
            print("Data saved successfully")
        else:
            print("Validation failed. Errors:", serializer.errors)
        
        return Response(out, status=status.HTTP_200_OK)
