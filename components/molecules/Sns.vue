<template lang="pug">
  .sns
    ul.sns-list
      li.sns-list
        Mail
</template>

<script>
import Mail from '~/components/atoms/Mail.vue';

export default {
  name: 'Sns',
  components: {
    Mail
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 300px;
  height: 200px;
  box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.2);
  border: 0.5px solid rgb(57, 72, 85);
  padding: 10px 20px;
  margin: 10px 10px;
  text-align: center;
}

.wrapper {
  text-decoration: none;
}

.card_title {
  @include font-size(12);
}

.card_date {
  font-size: 0.7rem;
  color: rgb(57, 72, 85);
  text-align: right;
}

.card_image {
  max-height: 100px;
}
</style>
