import Vuex from 'vuex';
import { getPosts } from '~/plugins/contentful.js';
import { ACTIVE_MENU, GET_POST, SUCCESS_POST, ERROR_POST } from './mutation-types';

const state = {
  isMenuActive: false, // メニューボタンの開閉の真偽
  posts: null // 記事データを格納
};

const actions = {
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

const getters = {
  postFilter: state => {
    // トップの6件のみ表示
    if (state.posts.items.length > 6) {
      return state.posts.items.slice(0, 6);
    } else {
      return state.posts.items; // 6件より少ない場合はそのまま返す
    }
  }
};

const createStore = () =>
  new Vuex.Store({
    state,
    actions,
    mutations,
    getters
  });

export default createStore;
