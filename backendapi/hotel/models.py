from django.db import models
from account.models import User

class Hotel(models.Model):
    hotelID = models.CharField(max_length=5, primary_key=True)
    hotelName = models.CharField(max_length=50)
    coordinateX = models.IntegerField()
    coordinateY = models.IntegerField()
    description = models.CharField(max_length=255)
    website = models.CharField(max_length=50)
    noOfReviews = models.IntegerField()
    availability = models.CharField(max_length=3)
    createdDate = models.DateField()
    starRate = models.IntegerField()

    def __str__(self):
        return f"Hotel ID: {self.hotelID}, Name: {self.hotelName}, Rating: {self.starRate}"

class HotelOwnerHotels(models.Model):
    userID = models.ForeignKey(User, on_delete=models.CASCADE)
    hotelId = models.ForeignKey(Hotel, on_delete=models.CASCADE, primary_key=True)

    def __str__(self):
        return f"User ID: {self.userID.userId}, Hotel ID: {self.hotelId.hotelID}"

class HotelBudget(models.Model):
    hotelId = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    budgetPackage = models.CharField(max_length=50, primary_key=True)

    def __str__(self):
        return f"Hotel ID: {self.hotelId.hotelID}, Budget Package: {self.budgetPackage}"

class HotelBeds(models.Model):
    hotelID = models.OneToOneField(Hotel, on_delete=models.CASCADE, primary_key=True)
    noOfBeds = models.IntegerField()

    def __str__(self):
        return f"Hotel ID: {self.hotelID.hotelID}, Number of Beds: {self.noOfBeds}"

class HotelComments(models.Model):
    commentID = models.CharField(max_length=7, primary_key=True)
    hotelID = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    comment = models.CharField(max_length=255)
    isApproved = models.CharField(max_length=3)

    def __str__(self):
        return f"Comment ID: {self.commentID}, Hotel ID: {self.hotelID.hotelID}, Approved: {self.isApproved}"

class HotelImages(models.Model):
    imageID = models.CharField(max_length=7, primary_key=True)
    hotelID = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    image = models.BinaryField()

    def __str__(self):
        return f"Image ID: {self.imageID}, Hotel ID: {self.hotelID.hotelID}"

class ReviewHotel(models.Model):
    userID = models.ForeignKey(User, on_delete=models.CASCADE)
    hotelID = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    review = models.CharField(max_length=255)
    rating = models.IntegerField()

    def __str__(self):
        return f"User ID: {self.userID.userId}, Hotel ID: {self.hotelID.hotelID}, Rating: {self.rating}"
