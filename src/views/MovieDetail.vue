<template>
  <div class="container mx-auto p-4">
    <router-link :to="{ name: 'Home' }" class="btn btn-accent mb-5">
      Back to Movie List
    </router-link>

    <div
      class="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden"
    >
      <img
        src="https://picsum.photos/200/200"
        :alt="movie.title"
        class="w-full md:w-1/3 object-cover"
      />
      <div class="p-4 md:w-2/3">
        <h2 class="text-2xl font-bold mb-2">{{ movie.title }}</h2>
        <p class="text-gray-700 mb-4">{{ movie.description }}</p>
        <p class="text-gray-500 mb-2">
          <strong>Genre:</strong> {{ movie.genre.join(", ") }}
        </p>
        <p class="text-gray-500 mb-4">
          <strong>Release Date:</strong> {{ movie.year }}
        </p>

        <button @click="toggleFavorite" class="btn btn-primary mb-4">
          {{ isFavorite ? "Remove from Favorites" : "Add to Favorites" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const route = useRoute();

const movieId = parseInt(route.params.id);

const movie = computed(() => store.getters.getMovieById(movieId));

const isFavorite = computed(() => store.getters.isFavorite(movieId));

const toggleFavorite = () => {
  if (isFavorite.value) {
    store.dispatch("removeFavorite", movieId);
  } else {
    store.dispatch("addFavorite", movie.value);
  }
};
</script>

<style scoped></style>
