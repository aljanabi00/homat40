from django.db import models


# Create your models here.


class Story(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()

    def __str__(self):
        return self.title


class Video(models.Model):
    title = models.CharField(max_length=255)
    url = models.URLField()

    def __str__(self):
        return self.title


class Image(models.Model):
    image = models.ImageField(upload_to='images/')

    # def __str__(self):
    #     return self.image.url


class Host(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)
    images = models.ManyToManyField(Image, blank=True)
    longitude = models.FloatField(null=True, blank=True)
    latitude = models.FloatField(null=True, blank=True)

    def __str__(self):
        return self.name
