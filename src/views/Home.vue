<template>
  <div>
    <core-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {
      CoreView: () => import('@/components/core/View'),
    },
    mounted () {
      this.$vuetify.goTo(0, {
        duration: 100,
        offset: 0,
      })
    },
  }
</script>
