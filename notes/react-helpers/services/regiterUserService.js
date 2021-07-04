import http from "./httpService";
import config from "../config.json";

export function savingUser(user) {
  // now we'll arrange data about the database requirements
  delete user.checkbox;
  return http.post(config.apiEndPoint + "/api/registerUser", user);
}
