from rest_framework import serializers
from .models import Place, PlaceComments, PlaceImages, ReviewPlace


# will edit later
class PlaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Place
        fields = "__all__"


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlaceComments
        fields = "__all__"


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlaceImages
        fields = "__all__"


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReviewPlace
        fields = "__all__"


class PlaceDetailSerializer(serializers.ModelSerializer):
    reviews = ReviewSerializer(many=True, read_only=True)
    comments = CommentSerializer(many=True, read_only=True)
    images = ImageSerializer(many=True, read_only=True)

    class Meta:
        model = Place
        fields = "__all__"
