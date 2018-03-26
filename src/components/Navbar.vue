<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <span class="navbar-item">Vue.js PWA</span>
      <router-link :to="{name: 'states'}" class="navbar-item" title="Enoncé" :class="{'is-active': $route.name === 'states'}">
        <font-awesome-icon :icon="getIcon('states')"/>
      </router-link>
      <div class="navbar-burger" @click="toggleMenu" :class="{'is-active': isMenuActive}" v-if="$route.name !== 'home'">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="navbar-menu" :class="{'is-active': isMenuActive, 'navbar-brand': !isMenuActive}" @click="hideMenu" v-if="$route.name !== 'home'">
      <router-link class="navbar-item navbar-end" title="Catalogue" :class="{'is-active': $route.name === 'store'}">
        <font-awesome-icon :icon="getIcon('store')"/>
      </router-link>
      <div class="navbar-item hass-dropdown is-hoverable">
        <router-link  class="navbar-link" title="Panier"  :class="{'is-active': $route.name === 'cart'}">
          <font-awesome-icon :icon="getIcon('shopping')"/>
          <div class="navbar-dropdown">
            <router-link class="navbar-item" v-for="item of cart" :key="item.id" :title="'Détail du produit ' + item.name">
              {{ cartItem(item)}}
            </router-link>
            <hr class="navbar-divider">
            <router-link class="navbar-item">
              Checkout
            </router-link>
          </div>
        </router-link>
      </div>
    </router-link>
    <router-link :to="{name: 'help'}" class="navbar-item" title="Aide"  :class="{'is-active': $route.name === 'help'}">
      <font-awesome-icon :icon="getIcon('help')"/>
    </router-link>
    <router-link :to="{name: 'home'}" class="navbar-item" title="Déconnexion">
      <font-awesome-icon :icon="getIcon('logout')"/>
    </router-link>
  </div>
</div>
</nav>
</template>

<script>
import FontAwesomeMixin from '@/mixins/FontAwesomeMixin'
import CartService from '@/services/cart.service'
export default {
  name: 'bzh-navbar',
  mixins: [FontAwesomeMixin],
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive
    },
    hideMenu() {
      this.isMenuActive = false
    },
    cartItem(item) {
      return `${item.quantity} x ${item.name}`
    }
  },
  data() {
    return {
      cart: CartService.get(),
      isMenuActive: false
    }
  }
}
</script>
