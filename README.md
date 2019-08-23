# sw-test
## Service Worker Test

This is a test to see if I can cache scripts via a service worker on a subdomain and have them be used on a page at a higher domain.

I have written my own web server in order to add the `Service-Worker-Allowed` request header when the browser fetches the service worker so it could be allowed to have a higher scope than it's own directory (e.g. `'/'`).

Everything works if the redirect page takes long enough to redirect to let the service worker cache everything. If it is not given enough time though (if the redirect page redirects too quickly), it will not work.

### Usage
to start the web server
```shell script
$ node server
```

to start, go to 
```
http://127.0.0.1:8880/index.html
```