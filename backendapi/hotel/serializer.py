from rest_framework import serializers
from .models import Hotel,HotelBeds,HotelBudget,HotelComments,HotelOwnerHotels,ReviewHotel

class HotelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hotel
        fields = "__all__"


class HotelBedsSerializer(serializers.ModelSerializer):
    class Meta:
        model = HotelBeds
        fields = "__all__"

class HotelBudgetSerializer(serializers.ModelSerializer):
    class Meta:
        model = HotelBudget
        fields = "__all__"

class HotelCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = HotelComments
        fields = "__all__"

class HotelOwnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = HotelOwnerHotels
        fields = "__all__"

class HotelReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReviewHotel
        fields = "__all__"

class HotelDetailSerializer(serializers.ModelSerializer):
    reviews = HotelReviewSerializer(many=True, read_only=True)
    comments = HotelCommentSerializer(many=True, read_only=True)
   
    class Meta:
        model = Hotel
        fields = "__all__"
