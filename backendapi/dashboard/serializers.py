from rest_framework import serializers
from dashboard.models import OverallStat, Event


class OverallStatSerializer(serializers.ModelSerializer):
    class Meta:
        model = OverallStat
        fields = "__all__"


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = "__all__"
