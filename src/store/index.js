import { createStore } from "vuex";
import moviesData from "@/assets/movieList.json";

export const store = createStore({
  state: {
    movies: moviesData,
    favoriteMovies: JSON.parse(localStorage.getItem("favoriteMovies")) || [],
  },
  mutations: {
    ADD_FAVORITE(state, movie) {
      state.favoriteMovies.push(movie);
      localStorage.setItem(
        "favoriteMovies",
        JSON.stringify(state.favoriteMovies)
      );
    },
    REMOVE_FAVORITE(state, movieId) {
      state.favoriteMovies = state.favoriteMovies.filter(
        (m) => m.id !== movieId
      );
      localStorage.setItem(
        "favoriteMovies",
        JSON.stringify(state.favoriteMovies)
      );
    },
  },
  actions: {
    addFavorite({ commit }, movie) {
      commit("ADD_FAVORITE", movie);
    },
    removeFavorite({ commit }, movieId) {
      commit("REMOVE_FAVORITE", movieId);
    },
  },
  getters: {
    isFavorite: (state) => (movieId) => {
      return state.favoriteMovies.some((m) => m.id === movieId);
    },
    getMovieById: (state) => (movieId) => {
      return state.movies.find((m) => m.id === movieId);
    },
  },
});
