<template lang="pug">
  .wrap(v-if="posts !== null")
    Header
    .containar
      nuxt
    Footer
  .wrap(v-else)
    p まだデータがありません。
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { GET_POST } from '~/store/mutation-types';

import Header from '~/components/organisms/Header';
import Footer from '~/components/organisms/Footer';

export default {
  name: 'Layout',
  components: {
    Header,
    Footer
  },
  computed: {
    ...mapState(['posts'])
  },
  mounted() {
    this.GET_POST(); // 記事データを取得
  },
  methods: {
    ...mapActions({
      GET_POST
    })
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  display: block;
}

.containar {
  width: 100%;
}
</style>
