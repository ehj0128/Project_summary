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
      layout: [1, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2],
      articles: [
        {
          title: '메인 페이지',
          path: 'moviecommunity/main.png',
        },
        {
          title: '회원가입',
          path: 'moviecommunity/signup.png',
        },
        {
          title: '로그인',
          path: 'moviecommunity/login.png',
        },
        {
          title: '로그인 하면 좋아하는 영화를 <br/> 선택 할 수 있습니다.',
          path: 'moviecommunity/chooselikemovie.png',
        },
        {
          title: '좋아하는 영화를 선택하면<br/>추천 영화들로 <br/>메인페이지가 변경됩니다.',
          path: 'moviecommunity/main2.png',
        },
        {
          title: '게시판',
          path: 'moviecommunity/articlelist.png',
        },
        {
          title: '새로운 리뷰 작성',
          path: 'moviecommunity/newarticle.png',
        },
        {
          title: '리뷰 보기',
          path: 'moviecommunity/article.png',
        },
        {
          title: '댓글',
          path: 'moviecommunity/comment.png',
        },
      ],
    }),

    computed: {},
  }
</script>
