import Vuex from 'vuex';
import { ADD_COUNT, REMOVE_COUNT } from './mutation-types';

const state = {
  count: 0
};

const actions = {
  [ADD_COUNT]({ commit }) {
    commit(ADD_COUNT);
  },
  [REMOVE_COUNT]({ commit }) {
    commit(REMOVE_COUNT);
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
  }
};

const createStore = () =>
  new Vuex.Store({
    state,
    actions,
    mutations
  });

export default createStore;
