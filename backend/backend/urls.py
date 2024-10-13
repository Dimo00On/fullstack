"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from publications.views import PublicationViewSet, TagViewSet, UserViewSet
from django.conf import settings
from django.conf.urls.static import static
from publications.views import get_publications_with_tags
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

# from publications.views import download_link

router = routers.DefaultRouter()
router.register(r'publications', PublicationViewSet)
router.register(r'tags', TagViewSet)
router.register(r'users', UserViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/get_publications_with_tags/<path:tags>/', get_publications_with_tags, name='get_publications_with_tags'),
] 
urlpatterns += static(settings.MEDIA_URL + 'images/', document_root=settings.MEDIA_ROOT + '/images/')
urlpatterns += static(settings.MEDIA_URL + 'files/', document_root=settings.MEDIA_ROOT + '/files/')
