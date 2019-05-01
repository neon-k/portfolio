import Vuex from 'vuex';
import { ADD_COUNT, REMOVE_COUNT, ACTIVE_MENU } from './mutation-types';

const state = {
  count: 0,
  isMenuActive: false
};

const actions = {
  [ADD_COUNT]({ commit }) {
    commit(ADD_COUNT);
  },
  [REMOVE_COUNT]({ commit }) {
    commit(REMOVE_COUNT);
  },
  [ACTIVE_MENU]({ commit }) {
    commit(ACTIVE_MENU); // メニューボタンの真偽を反転
  }
};

const mutations = {
  [ADD_COUNT](state) {
    state.count++;
  },
  [REMOVE_COUNT](state) {
    if (state.count <= 0) {
      return;
    } else {
      state.count--;
    }
  },
  [ACTIVE_MENU](state) {
    state.isMenuActive = !state.isMenuActive; // メニューボタンの真偽を反転
  }
};

const createStore = () =>
  new Vuex.Store({
    state,
    actions,
    mutations
  });

export default createStore;
