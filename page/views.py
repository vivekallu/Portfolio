
from django.shortcuts import render

# This view method handles the request for the root URL /
# See urls.py for the mapping.
def index(request):
    # Render the index.html template with a context dictionary
    # that has a key called 'time' with current time obtained from
    # the datetime module as the value.
    return render(request, "index.html")