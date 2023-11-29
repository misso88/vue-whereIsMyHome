let boardStore = {
  namespaced: true,
  state: {
    searchOptions: [],
    communityTab: 0,
    pgno: 1,
    pageSize: 10,
    currentOption: null,
    keyword: null,
  },
  getters: {},
  mutations: {
    SET_COMMUNITY_TAB(state, tab) {
      state.communityTab = tab;
    },
    SET_SEARCH_OPTIONS(state, options) {
      state.searchOptions = options;
    },
  },
  actions: {
    async getCommunityList(context) { 

    }
  },
};

export default boardStore;
