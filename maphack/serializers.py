from rest_framework import serializers
from maphack.models import SearchRajasthan,Guides

class SearchRajasthanSerializer(serializers.ModelSerializer):

    class Meta:
        model = SearchRajasthan

class GuidesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Guides
