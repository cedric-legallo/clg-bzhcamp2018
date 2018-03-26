import Vue from 'vue'
import BusService from '@/services/bus.service'
import StoreService from '@/services/store.service'
const cart = []

class CartService {
  static get() {
    return cart
  }
  static hasItem(item) {
    return cart.find(it => it.id === item.id)
  }
  static addItem(item) {
    if (CartService.hasItem(item)) {
      const index = cart.findIndex(it => it.id === item.id)
      const it = cart[index]
      it.quantity += 1
      Vue.set(cart, index, it)
    } else {
      item.quantity = 1
      cart.push(item)
    }
    return cart
  }
  static updateItemQuantity(item, qty) {
    if (CartService.hasItem(item)) {
      const index = cart.findIndex(it => it.id === item.id)
      const it = cart[index]
      it.quantity = qty
      Vue.set(cart, index, it)
    }
    return cart
  }
  static removeItem(item) {
    if (CartService.hasItem(item)) {
      cart.splice(cart.findIndex(it => it.id === item.id), 1)
    }
    return cart
  }
  static clear() {
    cart.splice(0, cart.length)
    return cart
  }
  static async pay(amount) {
    const online = await StoreService.online()
    if (online) {
      BusService.$emit('notification', { msg: `Merci pour votre paiement de ${amount} €` })
      CartService.clear()
      return true
    } else {
      BusService.$emit('notification', { msg: `Vous serez notifiez lorsque le service sera de nouveau en ligne`, type: 'info' })
      return false
    }
  }
}

export default CartService
