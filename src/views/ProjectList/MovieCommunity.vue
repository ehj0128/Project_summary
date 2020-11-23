<template>
  <v-main>
    <section
      class="grey lighten-3"
    >
      <div class="py-12" />
      <v-container class="text-center">
        <h2 class="display-2 font-weight-bold mb-3 main-title-font">
          영화 추천 커뮤니티
        </h2>
        <v-responsive
          class="mx-auto mb-12"
          width="56"
        />
        <v-row>
          <v-col
            v-for="({ title, text }, i) in information1"
            :key="i"
            cols="12"
            md="4"
          >
            <v-card
              class="py-12 px-4"
              color="grey lighten-5"
              flat
            >
              <v-card-title
                class="justify-center font-weight-black text-uppercase detail-title-font"
                v-text="title"
              />
              <v-card-text
                class="subtitle-1 text-type detail-content-font"
                v-html="text"
              />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section
      class="grey lighten-3"
    >
      <v-container>
        <v-responsive
          class="mx-auto"
          width="56"
        />
        <v-row>
          <v-col
            v-for="({ title, text }, i) in information2"
            :key="i"
            cols="12"
            md="4"
          >
            <v-card
              class="py-12 px-4"
              color="grey lighten-5"
              flat
            >
              <v-card-title
                class="justify-center font-weight-black text-uppercase detail-title-font"
                v-text="title"
              />
              <v-card-text
                class="subtitle-1 text-type detail-content-font"
                v-html="text"
              />
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <div class="py-12" />
    </section>
    <section>
      <movie-community-site />
    </section>
  </v-main>
</template>

<script>
  import MovieCommunitySite from '../../components/siteview/MovieCommunitySite.vue'
  export default {
    name: 'MovieCommunity',
    components: { MovieCommunitySite },
    data: () => ({
      information1: [
        {
          title: '목표',
          text: '<ol><li>영화 데이터베이스를 구축하고 영화리뷰 커뮤니티 제작</li><li>좋아하는 영화를 선택하면 관련 영화를 추천해 주는 페이지 제작</li></ol>',
        },
        {
          title: '기간 및 팀 규모',
          text: '<ul><li>2020/06/11 - 2020/06/17</li><li>2인(Full-stack 1인, 추천알고리즘 1인)</li></ul>',
        },
        {
          title: '사용 언어 및 기술',
          text: '<ul><li>Python, Django</li><li>Javascript, Vue.js</li></ul>',
        },
      ],
      information2: [
        {
          title: '주요 구현 내용 Best 5',
          text: '<ol><li>TMDB의 영화 open API를 이용해 최초 DB구성</li><li>회원가입/로그인/로그아웃</li><li>게시판에 리뷰 작성 / 댓글 작성</li><li>관리자 계정인 경우 TMDB의 API를 이용해 영화DB 추가 가능</li><li>자신이 좋아하는 영화와 DB에 있는 영화의 줄거리를 명사화 후 코사인유사도를 계산하여 이를 기반으로 8개의 영화 추천</li></ol>',
        },
        {
          title: '담당 역할 Best 3 - Fullstack',
          text: '<ol><li>Django를 이용한 Back-end구축</li><li>Vue를 이용한 Front-end 구축</li><li>알고리즘을 Views.py에 적용</li></ol>',
        },
        {
          title: '관련 주소',
          text: '<ul><li>Github : <a href="https://github.com/ehj0128/Movie-Community">https://github.com/ehj0128/Movie-Community</a></li><li>Homepage : <a href="https://gifted-murdock-8a50bc.netlify.app/">https://gifted-murdock-8a50bc.netlify.app/</a></li></ul>',
        },
      ],
    }),
    mounted () {
      this.$vuetify.goTo(0, {
        duration: 100,
        offset: 0,
      })
    },
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poor+Story&display=swap');

.text-type {
  font-family: 'Jua', sans-serif !important;
  text-align: left;
}
.main-title-font {
  font-family: 'Poor Story', cursive !important;
}
</style>
