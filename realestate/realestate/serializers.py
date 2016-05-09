from rest_framework import serializers
from realestate.models import Main, MainRemoved


class MainSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Main
        fields = ('id', 'state', 'city', 'zip_code', 'address', 'get_url')


class MainRemovedSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = MainRemoved
        fields = ('mainid', 'state', 'city', 'zip_code',
                  'address', 'get_url', 'removed_at')
