from rest_framework import serializers
from .models import ScheduledClass, Teacher
from django.forms import ValidationError

class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = ('id','name','hourly_wage','description','picture')

class CreateScheduledClassSerializer(serializers.Serializer):
    email = serializers.EmailField(max_length = 255)
    name = serializers.CharField(max_length=200)

    #custom validation
    def validate_name(self,value):
        if len(value) < 3:
            raise ValidationError("Name must be at least 3 characters long")
        return value


class ScheduledClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = ScheduledClass
        fields= '__all__'