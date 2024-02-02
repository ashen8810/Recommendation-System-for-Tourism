from django.db import models
from account.models import User
import random
import string


class Hotel(models.Model):
    hotelID = models.CharField(max_length=8, primary_key=True)
    hotelName = models.CharField(max_length=50)
    coordinateX = models.DecimalField(max_digits=8, decimal_places=5)
    coordinateY = models.DecimalField(max_digits=8, decimal_places=5)
    description = models.CharField(max_length=1000)
    website = models.CharField(max_length=150)
    noOfReviews = models.IntegerField()
    availability = models.CharField(max_length=8)
    createdDate = models.DateField()
    starRate = models.IntegerField()

    class Meta:
        db_table = "hotel"

    def __str__(self):
        return (
            f"Hotel ID: {self.hotelID}, Name: {self.hotelName}, Rating: {self.starRate}"
        )


class HotelOwnerHotels(models.Model):
    userID = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    hotelId = models.ForeignKey(Hotel, on_delete=models.CASCADE)

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
    commentID = models.CharField(max_length=7, primary_key=True, unique=True)
    hotelID = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    comment = models.CharField(max_length=255)
    isApproved = models.CharField(max_length=3)

    prefix = "ID"
    counter = 1

    @classmethod
    def generate_unique_id(cls):
        random_digits = "".join(random.choices(string.digits, k=4))
        return f"C{random_digits}"

    def save(self, *args, **kwargs):
        if not self.commentID:
            self.commentID = self.generate_unique_id()

        super().save(*args, **kwargs)

    def __str__(self):
        return f"Comment ID: {self.commentID}, Hotel ID: {self.hotelID.hotelID}, Approved: {self.isApproved}"


class HotelImages(models.Model):
    imageID = models.CharField(max_length=7, primary_key=True)
    hotelID = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    image = models.TextField(max_length=20000)

    class Meta:
        db_table = "hotel_images"

    def __str__(self):
        return f"Image ID: {self.imageID}, Hotel ID: {self.hotelid}"


class ReviewHotel(models.Model):
    userID = models.ForeignKey(User, on_delete=models.CASCADE)
    hotelID = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    review = models.CharField(max_length=255)
    rating = models.IntegerField()

    def __str__(self):
        return f"User ID: {self.userID.userId}, Hotel ID: {self.hotelID.hotelID}, Rating: {self.rating}"
