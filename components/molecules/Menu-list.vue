<template lang="pug">
  ul.menu-list
    li.menu-lists(@click="clickEvent")
      nuxt-link.menu-lists-link(to="/") Home
    li.menu-lists(@click="clickEvent")
      nuxt-link.menu-lists-link(to="/about") About
    li.menu-lists(@click="clickEvent")
      nuxt-link.menu-lists-link(to="/post") Post
</template>
<script>
export default {
  name: 'MenuList',
  props: {
    // メニューを閉じる関数を受け取る。
    clickEvent: {
      type: Function,
      default: () => null
    }
  }
};
</script>

<style lang="scss" scoped>
.menu-list {
  width: 100%;
  height: 100%;
  padding: 0;
}

.menu-lists {
  margin-bottom: 30px;

  &:last-child {
    margin-bottom: 0;
  }
}

.menu-lists-link {
  @include hover();
  @include font-size(28);

  color: $primary;
  padding: 10px 0;
}
</style>
