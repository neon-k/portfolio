<template lang="pug">
  .post-wrap
    .post-inner(
      v-for="(post, i) in posts.items"
      :key="i"
    )
      CardList(
        :title="post.fields.title"
        :slug="post.fields.slug"
        :header-url="post.fields.postImage"
        :published-at="post.fields.postDate"
      )
</template>

<script>
import { mapState } from 'vuex';

import CardList from '~/components/molecules/Card-list.vue';

export default {
  components: {
    CardList
  },
  computed: {
    ...mapState(['posts'])
  }
};
</script>

<style lang="scss" scoped>
.post-wrap {
  padding: 40px 100px;

  @include media-screen($brackPoinSP) {
    padding: 40px 10px;
  }
}

.post-inner {
  max-width: 900px;
  width: 100%;
  margin: 0 auto 100px;

  @include media-screen($brackPoinSP) {
    margin-bottom: 0 auto 40px;
  }
}
</style>
