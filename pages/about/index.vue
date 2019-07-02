<template lang="pug">
  .about
    .about-inner
      .about-heading
        .about-heading-logo
          Logo
        p.about-heading-description DEVElOPER
      .about-contents
        h2.about-contents-title SKILLS
        ul.about-contents-list
          li.about-contents-lists HTML
          li.about-contents-lists CSS
          li.about-contents-lists Javascript
          li.about-contents-lists node.js
          li.about-contents-lists Typescript
          li.about-contents-lists Vue
          li.about-contents-lists React
          li.about-contents-lists Firebase
          li.about-contents-lists AMP
          li.about-contents-lists PWA
          li.about-contents-lists Contentful
          li.about-contents-lists Wordpress
          li.about-contents-lists MySQL
          li.about-contents-lists PHP
          li.about-contents-lists Laravel
      .about-contents
        h2.about-contents-title CONTACT
        p.about-contents-description daiya50.ezweb.ne.jp@gmail.com
</template>

<script>
import Logo from '~/components/atoms/Logo';

export default {
  name: 'About',
  transition: 'slide-left',
  components: {
    Logo
  }
};
</script>

<style lang="scss" scoped>
.about {
  width: 100%;
}

.about-inner {
  padding: 100px 40px 140px;

  @include media-screen($brackPoinSP) {
    padding: 100px 10px 140px;
  }
}

.about-heading {
  margin-bottom: 80px;
}

.about-heading-logo {
  max-width: 400px;
  width: 80%;
  margin-bottom: 20px;
}

.about-heading-description {
  @include font-size(14);
}

.about-contents {
  margin-bottom: 80px;

  &:last-child {
    margin-bottom: 0;
  }
}

.about-contents-title {
  @include font-size(16);

  margin-bottom: 20px;
}

.about-contents-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.about-contents-lists {
  @include font-size(14);

  margin-right: 20px;
  position: relative;
  line-height: 1.6;

  &::after {
    content: '/';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -15px;
  }

  &:last-child {
    margin-right: 0;

    &::after {
      content: none;
    }
  }
}

.about-contents-description {
  @include font-size(14);
}
</style>
