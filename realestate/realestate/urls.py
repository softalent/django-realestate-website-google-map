from django.conf.urls import patterns, include, url
from django.contrib import admin
from rest_framework import routers
from realestate import views


router = routers.DefaultRouter()
router.register(r'main', views.MainViewSet)

urlpatterns = patterns(
    '',
    url(r'^api/', include(router.urls)),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^contact/', views.MainContact.as_view(), name='contact'),
    url(r'^states/$', views.StateListView.as_view(), name='states'),
    url(r'^(?P<s>\w{2})/(?P<c>\w*(-\w*)?)/$',
        views.PropertyListView.as_view(), name='property_list'),
    url(r'^(?P<s>\w{2})/$',
        views.CityListView.as_view(), name='city_list'),
    url(r'^$', views.HomeView.as_view(), name='home'),
    # Receives as parameters State / City / Address
    url(r'^(?P<s>\w{2})/(?P<c>\w*(-\w*)?)/(?P<a>[-\w]*)/$',
        views.PropertyView.as_view(), name='property'),
)
