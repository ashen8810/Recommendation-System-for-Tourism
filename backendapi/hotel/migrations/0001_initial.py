# Generated by Django 4.2.7 on 2023-12-15 03:59

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
                ('hotelID', models.CharField(max_length=5, primary_key=True, serialize=False)),
                ('hotelName', models.CharField(max_length=50)),
                ('coordinateX', models.IntegerField()),
                ('coordinateY', models.IntegerField()),
                ('description', models.CharField(max_length=255)),
                ('website', models.CharField(max_length=50)),
                ('noOfReviews', models.IntegerField()),
                ('availability', models.CharField(max_length=3)),
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
                ('image', models.BinaryField()),
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
