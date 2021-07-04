import http from "./httpService";
import config from "../config.json";
import { getGenres } from "./getGenres";

export async function getOriginalMovies() {
  const { data } = await http.get(config.apiEndPoint + "/api/movies");
  return data;
}

export async function getOriginalMovie(id) {
  const movies = await getOriginalMovies();
  const movie = movies.find((item) => item._id === id);
  return movie;
}

export async function deleteMovie(movieId) {
  const movies = await getOriginalMovies();
  const movie = movies.find((m) => m._id === movieId);

  await http.delete(config.apiEndPoint + "/api/movies/" + movie._id); // await laazmi kraana ae
}

export async function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    console.log(body);

    return http.put(config.apiEndPoint + "/api/movies/" + movie._id, body);
  }

  return http.post(config.apiEndPoint + "/api/movies/", movie);
}
