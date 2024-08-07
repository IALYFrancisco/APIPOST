import JSComponent from '@/components/JSComponent.vue'
import PythonComponent from '@/components/PythonComponent.vue'
import AvecquoiestelledeveloppeeComponent from '@/components/AvecquoiestelledeveloppeeComponent.vue'
import EtapededeveloppementComponent from '@/components/EtapededeveloppementComponent.vue'
import GithubComponent from '@/components/GithubComponent.vue'
import QuiladeveloppeeComponent from '@/components/QuiladeveloppeeComponent.vue'
import AccueilView from '@/views/AccueilView.vue'
import AproposView from '@/views/AproposView.vue'
import GuidesView from '@/views/GuidesView.vue'
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
      path: '/apropos',
      name: 'apropos',
      component: AproposView,
      children: [
        { path: '', name: 'quiladeveloppee', component: QuiladeveloppeeComponent },
        {
          path: 'avec quoiestelledeveloppee',
          name: 'avecquoiestelledevelopee',
          component: AvecquoiestelledeveloppeeComponent
        },
        {
          path: 'etapesdedeveloppement',
          name: 'etapesdedeveloppement',
          component: EtapededeveloppementComponent
        },
        { path: 'github', name: 'github', component: GithubComponent }
      ]
    }
  ]
})

export default router
