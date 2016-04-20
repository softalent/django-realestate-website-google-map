from django import template

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
