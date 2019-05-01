<template lang="pug">
  .wrap
    Header
    .containar
      nuxt
    Footer
</template>

<script>
import Header from '~/components/organisms/Header';
import Footer from '~/components/organisms/Footer';

export default {
  name: 'Layout',
  components: {
    Header,
    Footer
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
