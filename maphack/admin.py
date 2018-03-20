from django.contrib import admin
from maphack.models import SearchRajasthan,Guides
# Register your models here.


@admin.register(SearchRajasthan)
class SearchRajasthanAdmin(admin.ModelAdmin):
    list_display = ['country_code', 'postal_code','place_name']


@admin.register(Guides)
class GuidesAdmin(admin.ModelAdmin):
    list_display = ['guide_name','id_no','mob_no']
