<template lang="pug">
  .top
    .top-inner
      .top-heading
        .top-logo-wrap
          Logo
        .top-heading-descriotion-wrap
          p.top-heading-descriotion PORTFOLIO OF KOTA ICHIKAWA
          p.top-heading-descriotion DEVElOPER
      .top-contents-wrap
        .top-contents(v-for="post in postFilter")
          Card(
            :key="post.fields.slug"
            :title="post.fields.title"
            :slug="post.fields.slug"
            :header-url="post.fields.postImage"
            :published-at="post.fields.postDate"
          )

</template>

<script>
import { mapState, mapGetters } from 'vuex';

import Logo from '~/components/atoms/Logo';
import Card from '~/components/molecules/Card/Card-list';

export default {
  name: 'Top',
  transition: 'slide-left',
  components: {
    Logo,
    Card
  },
  computed: {
    ...mapState(['posts']),
    ...mapGetters(['postFilter'])
  }
};
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
}

.top-heading {
  padding: 100px 80px 200px;

  @include media-screen($brackPoinSP) {
    padding: 80px 10px 100px;
  }
}

.top-logo-wrap {
  max-width: 250px;
  width: 80%;
  margin-bottom: 20px;
}

.top-heading-descriotion {
  @include font-size(12);
}

.top-contents-wrap {
  display: flex;
  flex-wrap: wrap;
  background-color: $contentsBg;
}

.top-contents {
  width: 33.333%;
  overflow: hidden;

  @include media-screen($brackPoinSP) {
    width: 100%;
  }
}
</style>
