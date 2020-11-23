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
    name: '',

    components: {
      FeedCard: () => import('@/components/FeedCard'),
    },

    data: () => ({
      layout: [2, 2, 1, 2, 2, 3, 3, 3, 3, 3, 3],
      articles: [
        {
          title: '메인 페이지',
          hi:'hih',
          path: 'moviecommunity/main.png',
        },
        {
          title: 'Swedish Fishing',
          path: 'moviecommunity/signup.png'
        },
        {
          title: 'The Adventure Begins',
          hero: 'articles/snowcup.jpg',
          prominent: true,
        },
        {
          title: 'Paris in Spring',
          path: 'moviecommunity/login.png'
        },
        {
          title: 'Youthful Independence',
          path: 'moviecommunity/chooselikemovie.png'
        },
        {
          title: 'Trial By Fire',
          path: 'moviecommunity/main2.png'
        },
        {
          title: 'Water Ventures',
          path: 'moviecommunity/articlelist.png'
        },
        {
          title: 'Amazing Ireland',
          path: 'moviecommunity/newarticle.png'
        },
        {
          title: 'Mt. Zekial',
          path: 'moviecommunity/article.png'
        },
        {
          title: 'Cozumel Caves',
          path: 'moviecommunity/comment.png'
        },
        {
          title: 'Cabin Fever',
          author: 'Rachel L',
          category: 'Travel',
          hero: 'articles/snowcabin.jpg',
        },
      ],
    }),

    computed: {},
  }
</script>
