<template>
  <v-app-bar
    v-scroll="onScroll"
    :color="!isScrolling ? 'transparent' : 'white'"
    fixed
    flat
  >
    <v-slide-x-transition>
      <h1
        v-if="showLogo"
        class="shrink"
        contain
      >
        엄홍재의 프로젝트
      </h1>
    </v-slide-x-transition>

    <v-spacer />
    <base-btn
      v-if="checkPage()"
      class="ml-3"
      large
      @click="$router.push({name: 'Home'})"
    >
      HOME
    </base-btn>
    <base-btn
      class="ml-3"
      large
      @click="$vuetify.goTo(0, {
        duration: 100,
        offset: 0
      })"
    >
      TOP
    </base-btn>
  </v-app-bar>
</template>

<script>
  export default {
    name: 'CoreAppBar',
    data: () => ({
      showLogo: false,
      isScrolling: false,
    }),
    methods: {
      onScroll () {
        const offset = window.pageYOffset
        this.isScrolling = offset > 50
        this.showLogo = offset > 200
      },
      checkPage () {
        switch (this.$router.history.current.path) {
          case '/':
            return false
          default:
            return true
        }
      },
    },
  }
</script>
