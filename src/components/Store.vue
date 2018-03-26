<template>
  <div class="main flexCol">
    <label class="control has-icons-left" title="Rechercher dans le catalogue">
      <span class="icon is-left">
      <font-awesome-icon :icon="getIcon('search')"/>
      </span>
      <input class="input" placeholder="Rechercher..." type="search" @keyup="filter" v-model="filterString"/>
    </label>
    <div class="scroll auto">
      <div v-for="item of filteredProducts" :key="item.id">
        <bzh-product :product="item" class="box"></bzh-product>
      </div>
    </div>
  </div>
</template>

<script>
import FontAwesomeMixin from '@/mixins/FontAwesomeMixin'
import StoreService from '@/services/store.service'
import BzhProduct from '@/components/Product'
export default {
  name: 'bzh-store',
  mixins: [FontAwesomeMixin],
  components: {
    BzhProduct
  },
  data() {
    return {
      products: [],
      filteredProducts: [],
      filterString: ''
    }
  },
  async created() {
    this.products = await StoreService.getStore()
    this.filteredProducts = this.products
  },
  methods: {
    filter() {
      this.filteredProducts = this.products.filter(item => item.name.toLowerCase().indexOf(this.filterString.toLowerCase()) !== -1)
    }
  }
}
</script>

<style scoped>
.main {
  padding-top: 2em;
  height: calc(100% - 64px);
}
</style>
