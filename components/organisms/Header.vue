<template lang="pug">
  header.header
    .header-inner
      h1.header-title
        nuxt-link.header-link(to="/")
          Logo(:color="color")
      .menu-wrap(@click="ACTIVE_MENU")
        ToggleButton(:isActive="isMenuActive")
</template>
<script>
import Color from '~/constants/styles/color.js';

import { mapActions, mapState } from 'vuex';
import { ACTIVE_MENU } from '~/store/mutation-types';

import Logo from '~/components/atoms/Logo.vue';
import ToggleButton from '~/components/molecules/Toggle-button.vue';

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
  width: 100%;
  padding: 0 20px;
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
