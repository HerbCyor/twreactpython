from django.db import models

# Create your models here.
class Teacher(models.Model):
    name = models.CharField(max_length=200, null=False, blank=False)
    hourly_wage = models.DecimalField(max_digits=9, decimal_places=2, null=False,blank=False)
    description = models.TextField(null=False, blank=False)
    picture = models.URLField(max_length = 255, null=False, blank=False)
    
    created_at = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)

class ScheduledClass(models.Model):
    name = models.CharField(max_length=200, null=False, blank=False)
    email = models.EmailField(max_length=200,null=False,blank=False)
    teacher = models.ForeignKey(Teacher,on_delete=models.CASCADE,related_name='scheduledclasses',null=False,blank=False)
    