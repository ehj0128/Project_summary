<template>
  <v-col
    cols="12"
    :md="size === 2 ? 6 : size === 3 ? 4 : undefined"
  >
    <basecard
      :height="value.prominent ? 450 : 350"
      color="grey lighten-1"
      dark
    >
      <v-img
        :src="require(`@/assets/articles/${value.hero}`)"
        height="100%"
        gradient="rgba(0, 0, 0, .42), rgba(0, 0, 0, .42)"
      >
        <v-row
          v-if="!value.prominent"
          class="fill-height text-right ma-0"
        >
          <v-col cols="12">
            <h3 class="title font-weight-bold mb-2">
              {{ value.title }}
            </h3>
          </v-col>
        </v-row>
      </v-img>
    </basecard>
  </v-col>
</template>

<script>
  export default {
    name: 'FeedCard',
    components: {
      basecard: () => import('@/components/base/Card'),
    },

    props: {
      size: {
        type: Number,
        required: true,
      },
      value: {
        type: Object,
        default: () => ({}),
      },
    },
  }
</script>

<style>
.v-image__image {
  transition: .3s linear;
}
</style>
