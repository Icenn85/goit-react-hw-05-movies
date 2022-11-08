import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'e5eae960ae98d2ed197d9dde8e21f3aa';

export async function getTrendingMovies() {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response;
}

export async function getSearchMovies(searchQuery) {
  const { data } = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${searchQuery}&include_adult=false`
  );
  return { data };
}

export async function getMovieDetails(movieId) {
  const { data } = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
  return { data };
}

export async function getMovieCast(movieId) {
  const { data } = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return { data };
}

export async function getMovieReviews(movieId) {
  const { data } = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return { data };
}