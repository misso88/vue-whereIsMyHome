import { apiInstance } from "./index";

const api = apiInstance();
const memberURL = "/member";

// emailId, pass
function login(member, success, fail) {
  api.post(`${memberURL}`, JSON.stringify(member)).then(success).catch(fail);
}

// emailId, pass, name, nickname, phoneNumber
function join(member, success, fail) {
  api.post(`${memberURL}/join`, JSON.stringify(member)).then(success).catch(fail);
}

// emailId
function checkEmailId(member, success, fail) {
  api.post(`${memberURL}/check`, JSON.stringify(member)).then(success).catch(fail);
}

// /{emailId}
function searchPw(emailId, success, fail) {
  api.get(`${memberURL}/${emailId}`).then(success).catch(fail);
}

//
function updateMember(member, success, fail) {
  api.put(`${memberURL}/update`, JSON.stringify(member)).then(success).catch(fail);
}

// emailId
function quit(member, success, fail) {
  api.delete(`${memberURL}`, JSON.stringify(member)).then(success).catch(fail);
}

export { login, join, checkEmailId, searchPw, updateMember, quit };
