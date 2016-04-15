from realestate import models
from rest_framework import viewsets
from realestate.serializers import MainSerializer

from django.views import generic


class HomeView(generic.TemplateView):
    template_name = 'home.html'


class PropertyView(generic.TemplateView):
    template_name = 'index.html'

    def get_context_data(self, *args, **kwargs):
        context = super(PropertyView, self).get_context_data(*args, **kwargs)
        main_data = models.Main.objects.filter(
            state=kwargs.get('s', ''), city=kwargs.get('c', ''),
            address__icontains=kwargs.get('a', '').replace('-', ' '))
        context['main_data'] = main_data
        context['image_data'] = main_data[0].image.all()
        context['school_data'] = main_data[0].school.all()
        context['new_data'] = main_data[0].features
        context['new_url'] = main_data[0].get_url()
        return context


class MainViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = models.Main.objects.all()
    serializer_class = MainSerializer

    def get_queryset(self):
        params = {k: v for k, v in self.request.query_params.items()}
        queryset = models.Main.objects.filter(**params)
        return queryset
