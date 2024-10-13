from django.contrib import admin
from .models import Publication
from .models import Tag

# Register your models here.
admin.site.register(Publication)
admin.site.register(Tag)
