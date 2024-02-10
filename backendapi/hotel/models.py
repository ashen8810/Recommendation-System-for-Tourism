from django.db import models
from account.models import User, Admin
import random, string


class Hotel(models.Model):
    hotelId = models.AutoField(primary_key=True)
    userId = models.ForeignKey(User, on_delete=models.CASCADE)
    adminId = models.ForeignKey(Admin, on_delete=models.CASCADE)
    createdDate = models.DateTimeField(auto_now_add=True)
    contactNumber = models.CharField(max_length=15)
    hotelName = models.CharField(max_length=50)
    coordinateX = models.DecimalField(max_digits=8, decimal_places=5)
    coordinateY = models.DecimalField(max_digits=8, decimal_places=5)
    category = models.CharField(max_length=50)
    website = models.CharField(max_length=150)
    openingTime = models.TimeField()
    closingTime = models.TimeField()
    ratings = models.IntegerField(default=0)
    isUserUploaded = models.BooleanField()
    description = models.CharField(max_length=500)
    imageID = models.CharField(max_length=7, auto_created=True, null=True)
    image = models.TextField(max_length=20000)

    def __str__(self):
        return f"Place ID: {self.placeId}, Name: {self.placeName}, Category: {self.category}"


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
    commentID = models.CharField(max_length=7, primary_key=True)
    hotelID = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    comment = models.CharField(max_length=255)
    isApproved = models.CharField(max_length=3)

    def generate_unique_id(cls):
        random_digits = "".join(random.choices(string.digits, k=4))
        return f"C{random_digits}"

    def save(self, *args, **kwargs):
        if not self.commentID:
            self.commentID = self.generate_unique_id()

        super().save(*args, **kwargs)

    def __str__(self):
        return f"Comment ID: {self.commentID}, Hotel ID: {self.hotelID.hotelID}, Approved: {self.isApproved}"


class ReviewHotel(models.Model):
    userID = models.ForeignKey(User, on_delete=models.CASCADE)
    hotelID = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    review = models.CharField(max_length=255)
    rating = models.IntegerField()

    def __str__(self):
        return f"User ID: {self.userID.userId}, Hotel ID: {self.hotelID.hotelID}, Rating: {self.rating}"
