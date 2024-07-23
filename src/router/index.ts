import JSComponent from '@/components/JSComponent.vue'
import PythonComponent from '@/components/PythonComponent.vue'
import AccueilView from '@/views/AccueilView.vue'
import AproposView from '@/views/AproposView.vue'
import GuidesView from '@/views/GuidesView.vue'
import RessourcesView from '@/views/RessourcesView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: AccueilView,
      children: [
        { path: '', name: 'jscomponent', component: JSComponent },
        { path: 'python', name: 'python', component: PythonComponent }
      ]
    },
    {
      path: '/guides',
      name: 'guides',
      component: GuidesView
    },
    {
      path: '/ressources',
      name: 'ressources',
      component: RessourcesView
    },
    {
      path: '/apropos',
      name: 'apropos',
      component: AproposView
    }
  ]
})

export default router
