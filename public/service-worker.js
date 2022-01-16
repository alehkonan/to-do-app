/* eslint-disable no-restricted-globals */
const CACHE_NAME = 'app-cache-v1';
const assetUrls = ['/', '/static/js/bundle.js', 'offline.html'];

self.addEventListener('install', async () => {
  const cache = await caches.open(CACHE_NAME);
  await cache.addAll(assetUrls);
});

self.addEventListener('activate', async () => {
  const cachesNames = await caches.keys();
  await Promise.all(
    cachesNames
      .filter((name) => name !== CACHE_NAME)
      .map((name) => caches.delete(name))
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  if (url.origin === request.origin) {
    event.respondWith(cacheFirst(request));
  } else {
    event.respondWith(networkFirst(request));
  }
});

async function cacheFirst(request) {
  const cached = await caches.match(request);
  return cached ?? (await fetch(request));
}
async function networkFirst(request) {
  const cache = await caches.open('dynamic');
  try {
    const response = await fetch(request);
    await cache.put(request, response.clone());
    return response;
  } catch (error) {
    const cached = await cache.match(request);
    return cached ?? caches.match('/offline.html');
  }
}
