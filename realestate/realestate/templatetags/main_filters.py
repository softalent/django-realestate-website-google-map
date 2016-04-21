# coding:utf-8
from django import template
from django.template import Template

register = template.Library()


@register.filter
def remove_float(value):
    '''Removes decimal numbers'''
    value = str(value)
    if '.' in value:
        return value[:value.index('.')]
    elif ',' in value:
        return value[:value.index(',')]
    else:
        return value


paginate_search_template = Template('\
        {% if page_obj.has_previous or page_obj.has_next %}\
        <nav class="text-center">\
            <ul class="pagination">\
                {% if page_obj.has_previous %}\
                <li>\
                    <a href="{{to_page}}{{ page_obj.previous_page_number }}">← Previous</a>\
                </li>\
                {% endif %}\
                {% for i in page_obj.paginator.page_range %}\
                    {% if i == this_page %}\
                        <li class="disabled"><a href="">{{i}}</a></li>\
                    {% else %}\
                        <li><a href="{{to_page}}{{i}}">{{i}}</a></li>\
                    {% endif %}\
                {% endfor %}\
                {% if page_obj.has_next %}\
                <li>\
                    <a href="{{to_page}}{{ page_obj.next_page_number }}">Next →</a>\
                </li>\
                {% endif %}\
            </ul>\
        </nav>\
        {% endif %}')


@register.inclusion_tag(paginate_search_template, takes_context=True)
def paginate_search(context, search_form=None):
    context = context
    context['this_page'] = context['page_obj'].number
    context['to_page'] = '?page='
    return context
