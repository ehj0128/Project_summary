<template>
  <v-main>
    <section
      class="grey lighten-3"
    >
      <div class="py-12" />
      <v-container class="text-center">
        <h2 class="display-2 font-weight-bold mb-3">
          rlottie 커스터마이징 프리뷰
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
                class="justify-center font-weight-black text-uppercase"
                v-text="title"
              />
              <v-card-text
                class="subtitle-1 text-type"
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
      <v-container class="text-left">
        <v-responsive
          class="mx-auto mb-12"
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
                class="font-weight-black"
                v-text="title"
              />
              <v-card-text
                class="subtitle-1 text-type"
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
    name: 'Rlottie',
    data: () => ({
      information1: [
        {
          title: '목표',
          text: '<ol><li>디자이너가 제작한 Lottie 애니메이션 파일이 rlottie 엔진에서 정상 호환되는지 미리 확인해 볼 수 있는 기능을 제공</li><li>커스터마이징 옵션을 rlottie 프리뷰에 추가하고 디자이너와 앱 개발자가 웹페이지 상에서 Lottie 애니매이션을 미리 확인해볼 수 있도록 합니다.</li></ol><br/><a href="https://opensource.samsung.com/community/mine/mineArticle/8?lang=KR">Samsung Open Source 홈페이지에 게시된 프로젝트 과제</a>',
        },
        {
          title: '기간 및 팀 규모',
          text: '<ul><li>2020/09/09 - 2020/10/21</li><li>5인(Back-end 3인, Front-end 2인)</li></ul>',
        },
        {
          title: '사용 언어 및 기술',
          text: '<ul><li>Javascript, Vue.js</li></ul>',
        },
      ],
      information2: [
        {
          title: '주요 구현 내용 Best 5',
          text: '<ol><li>Lottie파일을 업로드 하면 관련 keypath 확인 가능</li><li>애니메이션의 부분의 색깔 및 각도 등 수정가능</li><li>애니메이션의 재생속도 조절, 역재생 기능</li><li>애니메이션을 Drag and Drop으로 이동과 크기조절 가능</li><li>애니메이션의 배경 색깔 변경 혹은 배경이미지 변경 가능</li></ol>',
        },
        {
          title: '담당 역할 Best 3 - Frontend',
          text: '<ol><li>Github 페이지에 Vue를 적용하고 각 기능별로 컴포넌트화</li><li>애니메이션의 배경 부분의 색깔 변경 혹은 이미지 변경 기능 구현</li><li>애니메이션의 크기 조절관련 기능 구현</li></ol>',
        },
        {
          title: '관련 주소',
          text: '<ul><li>Github : <a href="https://github.com/msnodeve/rlottie.github.io">https://github.com/msnodeve/rlottie.github.io</a></li><li>Homepage : <a href="https://msnodeve.github.io/rlottie.github.io/">https://msnodeve.github.io/rlottie.github.io/</a></li></ul>',
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
.text-type {
  text-align: left;
}
</style>
