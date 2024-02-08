from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework import status
from .models import Place, PlaceComments, ReviewPlace
from .serializer import (
    PlaceSerializer,
    CommentSerializer,
    PlaceDetailSerializer,
)
from rest_framework.filters import SearchFilter, OrderingFilter
from .utils import upload_photo
class PlaceList(APIView):
    def get():
        places = Place.objects.all()
        serializer = PlaceSerializer(places, many=True)
        return Response(serializer.data)

    def post(self, request):
        # link = upload_photo(request.FILES["image"].read())
        print(request.FILES)
        link ="https://drive.google.com/file/d/14ItzFOR-I5on9kSJmPvBnB6Nb-gFbAss/view?usp=drive_link"
        data1 = request.data
        data1['image'] = str(link)
        data1["userId"] = 212
        data1["adminId"] = 12
        # print(data1)
        serializer = PlaceSerializer(data=data1)
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


class PlaceSearchView(ListAPIView):
    queryset = Place.objects.all()
    serializer_class = PlaceSerializer
    # pagination_class = pageNumberPagination
    filter_backends = SearchFilter, OrderingFilter
    search_fields = ("PlaceName", "Category")


class PlaceDetailsView(ListAPIView):
    serializer_class = PlaceDetailSerializer

    def get_queryset(self):
        places = Place.objects.all()

        for place in places:
            place.reviews = ReviewPlace.objects.filter(placeId=place)
            place.comments = PlaceComments.objects.filter(placeId=place)

        return places
    