from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import HotelComments, Hotel
from profanity import profanity
from .serializers import CommentSerializer
from .utils import Util


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
                    hotelID_id=hotel_id["hotelID"],
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


class HotelCountView(APIView):
    def get(self, request, *args, **kwargs):
        total_hotels = Hotel.objects.count()
        data = {"title": "Hotels", "amount": total_hotels}
        return Response(data, status=200)
