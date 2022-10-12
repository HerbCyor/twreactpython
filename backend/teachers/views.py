from rest_framework.views import APIView
from rest_framework.views import Response
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_400_BAD_REQUEST
from .models import ScheduledClass, Teacher
from .serializers import TeacherSerializer, ScheduledClassSerializer,CreateScheduledClassSerializer

from django.shortcuts import get_object_or_404

class TeacherAPIview(APIView):
    def get(self,request,format=None):
        result = Teacher.objects.all()
        serializer = TeacherSerializer(result, many=True)
        return Response(serializer.data,status=HTTP_200_OK)

class CreateScheduledClassAPIView(APIView):
    def post(self,request,id,format=None):
        teacher = get_object_or_404(Teacher,id=id)
        serializer = CreateScheduledClassSerializer(data=request.data)
        if serializer.is_valid():
            scheduled_class = ScheduledClass(
                name=serializer.validated_data.get('name'),
                email = serializer.validated_data.get('email'),
                teacher = teacher)

            scheduled_class.save()

            scheduled_class_serializer = ScheduledClassSerializer(scheduled_class,many=False)
            return Response(scheduled_class_serializer.data, status = HTTP_201_CREATED)

        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)