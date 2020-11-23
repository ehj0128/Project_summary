<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <slot />
      </v-col>

      <feed-card-white
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
    name: 'Stewfeed',

    components: {
      FeedCardWhite: () => import('@/components/FeedCardWhite'),
    },

    data: () => ({
      layout: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      articles: [
        {
          title: '',
          path: 'STEW/main.jpg',
        },
        {
          title: '',
          path: 'STEW/guide.jpg',
        },
        {
          title: '',
          path: 'STEW/signin.jpg',
        },
        {
          title: '',
          path: 'STEW/sociallogin.jpg',
        },
        {
          title: '',
          path: 'STEW/login.jpg',
        },
        {
          title: '',
          path: 'STEW/grouplist.jpg',
        },
        {
          title: '',
          path: 'STEW/groupsearch.jpg',
        },
        {
          title: '',
          path: 'STEW/joingroup.jpg',
        },
        {
          title: '',
          path: 'STEW/notice.jpg',
        },
        {
          title: '',
          path: 'STEW/creategroup.jpg',
        },
        {
          title: '',
          path: 'STEW/groupdetail.jpg',
        },
        {
          title: '',
          path: 'STEW/groupdetail2.jpg',
        },
        {
          title: '',
          path: 'STEW/readycamara.jpg',
        },
        {
          title: '',
          path: 'STEW/camstudy.jpg',
        },
        {
          title: '',
          path: 'STEW/calendar.jpg',
        },
        {
          title: '',
          path: 'STEW/userinfo.jpg',
        },
        {
          title: '',
          path: 'STEW/userstudytime.jpg',
        },
      ],
    }),

    computed: {},
  }
</script>
