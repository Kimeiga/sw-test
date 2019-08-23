let CACHE_NAME = 'sw-cache-v1';
let urlsToCache = [
	'/scripts/dayjs.min.js',
	'https://images.unsplash.com/photo-1558980394-dbb977039a2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
];

self.addEventListener('install', (event) => {
	// Perform install steps
	// debugger;
	event.waitUntil(
		caches.open(CACHE_NAME)
			.then((cache) =>
				cache.addAll(urlsToCache))
	);
});

self.addEventListener('activate', function(event) {
	console.log('Finally active. Ready to start serving content!');

});

self.addEventListener('fetch', (event) => {
	event.respondWith(
		caches.match(event.request)
			.then((response) => {
				if (response) {
					console.log(`Service worker intercepted fetch: ${event.request.url} and provided response:`);
					console.log(response);
					return response;
				}
				return fetch(event.request);
			})
	)
});
