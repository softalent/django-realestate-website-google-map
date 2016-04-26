from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.contrib.sitemaps.views import sitemap
from rest_framework import routers
from realestate import views
from django.contrib.sitemaps import GenericSitemap
from realestate.views import PropertyListView, CityListView

prop_dict = {
    'queryset': PropertyListView,
    'date_field': 'pub_date',
}

city_dict = {
    'queryset': CityListView,
    'date_field': 'pub_date',
}

router = routers.DefaultRouter()
router.register(r'main', views.MainViewSet)

urlpatterns = patterns(
    '',
    url(r'^api/', include(router.urls)),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^request_viewing/', views.MainContact.as_view(), name='contact'),
    url(r'^states/$', views.StateListView.as_view(), name='states'),
    url(r'^contact/$', views.ContactUsView.as_view(), name='contact_us'),
    url(r'^about/$', views.AboutView.as_view(), name='about'),
    url(r'^terms/$', views.TermsView.as_view(), name='terms'),
    url(r'^privacy/$', views.PrivacyView.as_view(), name='privacy'),
    url(r'^sitemap\.xml$', sitemap,
        {'sitemaps': {'state': GenericSitemap(city_dict, priority=0.6), 'city':GenericSitemap(prop_dict, priority=0.6)}},
        name='django.contrib.sitemaps.views.sitemap'),
    url(r'^(?P<s>\w{2})/(?P<c>\w*(-\w*)*?)/$',
        views.PropertyListView.as_view(), name='property_list'),
    url(r'^(?P<s>\w{2})/$',
        views.CityListView.as_view(), name='city_list'),
    url(r'^$', views.HomeView.as_view(), name='home'),
    # Receives as parameters State / City / Address
    url(r'^(?P<s>\w{2})/(?P<c>\w*(-\w*)*?)/(?P<a>[-\w]*)/$',
        views.PropertyView.as_view(), name='property'),
)
