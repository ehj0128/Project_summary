<template>
  <section>
    <stewfeed>
      <slot />
    </stewfeed>
  </section>
</template>

<script>
  export default {
    name: 'StewSite',

    components: {
      stewfeed: () => import('@/components/feed/Stewfeed'),
    },
  }
</script>
