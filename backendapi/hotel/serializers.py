from rest_framework import serializers
from .models import HotelComments


class CommentSerializer(serializers.ModelSerializer):
    class meta:
        model = HotelComments
        fields = ["commnet", "hotelID"]
