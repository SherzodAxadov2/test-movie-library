import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/views/HomePage.vue';
import MovieDetail from '@/views/MovieDetail.vue';
import Favorites from '@/views/FavoritesPage.vue';

const routes = [
    {path: '/', name: 'Home', component: () => Home},
    {path: '/movie/:id', name: 'MovieShow', component: () => MovieDetail},
    {path: '/favorites', name: 'Favorites', component: () => Favorites}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
