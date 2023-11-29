import axios from "axios";

let boardStore = {
  namespaced: true,
  state: {
    boardList: [],
    searchOptions: [], // 제목, 내용, 작성자
    categoryTab: 0, // 정보공유, 우리동네
    pgno: 1,
    pageSize: "10",
    option: "title",
    keyword: null,
    pageLength: """,
  },
  getters: {},
  mutations: {
    SET_CATEGORY_TAB(state, tab) {
      state.categoryTab = tab;
    },
    SET_SEARCH_OPTIONS(state, options) {
      state.searchOptions = options;
    },
    SET_PGNO(state, pgno) {
      state.pgno = pgno;
    },
    SET_PAGE_SIZE(state, pageSize) {
      state.pageSize = pageSize;
    },
    SET_OPTION(state, option) {
      state.option = option;
    },
    SET_KEYWORD(state, keyword) {
      state.keyword = keyword;
    },
    SET_BOARD_LIST(state, boardList) {
      state.boardList = boardList;
    },
    SET_PAGE_LENGTH(state, pageLength) {
      state.pageLength = pageLength;
    },
  },
  actions: {
    async getBoardList(context) {
      await axios
        .get(
          `${process.env.VUE_APP_BACKEND_SERVER_URL}/board/${this.state.categoryTab}/${this.state.pgno}/${this.state.pageSize}`
        )
        .then(({ data }) => {
          context.commit("SET_PAGE_LENGTH", data.pageLength);
          context.commit("SET_BOARD_LIST", data.list);
        });
    },
    async searchArticles(context) {
      await axios
        .get(
          `${process.env.VUE_APP_BACKEND_SERVER_URL}/board/${this.state.categoryTab}/${this.state.pgno}/${this.state.pageSize}/${this.state.option}/${this.state.keyword}`
        )
        .then(({ data }) => {
          context.commit("SET_BOARD_LIST", data);
        });
    },
  },
};

export default boardStore;
