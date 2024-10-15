<template>
  <nav class="navbar">
    <div class="flex-1">
      <router-link :to="{ name: 'Home' }" class="btn btn-ghost text-xl"
        >Movie Library</router-link
      >
    </div>
    <div>
      <ul class="menu menu-horizontal gap-2 p-0">
        <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
        <li>
          <router-link :to="{ name: 'Favorites' }">Favorites</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup></script>

<style scoped></style>
