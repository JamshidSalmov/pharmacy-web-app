import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/weather',
    name: 'weather',
    meta: {layout: 'main'},
    component: () => import(/* webpackChunkName: "about" */ '../views/Weather.vue')
  },
  {
    path: '/tableone',
    name: 'tableone',
    meta: {layout: 'main'},
    component: () => import(/* webpackChunkName: "about" */ '../views/RegistrProduct/RigstrPro.vue')
  },
  {
    path: '/addition/:id',
    name: 'addition',
    meta: {layout: 'main'},
    component: () => import(/* webpackChunkName: "about" */ '@/components/MarketCmponents/ProductPage.vue')
  },
  {
    path: '/page/:id',
    name: 'page',
    meta: {layout: 'main'},
    component: () => import(/* webpackChunkName: "about" */ '@/components/MarketCmponents/MeasurePage.vue')
  },
  {
    path: '/measure',
    name: 'measure',
    meta: {layout: 'main'},
    component: () => import(/* webpackChunkName: "about" */ '../views/Measuriment/Measure.vue')
  },
  {
    path: '/pagecat/:id',
    name: 'pagecat',
    meta: {layout: 'main'},
    component: () => import(/* webpackChunkName: "about" */ '@/components/MarketCmponents/CatigoryPage.vue')
  },
  {
    path: '/catigory',
    name: 'catigory',
    meta: {layout: 'main'},
    component: () => import(/* webpackChunkName: "about" */ '../views/Catigory/Catigory.vue')
  },
  {
    path: '/user',
    name: 'user',
    meta: {layout: 'main'},
    component: () => import(/* webpackChunkName: "about" */ '../views/UserPage/UserPage.vue')
  },
  {
    path: '/userpagee/:id',
    name: 'userpagee',
    meta: {layout: 'main'},
    component: () => import(/* webpackChunkName: "about" */ '@/components/MarketCmponents/UserComponents/UserPagee.vue')
  },
  {
    path: '/secure/:id',
    name: 'secure',
    meta: {layout: 'main'},
    component: () => import(/* webpackChunkName: "about" */ '@/components/MarketCmponents/Secure/SecurePage.vue')
  },
  {
    path: '/company',
    name: 'company',
    meta: {layout: 'main'},
    component: () => import(/* webpackChunkName: "about" */ '@/views/Company_id/Company_id.vue')
  },
  {
    path: '/company/:id',
    name: 'companypage',
    meta: {layout: 'main'},
    component: () => import(/* webpackChunkName: "about" */ '@/components/MarketCmponents/Company_id/CompanyPage.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {layout: 'login'},
    component: () => import(/* webpackChunkName: "about" */ '@/views/LoginPage/LoginPage.vue')
  },
  {
    path: '/otdel',
    name: 'otdel',
    meta: {layout: 'main'},
    component: () => import(/* webpackChunkName: "about" */ '@/views/Otdel/OtdelPage.vue')
  },
  {
    path: '/otdelform/:id',
    name: 'otdelform',
    meta: {layout: 'main'},
    component: () => import(/* webpackChunkName: "about" */ '@/components/MarketCmponents/Otdel/OtdelFormPage.vue')
  },
  {
    path: '/sklad',
    name: 'sklad',
    meta: {layout: 'main'},
    component: () => import(/* webpackChunkName: "about" */ '@/views/Sklad/SkladPage.vue')
  },
  {
    path: '/skladform/:id',
    name: 'skladform',
    meta: {layout: 'main'},
    component: () => import(/* webpackChunkName: "about" */ '@/components/MarketCmponents/Sklad/SkladFormPage.vue')
  },
  {
    path: '/buyform/:id',
    name: 'buyform',
    meta: {layout: 'denamec'},
    component: () => import(/* webpackChunkName: "about" */ '@/components/MarketCmponents/Buy/BuyFormPage.vue')
  },
  {
    path: '/buy',
    name: 'buy',
    meta: {layout: 'main'},
    component: () => import(/* webpackChunkName: "about" */ '@/views/Buy/BuyPage.vue')
  },
  {
    path: '/salepage',
    name: 'salepage',
    meta: {layout: 'sale'},
    component: () => import(/* webpackChunkName: "about" */ '@/components/MarketCmponents/Sale/SaleFormPage.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, form, next)=>{
  if(to.path != '/login'){
    if(localStorage.Login != ''){
      next()
    }
    else{
      next('/login')
    }
  }
  else{
    next()
  }
})

export default router
