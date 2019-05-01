<template lang="pug">
  ul.list(v-if="isActive")
    li.lists
      nuxt-link.lists-link(to="/") Home
    li.lists
      nuxt-link.lists-link(to="/about") About
    li.lists
      nuxt-link.lists-link(to="/post") Post
</template>
<script>
export default {
  name: 'CategryList',
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.list {
  padding: 0;
}

.lists-link {
  @include hover();
  @include font-size(14);

  color: $tertiary;
  padding: 10px 0;
  background-color: $primary;
}
</style>
