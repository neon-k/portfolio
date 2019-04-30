<template lang="pug">
  section.slug
    h1.slug_title {{ post.fields.title }}
    p.slug_date {{ new Date(post.fields.postDate).toLocaleDateString() }}
    img.slug_image(:src="post.fields.postImage.fields.file.url")
    .slug_body(v-for="(postContent, index) in post.fields.body.content" :key="index")

      //- デバック用
      //- p {{postContent}}

      //- テクストの場合
      .slug_body-section(v-if="postContent.nodeType === 'paragraph'")
        .slug_body-section-inner(v-for="(postContent, i) in postContent.content" :key="i")

          //- 通常のテクストの場合
          p.slug_text(v-if="postContent.nodeType === 'text' && postContent.value !== ''") {{ postContent.value }}

          //- リンクテクストの場合
          a.slug_link(
            v-else-if="postContent.nodeType === 'hyperlink'"
            :href="postContent.data.uri"
             target="_blank"
          ) {{ postContent.content[0].value }}

      //- リストの場合
      .slug_body-section(v-if="postContent.nodeType === 'unordered-list'")
        ul.slug_body-list-wrap
          li(v-for="(postList, i) in postContent.content" :key="i")
            div(v-for="(postListInner, j) in postList.content" :key="j")
              p {{ postListInner.content[0].value }}

      //- リストの場合
      .slug_body-section(v-if="postContent.nodeType === 'hyperlink'")
        a.slug-link(:src="postContent.content[1].data.uri") {{postContent.content[1].content.value}}

      //- 画像の場合
      .slug_body-section(v-if="postContent.nodeType === 'embedded-asset-block'")
        img.slug-img(:src="postContent.data.target.fields.file.url")

      //- ページ内リンクの場合
      .slug_body-section(v-if="postContent.nodeType === 'embedded-entry-block'")
        .slug_body-link
          PostLink(:id="postContent.data.target.sys.id")
</template>

<script>
import PostLink from '~/components/PostLink.vue';
import { getPosts } from '~/plugins/contentful.js';

export default {
  transition: 'slide-left',
  components: {
    PostLink
  },
  async asyncData({ params }) {
    let type = {
      content_type: 'posts',
      'fields.slug': params.slug
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

.slug-img {
  width: 100%;
  height: auto;
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
