<template>
  <section class="slug">
    <h1 class="slug_title">{{ post.fields.title }}</h1>
    <p class="slug_date">
      {{ (new Date(post.fields.postDate)).toLocaleDateString() }}
    </p>
    <img
      class="slug_image"
      :src="post.fields.postImage.fields.file.url"
    />
    <div
      class="slug_body"
      v-for="(postContent, index) in post.fields.body.content"
      :key="index"
    >
      <!-- {{postContent}} -->
      <!-- 通常のテクストの場合 -->
      <div
         class="slug_body-section"
         v-if="postContent.nodeType === 'paragraph'"
      >
        <p>{{postContent.content[0].value}}</p>
      </div>

      <!-- リストの場合 -->
      <div
         class="slug_body-section"
         v-if="postContent.nodeType === 'unordered-list'"
      >
        <ul class="slug_body-list-wrap">
          <li
            v-for="(postList, index) in postContent.content"
            :key="index"
          >
            <div
              v-for="(postListInner, index) in postList.content"
              :key="index"
            >
              <p>{{postListInner.content[0].value}}</p>
            </div>
          </li>
        </ul>
      </div>

      <!-- 他のリンクの場合 -->
       <div
         class="slug_body-section"
         v-if="postContent.nodeType === 'embedded-entry-block'"
      >
        <div class="slug_body-link">
          <PostLink
            :id="postContent.data.target.sys.id"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PostLink from '~/components/PostLink.vue'
import { getPosts } from '~/plugins/contentful.js'

export default {
  transition: 'slide-left',
  components: {
    PostLink
  },
  async asyncData ({ params }) {
    const type = {
      content_type: 'posts',
      'fields.slug': params.slug,
    }

    return await getPosts(type)
      .then(entries => {
        return {
          post: entries.items[0],
        }
      })
      .catch(console.error)
  }
}
</script>

<style scoped>
.slug {
  max-width: 800px;
  margin: 0 auto;
}
.slug_title {
  font-size: 2.0rem;
  font-weight: bolder;
}
.slug_date {
  font-size: 1.0rem;
  color: rgb(57, 72, 85);
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
