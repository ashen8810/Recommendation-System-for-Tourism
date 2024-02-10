from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework import status
from .models import Place, PlaceComments, ReviewPlace
from .serializer import (
    PlaceSerializer,
    CommentSerializer,
    PlaceDetailSerializer,
    GetCommentSerializer,
)
from rest_framework.filters import SearchFilter, OrderingFilter
from profanity import profanity
from hotel.utils import Util
from .utilss import upload_photo


class PlaceList(APIView):
    def get():
        places = Place.objects.all()
        serializer = PlaceSerializer(places, many=True)
        return Response(serializer.data)

    def post(self, request):
        try:
            if request.method == "POST":
                # Check if "image" exists in request.FILES
                if "image" not in request.FILES:
                    return Response({"error": "No image file provided"}, status=status.HTTP_400_BAD_REQUEST)
                
                # Read and upload the image
                image_content = request.FILES["image"].read()
                link = upload_photo(image_content)
                
                # Modify request data
                data1 = request.data
                print(link)

                data1["image"] = str(link)
                data1["userId"] = "124"
                data1["adminId"] = "456"
                data1["imageId"] = "235"
                # data1["openingTime"] = "05:33:00"
                # data1["closingTime"] = "22:00:00"
                # data1["coordinateX"] = 7.59595
                # data1["coordinateY"] = 80.43534
                print(data1["coordinateX"])
                # data1["coordinateX"] = round(float(data1["coordinateX"],5))
                # data1["coordinateY"] = round(float(data1["coordinateY"],5))
                # print(type(data1["coordinateX"]))

                
                # Serialize data
                serializer = PlaceSerializer(data=data1)
                # print(serializer)
                # Validate and save serializer
                print(serializer.is_valid())
                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data, status=status.HTTP_201_CREATED)
                else:
                    return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    def put(self, request, placeId):
        try:
            place = Place.objects.get(placeId=placeId)
        except Place.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = PlaceSerializer(place, data=request.data)
        print(serializer.is_valid())

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CommentList(APIView):
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
        places = Place.objects.get_queryset().order_by('placeId')


        return places


class PlaceCountView(APIView):
    def get(self, request, *args, **kwargs):
        total_places = Place.objects.count()
        data = {"title": "Itenaries", "amount": total_places}
        return Response(data, status=200)


class UserImagesListView(ListAPIView):

    def get(self, request, userId):

        places = Place.objects.filter(userId=userId)
        images = [place.image for place in places if place.image]
        return Response({"images": images}, status=status.HTTP_200_OK)


class SavePlaceCommentView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = CommentSerializer(data=request.data)

        if serializer.is_valid():
            comment = serializer.validated_data.get("comment", "")
            place_id = serializer.validated_data.get("placeId", None)
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
                place_comment = PlaceComments.objects.create(
                    placeId_id=place_id,
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


class GetPlaceComments(ListAPIView):
    serializer_class = GetCommentSerializer

    def get_queryset(self):
        place_id = self.request.query_params.get("placeId")
        print(place_id)
        queryset = PlaceComments.objects.filter(placeId=place_id)
        return queryset

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


# from rest_framework.views import APIView
# from rest_framework.generics import ListAPIView
# from rest_framework.response import Response
# from rest_framework import status
# from .models import Place, PlaceComments, ReviewPlace
# from .serializer import (
#     PlaceSerializer,
#     CommentSerializer,
#     PlaceDetailSerializer,
# )
# from rest_framework.filters import SearchFilter, OrderingFilter
# from .utils import upload_photo
# class PlaceList(APIView):
#     def get():
#         places = Place.objects.all()
#         serializer = PlaceSerializer(places, many=True)
#         return Response(serializer.data)

#     def post(self, request):
#         # link = upload_photo(request.FILES["image"].read())
#         print(request.FILES)
#         link ="https://drive.google.com/file/d/14ItzFOR-I5on9kSJmPvBnB6Nb-gFbAss/view?usp=drive_link"
#         data1 = request.data
#         data1['image'] = str(link)
#         data1["userId"] = 212
#         data1["adminId"] = 12
#         # print(data1)
#         serializer = PlaceSerializer(data=data1)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     def put(self, request, placeId):
#         try:
#             place = Place.objects.get(placeId=placeId)
#             print(place)
#         except Place.DoesNotExist:
#             return Response(status=status.HTTP_404_NOT_FOUND)

#         serializer = PlaceSerializer(place, data=request.data)
#         print(serializer.is_valid())

#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# class CommentList(APIView):
#     """
#     List all comments or create a new comment.
#     """

#     def get(self, request):
#         comments = PlaceComments.objects.all()
#         serializer = CommentSerializer(comments, many=True)
#         return Response(serializer.data)

#     def post(self, request):
#         serializer = CommentSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# class CommentDetail(APIView):
#     """
#     Retrieve, update, or delete a comment instance.
#     """

#     def get(self, request, comment_id):
#         try:
#             comment = PlaceComments.objects.get(commentId=comment_id)
#         except PlaceComments.DoesNotExist:
#             return Response(status=status.HTTP_404_NOT_FOUND)

#         serializer = CommentSerializer(comment)
#         return Response(serializer.data)

#     def put(self, request, comment_id):
#         try:
#             comment = PlaceComments.objects.get(commentId=comment_id)
#         except PlaceComments.DoesNotExist:
#             return Response(status=status.HTTP_404_NOT_FOUND)

#         serializer = CommentSerializer(comment, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# class PlaceSearchView(ListAPIView):
#     queryset = Place.objects.all()
#     serializer_class = PlaceSerializer
#     # pagination_class = pageNumberPagination
#     filter_backends = SearchFilter, OrderingFilter
#     search_fields = ("PlaceName", "Category")


# class PlaceDetailsView(ListAPIView):
#     serializer_class = PlaceDetailSerializer

#     def get_queryset(self):
#         places = Place.objects.all()

#         for place in places:
#             place.reviews = ReviewPlace.objects.filter(placeId=place)
#             place.comments = PlaceComments.objects.filter(placeId=place)

#         return places


# class PlaceCountView(APIView):
#     def get(self, request, *args, **kwargs):
#         total_places = Place.objects.count()
#         data = {"title": "Itenaries", "amount": total_places}
#         return Response(data, status=200)


# class UserImagesListView(ListAPIView):

#     def get(self, request, userId):

#         places = Place.objects.filter(userId=userId)
#         images = [place.image for place in places if place.image]
#         return Response({"images": images}, status=status.HTTP_200_OK)
