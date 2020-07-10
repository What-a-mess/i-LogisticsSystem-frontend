import Vue from 'vue'
import VueRouter from 'vue-router'
import login from "../components/Login/login";
import OrderFormInfo from "../components/OrderFormMgmt/OrderFormInfo";
import ReturnFormInfo from "../components/OrderFormMgmt/ReturnFormInfo"
import Main from "../components/Main";
import OrderFormDetails from '../components/OrderFormMgmt/OrderFormDetails'
import TestComponents from "../components/TestComponents";

// ClienteleMgmt
import CustomerInfo from '../components/ClienteleMgmt/CustomerInfo'
import SupplierInfo from '../components/ClienteleMgmt/SupplierInfo'

const routes = [
    // 组件测试路由
    { path: '/test', components: { default: TestComponents} },
    { path: '/', components: { default: login } },
    {
        path: '/main', component: Main,
        children: [
            { path: '', component: OrderFormInfo },
            { path: 'returnForm', component: ReturnFormInfo },
            { path: 'orderForm', component: OrderFormInfo },
            { path: 'order/:orderId/details', component: OrderFormDetails },
            { path: 'customers', component: CustomerInfo },
            { path: 'suppliers', component: SupplierInfo }
        ]
    }
]

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes
})
