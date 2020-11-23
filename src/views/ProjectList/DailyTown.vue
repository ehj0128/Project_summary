<template>
  <v-main>
    <section
      class="grey lighten-3"
    >
      <div class="py-12" />
      <v-container class="text-center">
        <h2 class="display-2 font-weight-bold mb-3 main-title-font">
          데일리 타운
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
  </v-main>
</template>

<script>
  export default {
    name: 'DailyTown',
    data: () => ({
      information1: [
        {
          title: '목표',
          text: '<ul><li>Gamification을 적용하여 삶에 활력을 주는 어플리케이션 제작 </li></ul>',
        },
        {
          title: '기간 및 팀 규모',
          text: '<ul><li>2020/10/12 - 2020/11/27</li><li>6인(Back-end 2인, Front-end 4인)</li></ul>',
        },
        {
          title: '사용 언어 및 기술',
          text: '<ul><li>Javascript, React.js</li><li>React-native, expo</li></ul>',
        },
      ],
      information2: [
        {
          title: '주요 구현 내용 Best 5',
          text: '<ol><li>구글 소셜로그인</li><li>일일미션(사진을 이용한 미션)을 수행하면 이미지 캡셔닝을 통해 미션의 성공여부 확인</li><li>창고에서 받은 아이템 확인 및 마을에 배치 구현</li><li>아이템을 팔아 골드를 획득하고 이를 이용해 상점에서 새로운 아이템 구매 가능</li><li>마을을 자유롭게 터치를 이용하여 커스터마이징 가능</li></ol>',
        },
        {
          title: '담당 역할 Best 3 - Frontend',
          text: '<ol><li>쿼터뷰로 이루어진 마을(6*6)을 구현</li><li>사용자의 아이템을 마을에 적용하고 터치를 이용해 다른 위치로 이동하거나 자신의 창고로 이동 구현</li><li>상점에서 아이템을 구매하는 기능 구현</li></ol>',
        },
        {
          title: '관련 주소',
          text: '<ul><li>Github : <a href=""></a></li><li>Google Play Store : <a href="https://play.google.com/store/apps/details?id=com.bexpert.dailytown">데일리타운 다운로드</a></li></ul>',
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
