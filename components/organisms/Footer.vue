<template lang="pug">
  footer.footer
    .footer-inner
      .sns-wrap
        Sns
      .footer-mail-wrap
        h2.footer-mail-title
          nuxt-link.footer-link(to="/")
            Logo(:color="color")
        p.footer-mail-text daiya50.ezweb.ne.jp@gmail.com
      .footer-arrow-wrap(
        @click="clickScroll"
      )
        ArrowTop(
          :color="color"
        )
</template>

<script>
import Color from '~/constants/styles/color';

import ArrowTop from '~/components/atoms/Arrow-top';
import Logo from '~/components/atoms/Logo';
import Sns from '~/components/molecules/Sns';

import smoothScroll from '~/util/smooth-scroll';

export default {
  name: 'Footer',
  components: {
    Sns,
    Logo,
    ArrowTop
  },
  props: {
    color: {
      type: String,
      default: Color.PRIMARY
    }
  },
  methods: {
    // スムーススクロールのアニメーション
    clickScroll() {
      smoothScroll();
    }
  }
};
</script>

<style lang="scss" scoped>
.footer {
  @include media-screen() {
    padding: 40px 10px 20px;
  }

  padding: 40px 40px 20px;
  background-color: $secondary;
}

.footer-inner {
  position: relative;
}

.sns-wrap {
  margin-bottom: 20px;
}

.footer-link {
  width: 140px;
}

.footer-mail-title {
  width: 100%;
  margin-bottom: 10px;
}

.footer-mail-text {
  @include media-screen() {
    @include font-size(10);
  }

  @include font-size(12);

  color: $primary;
}

.footer-arrow-wrap {
  width: 30px;
  height: 30px;
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: pointer;
}
</style>
