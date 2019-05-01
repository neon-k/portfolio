<template lang="pug">
  .card(:style="{ backgroundImage: 'url(' + headerUrl.fields.file.url + ')' }")
    nuxt-link.card-link(
      :to="{ name: 'post-slug', params: { slug: slug } }"
    )
      .card-inner
        .card-details
          h2.card-title {{ title }}
          p.card-date {{ new Date(publishedAt).toLocaleDateString() }}
</template>

<script>
export default {
  name: 'CardList',
  props: {
    title: {
      type: String,
      default: ''
    },
    slug: {
      type: String,
      default: ''
    },
    headerUrl: {
      type: Object,
      default: () => {
        return null;
      }
    },
    publishedAt: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  height: 100%;
  background-origin: center center;
  background-size: cover;
  display: block;
}

.card-link {
  width: 100%;
  height: 100%;
  display: block;
  padding: 20px;
  transition: 0.3s $easeOutSine;

  &:hover {
    background-color: rgba($secondary, 0.6);

    .card-details {
      opacity: 1;
    }
  }
}

.card-inner {
  width: 100%;
  height: 100%;
  display: block;
  position: relative;
}

.card-details {
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0;
  transition: 0.3s $easeOutSine;
}

.card-title {
  @include font-size(16);

  color: $primary;
}

.card-date {
  @include font-size(12);

  color: $primary;
}
</style>
