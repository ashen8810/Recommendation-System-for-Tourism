from django.db import models


class Place(models.Model):
    PlaceId = models.AutoField(primary_key=True)
    UserId = models.CharField(max_length=10)  # fix this later
    AdminId = models.CharField(max_length=10)  # fix this later
    DateCreated = models.DateField()
    ContactNumber = models.CharField(max_length=10)
    PlaceName = models.CharField(max_length=250)
    CoordinateX = models.DecimalField(max_digits=2, decimal_places=1)
    CoordinateY = models.DecimalField(max_digits=2, decimal_places=1)
    Category = models.CharField(max_length=20)
    Website = models.CharField(max_length=250)
    OpeningHours = models.IntegerField()
    UserReviews = models.CharField(max_length=250)
    Description = models.CharField(max_length=250)
    IsUserUploaded = models.BooleanField()

    def __str__(self):
        return self.PlaceName


class Comment(models.Model):
    CommentId = models.AutoField(primary_key=True)
    UserId = models.CharField(max_length=10)  # fix this later
    AdminId = models.CharField(max_length=10)  # fix this later
    IsApproved = models.BooleanField()

    def __str__(self):
        return self.CommentId


class Image(models.Model):
    ImageId = models.AutoField(primary_key=True)
    PlaceId = models.ForeignKey(Place, on_delete=models.CASCADE)
    ImageUrl = models.CharField(max_length=250)

    def __str__(self):
        return self.ImageId
