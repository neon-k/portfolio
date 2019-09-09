<template lang="pug">
  .menu-wrap
    .menu
      .menu-inner
        MenuList(:clickEvent="ACTIVE_MENU")
      .sns-wrap
        Sns
</template>

<script>
import { mapActions } from 'vuex';
import { ACTIVE_MENU } from '~/store/mutation-types';

import Sns from '~/components/molecules/Sns';
import MenuList from '~/components/molecules/Menu-list';

export default {
  name: 'Menu',
  components: {
    MenuList,
    Sns
  },
  methods: {
    ...mapActions('menu', {
      ACTIVE_MENU
    })
  }
};
</script>

<style lang="scss" scoped>
.menu-wrap {
  width: 100%;
  height: 100%;
  background-color: $secondary;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
}

.menu {
  position: relative;
  width: 100%;
  height: 100%;
}

.menu-inner {
  max-width: 280px;
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  margin: 0 auto;
}

.sns-wrap {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 30px 40px;

  @include media-screen() {
    padding: 0 10px 20px;
  }
}
</style>
