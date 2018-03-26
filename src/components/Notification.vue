<template>
  <div>
    <div class="notification" :class="'is-' + item.type" v-for="(item, index) of notifications" :key="index">
      <button class="delete" @click="close"></button>
      {{ item.msg }}
    </div>
  </div>
</template>

<script>
import BusService from '@/services/bus.service'
export default {
  name: 'bzh-notification',
  created() {
    BusService.$on('notification', ({msg, type}) => {
      this.notifications.push({msg, type: type || 'success'})
      setTimeout(this.close.bind(this), 3000)
    })
  },
  methods: {
    close(item) {
      this.notifications.pop()
    }
  },
  data() {
    return {
      notifications: []
    }
  }
}
</script>

<style scoped>
.notification {
  text-align: center;
}
</style>
