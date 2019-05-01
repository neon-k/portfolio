<template lang="pug">
  .button
    p {{count}}
    buttonComponent(
      :name = "'+'"
      :clickEvent = "ADD_COUNT"
    )
    buttonComponent(
      :name = "'-'"
      :clickEvent = "REMOVE_COUNT"
    )
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { ADD_COUNT, REMOVE_COUNT } from '~/store/mutation-types';
import { getPosts } from '~/plugins/contentful.js';

import buttonComponent from '~/components/atoms/Button.vue';
import Card from '~/components/molecules/Card.vue';

export default {
  name: 'Top',
  components: {
    Card,
    buttonComponent
  },
  computed: {
    ...mapState(['count'])
  },
  async asyncData() {
    return await getPosts()
      .then(res => {
        return {
          posts: res.items
        };
      })
      .catch(console.error);
  },
  mounted() {
    getPosts().then(res => {
      console.log(res);
    });
  },
  methods: {
    ...mapActions({
      ADD_COUNT,
      REMOVE_COUNT
    })
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
