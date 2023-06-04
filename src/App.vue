
<template>
  <!-- <dash-board /> -->
  <admin-login />
</template>
<script >
// import DashBoard from './components/DashBoard.vue'
import AdminLogin from './components/login/AdminLogin.vue'



export default {
  components: { AdminLogin },
}
</script>

<style>
.blue {
  color: var(--blue);
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
</style>
