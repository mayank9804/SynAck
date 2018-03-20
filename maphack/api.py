from rest_framework.decorators import api_view
from .serializers import SearchRajasthanSerializer,GuidesSerializer
from .models import SearchRajasthan,Guides
import os,re
from django.shortcuts import render
from django.http import HttpResponse,JsonResponse



@api_view(['GET','POST'])
def search(request):
    print("Hello World")
    q = [x for x in request.GET.get("q").split(",")]
    print(q)


    for i in range(len(q)):
        try:
            row = SearchRajasthan.objects.filter(postal_code__startswith=q[i]).values("place_name","postal_code","admin_name1","latitude","longitude")
        except:
            pass
        if len(row) == 0:
            try:
                row = SearchRajasthan.objects.filter(place_name__startswith=q[i]).values("place_name","postal_code","admin_name1","latitude","longitude")
            except:
                pass
            if len(row) == 0:
                try:
                    row = SearchRajasthan.objects.filter(admin_name1__startswith=q[i]).values("place_name","postal_code","admin_name1","latitude","longitude")
                except:
                    pass
                if len(row) == 0:
                    continue
                else:
                    break
            else:
                break
        else:
            break



    if len(row) == 0:
        raise RuntimeError("Place not found")
    # print(json.loads(row))
    # <JsonResponse status_code=200, "application/json">
    response = JsonResponse(list(row),safe=False)
    print(response)
    return response


@api_view(['GET'])
def updatemap(request):
    print("Update invoked")
    """Find up to 10 places within view."""

    # ensure parameters are present
    if not request.GET.get("sw"):
        raise RuntimeError("missing sw")
    if not request.GET.get("ne"):
        raise RuntimeError("missing ne")

    # ensure parameters are in lat,lng format
    # if not re.search("^-?\d+(?:\.\d+)?,-?\d+(?:\.\d+)?$", request.GET.get("sw")):
    #     raise RuntimeError("invalid sw")
    # if not re.search("^-?\d+(?:\.\d+)?,-?\d+(?:\.\d+)?$", request.GET.get("ne")):
    #     raise RuntimeError("invalid ne")

    # explode southwest corner into two variables
    (sw_lat, sw_lng) = [float(s) for s in request.GET.get("sw").split(",")]

    # explode northeast corner into two variables
    (ne_lat, ne_lng) = [float(s) for s in request.GET.get("ne").split(",")]

    # find 10 cities within view, pseudorandomly chosen if more within view


        # doesn't cross the antimeridian
        # row = raw_update_sql(sw_lat,ne_lat,sw_lng,ne_lng)
    row = SearchRajasthan.objects.filter(latitude__gte=sw_lat,latitude__lte=ne_lat).filter(longitude__gte=sw_lng,longitude__lte=ne_lng).values("country_code","place_name","admin_code1","latitude","longitude","postal_code")
        # row = SearchRajasthan.objects.raw("""SELECT * FROM maphack_SearchRajasthan
        #              WHERE latitude>=%s AND latitude<=%s AND (longitude >= %s AND longitude <= %s)
        #              GROUP BY country_code, place_name, admin_code1
        #              ORDER BY RANDOM()
        #              LIMIT 10,
        #              [sw_lat,ne_lat,sw_lng,ne_lng]
        #              """)




    # output places as JSON
    response = JsonResponse(list(row),safe=False)
    print(response.content)
    print(response)
    return response

@api_view(['GET'])
def getguides(request):
    rows=''
    if not request.GET.get("geo"):
        raise RuntimeError("Not a valid postal code")
    else:
        #postal code was passed, need to make a database query with Guide Table so as to fetch guides according to postal Code
        postal_code = request.GET.get("geo")
        try:
            rows = Guides.objects.filter(postal_code=postal_code).values("guide_name","id_no","card_status","mob_no","postal_code","rating","image")
        except:
            pass


        if(len(rows)>0):
            response = JsonResponse(list(rows),safe=False)
            print(response.content)
            return response
        return


@api_view(['GET'])
def getguidelist(request):
    row = Guides.objects.all().values("guide_name","id_no","card_status","mob_no","postal_code","address","rating","image")

    response = JsonResponse(list(row),safe=False)
    return response
