import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import About from '@/components/about'
import Contact from '@/components/contact'
import Login from '@/customer/login'
import Signup from '@/customer/signup'
import CustomerData from '@/customer/customer-data'
import CustomersList from '@/customer/customers-list'
import ShoppingCart from '@/shopping-cart/shopping-cart'
import CartView from '@/shopping-cart/cart-view'
import CartAddedList from '@/shopping-cart/cart-added-list'
import Todo from '@/todos/todo'
import TodoCart from '@/todos/todo-cart'
import TodoCheckout from '@/todos/todo-checkout'
import UserSignup from '@/users/user-signup'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/customer-data/:id',
      name: 'CustomerData',
      component: CustomerData
    },
    {
      path: '/customers-list',
      name: 'CustomerList',
      component: CustomersList
    },
    {
      path: '/shopping-cart',
      name: 'ShoppingCart',
      component: ShoppingCart,
      children: [
        {
          path: ':id',
          name: 'CartView',
          component: CartView
        }
      ]
    },
    {
      path: '/cart-added-list',
      name: 'CartAddedList',
      component: CartAddedList
    },
    {
      path: '/todo',
      name: 'Todo',
      component: Todo
    },
    {
      path: '/todo-cart',
      name: 'TodoCart',
      component: TodoCart
    },
    {
      path: '/todo-checkout',
      name: 'TodoCheckout',
      component: TodoCheckout
    },
    {
      path: '/user-signup',
      name: 'UserSignup',
      component: UserSignup
    },
  ]
})
