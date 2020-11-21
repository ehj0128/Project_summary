<template>
  <section
    id="welcome"
    class="overflow-hidden"
  >
    <v-row no-gutters>
      <v-col
        class="hidden-sm-and-down"
        md="6"
      >
        <v-img
          :src="require('@/assets/myimage.png')"
          height="100vh"
        />
      </v-col>

      <v-col
        class="align-content-space-between layout wrap"
        cols="12"
        md="6"
      >
        <base-bubble-1
          style="transform: rotate(180deg) translateY(25%)"
        />

        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="10"
            md="6"
          >
            <base-heading>안녕하세요!</base-heading>
            <base-text class="text-left">
              엄홍재의 프로젝트 소개 페이지 입니다.
              <br><br>
              <ul>
              <li>희망직무</li>
              <ol>
                <li>Front-end 개발</li>
                <li>Back-end 개발</li>
              </ol>
              <li>사용기술 및 언어</li>
              Python, Javascript, Vue.js, Django, React.js, React-Native
              </ul>
              <br>
              Github : <a
                href="https://github.com/ehj0128"
                target="_blank"
                >https://github.com/ehj0128</a>
              <br>
              E-mail : hjeom0128@kakao.com
            </base-text>
          </v-col>
        </v-row>

        <base-bubble-2
          style="transform: rotate(180deg) translate(-200px, -15%)"
        />
      </v-col>
    </v-row>
  </section>
</template>
