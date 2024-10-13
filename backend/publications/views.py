from django.http import JsonResponse
from django.shortcuts import render
from .serializers import PublicationSerializer, TagSerializer, UserSerializer
from rest_framework import viewsets, permissions
from .models import Publication, Tag
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.db.models import Count, Q
import json

# Create your views here.

class PublicationViewSet(viewsets.ModelViewSet):
    serializer_class = PublicationSerializer
    queryset = Publication.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        tags_data = self.request.data.getlist("other_tags", [])
        tags = [Tag.objects.get_or_create(text=tag)[0] for tag in tags_data]
        publication = serializer.save(user = self.request.user)
        publication.other_tags.set(tags)
        return super().perform_create(serializer)

class TagViewSet(viewsets.ModelViewSet):
    serializer_class = TagSerializer
    queryset = Tag.objects.all()

class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def perform_create(self, serializer):
        user = User.objects.create_user(**serializer.validated_data)
        user.set_password(serializer.validated_data['password'])
        return user


@api_view(['GET'])
def get_publications_with_tags(request, *args, **kwargs):
    tags_list = kwargs.get('tags', '').split('/')
    new_title = tags_list[0]
    print(tags_list)
    tags_objects = Tag.objects.filter(text__in=tags_list[1:])

    publications = Publication.objects.filter(title__icontains=new_title)
    for tag in tags_objects:
        publications = publications.filter(other_tags=tag)

    data = [
        {
            'title': pub.title,
            'tags': [tag.text for tag in pub.other_tags.all()],
            'main_file_url': request.build_absolute_uri(pub.main_file_url.url) if pub.main_file_url else None,
            'image_url': request.build_absolute_uri(pub.image_url.url) if pub.image_url else None,
        }
        for pub in publications
    ]
    return JsonResponse(data, safe=False)