<template>
  <div>
    <div class="flex">
      <div class="square" :class="product.type">{{ product.type }}</div>
      <div class="auto">
        <h1>{{ product.name }}</h1>
        <h1>{{ product.price }} €</h1>
      </div>
    </div>
    <br/>
    <p v-html="product.description"></p>
    <router-link :to="{name: 'store'}" class="button right">Retour au catalogue</router-link>
  </div>
</template>

<script>
import StoreService from '@/services/store.service'
export default {
  name: 'bzh-detail',
  async created() {
    this.product = await StoreService.getById(parseInt(this.$route.params.id))
  },
  data() {
    return {
      product: {
        name: '',
        type: ''
      }
    }
  }
}
</script>

<style scoped>
.right {
  float: right;
}

.square {
  width: 160px;
  height: 64px;
  border-radius: 3px;
  text-align: center;
  margin-right: 2em;
  padding-top: 1em;
}
</style>
