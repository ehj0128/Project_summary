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
    name: 'TaekwondoFeed',

    components: {
      FeedCard: () => import('@/components/FeedCard'),
    },

    data: () => ({
      layout: [2, 2, 2, 2],
      articles: [
        {
          title: '메인 페이지',
          path: 'taekwondo/main.png',
        },
        {
          title: '태권도 정보',
          path: 'taekwondo/info.png',
        },
        {
          title: '<br/>품새 비디오 시청',
          path: 'taekwondo/video.png',
        },
        {
          title: '<br/><br/><br/><br/><br/><br/>오른쪽의 영상을 보고<br/>따라할 수 있습니다.',
          path: 'taekwondo/training.png',
        },
      ],
    }),
  }
</script>
