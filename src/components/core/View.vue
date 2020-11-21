<template>
  <div>
    <welcome />
    <services />
  </div>
</template>

<script>
  export default {
    name: 'CoreView',

    components: {
      Welcome: () => import('@/components/Welcome'),
      Services: () => import('@/components/Services'),

    },
  }
</script>
