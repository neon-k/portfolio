<template lang="pug">
  .loader
</template>

<script>
export default {
  name: 'Loader'
};
</script>

<style lang="scss" scoped>
.loader {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;
  z-index: 0;

  &::before,
  &::after {
    opacity: 0;
    box-sizing: border-box;
    content: '\0020';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 100px;
    border: 5px solid #fff;
    box-shadow: 0 0 50px #fff, inset 0 0 50px #fff;
  }

  &::before {
    z-index: 2;
    animation: loader 2s infinite;
  }

  &::after {
    z-index: 1;
    animation: loader 2s infinite 1s;
  }
}
</style>
