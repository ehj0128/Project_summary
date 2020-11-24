<template>
  <v-main>
    <section
      class="grey lighten-3"
    >
      <div class="py-12" />
      <v-container class="text-center">
        <h2 class="display-2 font-weight-bold mb-3 main-title-font">
          태권도 자세교정
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
    name: 'Taekwondo',
    data: () => ({
      information1: [
        {
          title: '목표',
          text: '<ul><li>코로나로 인해 온라인 체육 수업이 증가함에 따라 스스로 태권도 품새를 익힐 수 있는 웹페이지를 제작</li></ul>',
        },
        {
          title: '기간 및 팀 규모',
          text: '<ul><li>2020/08/31 - 2020/10/08</li><li>6인(Back-end 2인, Front-end 2인, AI 2인)</li></ul>',
        },
        {
          title: '사용 언어 및 기술',
          text: '<ul><li>Javascript, Vue.js</li></ul>',
        },
      ],
      information2: [
        {
          title: '주요 구현 내용 Best 5',
          text: '<ol><li>태권도와 관련된 간단한 이론 학습 가능</li><li>태권도 품새별 Youtube영상 시청 가능</li><li>카메라를 통해 사용자의 움직임을 입력받고 Posenet을 이용해 좌표값으로 변환</li><li>사용자의 움직임과 저장되어 있는 영상의 움직임을 비교</li><li>품새 실습 가능</li></ol>',
        },
        {
          title: '담당 역할 Best 3 - Frontend',
          text: '<ol><li>기본 페이지 구성</li><li>Posenet과 관련된 Library사용</li><li>Netlify 사용한 Deploy</li></ol>',
        },
        {
          title: '관련 주소',
          text: '<ul><li>Github : <a href="https://github.com/ehj0128/taekwondo">https://github.com/ehj0128/taekwondo</a></li><li>홈페이지 : <a href="youthful-ramanujan-4bb822.netlify.app">youthful-ramanujan-4bb822.netlify.app</a></li></ul>',
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
