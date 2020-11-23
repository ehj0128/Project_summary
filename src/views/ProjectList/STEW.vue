<template>
  <v-main>
    <section
      class="grey lighten-3"
    >
      <div class="py-12" />
      <v-container class="text-center">
        <h2 class="display-2 font-weight-bold mb-3 main-title-font">
          화상 스터디 - STEW
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
      <stew-site />
      <div class="py-12" />
    </section>
  </v-main>
</template>

<script>
  import StewSite from '../../components/siteview/StewSite.vue'
  export default {
    components: { StewSite },
    data: () => ({
      information1: [
        {
          title: '목표',
          text: '<ul><li>언택트 시대를 맞은 학습의 변화 가운데 "언제 어디서나 함께 공부할 수 있게 하자(STudy EveryWhere)" 라는 목표를 가지고 온라인 캠 스터디 플랫폼인 STEW 제작</li></ul>',
        },
        {
          title: '기간 및 팀 규모',
          text: '<ul><li>2020/07/13 - 2020/08/21</li><li>5인(Front-end 3인, Back-end 2인)</li></ul>',
        },
        {
          title: '사용 언어 및 기술',
          text: '<ul><li>Javascript, Vue.js</li><li>webRTC, RTCmulticonnection</li></ul>',
        },
      ],
      information2: [
        {
          title: '주요 구현 내용 Best 5',
          text: '<ol><li>webRTC를 이용한 화상 스터디 & 화상스터디 중 채팅기능</li><li>스터디 그룹을 생성하거나 기존에 있는 그룹에 가입가능</li><li>그룹 일정관리 및 개인 일정관리를 할 수 있는 달력 제공(일정 등록 및 수정가능)</li><li>개인의 공부시간을 스톱워치로 측정하며 각 그룹의 총 공부시간에 따른 랭크 산정</li><li>회원가입/로그인/소셜로그인(카카오, 구글)/회원정보수정/로그아웃</li></ol>',
        },
        {
          title: '담당 역할 Best 3 - Frontend',
          text: '<ol><li>webRTC와 관련된 오픈소스인 RTCmulticonnection을 Vue에 적용시키고 화상연결을 구현</li><li>일정 관리를 할 수 있는 달력 페이지 구현 및 공부 시간을 위한 타이머 구현</li><li>모바일 혹은 태블릿 사용자를 고려하여 Vuetify Grid System을 이용하여 모든 페이지에 대한 반응형 웹페이지 구현</li></ol>',
        },
        {
          title: '관련 주소',
          text: '<ul><li>Github : <a href="https://github.com/ehj0128/stew">https://github.com/ehj0128/stew</a></li></ul>',
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
