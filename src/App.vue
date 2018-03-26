<template>
  <div id='app' class="flexCol">
    <bzh-navbar></bzh-navbar>
    <bzh-notification></bzh-notification>
    <router-view class="auto container"></router-view>
  </div>
</template>

<script>
import BzhNavbar from '@/components/Navbar'
import BzhNotification from '@/components/Notification'
export default {
  name: 'app',
  components: {
    BzhNavbar,
    BzhNotification
  }
}
</script>

<style scoped>
#app {
  font-family: 'BTTF', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
}
</style>
