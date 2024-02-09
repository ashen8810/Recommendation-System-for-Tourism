from rest_framework import serializers
from .models import Place, PlaceComments, ReviewPlace


# will edit later
class PlaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Place
        fields = "__all__"


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlaceComments
        fields = "__all__"


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReviewPlace
        fields = "__all__"


class PlaceDetailSerializer(serializers.ModelSerializer):
    reviews = ReviewSerializer(many=True, read_only=True)
    comments = CommentSerializer(many=True, read_only=True)

    class Meta:
        model = Place
        fields = "__all__"


class CommentSerializer(serializers.ModelSerializer):
    placeId = serializers.CharField()

    class Meta:
        model = PlaceComments
        fields = ["comment", "placeId"]

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        return [(key, value) for key, value in representation.items()]


class GetCommentSerializer(serializers.ModelSerializer):
    # placeId = serializers.CharField()

    class Meta:
        model = PlaceComments
        fields = ["commentId", "comment"]
