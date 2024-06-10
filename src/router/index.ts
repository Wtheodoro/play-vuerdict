import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/all-games',
      name: 'all games',
      component: () => import('../views/AllGamesView.vue')
    },
    {
      path: '/games/:name/:id',
      name: 'games',
      component: () => import('../views/games/GameView.vue')
    },
    {
      path: '/add-review',
      name: 'review',
      component: () => import('../views/AddReviewView.vue')
    }
  ]
})

export default router
