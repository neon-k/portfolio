<template lang="pug">
  svg.logo-svg(:class="{isHover: isHover}", viewBox='0 0 512 512', width="512", height="512")
    path(:fill='color', d='M379.1 277.9L256 154.8 132.9 277.9l40.7 40.7 82.4-82.5 82.4 82.5z')
    path(:fill='color', d='M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256s114.6 256 256 256 256-114.6 256-256zM103.4 408.6C64.3 369.5 40.2 315.7 40.2 256c0-59.7 24.1-113.5 63.2-152.6 39.1-39.1 92.9-63.2 152.6-63.2 59.7 0 113.5 24.1 152.6 63.2 39.1 39.1 63.2 92.9 63.2 152.6 0 59.6-24.1 113.5-63.2 152.6-39.1 39.1-92.9 63.2-152.6 63.2-59.6 0-113.5-24.1-152.6-63.2z')
</template>

<script>
export default {
  name: 'ArrowTop',
  props: {
    // svgのカラーを受け取る
    color: {
      type: String,
      default: '#000'
    },
    // ホバーのアニメーションをつけるかどうか
    isHover: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="scss" scoped>
.logo-svg {
  width: 100%;
  height: 100%;
  display: block;

  &.isHover {
    @include hover();
  }
}
</style>
