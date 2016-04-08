from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.contrib.auth.models import User, Group
from rest_framework import routers, serializers, viewsets
from api.models import States, Cities, Properties
from api.serializers import CitiesSerializer, StatesSerializer, PropertiesSerializer
# from api.views import CitiesViewSet, StatesViewSet, PropertiesViewSet
from api.views import PropertiesViewSet

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'groups', GroupViewSet)
router.register(r'cities', CitiesViewSet)


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = patterns('',
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', 'realestate.views.home', name='home'),
    url(r'^([A-Z]{2})/([-A-Za-z]{2,20})/([-\w\s]{3,100})/$', 'realestate.views.property', name='property'),
    #url(r'^2/ca/buffalo/address/$', 'realestate.views.test', name='test'),
    url(r'^contact/$', 'realestate.views.send_email', name='send_email'),
    # api routing
    url(r'^api/', include(router.urls)),
    url(r'^data/', include('rest_framework.urls', namespace='rest_framework')),
)
