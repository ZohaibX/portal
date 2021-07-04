import http, { setJwtHeader } from "./httpService";
import config from "../config.json";
import jwtDecoded from "jwt-decode";

// Imp note
// we have all the code about saving and retrieving a jwt token only on this module
// so i can change it easily for other projects

setJwtHeader(getJwt()); // set jwt header

export async function login(user) {
  delete user.checkbox;
  const { data: jwt } = await http.post(
    config.apiEndPoint + "/api/loginUser",
    user
  );
  localStorage.setItem("token", jwt); // storing the token in user's browser
}

export function loginWithJWT(jwt) {
  // this is for registration when user should not be needed to login after registering
  localStorage.setItem("token", jwt); // i saved this token as jwtToken but it was saved as jwttoken -- that's y i accessed it like this
}

export function logout() {
  localStorage.removeItem("token");
}

export function gettingUserData() {
  try {
    const jwt = localStorage.getItem("token");
    return jwtDecoded(jwt); // this is a new npm import ooper
  } catch (e) {
    // if user doesn't have a token in his local storage -- then server will be crashed
    // to handle this exception -- we must have a try catch block
    // we don't need any alerts -- we just want system to run if user is logged in or not
    // for that reason -- we must have a try catch block -- it doesn't matter if it contains something or not
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem("token");
}
