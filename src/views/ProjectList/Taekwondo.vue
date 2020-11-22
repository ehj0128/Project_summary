<template>
  <v-main>
    <section
      class="grey lighten-3"
    >
      <div class="py-12" />
      <v-container class="text-center">
        <h2 class="display-2 font-weight-bold mb-3">
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
    name: 'Taekwondo',
    data: () => ({
      information1: [
        {
          title: '목표',
          text: '<ul><li></li></ul>',
        },
        {
          title: '기간 및 팀 규모',
          text: '<ul><li>2020/07/13 - 2020/08/21</li><li>5인(Front-end 3인, Back-end 2인)</li></ul>',
        },
        {
          title: '사용 언어 및 기술',
          text: '<ul><li>Javascript, Vue.js</li></ul>',
        },
      ],
      information2: [
        {
          title: '주요 구현 내용 Best 5',
          text: '<ol><li></li></ol>',
        },
        {
          title: '담당 역할 Best 3 - Frontend',
          text: '<ol><li></li></ol>',
        },
        {
          title: '관련 주소',
          text: '<ul><li>Github : <a href=""></a></li></ul>',
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
