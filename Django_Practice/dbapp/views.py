from django.shortcuts import render
from dbapp.models import profile
# Create your views here.

def users(request):
    user_list=profile.objects.order_by('first_name')
    user_dict={'users':user_list}
    return render(request, 'dbapp/users.html',context=user_dict)