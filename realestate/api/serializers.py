from django.contrib.auth.models import User, Group
from models import Cities, Properties, States
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')

class StatesSerializer(serializers.HyperlinkedModelSerializer):
    model = Properties
    fields = ('city')

class CitiesSerializer(serializers.HyperlinkedModelSerializer):
    model = Properties
    fields = ('state')

class PropertiesSerializer(serializers.HyperlinkedModelSerializer):
    model = Properties
    fields =('id', 'state_name', 'city_name', 'address', 'zip_code', 'url_string')
