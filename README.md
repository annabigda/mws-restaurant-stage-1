# Maps Project

This projects shows a list of restaurants with the corresponding map and information.

There are 2 pages `index.html` and `restaurant.html`. You need to pass an id to the second in the form of:

`restaurant.html?id=1`



## Files

The files are:

Javascript:

```
js/dbhelper.js
js/main.js
js/restaurant_info
```

```
css/styles.css
css/styles_override.css // All the custom css
```

```
worker.js // The service worker
```

Pages will be cached by the service worker for use offline.

## Starting

To start the project you need to run: (needs `python3` installed)

`python3 -m http.server 8000`

You can then open your browser at `http://localhost:8000`
