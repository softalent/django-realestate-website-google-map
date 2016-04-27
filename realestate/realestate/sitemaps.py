from django.contrib.sitemaps import Sitemap
from realestate.models import Main


class StateSitemap(Sitemap):
    changefreq = "daily"
    priority = 0.6

    def items(self):
        return Main.objects.filter(
            available=True).order_by('state').distinct('state')

    def location(self, obj):
        return '/' + str(obj.state) + '/'


class CitySitemap(Sitemap):
    changefreq = "daily"
    priority = 0.6

    def items(self):
        return Main.objects.filter(
            available=True).order_by('city').distinct('city')

    def location(self, obj):
        return '/' + str(obj.state) + '/' + obj.city_slug + '/'
