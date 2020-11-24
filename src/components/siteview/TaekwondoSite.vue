<template>
  <section>
    <taekwondofeed>
      <slot />
    </taekwondofeed>
  </section>
</template>

<script>
  export default {
    name: 'TaekwondoSite',

    components: {
      taekwondofeed: () => import('@/components/feed/Taekwondofeed'),
    },
  }
</script>
