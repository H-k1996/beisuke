import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [{
      path: "/",
      name: "Home",
      redirect: '/Home'
    },
    {
      path: '/Home',
      component: () => import('./views/Home/Home.vue')
    },
    {
      path: '/Shanghai',
      component: () => import('./components/Shanghai/Shanghai.vue')
    }, {
      path: '/Changzhou',
      component: () => import('./components/Changzhou/Changzhou.vue')
    },
    {
      path: "/Classify",
      name: "classify",
      component: () => import('./views/Classify/Classify.vue')
    },
    {
      path: "/Shopping",
      name: "shopping",
      component: () => import('./views/Shopping/Shopping.vue')
    },
    {
      path: "/My",
      name: "my",
      component: () => import('./views/My/My.vue')
    }
  ]
});