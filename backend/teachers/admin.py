from django.contrib import admin
from .models import Teacher,ScheduledClass
# Register your models here.
class TeacherAdmin(admin.ModelAdmin):
    list_display = ['name', 'hourly_wage', 'created_at','is_active']

class ScheduledClassAdmin(admin.ModelAdmin):
    list_display = ['name','email','teacher']
    verbose_name_plural = 'Scheduled Classes'

admin.site.register(Teacher, TeacherAdmin)
admin.site.register(ScheduledClass,ScheduledClassAdmin)