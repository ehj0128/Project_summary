<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <slot />
      </v-col>

      <feed-card
        v-for="(article, i) in articles"
        :key="article.title"
        :size="layout[i]"
        :value="article"
      />
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Moviefeed',

    components: {
      FeedCard: () => import('@/components/FeedCard'),
    },

    data: () => ({
      layout: [2, 2, 1, 2, 2, 3, 3, 3, 3, 3, 3],
      articles: [
        {
          title: 'Moroccan Days',
          author: 'John L',
          category: 'Travel',
          hero: 'moroccandays.jpg',
        },
        {
          title: 'Swedish Fishing',
          author: 'Rachel L',
          category: 'Leisure',
          hero: 'autumnclouds.jpg',
        },
        {
          title: 'The Adventure Begins',
          hero: 'snowcup.jpg',
          prominent: true,
        },
        {
          title: 'Paris in Spring',
          author: 'John L',
          category: 'Travel',
          hero: 'christmas.jpg',
        },
        {
          title: 'Youthful Independence',
          author: 'Rachel L',
          category: 'Political',
          hero: 'july4.jpg',
        },
        {
          title: 'Trial By Fire',
          author: 'Anthony R',
          category: 'Cooking',
          hero: 'firepots.jpg',
        },
        {
          title: 'Water Ventures',
          author: 'Rachel L',
          category: 'Leisure',
          hero: 'jellyfish.jpg',
        },
        {
          title: 'Mt. Zekial',
          author: 'Rachel L',
          category: 'Travel',
          hero: 'mountaincabin.jpg',
        },
        {
          title: 'Cozumel Caves',
          author: 'Rachel L',
          category: 'Travel',
          hero: 'lightcave.jpg',
        },
        {
          title: 'Amazing Ireland',
          author: 'Rachel L',
          category: 'Travel',
          hero: 'greengrass.jpg',
        },
        {
          title: 'Cabin Fever',
          author: 'Rachel L',
          category: 'Travel',
          hero: 'snowcabin.jpg',
        },
      ],
    }),

    computed: {},
  }
</script>
