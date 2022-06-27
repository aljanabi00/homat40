import random

from django.shortcuts import render

from data.models import *


def get_stories(request):
    stories = Story.objects.all()
    videos = Video.objects.all()
    return render(request, 'stories.html', {'stories': stories, 'videos': videos})


def get_story(request, pk):
    story = Story.objects.get(id=3)
    return render(request, 'story.html', {'story': story})


def index(request):
    hosts = Host.objects.all()
    stories = Story.objects.all()
    stories_data = []
    hosts_data = []
    randoms = []
    while len(randoms) < 3:
        number = random.randint(0, hosts.all().count() - 1)
        if number not in randoms:
            randoms.append(number)

    for i in randoms:
        hosts_data.append(hosts[i])
        stories_data.append(stories[i])
    stories_titles = []
    for i in stories_data:
        stories_titles.append(i.title)
    return render(request, 'index.html',
                  {'hosts': hosts_data, 'stories': stories_data, 'stories_titles': stories_titles})


def get_hosts(request):
    hosts = Host.objects.all()
    return render(request, 'hosts.html', {'hosts': hosts})


def get_host(request, pk):
    host = Host.objects.get(id=pk)
    location = f"https://maps.google.com/?q={{ host.latitude }},{{ host.longitude }}"
    return render(request, 'host.html', {'host': host, 'location': location})


def get_map(request):
    return render(request, 'map.html')
