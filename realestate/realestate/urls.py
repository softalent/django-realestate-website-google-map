from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.contrib.auth.models import User, Group
from rest_framework import routers, serializers, viewsets

# Serializers define the API representation.
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'is_staff')

class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')

# ViewSets define the view behavior.
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'groups', GroupViewSet)

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
