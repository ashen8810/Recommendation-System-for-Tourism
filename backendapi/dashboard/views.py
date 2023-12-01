from django.shortcuts import render
from rest_framework import viewsets
from .models import OverallStat, Event
from .serializers import OverallStatSerializer, EventSerializer
from rest_framework.response import Response
from rest_framework import status


class OverallStatViewSet(viewsets.ModelViewSet):
    queryset = OverallStat.objects.all()
    serializer_class = OverallStatSerializer


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

    def post(self, request, format=None):
        serializer = EventSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
