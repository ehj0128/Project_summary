<template>
  <v-app>
    <navbar />
    <router-view />
  </v-app>
</template>
<script>
  export default {
    components: {
      navbar: () => import('@/components/core/AppBar'),
    },
  }
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Gothic+A1&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.detail-title-font {
  font-family: 'Gothic A1', sans-serif !important;
}
</style>
