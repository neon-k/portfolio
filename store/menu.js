import { ACTIVE_MENU, SET_SCROLL } from './mutation-types';

export const state = () => ({
  isMenuActive: false, // メニューボタンの開閉の真偽
  scroll: 0 // スクロール量を格納
});

export const actions = {
  [ACTIVE_MENU]({ commit }) {
    commit(SET_SCROLL); // スクロールの値を格納
    commit(ACTIVE_MENU); // メニューボタンの真偽を反転
  }
};

export const mutations = {
  [ACTIVE_MENU](state) {
    state.isMenuActive = !state.isMenuActive; // メニューボタンの真偽を反転
  },
  [SET_SCROLL](state) {
    if (!state.isMenuActive) {
      state.scroll = window.pageYOffset;
    } else {
      setTimeout(() => window.scrollTo(0, state.scroll), 0);
    }
  }
};
