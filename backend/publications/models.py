from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Tag(models.Model):
    text = models.CharField(max_length=100)

    def __str__(self) -> str:
        return self.text

class Publication(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=100)
    image_url = models.ImageField(upload_to='images', default='images/ok.jpg', null=True)
    main_file_url = models.FileField(upload_to='files', null=True)
    other_tags = models.ManyToManyField(Tag, blank=True)

    def __str__(self) -> str:
        return self.title