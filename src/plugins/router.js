import Vue from 'vue'
import  VueRouter from 'vue-router'
import login from "../components/Login/login";
import OrderFormInfo from "../components/OrderFormMgmt/OrderFormInfo";

const routes = [
    { path: '/', components: { default: login } },
    { path: '/main', components: { default: OrderFormInfo } },
]

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes
})
