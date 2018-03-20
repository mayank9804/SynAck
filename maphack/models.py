from django.db import models

# Create your models here.
class SearchRajasthan(models.Model):
    country_code = models.TextField(max_length=2,blank=False)
    postal_code = models.IntegerField(default=0)
    place_name = models.TextField(max_length=20,blank=False)
    admin_name1 = models.TextField(max_length=20,blank=False)
    admin_code1 = models.IntegerField(default=0)
    admin_name2 = models.TextField(max_length=20,blank=False)
    admin_code2 = models.IntegerField(default=0)
    admin_name3 = models.TextField(max_length=20,blank=False)
    admin_code3 = models.IntegerField(default=0)
    latitude = models.FloatField(blank=False)
    longitude = models.FloatField(blank=False)
    accuracy = models.IntegerField(blank=True)

    class Meta:
        ordering = ['postal_code']

    def __self__(self):
        return self.name + " " + self.postal_code



class Guides(models.Model):
    guide_name = models.TextField(max_length=20,blank=False)
    fathers_name = models.TextField(max_length=20,blank=False)
    address = models.TextField(blank=False)
    id_no = models.IntegerField(blank=False)
    card_status = models.TextField(default="Green Card",blank=False)
    mob_no = models.IntegerField(blank=False,default=1800111363)
    latitude = models.FloatField(blank=False)
    longitude = models.FloatField(blank=False)
    postal_code = models.IntegerField()

    rating = models.FloatField(blank=True,default=0)

    def get_upload_path(instance, filename):
        base = instance.guide_name
        base = 'GuidesPhotos/'+ base
        return base

    image = models.ImageField(upload_to=get_upload_path,blank=True)

    class Meta:
        ordering = ['id_no']

    def __self__(self):
        return self.guide_name + ' ' + self.id_no
