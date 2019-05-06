import Vuex from 'vuex';
import { getPosts } from '~/plugins/contentful.js';
import { ACTIVE_MENU, GET_POST, SUCCESS_POST, ERROR_POST, COMPLETE_POST } from './mutation-types';

const state = {
  isMenuActive: false, // メニューボタンの開閉の真偽
  posts: null, // 記事データを格納
  isCompletePost: false
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
        commit(COMPLETE_POST); // 記事データを取得
      })
      .catch(() => {
        commit(ERROR_POST); // 記事の取得に失敗した場合
        commit(COMPLETE_POST); // 記事データを取得
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
  },
  // 記事の取得に失敗した場合
  [ERROR_POST](state) {
    throw new Error(state);
  },
  [COMPLETE_POST](state) {
    state.isCompletePost = true;
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
  },
  /**
   * @param {string} slug - 選んだページのslugを受け取る
   */
  slugFilter: state => slug => {
    // slugを使ってページを絞り込み。
    return state.posts.items.filter(map => {
      return map.fields.slug === slug;
    });
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
