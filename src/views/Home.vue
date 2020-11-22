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
  }
</script>
