# Generated by Django 4.2.6 on 2023-12-20 05:26

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('account', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Hotel',
            fields=[
                ('hotelID', models.CharField(max_length=8, primary_key=True, serialize=False)),
                ('hotelName', models.CharField(max_length=50)),
                ('coordinateX', models.DecimalField(decimal_places=5, max_digits=8)),
                ('coordinateY', models.DecimalField(decimal_places=5, max_digits=8)),
                ('description', models.CharField(max_length=1000)),
                ('website', models.CharField(max_length=150)),
                ('noOfReviews', models.IntegerField()),
                ('availability', models.CharField(max_length=8)),
                ('createdDate', models.DateField()),
                ('starRate', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='HotelBeds',
            fields=[
                ('hotelID', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='hotel.hotel')),
                ('noOfBeds', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='ReviewHotel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('review', models.CharField(max_length=255)),
                ('rating', models.IntegerField()),
                ('hotelID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hotel.hotel')),
                ('userID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='HotelOwnerHotels',
            fields=[
                ('userID', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to=settings.AUTH_USER_MODEL)),
                ('hotelId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hotel.hotel')),
            ],
        ),
        migrations.CreateModel(
            name='HotelImages',
            fields=[
                ('imageID', models.CharField(max_length=7, primary_key=True, serialize=False)),
                ('image', models.TextField(max_length=20000)),
                ('hotelID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hotel.hotel')),
            ],
        ),
        migrations.CreateModel(
            name='HotelComments',
            fields=[
                ('commentID', models.CharField(max_length=7, primary_key=True, serialize=False)),
                ('comment', models.CharField(max_length=255)),
                ('isApproved', models.CharField(max_length=3)),
                ('hotelID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hotel.hotel')),
            ],
        ),
        migrations.CreateModel(
            name='HotelBudget',
            fields=[
                ('budgetPackage', models.CharField(max_length=50, primary_key=True, serialize=False)),
                ('hotelId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hotel.hotel')),
            ],
        ),
    ]
