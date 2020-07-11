import Vue from 'vue'
import VueRouter from 'vue-router'
import login from "../components/Login/login";
import Main from "../components/Main";

import TestComponents from "../components/TestComponents";

// OrderFormMgmt
import OrderFormInfo from "../components/OrderFormMgmt/OrderFormInfo";
import OrderFormDetails from '../components/OrderFormMgmt/OrderFormDetails'
import ReturnFormInfo from "../components/OrderFormMgmt/ReturnFormInfo"
import PreSortRes from "../components/OrderFormMgmt/PreSortRes"

// ClienteleMgmt
import CustomerInfo from '../components/ClienteleMgmt/CustomerInfo'
import SupplierInfo from '../components/ClienteleMgmt/SupplierInfo'

// StorageMgmt
import MainSiteIOInfo from '../components/SotrageMgmt/MainSiteIOInfo'

import Charts from "../components/Charts";

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
            { path: 'PreSortRes', component: PreSortRes },
            { path: 'charts', component: Charts },
            { path: 'customers', component: CustomerInfo },
            { path: 'suppliers', component: SupplierInfo },
            { path: 'mainSiteIO', component: MainSiteIOInfo }
        ]
    }
]

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes
})
