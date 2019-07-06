import Vuex from 'vuex';
import menu from './modules/menu';
import post from './modules/post';

const createStore = () =>
  new Vuex.Store({
    modules: {
      menu,
      post
    }
  });

export default createStore;
