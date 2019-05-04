<template lang="pug">
  .link-card(v-if="post !== ''")
    nuxt-link.wrapper(:to="{ name: 'post-slug', params: { slug: post[0].fields.slug } }")
      img.link-image(:src="post[0].fields.postImage.fields.file.url")
</template>

<script>
import { getPosts } from '~/plugins/contentful.js';

export default {
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  data: () => {
    return {
      post: ''
    };
  },
  mounted() {
    const type = {
      content_type: 'posts', // 投稿のtype
      'sys.id': this.id
    };

    // idで取得した投稿データを受け取る
    getPosts(type)
      .then(res => {
        this.post = res.items;
      })
      .catch(console.error);
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;
}

.link-image {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
