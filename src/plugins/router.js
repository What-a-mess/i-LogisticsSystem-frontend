import Vue from 'vue'
import  VueRouter from 'vue-router'
import login from "../components/Login/login";
import OrderFormInfo from "../components/OrderFormMgmt/OrderFormInfo";
import ReturnFromInfo from "../components/OrderFormMgmt/ReturnFromInfo"
import Main from "../components/Main";
import OrderFormDetails from '../components/OrderFormMgmt/OrderFormDetails'
import TestComponents from "../components/TestComponents";

const routes = [
    // 组件测试路由
    { path: '/test', components: { default: TestComponents} },
    { path: '/', components: { default: login } },
    { path: '/main', component: Main,
        children: [
            { path: '', component: OrderFormInfo },
            { path: 'returnFrom', component: ReturnFromInfo },
            { path: 'orderFrom', component: OrderFormInfo },
            { path: 'order/:orderId/details', component:OrderFormDetails }
        ]
    }
]

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes
})
