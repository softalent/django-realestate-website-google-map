from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from realestate import models
from rest_framework import viewsets
from realestate.serializers import MainSerializer
from .forms import ContactForm
from django.views import generic
from django.core.urlresolvers import reverse_lazy
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.core.mail import EmailMultiAlternatives
from realestate.us_states import US_STATES
import us


class HomeView(generic.TemplateView):
    template_name = 'home.html'

    def get_context_data(self, *args, **kwargs):
        context = super(HomeView, self).get_context_data(*args, **kwargs)
        main_data = models.Main.objects.filter(
            available=True).order_by('?')[:5]
        states = us.states.STATES
        statesObj = []
        for i in range(0, len(states)):
            name = str(states[i].name)
            abbr = str(states[i].abbr)
            statesObj.append({'name': name, 'abbr': abbr})
        main_data = models.Main.objects.filter(available=True).order_by('?')[:5]
        context['states'] = statesObj
        context['properties'] = main_data
        return context


class StateListView(generic.ListView):
    template_name = 'state_list.html'
    queryset = models.Main.objects.filter(
        available=True, state__isnull=False).distinct('state').exclude(
        state='')


class PropertyListView(generic.ListView):
    template_name = 'property_list.html'
    paginate_by = 16

    def get_queryset(self):
        kwargs = self.kwargs
        queryset = models.Main.objects.filter(
            available=True, state=kwargs.get('s', ''),
            city=kwargs.get('c', '').replace('-', ' '))
        return queryset


class CityListView(generic.ListView):
    template_name = 'city_list.html'
    paginate_by = 16

    def get_queryset(self):
        kwargs = self.kwargs
        base_qs = models.Main.objects.filter(
            available=True, state=kwargs.get('s', '')).order_by(
            'city').distinct('city')
        cities_already_listed = []
        queryset = []
        for prop in base_qs:
            if not prop.city.strip(',').title() in cities_already_listed:
                cities_already_listed.append(prop.city.strip(',').title())
                queryset.append(prop)
        return queryset


class PropertyView(generic.TemplateView):
    template_name = 'index.html'

    def get_context_data(self, *args, **kwargs):
        context = super(PropertyView, self).get_context_data(*args, **kwargs)
        main_data = get_object_or_404(
            models.Main, state=kwargs.get('s', ''),
            city=kwargs.get('c', '').replace('-', ' '),
            address__icontains=kwargs.get('a', '').replace('-', ' '),
            available=True)
        context['main_data'] = main_data
        context['image_data'] = main_data.image.all()
        context['school_data'] = main_data.school.all()
        context['new_data'] = main_data.features
        context['new_url'] = main_data.get_url()
        return context


class MainViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = models.Main.objects.all()
    serializer_class = MainSerializer

    def get_queryset(self):
        params = {k: v for k, v in self.request.query_params.items()}
        queryset = models.Main.objects.filter(**params)
        return queryset


class MainContact(generic.FormView):
    template_name = 'emails/contact_form.html'
    form_class = ContactForm
    success_url = reverse_lazy('contact')

    def form_valid(self, form):
        obj = form.cleaned_data

        custumer_content = render_to_string('emails/customer_message.html', {
            'name': obj['name'],
        })
        custumer_text_content = strip_tags(custumer_content)
        # Subject, Content, EmailFrom, EmailTo, ReplyTo
        custumer_email = EmailMultiAlternatives(
            u'Contact from SeeThisProperty', custumer_text_content,
            'contact@seethisproperty.com', [obj['email']],
            headers={'Reply-To': 'contact@seethisproperty.com'})
        custumer_email.attach_alternative(custumer_content, 'text/html')
        custumer_email.send()

        our_content = render_to_string('emails/our_message.html', {
            'name': obj['name'],
            'phone': obj['phone'],
            'email': obj['email'],
            'url': self.request.META['HTTP_REFERER']
        })
        our_text_content = strip_tags(our_content)
        # Subject, Content, EmailFrom, EmailTo, ReplyTo
        our_email = EmailMultiAlternatives(
            u'Contact from SeeThisProperty', our_text_content,
            'contact@seethisproperty.com', ['contact@seethisproperty.com'],
            headers={'Reply-To': obj['email']})
        our_email.attach_alternative(our_content, 'text/html')
        our_email.send()
        return JsonResponse({'message': 'success'})
