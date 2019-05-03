<template lang="pug">
  .wrap
    transition(
      @leave="leave"
      :css="false"
      v-if="!isCompletePost"
    )
      .loading-wrap
        Loading
    .inner(v-else)
      Header
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

export default {
  name: 'Layout',
  components: {
    Header,
    Footer,
    Loading
  },
  transition: 'slide-left',
  computed: {
    ...mapState(['posts', 'isCompletePost'])
  },
  mounted() {
    this.GET_POST(); // 記事データを取得
  },
  methods: {
    ...mapActions({
      GET_POST
    }),
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

.containar {
  width: 100%;
}
</style>
