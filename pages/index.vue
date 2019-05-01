<template lang="pug">
  .top
    p top
</template>

<script>
// import { mapActions, mapState } from 'vuex';
// import { ADD_COUNT, REMOVE_COUNT } from '~/store/mutation-types';

import Card from '~/components/molecules/Card.vue';

export default {
  name: 'Top',
  components: {
    Card
  }
  // computed: {
  //   ...mapState(['count'])
  // },
  // methods: {
  //   ...mapActions({
  //     ADD_COUNT,
  //     REMOVE_COUNT
  //   })
  // }
};
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
}
</style>
