import Vue from 'vue'
import App from '@/App.vue'

//main page import
import index from '@/components/Tables-View.vue'

//crud pages for patient imports
import patient from '@/components/Patient/ListPatient.vue'
import createpatient from '@/components/Patient/AddPatient.vue'
import editpatient from '@/components/Patient/EditPatient.vue'

//crud pages for consultation imports
import consultation from '@/components/Consultation/ListConsult'
import createconsult from '@/components/Consultation/AddConsult'
import editconsult from '@/components/Consultation/EditConsult'

//crud pages for facture imports
import facture from '@/components/Facture/ListFacture'
import createfacture from '@/components/Facture/AddFacture'
import editfacture from '@/components/Facture/EditFacture'

//crud pages for ordonnance imports
import ord from '@/components/Ordonnance/ListOrd'
import createord from '@/components/Ordonnance/AddOrd'
import editord from '@/components/Ordonnance/EditOrd'

//crud pages for certificat  imports
import cert from '@/components/Certificat_medical/ListCert'
import createcert from '@/components/Certificat_medical/AddCert'
import editcert from '@/components/Certificat_medical/EditCert'

//crud pages for medicament imports
import med from '@/components/Medicament/ListMed'
import createmed from '@/components/Medicament/AddMed'
import editmed from '@/components/Medicament/EditMed'

import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.config.productionTip = false

//routers
const routes = [
  {
    name:'index',
    path:'/',
    component: index
  },
  //patient 
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
  //consultation 
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
  },
  //facture
  {
    name:'facture',
    path:'/facture',
    component: facture,
  },
  {
    name:'createfacture',
    path:'/facture/create',
    component: createfacture,
  },
  {
    name:'editfacture',
    path:'/facture/editfacture/:id',
    component: editfacture,
  },
  //ordonnance
  {
    name:'ord',
    path:'/ord',
    component: ord,
  },
  {
    name:'createord',
    path:'/ord/createord',
    component: createord,
  },
  {
    name:'editord',
    path:'/ord/editord/:id',
    component: editord,
  },
  //ordonnance
  {
    name:'cert',
    path:'/cert',
    component: cert,
  },
  {
    name:'createcert',
    path:'/ord/createcert',
    component: createcert,
  },
  {
    name:'editcert',
    path:'/ord/editcert/:id',
    component: editcert,
  },
  //medicament
  {
    name:'med',
    path:'/med',
    component: med,
  },
  {
    name:'createmed',
    path:'/med/createmed',
    component: createmed,
  },
  {
    name:'editmed',
    path:'/med/editmed/:id',
    component: editmed,
  }
];

const router = new VueRouter({mode:'history', routes:routes});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

