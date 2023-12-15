from rest_framework import serializers
from .models import Place,PlaceComments,PlaceImages
#will edit later
class PlaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Place
        fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlaceComments
        fields = '__all__'

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlaceImages
        fields = '__all__'
