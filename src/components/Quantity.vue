<template>
  <div class="flex">
    <label class="control auto" :title="'quantité pour '+ name">
      <input class="input" type="text" v-model="qty" @keyup="updateQty">
    </label>
    <div class="flexCol">
      <button class="button" @click="increaseQuantity"><font-awesome-icon :icon="getIcon('plus')"/></button>
      <button class="button" @click="decreaseQuantity"><font-awesome-icon :icon="getIcon('minus')"/></button>
    </div>
  </div>
</template>

<script>
import FontAwesomeMixin from '@/mixins/FontAwesomeMixin'
export default {
  name: 'bzh-quantity',
  mixins: [FontAwesomeMixin],
  props: {
    quantity: Number,
    name: String
  },
  methods: {
    increaseQuantity() {
      this.qty += 1
      this.updateQty()
    },
    decreaseQuantity() {
      this.qty -= 1
      this.updateQty()
    },
    updateQty() {
      this.$emit('qty-updated', this.qty)
    }
  },
  data() {
    return {
      qty: this.quantity
    }
  }
}
</script>

<style scoped>
label {
  margin-right: 1em;
}
</style>
