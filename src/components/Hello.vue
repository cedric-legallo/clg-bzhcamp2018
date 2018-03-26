<template>
  <div @click="subscribe">
    <h1>Bienvenue dans votre magasin de Galettes/Saucisses ! </h1>
    <router-link :to="{name: 'store'}" class="button is-primary">Entrer</router-link>
  </div>
</template>

<script>
import SubscriptionSercice from '@/services/subscription.service'
export default {
  name: 'bzh-hello',
  methods: {
    subscribe() {
      SubscriptionSercice.getInstance().subscribeUser()
    }
  }
}
</script>

<style scoped>
div {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
