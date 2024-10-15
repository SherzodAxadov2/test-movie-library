<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-bold mb-5">Movie Library</h1>
    <div class="mb-4">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search by title or genre"
        class="input input-bordered w-full max-w-xs"
      />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <MovieCard
        v-for="movie in filteredMovies"
        :key="movie.id"
        :movie="movie"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import MovieCard from "@/components/MovieCard.vue";
import moviesData from "@/assets/movieList.json";

const searchQuery = ref("");
const movies = ref(moviesData);

const filteredMovies = computed(() => {
  if (!searchQuery.value.trim()) {
    return movies.value;
  }

  const lowerCaseQuery = searchQuery.value.toLowerCase();

  return movies.value.filter((movie) => {
    const titleMatch = movie.title.toLowerCase().includes(lowerCaseQuery);

    const genreMatch = movie.genre.some((genre) =>
      genre.toLowerCase().includes(lowerCaseQuery)
    );

    return titleMatch || genreMatch;
  });
});
</script>

<style scoped></style>
