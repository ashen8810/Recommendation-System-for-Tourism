from rest_framework import serializers
from .models import HotelComments, Hotel


class CommentSerializer(serializers.ModelSerializer):
    hotelID = serializers.CharField(source="hotelID.hotelID")

    class Meta:
        model = HotelComments
        fields = ["comment", "hotelID"]

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        return [(key, value) for key, value in representation.items()]
