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
import RessourcesComponent from '@/components/RessourcesComponent.vue'
import GetComponent from '@/components/GetComponent.vue'
import PutComponent from '@/components/PutComponent.vue'
import DeleteComponent from '@/components/DeleteComponent.vue'
import PatchComponent from '@/components/PatchComponent.vue'
import PostComponent from '../components/PostComponent.vue'
import GetJsComponent from '@/components/GetJsComponent.vue'
import GetPyComponent from '@/components/GetPyComponent.vue'

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
      component: GuidesView,
      children: [
        { path: '', name: 'ressources', component: RessourcesComponent },
        {
          path: 'get',
          name: 'get',
          component: GetComponent,
          children: [
            { path: '', name: 'getjscomponent', component: GetJsComponent },
            { path: 'getpython', name: 'getpythoncomponent', component: GetPyComponent }
          ]
        },
        {
          path: 'put',
          name: 'put',
          component: PutComponent
        },
        { path: 'patch', name: 'patch', component: PatchComponent },
        { path: 'delete', name: 'delete', component: DeleteComponent },
        { path: 'post', name: 'post', component: PostComponent }
      ]
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
