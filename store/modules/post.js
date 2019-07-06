import { GET_POST, SUCCESS_POST, ERROR_POST, COMPLETE_POST } from '../mutation-types';
import { getPosts } from '~/plugins/contentful.js';

export default {
  namespaced: true,
  state: {
    posts: null, // 記事データを格納
    isCompletePost: false // 記事を取得できたか管理
  },
  actions: {
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
  },
  mutations: {
    // 記事の取得に成功した場合
    [SUCCESS_POST](state, payload) {
      console.log(state);
      state.posts = payload.res; // 記事データを格納
    },
    // 記事の取得に失敗した場合
    [ERROR_POST](state) {
      throw new Error(state);
    },
    [COMPLETE_POST](state) {
      state.isCompletePost = true;
    }
  },
  getters: {
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
  }
};
