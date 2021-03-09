from django.db import models

# Create your models here.

class profile(models.Model):
    name=models.CharField(max_length=256)
    email=models.EmailField(unique=True)

    def __str__(self):
        return self.name

class intrest(models.Model):
    humanID=models.ForeignKey(profile,on_delete=models.CASCADE)
    band=models.CharField(max_length=256)
    singer=models.CharField(max_length=256)

    def __str__(self):
        return str(self.humanID)