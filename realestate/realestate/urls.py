from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.contrib.auth.models import User, Group


urlpatterns = patterns('',
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', 'realestate.views.home', name='home'),
    url(r'^([A-Z]{2})/([-A-Za-z]{2,20})/([-\w\s]{3,100})/$', 'realestate.views.property', name='property'),
    #url(r'^2/ca/buffalo/address/$', 'realestate.views.test', name='test'),
    url(r'^contact/$', 'realestate.views.send_email', name='send_email'),
    # api routing
    url(r'^api/', include(autoapi.urls, namespace='autoapi')),
)
