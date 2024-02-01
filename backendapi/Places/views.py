from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework import status
from .models import Place, PlaceComments, PlaceImages, ReviewPlace
from .serializer import (
    PlaceSerializer,
    CommentSerializer,
    ImageSerializer,
    PlaceDetailSerializer,
)
from rest_framework.filters import SearchFilter, OrderingFilter


class PlaceList(APIView):
    def get(self, request):
        places = Place.objects.all()
        serializer = PlaceSerializer(places, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = PlaceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, placeId):
        try:
            place = Place.objects.get(placeId=placeId)
            print(place)
        except Place.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = PlaceSerializer(place, data=request.data)
        print(serializer.is_valid())

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CommentList(APIView):
    """
    List all comments or create a new comment.
    """

    def get(self, request):
        comments = PlaceComments.objects.all()
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CommentDetail(APIView):
    """
    Retrieve, update, or delete a comment instance.
    """

    def get(self, request, comment_id):
        try:
            comment = PlaceComments.objects.get(commentId=comment_id)
        except PlaceComments.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = CommentSerializer(comment)
        return Response(serializer.data)

    def put(self, request, comment_id):
        try:
            comment = PlaceComments.objects.get(commentId=comment_id)
        except PlaceComments.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = CommentSerializer(comment, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ImageList(APIView):
    def get(self, request):
        images = PlaceImages.objects.all()
        serializer = ImageSerializer(images, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ImageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ImageDetail(APIView):
    def get(self, request, image_id):
        try:
            image = PlaceImages.objects.get(imageId=image_id)
        except PlaceImages.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = ImageSerializer(image)
        return Response(serializer.data)

    def put(self, request, image_id):
        try:
            image = PlaceImages.objects.get(imageId=image_id)
        except PlaceImages.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = ImageSerializer(image, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PlaceSearchView(ListAPIView):
    queryset = Place.objects.all()
    serializer_class = PlaceSerializer
    # pagination_class = pageNumberPagination
    filter_backends = SearchFilter, OrderingFilter
    search_fields = ("PlaceName", "Category")


class UserImagesView(ListAPIView):
    serializer_class = ImageSerializer

    def get_queryset(self):
        user_id = self.kwargs["user_id"]
        return PlaceImages.objects.filter(placeID__userId=user_id)


class PlaceDetailsView(ListAPIView):
    serializer_class = PlaceDetailSerializer

    def get_queryset(self):
        places = Place.objects.all()

        for place in places:
            place.reviews = ReviewPlace.objects.filter(placeId=place)
            place.comments = PlaceComments.objects.filter(placeId=place)
            place.images = PlaceImages.objects.filter(placeID=place)

        return places
