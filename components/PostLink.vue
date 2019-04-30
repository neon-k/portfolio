<template>
  <div v-if="post !== ''" class="link-card">
    <nuxt-link
      :to="{ name: 'post-slug', params: { slug: post[0].fields.slug } }"
      class="wrapper"
    >
      <img class="link_image" :src="post[0].fields.postImage.fields.file.url">
    </nuxt-link>
  </div>
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

<style scoped>
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
