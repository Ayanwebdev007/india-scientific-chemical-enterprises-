import urllib.request

urls = [
    ("https://upload.wikimedia.org/wikipedia/commons/6/69/Sieves.jpg", "public/images/cat_soil.jpg"),
    ("https://upload.wikimedia.org/wikipedia/commons/8/86/Concrete_slump_test.jpg", "public/images/cat_concrete.jpg"),
    ("https://upload.wikimedia.org/wikipedia/commons/0/01/Laboratory_spectrophotometer.jpg", "public/images/cat_instruments.jpg"),
    ("https://upload.wikimedia.org/wikipedia/commons/3/30/Chemicals_in_flasks.jpg", "public/images/cat_chemicals.jpg"),
    ("https://upload.wikimedia.org/wikipedia/commons/5/52/Beakers.jpg", "public/images/cat_glassware.jpg"),
    ("https://upload.wikimedia.org/wikipedia/commons/9/91/Filtration.jpg", "public/images/cat_filter.jpg")
]

for url, path in urls:
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
        with urllib.request.urlopen(req) as response, open(path, 'wb') as out_file:
            data = response.read()
            out_file.write(data)
        print(f"Downloaded {path}")
    except Exception as e:
        print(f"Failed {path}: {e}")
