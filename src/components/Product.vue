<template>
  <div class="flex">
    <router-link :to="{name: 'detail', params: {id:product.id}}" class="flex  auto">
      <div class="square" :class="product.type"></div>
      <div class="main auto pad">
        {{ name }}
      </div>
      <span class="pad">{{ price }}</span>
    </router-link>
    <button class="button is-primary" title="Ajouter au panier"
      @click.stop="addToCart">
      <font-awesome-icon :icon="getIcon('addToCart')"/>
    </button>
  </div>
</template>

<script>
import FontAwesomeMixin from '@/mixins/FontAwesomeMixin'
import CartService from '@/services/cart.service'

export default {
  name: 'bzh-product',
  mixins: [FontAwesomeMixin],
  props: {
    product: Object
  },
  computed: {
    name() {
      switch (this.product.type) {
        case 'galette':
          return `Galette ${this.product.name}`
        case 'boisson':
          return `${this.product.name} (Bouteille)`
        case 'accompagnement':
        case 'dessert':
          return `${this.product.name}`
      }
    },
    price() {
      return `${this.product.price} €`
    }
  },
  methods: {
    addToCart() {
      CartService.addItem(this.product)
    }
  }
}
</script>

<style scoped>
.pad {
  padding:0 1em;
}

.square {
  width: 64px;
  height: 64px;
  border-radius: 3px;
}
</style>
