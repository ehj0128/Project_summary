<template>
  <section>
    <!-- <moviefeed>
      <slot />
    </moviefeed> -->
  </section>
</template>

<script>
  export default {
    name: '',

    components: {
      moviefeed: () => import('@/components/feed/moviefeed'),
    },
  }
</script>