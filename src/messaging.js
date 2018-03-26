self.addEventListener('push', function(event) {
  const data = event.data.json()
  const title = data.title || 'VUE JS PWA'
  const options = {
    body: data.body || 'notification'
  }

  event.waitUntil(self.registration.showNotification(title, options))
})
