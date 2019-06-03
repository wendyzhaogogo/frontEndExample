import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test.vue'
import sockettest from "@/components/sockettest";
import tabletest from "@/tabletest";
import markdowntest from "@/view/markdowntest";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/sockettest',
      name: 'sockettest',
      component: sockettest
    },{
      path: '/tabletest',
      name: 'tabletest',
      component: tabletest
    },{
      path: '/markdowntest',
      name: 'markdowntest',
      component: markdowntest
    }
  ]
})
