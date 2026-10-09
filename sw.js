// Старое приложение больше не работает здесь: удаляем свой кэш, отключаемся и показываем страницу «переехало»
self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      for (const k of await caches.keys()) await caches.delete(k)
      await self.registration.unregister()
      for (const c of await self.clients.matchAll({ type: 'window' })) c.navigate(c.url)
    })(),
  )
})
