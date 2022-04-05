import Vue from 'vue'
import VueRouter from 'vue-router'

// Diciamo a Vue di usare il router
Vue.use(VueRouter)

// Importiamo i componenti che fungono da pagine
import HomePage from './components/pages/HomePage.vue'

// Inizializziamo il Router
const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: HomePage }
    ]
})


export default router;