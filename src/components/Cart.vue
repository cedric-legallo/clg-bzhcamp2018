<template>
  <div class="cart">
    <table class="table">
      <thead></thead>
      <tbody>
        <tr v-for="item of items" :key="item.id">
          <td>{{item.name}}</td>
          <td><input type="text" :value="item.quantity"/></td>
          <td>{{item.price}} €</td>
          <td>
            <span>{{item.quantity * item.price}} €</span>
            <button class="button" @click="removeItem(item)"><font-awesome-icon :icon="getIcon('delete')"/></button>
          </td>
        </tr>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th>{{ total }} €</th>
        </tr>
      </tbody>
    </table>
    <div class="flex right">
      <router-link :to="{name: 'store'}" class="button">Poursuivre mes achats</router-link>
      <div class="button" @click="confirm = true">Payer</div>
    </div>
    <div class="modal" :class="{'is-active': confirm}">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Confirmation</p>
            <button class="delete" aria-label="close" @click="confirm = false"></button>
          </header>
          <section class="modal-card-body">
            Vous vous appretez à payer {{ total }} €, Confirmer ?
          </section>
          <footer class="modal-card-foot">
            <button class="button is-success" @click="confirmPay">Oui</button>
            <button class="button" @click="confirm = false">Non</button>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FontAwesomeMixin from '@/mixins/FontAwesomeMixin'
import CartService from '@/services/cart.service'
export default {
  name: 'bzh-cart',
  mixins: [FontAwesomeMixin],
  components: {
    BzhQuantity
  },
  computed: {
    total() {
      return this.items.reduce((acc, it) => {
        acc += it.quantity * it.price
        return acc
      }, 0)
    }
  },
  async created() {
    this.items = await CartService.get()
  },
  methods: {
    removeItem(item) {
      CartService.removeItem(item)
    },
    updateItemQuantity(item, value) {
      CartService.updateItemQuantity(item, parseInt(value))
    },
    confirmPay() {
      this.confirm = false
      if (CartService.pay(this.total)) {
        this.$router.push({ name: 'store' })
      }
    }
  },
  data() {
    return {
      items: [],
      confirm: false
    }
  }
}
</script>

<style scoped>
table {
  width: 100%;
}

td {
  vertical-align: middle;
  width: 10%;
}

td:nth-child(2) {
  width: 20%;
}

td:first-child {
  width: auto;
}

td:last-child, th:last-child {
  text-align: right;
}
th:last-child {
  padding-right: 3.5em;
}
.right {
  justify-content: flex-end;
}
.right > * {
  margin-left: 2em;
}
</style>
