import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/pages/Login'
import Conversation from '@/components/pages/Conversation'
import ChatBox from '@/components/elements/ui/ChatBox'
import Register from '@/components/pages/Register'
import FirebaseDemo from '@/components/FirebaseDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/room',
      name: 'Conversation',
      component: Conversation,
      children: [
        {
          path: '',
          name: 'room',
          component: ChatBox
        },
        {
          path: 'details/:id',
          name: 'roomDetail',
          component: ChatBox
        }
      ]
    },
    {
      path: '/firebase',
      name: 'FirebaseDemo',
      component: FirebaseDemo
    }
  ]
})
