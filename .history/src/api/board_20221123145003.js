import { apiInstance } from "./index";

const api = apiInstance();

function getBoardList(param, success, fail) {
  api.get(`/board`, { params: param }).then(success).catch(fail);
}

function getArticle(param, success, fail) { }

function writeArticle(param, success, fail) { }

function getArticle(param, success, fail) { }

function getArticle(param, success, fail) { }

function getArticle(param, success, fail) { }
