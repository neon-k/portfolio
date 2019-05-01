<template lang="pug">
  .wrap
    Header
    .containar
      nuxt
</template>

<script>
import Header from '~/components/organisms/Header';

export default {
  name: 'Layout',
  components: {
    Header
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
