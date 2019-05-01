<template lang="pug">
  .toggle-button
    .toggle-button-inner
      span.toggle-button-line(:class="{ active: isActive }")
</template>
<script>
export default {
  name: 'ToggleButton',
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.toggle-button {
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.toggle-button-inner {
  width: 100%;
  height: 100%;
  position: relative;
}

.toggle-button-line {
  width: 100%;
  height: 2px;
  background-color: $tertiary;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  transition: 0.3s $easeOutSine;

  &::before {
    content: '';
    width: 100%;
    height: 2px;
    position: absolute;
    background-color: $tertiary;
    top: -8px;
    left: 0;
  }

  &::after {
    content: '';
    width: 100%;
    height: 2px;
    position: absolute;
    background-color: $tertiary;
    bottom: -8px;
    left: 0;
  }

  &.active {
    transform: rotate(360deg);
    background-color: transparent;

    &::before {
      top: 0;
      transform: rotate(-45deg);
    }

    &::after {
      bottom: 0;
      transform: rotate(45deg);
    }
  }
}
</style>
