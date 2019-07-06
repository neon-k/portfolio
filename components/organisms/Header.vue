<template lang="pug">
  header.header
    .header-inner
      h1.header-title(
        @click="onClickTitle"
      )
        nuxt-link.header-link(to="/")
          Logo(
            :color="color"
          )
      .menu-wrap(@click="ACTIVE_MENU")
        ToggleButton(:isActive="isMenuActive")
</template>
<script>
import Color from '~/constants/styles/color';

import { mapActions, mapState } from 'vuex';
import { ACTIVE_MENU } from '~/store/mutation-types';

import Logo from '~/components/atoms/Logo';
import ToggleButton from '~/components/molecules/Toggle-button';

export default {
  name: 'Header',
  components: {
    Logo,
    ToggleButton
  },
  data: () => {
    return {
      color: Color.TERTIARY
    };
  },
  computed: {
    ...mapState('menu', ['isMenuActive'])
  },
  methods: {
    ...mapActions('menu', {
      ACTIVE_MENU
    }),
    // ロゴをクリックした時に使う
    onClickTitle() {
      return this.isMenuActive ? this.ACTIVE_MENU() : null;
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
}

.header-inner {
  @include media-screen() {
    padding: 20px 10px;
  }

  width: 100%;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-title {
  width: 140px;
}

.header-link {
  width: 100%;
  display: block;
}

.menu-wrap {
  width: 30px;
  height: 23px;
}
</style>
