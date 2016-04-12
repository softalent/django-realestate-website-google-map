from django.conf.urls import patterns, include, url
from django.contrib import admin
from rest_framework import routers
from realestate import views


router = routers.DefaultRouter()
router.register(r'main', views.MainViewSet)


urlpatterns = patterns('',
    # Examples:

    url(r'^api/', include(router.urls)),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', 'realestate.views.home', name='home'),
    url(r'^([A-Z]{2})/([-A-Za-z]{2,20})/([-\w\s]{3,100})/$', 'realestate.views.property', name='property'),
    #url(r'^2/ca/buffalo/address/$', 'realestate.views.test', name='test'),
)
