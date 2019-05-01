import Vuex from 'vuex';
import { getPosts } from '~/plugins/contentful.js';
import { ADD_COUNT, REMOVE_COUNT, ACTIVE_MENU, GET_POST, SUCCESS_POST, ERROR_POST } from './mutation-types';

const state = {
  count: 0,
  isMenuActive: false, // メニューボタンの開閉の真偽
  posts: null // 記事データを格納
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
  },
  // 記事データを取得
  async [GET_POST]({ commit }) {
    await getPosts()
      .then(res => {
        commit(SUCCESS_POST, { res }); // メニューボタンの真偽を反転
      })
      .catch(() => {
        commit(ERROR_POST); // 記事の取得に失敗した場合
      });
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
  },
  // 記事の取得に成功した場合
  [SUCCESS_POST](state, payload) {
    state.posts = payload.res; // 記事データを格納
    console.log(payload.res); // デバッグ用
  },
  // 記事の取得に失敗した場合
  [ERROR_POST](state) {
    console.log(state);
    console.error('失敗');
  }
};

const createStore = () =>
  new Vuex.Store({
    state,
    actions,
    mutations
  });

export default createStore;
