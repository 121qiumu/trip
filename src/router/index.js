import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      component: () => import("@/views/home/home.vue"),
      meta: {
        hiddentabbar: false
      }
    },
    {
      path: "/collect",
      component: () => import("@/views/collect/collect.vue"),
      meta: {
        hiddentabbar: false
      }
    },
    {
      path: "/order",
      component: () => import("@/views/order/order.vue"),
      meta: {
        hiddentabbar: false
      }
    },
    {
      path: "/message",
      component: () => import("@/views/message/message.vue"),
      meta: {
        hiddentabbar: false
      }
    },
    {
      path: "/city",
      component: () => import("@/views/city/city.vue"),
      meta: {
        hiddentabbar: true
      }
    }
  ]
})

export default router
