import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE','rjHackMapSolution.settings')

import django
django.setup()

from maphack.models import SearchRajasthan

def populate():
    f = open('RajData.txt','r')
    while True:

        data = f.readline().strip().split("\t");
        if data == '':
            break

        data[8] = 0
        place = SearchRajasthan.objects.get_or_create(
                            country_code=data[0],postal_code=data[1],place_name=data[2],admin_name1=data[3],
                            admin_code1=data[4],admin_name2=data[5],admin_code2=data[6],
                            admin_name3=data[7],admin_code3=data[8],latitude=data[9],longitude=data[10],accuracy=data[11])

if __name__ == '__main__':
    populate()
    print("Done!")
