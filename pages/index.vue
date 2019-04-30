<template lang="pug">
  section.container
    Card(
      v-for="post in posts"
      :key="post.fields.slug"
      :title="post.fields.title"
      :slug="post.fields.slug"
      :header-url="post.fields.postImage"
      :published-at="post.fields.postDate"
    )
</template>

<script>
import Card from "~/components/Card.vue";

import { getPosts } from "~/plugins/contentful.js";

export default {
  components: {
    Card
  },
  async asyncData() {
    return await getPosts()
      .then(res => {
        return {
          posts: res.items
        };
      })
      .catch(console.error);
  },
  mounted() {
    getPosts().then(res => {
      console.log(res);
    });
  }
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
