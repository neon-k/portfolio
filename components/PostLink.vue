<template lang="pug">
  .link-card(v-if="post !== ''")
    nuxt-link.wrapper(:to="{ name: 'post-slug', params: { slug: post[0].fields.slug } }")
      img.link_image(:src="post[0].fields.postImage.fields.file.url")
</template>

<script>
import { getPosts } from "~/plugins/contentful.js";

export default {
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  data: () => {
    return {
      post: ""
    };
  },
  mounted() {
    console.log(this.id);

    const type = {
      content_type: "posts", // 投稿のtype
      "sys.id": this.id
    };

    getPosts(type)
      .then(res => {
        this.post = res.items;
        console.log(this.post[0].fields.slug);
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

.link_image {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
