# from django.db import models


# class Place(models.Model):
#     PlaceId = models.AutoField(primary_key=True)
#     UserId = models.CharField(max_length=10)  # fix this later
#     AdminId = models.CharField(max_length=10)  # fix this later
#     DateCreated = models.DateField()
#     ContactNumber = models.CharField(max_length=10)
#     PlaceName = models.CharField(max_length=250)
#     CoordinateX = models.DecimalField(max_digits=2, decimal_places=1)
#     CoordinateY = models.DecimalField(max_digits=2, decimal_places=1)
#     Category = models.CharField(max_length=20)
#     Website = models.CharField(max_length=250)
#     OpeningHours = models.IntegerField()
#     UserReviews = models.CharField(max_length=250)
#     Description = models.CharField(max_length=250)
#     IsUserUploaded = models.BooleanField()

#     def __str__(self):
#         return self.PlaceName


# class Comment(models.Model):
#     CommentId = models.AutoField(primary_key=True)
#     UserId = models.CharField(max_length=10)  # fix this later
#     AdminId = models.CharField(max_length=10)  # fix this later
#     IsApproved = models.BooleanField()

#     def __str__(self):
#         return self.CommentId


# class Image(models.Model):
#     ImageId = models.AutoField(primary_key=True)
#     PlaceId = models.ForeignKey(Place, on_delete=models.CASCADE)
#     ImageUrl = models.CharField(max_length=250)

#     def __str__(self):
#         return self.ImageId


from django.db import models
from account.models import User, Admin

class Place(models.Model):
    placeId = models.AutoField( primary_key=True)
    userId = models.ForeignKey(User, on_delete=models.CASCADE)
    adminId = models.ForeignKey(Admin, on_delete=models.CASCADE)
    createdDate = models.DateTimeField(auto_now_add=True)
    contactNumber = models.CharField(max_length=15)
    placeName = models.CharField(max_length=50)
    coordinateX = models.DecimalField(max_digits=8, decimal_places=5)
    coordinateY = models.DecimalField(max_digits=8, decimal_places=5)
    category = models.CharField(max_length=50)
    website = models.CharField(max_length=150)
    openingTime = models.TimeField()
    closingTime = models.TimeField()
    isUserUploaded = models.BooleanField()
    description = models.CharField(max_length=500)
    imageID = models.CharField(max_length=7,auto_created=True,null=True)
    image = models.TextField(max_length=20000)


    def __str__(self):
        return f"Place ID: {self.placeId}, Name: {self.placeName}, Category: {self.category}"

class ReviewPlace(models.Model):
    userId = models.ForeignKey(User, on_delete=models.CASCADE)
    placeId = models.ForeignKey(Place, on_delete=models.CASCADE)
    review = models.CharField(max_length=500)
    rating = models.IntegerField()

    def __str__(self):
        return f"User ID: {self.userId.userId}, Place ID: {self.placeId.placeId}, Rating: {self.rating}"

class PlaceComments(models.Model):
    commentId = models.CharField(max_length=8, primary_key=True)
    placeId = models.ForeignKey(Place, on_delete=models.CASCADE)
    comment = models.CharField(max_length=500)
    isApproved = models.CharField(max_length=8)

    def __str__(self):
        return f"Comment ID: {self.commentId}, Place ID: {self.placeId.placeId}, Approved: {self.isApproved}"


