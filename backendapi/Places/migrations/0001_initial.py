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
            name='Place',
            fields=[
                ('placeId', models.CharField(max_length=5, primary_key=True, serialize=False)),
                ('createdDate', models.DateTimeField(auto_now_add=True)),
                ('contactNumber', models.CharField(max_length=10)),
                ('placeName', models.CharField(max_length=50)),
                ('coordinateX', models.IntegerField()),
                ('coordinateY', models.IntegerField()),
                ('category', models.CharField(max_length=50)),
                ('website', models.CharField(max_length=50)),
                ('openingTime', models.TimeField()),
                ('closingTime', models.TimeField()),
                ('isUserUploaded', models.BooleanField()),
                ('description', models.CharField(max_length=255)),
                ('adminId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='account.admin')),
                ('userId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='ReviewPlace',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('review', models.CharField(max_length=255)),
                ('rating', models.IntegerField()),
                ('placeId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Places.place')),
                ('userId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='PlaceImages',
            fields=[
                ('imageID', models.CharField(max_length=7, primary_key=True, serialize=False)),
                ('image', models.BinaryField()),
                ('placeID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Places.place')),
            ],
        ),
        migrations.CreateModel(
            name='PlaceComments',
            fields=[
                ('commentId', models.CharField(max_length=7, primary_key=True, serialize=False)),
                ('comment', models.CharField(max_length=255)),
                ('isApproved', models.CharField(max_length=3)),
                ('placeId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Places.place')),
            ],
        ),
    ]
