<template>
  <div class="card shadow-xl">
    <figure>
      <img
        src="https://picsum.photos/200/200"
        :alt="movie.title"
        class="object-cover"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ movie.title }}</h2>
      <p>{{ movie.genre.join(", ") }} | {{ movie.year }}</p>
      <div class="card-actions justify-end">
        <router-link
          :to="{ name: 'MovieShow', params: { id: movie.id } }"
          class="btn btn-primary"
        >
          View Details
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
// eslint-disable-next-line
defineProps({
  movie: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped></style>
