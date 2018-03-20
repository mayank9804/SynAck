from django.conf.urls import url
from . import views
from . import api

urlpatterns = [
    url(r'^$',views.indexmain,name="indexmain"),
    url(r'^digiguide/$',views.index,name="Index"),
    url(r'^digiguide/search/$',views.search,name="Search"),
    url(r'^digiguide/updatemap/$',views.updatemap,name="Update"),
    url(r'^digiguide/getguides/$',views.getguides,name="FetchGuides"),
    url(r'^digiguide/searchapi/$',api.search,name="Search API"),
    url(r'^digiguide/updatemapapi/$',api.updatemap,name="Update API"),
    url(r'^digiguide/getguidesapi/$',api.getguides,name="Guides API"),
    url(r'^digiguide/getguideslistapi/$',api.getguidelist,name="Guides List API"),
]
