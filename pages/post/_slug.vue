<template lang="pug">
  section.slug
    h1.slug_title {{ post.fields.title }}
    p.slug_date {{ new Date(post.fields.postDate).toLocaleDateString() }}
    img.slug_image(:src="post.fields.postImage.fields.file.url")
    .slug_body(v-for="(postContent, index) in post.fields.body.content" :key="index")

      // 通常のテクストの場合
      .slug_body-section(v-if="postContent.nodeType === 'paragraph'")
        p {{ postContent.content[0].value }}

      // リストの場合
      .slug_body-section(v-if="postContent.nodeType === 'unordered-list'")
        ul.slug_body-list-wrap
          li(v-for="(postList, i) in postContent.content" :key="i")
            div(v-for="(postListInner, j) in postList.content" :key="j")
              p {{ postListInner.content[0].value }}

      // 他のリンクの場合
      .slug_body-section(v-if="postContent.nodeType === 'embedded-entry-block'")
        .slug_body-link
          PostLink(:id="postContent.data.target.sys.id")
</template>

<script>
import PostLink from "~/components/PostLink.vue";
import { getPosts } from "~/plugins/contentful.js";

export default {
  transition: "slide-left",
  components: {
    PostLink
  },
  async asyncData({ params }) {
    const type = {
      content_type: "posts",
      "fields.slug": params.slug
    };

    return await getPosts(type)
      .then(entries => {
        return {
          post: entries.items[0]
        };
      })
      .catch(console.error);
  }
};
</script>

<style lang="scss" scoped>
.slug {
  max-width: 800px;
  margin: 0 auto;
}
.slug_title {
  font-size: 2rem;
  font-weight: bolder;
}
.slug_date {
  font-size: 1rem;
  color: $purple;
  text-align: right;
}

.slug_image {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

.slug_body-link {
  width: 300px;
  height: auto;
}
</style>
