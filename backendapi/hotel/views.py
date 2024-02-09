from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework import status
from rest_framework.response import Response
from .models import (
    Hotel,
    HotelBeds,
    HotelBudget,
    HotelComments,
    HotelOwnerHotels,
    ReviewHotel,
)
from rest_framework.filters import SearchFilter, OrderingFilter
from .serializer import (
    HotelSerializer,
    HotelCommentSerializer,
    HotelDetailSerializer,
    CommentSerializer,
)
from .utils import Util
from profanity import profanity


class HotelList(APIView):
    def get():
        hotels = Hotel.objects.all()
        serializer = HotelSerializer(hotels, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = HotelSerializer(data=request.data)
        print(request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, placeId):
        try:
            place = Hotel.objects.get(placeId=placeId)
            print(place)
        except Hotel.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = HotelSerializer(place, data=request.data)
        print(serializer.is_valid())

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class HotelDetailsView(ListAPIView):
    serializer_class = HotelDetailSerializer

    def get_queryset(self):
        hotels = Hotel.objects.all()

        for hotel in hotels:
            hotel.reviews = ReviewHotel.objects.filter(hotelID=hotel)
            hotel.comments = HotelComments.objects.filter(hotelID=hotel)

        return hotels


class HotelCountView(APIView):
    def get(self, request, *args, **kwargs):
        total_hotels = Hotel.objects.count()
        data = {"title": "Hotels", "amount": total_hotels}
        return Response(data, status=200)


class UserImagesListView(ListAPIView):

    def get(self, request, userId):

        hotels = Hotel.objects.filter(userId=userId)
        images = [hotel.image for hotel in hotels if hotel.image]
        return Response({"images": images}, status=status.HTTP_200_OK)


class CommentList(APIView):
    """
    List all comments or create a new comment.
    """

    def get(self, request):
        comments = HotelComments.objects.all()
        serializer = HotelCommentSerializer(comments, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = HotelCommentSerializer(data=request.data)
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
            comment = HotelComments.objects.get(commentId=comment_id)
        except HotelComments.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = HotelCommentSerializer(comment)
        return Response(serializer.data)

    def put(self, request, comment_id):
        try:
            comment = HotelComments.objects.get(commentId=comment_id)
        except HotelComments.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = HotelCommentSerializer(comment, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class HotelSearchView(ListAPIView):
    queryset = Hotel.objects.all()
    serializer_class = HotelSerializer
    # pagination_class = pageNumberPagination
    filter_backends = SearchFilter, OrderingFilter
    search_fields = ("hotelName", "category")


class SaveHotelCommentView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = CommentSerializer(data=request.data)

        if serializer.is_valid():
            comment = serializer.validated_data.get("comment", "")
            hotel_id = serializer.validated_data.get("hotelID", None)
            user_id = request.data.get("userID")
            # print(serializer.validated_data)
            # comment = request.data.get("comment", "")
            # hotel_id = request.data.get("hotelID", "")

            contains_profanity = profanity.contains_profanity(comment)

            if contains_profanity:
                Util.send_code_to_admin(user_id)
                return Response(
                    {
                        "warning": "Your comment contains profanity. Please review before submitting."
                    },
                    status=400,
                )
            else:
                hotel_comment = HotelComments.objects.create(
                    hotelID_id=hotel_id,
                    comment=comment,
                    isApproved="yes",
                )

                return Response(
                    {
                        "message": "Comment saved successfully",
                    },
                    status=200,
                )
        else:
            return Response(serializer.errors, status=400)
