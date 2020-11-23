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
          title: '1',
          path: 'STEW/main.jpg',
        },
        {
          title: '2',
          path: 'STEW/guide.jpg',
        },
        {
          title: '3',
          path: 'STEW/signin.jpg',
        },
        {
          title: '4',
          path: 'STEW/sociallogin.jpg',
        },
        {
          title: '5',
          path: 'STEW/login.jpg',
        },
        {
          title: '6',
          path: 'STEW/grouplist.jpg',
        },
        {
          title: '7',
          path: 'STEW/groupsearch.jpg',
        },
        {
          title: '8',
          path: 'STEW/joingroup.jpg',
        },
        {
          title: '9',
          path: 'STEW/notice.jpg',
        },
        {
          title: '10',
          path: 'STEW/creategroup.jpg',
        },
        {
          title: '11',
          path: 'STEW/groupdetail.jpg',
        },
        {
          title: '12',
          path: 'STEW/groupdetail2.jpg',
        },
        {
          title: '13',
          path: 'STEW/readycamara.jpg',
        },
        {
          title: '14',
          path: 'STEW/camstudy.jpg',
        },
        {
          title: '15',
          path: 'STEW/calendar.jpg',
        },
        {
          title: '16',
          path: 'STEW/userinfo.jpg',
        },
        {
          title: '17',
          path: 'STEW/userstudytime.jpg',
        },
      ],
    }),

    computed: {},
  }
</script>
