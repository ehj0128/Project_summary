<template>
  <div>
    <welcome />
    <projectlist />
  </div>
</template>

<script>
  export default {
    name: 'CoreView',

    components: {
      Welcome: () => import('@/components/Welcome'),
      projectlist: () => import('@/components/ProjectList'),
    },
  }
</script>
