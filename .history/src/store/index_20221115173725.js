import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    type: null,
    boardList: [],
    
  },
  getters: {
  },
  mutations: {
    SET_TYPE (state, type) {
      state.type = type;
    },
    SET_LIST(state, list) {
      state.boardList = list;
    }
  },
  actions: {
    setList()
  },
  modules: {},
  plugins: [
    createPersistedState({
      // 브라우저 종료시 제거하기 위해 localStorage가 아닌 sessionStorage로 변경. (default: localStorage)
      storage: sessionStorage,
    }),
  ],
  
})
