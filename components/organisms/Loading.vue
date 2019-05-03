<template lang="pug">
  .loading
    .loading-inner
      Loader
</template>

<script>
import Loader from '~/components/atoms/Loader';

export default {
  name: 'Loading',
  components: {
    Loader
  }
};
</script>

<style lang="scss" scoped>
.loading {
  width: 100%;
  height: 100%;
  background-color: $secondary;
  position: relative;
}

.loading-inner {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
</style>
