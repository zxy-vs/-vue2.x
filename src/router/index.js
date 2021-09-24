import Vue from 'vue'
import VueRouter from 'vue-router'

import Cookies from 'js-cookie'

import Index from '../views/Index.vue'
import Demo from '../views/Demo.vue'
import First from '../views/First.vue'
import Contact from '../views/Contact.vue'
import  Calendar from '../views/Calendar.vue'


import Show from '../components/Show.vue'
import Plane from '../components/Plane.vue'
import Im from '../components/Im.vue'

import Home from '../components/Show/Home.vue'
import Login from '../components/Show/Login.vue'
import Signer from '../components/Show/Signer.vue'


import Pole from '../components/Show/Home/Pole.vue'
import SunBurst from '../components/Show/Home/SunBurst.vue'
import Radar from '../components/Show/Home/Radar.vue'
import Maps from '../components/Show/Home/Maps.vue'
import Time from '../components/Show/Home/Time.vue'
import Globe from '../components/Show/Home/Globe.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: '',
    component: Index,
    redirect: '/First'
  }, {
    path: '/Index',
    name: 'Index',
    component: Index
  },
  {
    path: '/Demo',
    name: 'Demo',
    component: Demo,
    redirect: '/Demo/Im',
    children: [, {
      path: '/Demo/plane',
      name: 'Plane',
      component: Plane
    }, {
      path: '/Demo/Im',
      name: 'Im',
      component: Im,
    }]
  }, {
    path: '/First',
    name: 'First',
    component: First
  }, {
    path: '/Show',
    name: 'Show',
    component: Show,
    redirect: '/Show/Home/pole',
    children: [{
      path: '/Show/Home',
      name: 'Home',
      component: Home,
      redirect:'/Show/Home/pole',
      children: [{
        path: '/Show/Home/pole',
        name: 'Pole',
        component: Pole,
      }, {
        path: '/Show/Home/sunburst',
        name: 'SunBurst',
        component: SunBurst,
      }, {
        path: '/Show/Home/radar',
        name: 'Radar',
        component: Radar,
      },{
          path: '/Show/Home/time',
          name: 'Time',
          component: Time,
      },{
        path: '/Show/Home/maps',
        name: 'Maps',
        component: Maps,
      },{
        path: '/Show/Home/globe',
        name: 'Globe',
        component: Globe,
      }]
    }, {
      path: '/Show/Login',
      name: 'Login',
      component: Login,
      meta:{
        auth:true
      },
      beforeEnter: (to, from, next) => {
        if(to.meta&&to.meta.auth){
          if((Cookies.get('name'))){
            next('/Show/Home/pole')
            alert('您已登录')
          }else{
            next();
          }
        }
      }
    },{
      path: '/Show/Signer',
      name: 'Signer',
      component: Signer,
      meta:{
        auth:true
      },
      beforeEnter: (to, from, next) => {
        if(to.meta&&to.meta.auth){
          if((Cookies.get('name'))){
            next('/Show/Home/pole')
            alert('您已注册')
          }else{
            next();
          }
        }
      }
    }]
  }, {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },{
    path: '/Calendar',
    name: 'Calendar',
    component: Calendar 
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router