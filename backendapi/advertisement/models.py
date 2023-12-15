from django.db import models
from account.models import User, Admin

class Advertisement(models.Model):
    adId = models.CharField(max_length=8, primary_key=True)
    userId = models.ForeignKey(User, on_delete=models.CASCADE)
    adminId = models.ForeignKey(Admin, on_delete=models.CASCADE)
    frequencyOfDisplay = models.IntegerField()
    size = models.FloatField()
    fee = models.FloatField()

    def __str__(self):
        return f"Ad ID: {self.adId}, User: {self.userId.userName}, Admin: {self.adminId.adminName}"

class AdvertisementMedia(models.Model):
    mediaID = models.CharField(max_length=7, primary_key=True)
    adId = models.ForeignKey(Advertisement, on_delete=models.CASCADE)
    mediaType = models.CharField(max_length=10)
    media = models.TextField(max_length=20000)

    def __str__(self):
        return f"Media ID: {self.mediaID}, Ad ID: {self.adId.adId}, Type: {self.mediaType}"
