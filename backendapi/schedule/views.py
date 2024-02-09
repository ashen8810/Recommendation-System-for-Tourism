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
        
        for i in range(days):
            ho = hotel[i : i + 1]
            if i == 0:
                tr = att[0 : int(len(att) / days)]
                
            elif i == days - 1:
                tr = att[index:]

            else:
                tr = att[index : int(len(att) / days) + index]
            
            index = index + int(len(att) / days)
            data1.append({"day": "Day " + str(i + 1), "plans": tr, "hotel": ho,"x":serializer.data[0]["x"],"y":serializer.data[0]["y"]})

        print(serializer.data[0])
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
        print(att)

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
                cox = att["Latitude"][0 : int(triplen / days)]
                coy = att["Longitude"][0 : int(triplen / days)]

            elif i == days - 1:
                tr = att["Name"][index:]
                cox = att["Latitude"][index:]
                coy = att["Longitude"][index:]


            else:
                tr = att["Name"][index : int(triplen / days) + index]
                coy = att["Longitude"][index : int(triplen / days) + index]
                cox = att["Latitude"][index : int(triplen / days) + index]


            index = index + int(triplen / days)
            data1.append({"day": "Day " + str(i + 1), "plans": tr, "hotel": ho,'x':cox,'y':coy})

        out = {"itinerary": data1}
        x = []
        y =[]
        for i in data1:
            x.extend(i["x"])
            y.extend(i["y"])


        togo = {

            "partner":data["people"] ,
            "fromDate": start_date,
            "toDate":  end_date,
            "destination":data["dest"] ,
            "description": "Description of schedule 1",
            "type": data["trip"],
            "att": str(att['Name']),
            "hotels": str(hotel),
            "userId":1,
            "x":str(x),
            "y":str(y)
        }
        serializer = ScheduleSerializer( data = togo)
        print(serializer.is_valid())

        if serializer.is_valid():
            serializer.save()
                
            print("Data saved successfully")
        else:
            print("Validation failed. Errors:", serializer.errors)
        
        return Response(out, status=status.HTTP_200_OK)
