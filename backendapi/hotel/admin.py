from django.contrib import admin

from .models import Hotel,HotelOwnerHotels,HotelBudget,HotelBeds,HotelComments,ReviewHotel

admin.site.register(Hotel)
admin.site.register(HotelOwnerHotels)
admin.site.register(HotelBudget)
admin.site.register(HotelBeds)
admin.site.register(HotelComments)
admin.site.register(ReviewHotel)
