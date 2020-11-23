<template>
  <section
    id="recent-projects"
    class="overflow-hidden"
  >
    <v-row no-gutters>
      <v-col
        class="primary text-center pa-5 white--text"
        cols="12"
        md="6"
      >
        <base-bubble-1
          style="transform: rotate(180deg) translateX(25%)"
        />

        <base-heading class="rlottie-main-font">
          메인화면과 발표영상
        </base-heading>

        <base-text class="mb-5 rlottie-content-font">
          rlottie 프리뷰를 사용하는 화면입니다.<br>
          저희 팀의 발표영상입니다.<br>
          8분 9초부터 15분 55초까지 입니다.
        </base-text>

        <v-card color="secondary">
          <v-container class="pa-2">
            <v-row>
              <v-col
                v-for="data in mains"
                :key="data"
                cols="12"
                md="6"
              >
                <v-img
                  :src="require(`@/assets/rlottie/${data}.png`)"
                  max-height="500"
                  width="100%"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>

      <v-col
        class="d-flex align-center justify-center"
        md="6"
      >
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/0ZaU7dvhxdE?start=489"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </v-col>
    </v-row>
  </section>
</template>

<script>
  export default {
    name: 'RecentProjects',

    data: () => ({
      mains: [
        'main',
        'main1',
        'main2',
        'main3',
      ],
    }),
  }
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poor+Story&display=swap');

.rlottie-main-font {
  font-family: 'Nanum Gothic', sans-serif !important;
}
.rlottie-content-font {
  font-family: 'Poor Story', cursive !important;
}
</style>
