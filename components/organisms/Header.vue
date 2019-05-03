<template lang="pug">
  header.header
    .header-inner
      h1.header-title
        nuxt-link.header-link(to="/")
          Logo(:color="color")
      .menu-wrap(@click="ACTIVE_MENU")
        ToggleButton(:isActive="isMenuActive")
        .list-wrap
          .list-inner
            CategryList(:isActive="isMenuActive")
</template>
<script>
import Color from '~/constants/styles/color.js';

import { mapActions, mapState } from 'vuex';
import { ACTIVE_MENU } from '~/store/mutation-types';

import Logo from '~/components/atoms/Logo.vue';
import CategryList from '~/components/molecules/Categry-list.vue';
import ToggleButton from '~/components/molecules/Toggle-button.vue';

export default {
  name: 'Header',
  components: {
    Logo,
    ToggleButton,
    CategryList
  },
  data: () => {
    return {
      color: Color.TERTIARY
    };
  },
  computed: {
    ...mapState(['isMenuActive'])
  },
  methods: {
    ...mapActions({
      ACTIVE_MENU
    })
  }
};
</script>

<style lang="scss" scoped>
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

.list-wrap {
  position: relative;
}

.list-inner {
  @include media-screen() {
    left: -15px;
  }

  position: absolute;
  top: 15px;
  left: 0;
  z-index: 1;
}
</style>
