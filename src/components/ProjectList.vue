<template>
  <section
    id="projects"
    class="overflow-hidden"
  >
    <v-row
      class="accent"
      no-gutters
    >
      <v-col
        class="text-center pa-5"
        cols="12"
        md="6"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <v-col cols="12">
            <base-bubble-2
              style="transform: translateX(55%)"
            />
            <base-heading class="info--text">
              Project List
            </base-heading>

            <base-text class="mb-5">
              프로젝트 목록입니다.<br>
              클릭하면 자세한 사항을 볼 수 있습니다.
            </base-text>
          </v-col>

          <v-col
            v-for="(project, i) in projects"
            :key="i"
            class="text-center mb-3"
            md="4"
          >
            <v-avatar
              class="elevation-6 mb-2"
              color="#69A1BB"
              size="64"
              tile
            >
              <v-icon
                dark
                size="52"
                v-text="project.icon"
                @click="$router.push({name: project.address})"
              />
            </v-avatar>

            <base-text>
              <div
                class="mb-2"
                v-text="project.name"
              />
            </base-text>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        class="hidden-sm-and-down"
        md="6"
      >
        <v-img
          :src="require('@/assets/projectlsitimage.jpg')"
          height="100%"
        />
      </v-col>
    </v-row>
  </section>
</template>

<script>
  export default {
    name: 'ProjectList',

    data: () => ({
      projects: [
        {
          name: '영화 추천 커뮤니티',
          icon: 'mdi-movie-open-outline',
          address: 'MovieCommunity',
        },
        {
          name: '화상 스터디',
          icon: 'mdi-pencil-outline',
          address: 'STEW',
        },
        {
          name: '태권도 자세교정',
          icon: 'mdi-account-group-outline',
          address: 'Taekwondo',
        },
        {
          name: 'rlottie Preview',
          icon: 'mdi-animation',
          address: 'rlottie',
        },
        {
          name: '데일리타운',
          icon: 'mdi-home-circle',
          address: 'Dailytown',
        },
      ],
    }),
  }
</script>
