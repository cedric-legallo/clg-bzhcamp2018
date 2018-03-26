const applicationServerPublicKey = 'BLm5kWA8kt60TLwhNhp7HyK4AOrRh3PQE_sfXtYv1Rj5y2YcToBO84-7Np0JzO5mGTNCGYVEmbJN_PdKZ-_i9sM'

function urlB64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4)
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/')

  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}
let instance = null

class SubscriptionSercice {
  constructor() {
    if (!instance) {
      this.isSubscribed = false
      instance = this
    }

    return instance
  }

  subscribeUser() {
    const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey)
    if (window.swRegistration) {
      window.swRegistration.pushManager
        .subscribe({
          userVisibleOnly: true,
          applicationServerKey: applicationServerKey
        })
        .then(function(subscription) {
          console.log('User is subscribed.')
          SubscriptionSercice.updateSubscriptionOnServer(subscription)
          this.isSubscribed = true
        })
        .catch(function(err) {
          console.log('Failed to subscribe the user: ', err)
        })
    }
  }
  static updateSubscriptionOnServer(subscription) {
    // TODO: Send subscription to application server
    if (subscription) {
      console.log(JSON.stringify(subscription))
    }
  }

  static getInstance() {
    return new SubscriptionSercice()
  }
}

export default SubscriptionSercice
