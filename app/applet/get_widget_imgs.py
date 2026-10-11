import urllib.request
import re

w = "https://www.tripadvisor.com/WidgetEmbed-cdspropertysummary?locationId=9779126"
req = urllib.request.Request(w, headers={"User-Agent": "Mozilla/5.0"})
with urllib.request.urlopen(req) as r:
    html = r.read().decode("utf-8")
    for match in re.finditer(r"https://[^\s\"'<>]+", html):
        u = match.group(0)
        if any(ext in u.lower() for ext in ['.jpg', '.jpeg', '.png', '.webp']):
            print("Found image:", u)
