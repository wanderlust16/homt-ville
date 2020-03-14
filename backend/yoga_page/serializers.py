from rest_framework import serializers
from .models import Branch, Images, Video
class ImagesSerializer(serializers.ModelSerializer):
    # branch = serializers.CharField() # 아래 fields에 추가 가능 
    class Meta:
        model = Images
        fields = ['images',] # branch 뺌
        # extra_kwargs = {
        #     'url': {'lookup_field': 'slug'}
        # }
        
class BranchSerializer(serializers.ModelSerializer): 
    branch_images = ImagesSerializer(many=True, read_only=True)
    class Meta:
        model = Branch
        # fields = '__all__'
        fields = ['name', 'description', 'image', 'branch_images', ]
       
class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = '__all__'
