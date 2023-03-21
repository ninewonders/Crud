import Vue from 'vue'
import App from '@/App.vue'

import index from '@/components/Tables-View.vue'

import patient from '@/components/Patient/ListPatient.vue'
import createpatient from '@/components/Patient/AddPatient.vue'
import editpatient from '@/components/Patient/EditPatient.vue'

import consultation from '@/components/Consultation/ListConsult'
import createconsult from '@/components/Consultation/AddConsult'
import editconsult from '@/components/Consultation/EditConsult'

import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {
    name:'index',
    path:'/',
    component: index
  },
  {
    name:'createpatient',
    path:'/patient/create',
    component: createpatient,
  },
  {
    name:'editpatient',
    path:'/patient/edit/:id',
    component: editpatient,
  },
  {
    name:'patient',
    path:'/patient',
    component: patient,
  },
  {
    name:'consultation',
    path:'/consultation',
    component: consultation,
  },
  {
    name:'createconsult',
    path:'/consultation/create',
    component: createconsult,
  },
  {
    name:'editconsult',
    path:'/consultation/edit/:id',
    component: editconsult,
  }
];

const router = new VueRouter({mode:'history', routes:routes});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

