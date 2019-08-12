<template lang="pug">
  .card
    .card-inner
      nuxt-link.card-link(
        :to="{ name: 'post-slug', params: { slug: slug } }"
      )
      .card-image-wrap
        img.card-image(v-lazy="headerUrl.fields.file.url")
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
      default: () => null
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
  display: block;
}

.card-inner {
  width: 100%;
  height: 100%;
  display: block;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    background-color: rgba($secondary, 0.6);
    z-index: 1;
    opacity: 0;
    transition: 0.3s $easeOutSine;
  }

  &:hover {
    .card-details {
      opacity: 1;
    }

    .card-image {
      transform: scale(1.05);
    }

    &::before {
      opacity: 1;
    }
  }
}

.card-link {
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}

.card-details {
  position: absolute;
  bottom: 30px;
  left: 30px;
  opacity: 0;
  transition: 0.3s $easeOutSine;
  z-index: 1;
}

.card-image-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.card-image {
  width: 100%;
  display: block;
  transition: transform 0.4s $easeOutSine;
  transform-origin: center center;
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
