import Vue from 'vue'
import VueRouter from 'vue-router'

// Diciamo a Vue di usare il router
Vue.use(VueRouter)

// Importiamo i componenti che fungono da pagine
import HomePage from './components/pages/HomePage.vue'
import PostDetailsPage from './components/pages/PostDetailsPage.vue'
import NotFoundPage from './components/pages/NotFoundPage.vue'

// Inizializziamo il Router
const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    linkActiveClass: 'active',
    routes: [
        { path: '/', component: HomePage, name: 'home' },
        { path: 'posts/{id}', component: PostDetailsPage, name: 'Post-details' },
        { path: '*', component: NotFoundPage, name: 'not-found' },
    ]
})


export default router;