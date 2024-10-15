<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">Favorite Movies</h1>

    <div v-if="!favoriteMovies.length" class="text-gray-500">
      You have no favorite movies yet.
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div
        v-for="movie in favoriteMovies"
        :key="movie.id"
        class="bg-white rounded-lg shadow-md overflow-hidden"
      >
        <img
          src="https://picsum.photos/200/200"
          :alt="movie.title"
          class="w-full h-48 object-cover"
        />
        <div class="p-4">
          <h2 class="text-xl font-bold mb-2">{{ movie.title }}</h2>
          <p class="text-gray-700 mb-2">{{ movie.description }}</p>
          <button
            @click="removeFromFavorites(movie.id)"
            class="btn btn-accent mr-3"
          >
            Remove from Favorites
          </button>
          <router-link
            :to="{ name: 'MovieShow', params: { id: movie.id } }"
            class="btn btn-primary mt-2"
          >
            View Details
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const favoriteMovies = computed(() => store.state.favoriteMovies);

const removeFromFavorites = (movieId) => {
  store.dispatch("removeFavorite", movieId);
};
</script>

<style scoped></style>
