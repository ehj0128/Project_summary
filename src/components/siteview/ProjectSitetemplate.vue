<template>
  <section>
    <moviefeed>
      <slot />
    </moviefeed>
  </section>
</template>

<script>
  export default {
    name: 'MovieCommunitySite',

    components: {
      moviefeed: () => import('@/components/feed/moviefeed'),
    },
  }
</script>