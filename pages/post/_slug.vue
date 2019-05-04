<template lang="pug">
  .page
    .page-heading
      h2.page-title {{ postFilter($route.params.slug)[0].fields.title }}
      p.page-date {{ new Date(postFilter($route.params.slug)[0].fields.postDate).toLocaleDateString() }}
    .page-body(v-for="(postContent, index) in postFilter($route.params.slug)[0].fields.body.content" :key="index")

      //- デバック用
      //- p {{postContent}}

      //- テクストの場合
      .page-body-section(v-if="postContent.nodeType === 'paragraph'")
        .page-body-section-inner(v-for="(postContent, i) in postContent.content" :key="i")

          //- 通常のテクストの場合
          p.page-text(v-if="postContent.nodeType === 'text' && postContent.value !== ''") {{ postContent.value }}

          //- リンクテクストの場合
          a.page-text.link(
            v-else-if="postContent.nodeType === 'hyperlink'"
            :href="postContent.data.uri"
             target="_blank"
          ) {{ postContent.content[0].value }}

      //- リストの場合
      .page-body-section(v-if="postContent.nodeType === 'unordered-list'")
        ul.page-body-list-wrap
          li.page-body-list(v-for="(postList, i) in postContent.content" :key="i")
            div(v-for="(postListInner, j) in postList.content" :key="j")
              p {{ postListInner.content[0].value }}

      //- リストの場合
      .page-body-section(v-if="postContent.nodeType === 'hyperlink'")
        a.page-link(:src="postContent.content[1].data.uri") {{postContent.content[1].content.value}}

      //- 画像の場合
      .page-body-section(v-if="postContent.nodeType === 'embedded-asset-block'")
        img.page-img(v-lazy="postContent.data.target.fields.file.url")

      //- ページ内リンクの場合
      .page-body-section(v-if="postContent.nodeType === 'embedded-entry-block'")
        .page-body-link
          PostLink(:id="postContent.data.target.sys.id")
</template>

<script>
import { mapGetters } from 'vuex';

import PostLink from '~/components/molecules/PostLink.vue';

export default {
  name: 'Slug',
  transition: 'slide-left',
  components: {
    PostLink
  },
  computed: {
    ...mapGetters(['slugFilter'])
  },
  methods: {
    // 個別ページのデータを受け取る
    postFilter(slug) {
      return this.slugFilter(slug);
    }
  }
};
</script>

<style lang="scss" scoped>
.page {
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 40px 60px;

  @include media-screen() {
    padding: 40px 10px 60px;
  }
}

.page-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @include media-screen($brackPoinSP) {
    display: block;
  }
}

.page-title {
  @include font-size(20);

  padding-right: 10px;

  @include media-screen($brackPoinSP) {
    padding-right: 0;
    margin-bottom: 5px;
  }
}

.page-body-section {
  margin-bottom: 30px;
}

.page-date {
  @include font-size(16);

  color: $tertiary;
}

.page-text {
  @include font-size(16);

  &.link {
    @include hover();

    display: inline;
    color: $tertiary;
  }
}

.page-body-list-wrap {
  @include font-size(16);

  padding-left: 20px;
}

.page-body-list {
  margin-bottom: 10px;
  list-style-type: disc;

  &:last-child {
    margin-bottom: 0;
  }
}

.page-img {
  width: 100%;
  height: auto;
}

.page-body-link {
  width: 300px;
  height: auto;
}
</style>
