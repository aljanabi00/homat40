# Generated by Django 4.0.5 on 2022-06-27 10:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0003_image_host'),
    ]

    operations = [
        migrations.AlterField(
            model_name='image',
            name='image',
            field=models.ImageField(upload_to='media/images/'),
        ),
    ]
