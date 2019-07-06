<template lang="pug">
  .wrap
    transition(
      @leave="leave"
      :css="false"
      v-if="!isCompletePost"
    )
      .loading-wrap
        Loading
    .inner(
      :class="{ active: isMenuActive }"
      :style="{ top: `-${scroll}px` }"
      v-else
    )
      .contents-wrap
        Header
        transition(
          name="menu"
        )
          Menu(v-if="isMenuActive")
        .containar
          nuxt
        Footer
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { GET_POST } from '~/store/mutation-types';
import { loading } from '~/constants/animation';

import Header from '~/components/organisms/Header';
import Footer from '~/components/organisms/Footer';
import Loading from '~/components/organisms/Loading';
import Menu from '~/components/organisms/Menu';

export default {
  name: 'Layout',
  components: {
    Header,
    Footer,
    Loading,
    Menu
  },
  computed: {
    ...mapState('menu', ['isMenuActive', 'scroll']),
    ...mapState(['posts', 'isCompletePost'])
  },
  mounted() {
    this.GET_POST(); // 記事データを取得
  },
  methods: {
    ...mapActions({
      GET_POST
    }),

    // ローディングのアニメーション
    leave(el, done) {
      loading.leave(el, done);
    }
  }
};
</script>

<style lang="scss" scoped>
.loading-wrap {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.wrap {
  width: 100%;
  height: 100%;
  display: block;
}

.inner {
  width: 100%;
  height: 100%;
  position: static;

  &.active {
    position: fixed;
    left: 0;
  }
}

.containar {
  width: 100%;
  padding-top: 80px;
}
</style>
