<template lang="pug">
  .wrap
    Header
    .containar
      nuxt
    Footer
</template>

<script>
import { mapActions } from 'vuex';
import { GET_POST } from '~/store/mutation-types';

import Header from '~/components/organisms/Header';
import Footer from '~/components/organisms/Footer';

export default {
  name: 'Layout',
  components: {
    Header,
    Footer
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
