<template lang="pug">
  .sns
    ul.sns-list
      li.sns-lists
        a.sns-link(href="mailto:daiya50.ezweb.ne.jp@gmail.com")
          Mail(:color="color")
</template>

<script>
import Mail from '~/components/atoms/Mail.vue';

export default {
  name: 'Sns',
  components: {
    Mail
  },
  props: {
    // svgのカラーを受け取る
    color: {
      type: String,
      default: '#000'
    }
  }
};
</script>

<style lang="scss" scoped>
.sns {
  width: 100%;
}

.sns-list {
  width: 100%;
  display: flex;
  align-items: center;
}

.sns-link {
  @include hover();

  width: 30px;
  height: 30px;
  display: block;
  padding: 5px;
  border-radius: 50%;
  background-color: #fff;
}

.sns-lists {
  width: 100%;
}
</style>
