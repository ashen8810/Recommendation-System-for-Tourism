from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView

urlpatterns = [
    path("admin/", admin.site.urls),
    # path('auth/', include('djoser.urls')),
    # path('auth/', include('djoser.urls.jwt')),
    path("api/user/", include("account.urls")),
    path("api/places/", include("Places.urls")),
    path("api/dashboard/", include("dashboard.urls")),
    path("api/user/", include("social_account.urls")),
    path("api/schedules/", include("schedule.urls")),
    path("api/hotel/", include("hotel.urls")),
]


# urlpatterns += [re_path(r'^.*',TemplateView.as_view(template_name='index.html'))]
