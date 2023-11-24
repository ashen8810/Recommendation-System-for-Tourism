# Generated by Django 4.2.6 on 2023-11-24 13:02

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ("account", "0005_alter_user_userid"),
    ]

    operations = [
        migrations.AlterField(
            model_name="user",
            name="userId",
            field=models.UUIDField(
                db_column="UserId",
                default=uuid.uuid4,
                editable=False,
                primary_key=True,
                serialize=False,
            ),
        ),
    ]
