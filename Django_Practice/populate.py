import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE",'Django_Practice.settings')

import django
django.setup()

from dbapp.models import profile
from faker import Faker

fake=Faker()

def generate():
    fake_name=fake.name().split(" ")
    fake_fName=fake_name[0]
    fake_lname=fake_name[1]
    fake_email=fake.email()

    user=profile.objects.get_or_create(first_name=fake_fName,last_name=fake_lname,email=fake_email)


if __name__=="__main__":
    print("POPULATING DATABASE")
    for i in range(50):
        generate()
    print("POPULATING COMPLETED!")
