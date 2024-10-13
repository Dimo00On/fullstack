from rest_framework import serializers
from .models import Publication, Tag
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'is_superuser', 'password']
        extra_kwargs = {'password': {"write_only": True}}



class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'

class PublicationSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    other_tags = TagSerializer(many=True, required=False)

    class Meta:
        model = Publication
        fields = '__all__' 


        
