from rest_framework import serializers
from realestate.models import Main


class MainSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Main
        fields = ('id', 'state', 'city', 'zip_code', 'address', 'get_url')
