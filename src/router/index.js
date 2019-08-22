import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)
const Home =()=>import('../view/home/Home.vue')
const Cart=()=>import('../view/cart/Cart.vue')
const Categery=()=>import('../view/categery/Categery.vue')
const Profile=()=>import('../view/profile/Profile.vue')
const routes=[
    { 
        path: '',
        redirect: "/home"
     },
    {
        path:'/home',
        component:Home
    },
    {
         path:'/cart',
         component:Cart
    },
    {
         path:'/categery',
         component:Categery
    },
    {
         path:'/profile',
         component:Profile
    }
]
const router =new VueRouter({
    routes,
    mode:'history'
})
export default router