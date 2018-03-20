from rest_framework import serializers
from maphack.models import SearchRajasthan,Guides

class SearchRajasthanSerializer(serializers.ModelSerializer):

    class Meta:
        model = SearchRajasthan

class GuidesSerializer(serializers.ModelSerializer):

    def get_img_url(self,obj):
        return obj.image.url

    image_url = serializers.SerializerMethodField('get_img_url')

    class Meta:
        model = Guides
