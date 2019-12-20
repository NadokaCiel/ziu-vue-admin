import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters';

import app from './modules/app';
import settings from './modules/settings';
import Permission from './modules/permission';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appName: 'vs-admin',
  },
  getters: {
    appName: state => state.appName,
    ...getters,
  },
  mutations: {
    SET_APP_NAME(state, name) {
      state.appName = name;
    },
  },
  actions: {
    setAppName({ commit }, name) {
      commit('SET_APP_NAME', name);
    },
  },
  // 模块化数据由此单独接入
  modules: {
    app,
    settings,
    permission: Permission.store,
  },
});