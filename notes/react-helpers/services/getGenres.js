import http from "./httpService";
import config from "../config.json";

export async function getGenres() {
  try {
    const { data } = await http.get(config.apiEndPoint + "/api/genres");
    return data;
  } catch (error) {
    console.log("error in getting data", error);
  }
}
//
