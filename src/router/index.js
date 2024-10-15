import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/views/HomePage.vue';
import MovieDetail from '@/views/MovieDetail.vue';
import Favorites from '@/views/FavoritesPage.vue';

const routes = [
    {path: '/', component: () => Home},
    {path: '/movie/:id', component: () => MovieDetail},
    {path: '/favorites', component: () => Favorites}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
