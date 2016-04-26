from django.contrib import messages
from django.http import JsonResponse
from django.shortcuts import get_object_or_404, get_list_or_404
from realestate import models
from rest_framework import viewsets
from realestate.serializers import MainSerializer
from .forms import ContactForm, ContactUsForm
from django.views import generic
from django.core.urlresolvers import reverse_lazy
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.core.mail import EmailMultiAlternatives
import operator
from django.db.models import Q


class HomeView(generic.TemplateView):
    template_name = 'home.html'

    def get_context_data(self, *args, **kwargs):
        context = super(HomeView, self).get_context_data(*args, **kwargs)
        main_data = models.Main.objects.filter(
            available=True).order_by('?')[:5]
        context['properties'] = main_data
        return context


class AboutView(generic.TemplateView):
    template_name = 'about.html'


class TermsView(generic.TemplateView):
    template_name = 'terms_of_use.html'


class PrivacyView(generic.TemplateView):
    template_name = 'privacy.html'


class ContactUsView(generic.FormView):
    template_name = 'contact_us.html'
    form_class = ContactUsForm
    success_url = reverse_lazy('contact_us')

    def form_valid(self, form):
        obj = form.cleaned_data

        try:
            custumer_content = render_to_string(
                'emails/customer_message.html', {
                    'name': obj['name'], })
            custumer_text_content = strip_tags(custumer_content)
            # Subject, Content, EmailFrom, EmailTo, ReplyTo
            custumer_email = EmailMultiAlternatives(
                u'Contact from SeeThisProperty', custumer_text_content,
                'contact@seethisproperty.com', [obj['email']],
                headers={'Reply-To': 'contact@seethisproperty.com'})
            custumer_email.attach_alternative(custumer_content, 'text/html')
            custumer_email.send()

            our_content = render_to_string(
                'emails/our_message_contact_us.html', {
                    'name': obj['name'],
                    'phone': obj['phone'],
                    'email': obj['email'],
                    'message': obj['message']})
            our_text_content = strip_tags(our_content)
            # Subject, Content, EmailFrom, EmailTo, ReplyTo
            our_email = EmailMultiAlternatives(
                u'Contact from SeeThisProperty', our_text_content,
                'contact@seethisproperty.com', ['contact@seethisproperty.com'],
                headers={'Reply-To': obj['email']})
            our_email.attach_alternative(our_content, 'text/html')
            our_email.send()
            messages.success(self.request, "Thanks for contacting us, we'll get back to you as soon as possible.")
        except:
            messages.error(self.request, "Sorry, something is wrong with our mail server and we couldn't get your message, please try again later.", extra_tags='danger')
        return super(ContactUsView, self).form_valid(form)


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
        queryset = get_list_or_404(
            models.Main,
            available=True, state=kwargs.get('s', ''),
            city=kwargs.get('c', '').replace('-', ' '))
        return queryset


class CityListView(generic.ListView):
    template_name = 'city_list.html'
    paginate_by = 16

    def get_queryset(self):
        kwargs = self.kwargs
        queryset = models.Main.objects.distinct_cities_at(
            state=kwargs.get('s', ''))
        return queryset


class PropertyView(generic.TemplateView):
    template_name = 'index.html'

    def get_context_data(self, *args, **kwargs):
        context = super(PropertyView, self).get_context_data(*args, **kwargs)
        # Get the available properties for the given state and city
        main = models.Main.objects.filter(
            state=kwargs.get('s', ''),
            city__icontains=kwargs.get('c', '').replace('-', ' '),
            available=True)
        # Filter objects by each word in the given address
        address_q = kwargs.get('a', '').replace('-', ' ').split(' ')
        query = reduce(
            operator.and_, (Q(address__icontains=item) for item in address_q))
        main_data = get_object_or_404(main, query)
        context['main_data'] = main_data
        # Use model's get_images() to get noImage.jpg if there is no image
        context['image_data'] = main_data.get_images()
        context['school_data'] = main_data.school.all()
        context['new_data'] = main_data.features
        context['new_url'] = main_data.get_url()
        return context


class MainViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = models.Main.objects.all()
    serializer_class = MainSerializer

    def get_queryset(self):
        params = {k: v for k, v in self.request.query_params.items()}
        params['available'] = True
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
