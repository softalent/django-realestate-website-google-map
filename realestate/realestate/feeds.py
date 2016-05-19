from django.contrib.syndication.views import Feed
from django.shortcuts import get_list_or_404, get_object_or_404
from realestate import models
import collections
import datetime

class PropertyFeed(Feed):
    title = 'Properties'
    link = '/state/city'
    description = 'Properties in requested city'
    description_template = 'feeds/property_feed.html'
    def get_object(self, request, *args, **kwargs):
        return get_list_or_404(
            models.Main,
            available=True, create_date=datetime.date.today(), state=kwargs.get('s', ''),
            city=kwargs.get('c', '').replace('-', ' '))

    def items(self, obj):
        return obj

    def get_item_images(self, item):
        return item.get_images()

    def item_title(self, item):
        return "%s %s, %s" % (item.address, item.city, item.state)

    def convert(self, data):
        if isinstance(data, basestring):
            return data.encode('utf_8', errors='backslashreplace')
        elif isinstance(data, collections.Mapping):
            return dict(map(self.convert, data.iteritems()))
        elif isinstance(data, collections.Iterable):
            return type(data)(map(self.convert, data))
        else:
            return data

    def get_context_data(self, item, **kwargs):
        propFeatures = self.convert(item.features)
        images = self.get_item_images(item)
        def get_image_or_filler(images):
            try:
                return images[0].url
            except AttributeError:
                return 'http://seethisproperty.com' + images[0]['url']
        context = super(PropertyFeed, self).get_context_data(**kwargs)
        context['property_description'] = item.description
        context['property_address'] = item.address
        context['property_city'] = item.city
        context['property_state'] = item.state
        context['property_zip_code'] = item.zip_code
        context['property_image'] = get_image_or_filler(images)
        context['property_features'] = propFeatures
        return context

# class CityFeed(generic.ListView):
#     def get_queryset(self):
#         kwargs = self.kwargs
#         qs = models.City.objects.filter(state=kwargs.get('s', ''))
#         queryset = get_list_or_404(qs)
#         return queryset
