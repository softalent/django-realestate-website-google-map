from django.contrib.syndication.views import Feed
from django.shortcuts import get_list_or_404
from realestate import models

class PropertyFeed(Feed):
    title = 'Properties'
    link = '/CA/Los-Angeles'
    description = 'Properties in Los Angeles'
    def get_object(self, request, *args, **kwargs):
        return get_list_or_404(
            models.Main,
            available=True, state=kwargs.get('s', ''),
            city=kwargs.get('c', '').replace('-', ' '))

    def items(self, obj):
        return obj[:30]

    def item_title(self, item):
        return "%s %s, %s" % (item.address, item.city, item.state)

    def item_description(self, item):
        return "%s" % item.description



    # def link(self, object_list):
    #     return object_list.get_url()


# class CityFeed(generic.ListView):
#     def get_queryset(self):
#         kwargs = self.kwargs
#         qs = models.City.objects.filter(state=kwargs.get('s', ''))
#         queryset = get_list_or_404(qs)
#         return queryset
