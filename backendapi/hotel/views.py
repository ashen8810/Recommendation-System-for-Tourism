from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import HotelComments
from profanity import profanity


class SaveHotelCommentView(APIView):
    def post(self, request, *args, **kwargs):
        comment = request.data.get("comment", "")
        hotel_id = request.data.get("hotelId", "")

        contains_profanity = profanity.contains_profanity(comment)

        if contains_profanity:
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
