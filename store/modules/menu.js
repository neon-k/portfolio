import { ACTIVE_MENU, SET_SCROLL } from '../mutation-types';

export default {
  namespaced: true,
  state: {
    isMenuActive: false, // メニューボタンの開閉の真偽
    scroll: 0 // スクロール量を格納
  },
  actions: {
    [ACTIVE_MENU]({ commit }) {
      commit(SET_SCROLL); // スクロールの値を格納
      commit(ACTIVE_MENU); // メニューボタンの真偽を反転
    }
  },
  mutations: {
    [ACTIVE_MENU](state) {
      console.log(state);
      state.isMenuActive = !state.isMenuActive; // メニューボタンの真偽を反転
    },
    [SET_SCROLL](state) {
      if (!state.isMenuActive) {
        state.scroll = window.pageYOffset;
      } else {
        setTimeout(() => window.scrollTo(0, state.scroll), 0);
      }
    }
  }
};
