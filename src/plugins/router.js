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
import OrderExamine from "../components/OrderFormMgmt/OrderExamine"
import ExamineDetail from "../components/OrderFormMgmt/ExamineDetail"

// ClienteleMgmt
import CustomerInfo from '../components/ClienteleMgmt/CustomerInfo'
import SupplierInfo from '../components/ClienteleMgmt/SupplierInfo'

// StorageMgmt
import MainSiteInInfo from '../components/SotrageMgmt/MainSiteInInfo'
import MainSiteOutInfo from '../components/SotrageMgmt/MainSiteOutInfo'
import MainSiteInDetail from '../components/SotrageMgmt/MainSiteInDetail'
import MainSiteOutDetail from '../components/SotrageMgmt/MainSiteOutDetail'
import WarehouseMgmt from '../components/SotrageMgmt/WarehouseMgmt'

import Charts from "../components/Charts";
import SiteMap from "../components/Map/SiteMap";
import DeliverMap from "../components/Map/DeliverMap";
import CatalogInfo from "../components/SotrageMgmt/CatalogInfo"


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
            { path: 'catalogInfo', component: CatalogInfo },
            { path: 'mainsites/:mainsiteId/inventory/sitein', component: MainSiteInInfo },
            { path: 'mainsites/:mainsiteId/inventory/siteout', component: MainSiteOutInfo },
            { path: 'mainsites/:mainsiteId/inventory/sitein/:recordId', component: MainSiteInDetail },
            { path: 'mainsites/:mainsiteId/inventory/siteout/:recordId', component: MainSiteOutDetail },
            { path: 'mainsites/:mainsiteId/inventory/warehouses', component: WarehouseMgmt },
            { path: 'orderExamine', component: OrderExamine },
            { path: 'siteMap', component: SiteMap },
            { path: 'deliverMap', component: DeliverMap },
            { path: 'orderExamine/:orderId', component: ExamineDetail }
        ]
    }
]

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes
})
