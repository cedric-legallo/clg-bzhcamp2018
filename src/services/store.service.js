import axios from 'axios'
import config from '@/services/config.service'
import BusService from '@/services/bus.service'
const url = `${config.serverURL}/products`

let cache = null

class StoreService {
  static async online() {
    return axios.get(url).then(resp => {
      return Promise.resolve(true)
    }).catch(() => {
      BusService.$emit('notification', { msg: 'Le catalogue est actuellement hors ligne !', type: 'danger' })
      return Promise.resolve(false)
    })
  }

  static async get() {
    return axios.get(url).then(resp => {
      cache = resp.data
      localStorage.setItem('store', JSON.stringify(cache))
      return Promise.resolve(cache)
    }).catch(() => {
      BusService.$emit('notification', { msg: 'Le catalogue est actuellement hors ligne, fonctionnement avec données sauvegardées', type: 'danger' })
      return Promise.resolve(JSON.parse(localStorage.getItem('store')))
    })
  }

  static async getStore() {
    if (cache === null) {
      return StoreService.get()
    }
    return Promise.resolve(cache)
  }

  static async getById(id) {
    const products = await StoreService.getStore()
    return products.find(item => item.id === id)
  }

  static async getByType(type) {
    const products = await StoreService.getStore()
    return products.filter(item => item.type === type)
  }

  static async getWafers() {
    return StoreService.getByType('galette')
  }

  static async getAcc() {
    return StoreService.getByType('accompagnement')
  }

  static async getDrinks() {
    return StoreService.getByType('boisson')
  }

  static async getDessert() {
    return StoreService.getByType('dessert')
  }
}

export default StoreService
