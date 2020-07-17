<template>


    <div class="bodyl">
        <input type="checkbox" id="check">
        <label for="check">
            <i class="el-icon-menu" id="btn"></i>
            <i class="el-icon-menu" id="cancel"></i>
        </label>
    <el-row class="sidebar-self" style="background: #f7f7f7;border-radius: 10px">
        <el-col >
            <h3 style="padding-left: 100px;padding-top: 10px;padding-bottom: 20px">管理菜单

            </h3>

            <el-menu style="background: #f8f8f8;" :router="true" :unique-opened="true">
                <el-submenu index="1" class="center">
                    <template slot="title" style="background: #fefffe;">
                        <i class="el-icon-user-solid"></i>
                        <span> 客户管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="/main/customers"><span class="cursorHover"><a>买家管理</a></span></el-menu-item>
                        <el-menu-item index="/main/suppliers" style="padding-left: 52px"><span class="cursorHover"><a>供应商管理</a></span></el-menu-item>
                    </el-menu-item-group>
<!--                    <el-submenu index="1-3">-->
<!--                        <template slot="title">三级菜单案例</template>-->
<!--                        <el-menu-item index="1-3-1">选项1</el-menu-item>-->
<!--                    </el-submenu>-->
                </el-submenu>

                <el-submenu index="2" class="center">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>配置策略</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="2-1" ><span class="cursorHover"><a>调货策略</a></span></el-menu-item>
                        <el-menu-item index="2-2"><span class="cursorHover"><a>补货策略</a></span></el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item index="2-3"><span class="cursorHover"><a>分配策略</a></span></el-menu-item>
                    <el-menu-item index="2-4"><span class="cursorHover"><a>发货策略</a></span></el-menu-item>
                </el-submenu>

                <el-submenu index="3" class="center">
                    <template slot="title">
                        <i class="el-icon-s-order"></i>
                        <span>订单管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="/main/orderForm"><span class="cursorHover"><a>订单查询</a></span></el-menu-item>

                        <!--                        <el-menu-item index="3-2"><span class="cursorHover"><a>新增订单</a></span></el-menu-item>-->
                    </el-menu-item-group>
                    <el-menu-item index="/main/orderExamine"><span class="cursorHover"><a>订单审核</a></span></el-menu-item>
                    <el-menu-item index="/main/returnForm"><span class="cursorHover"><a>退货换单</a></span></el-menu-item>
                    <el-menu-item index="/main/charts"><span class="cursorHover" ><a>统计报表</a></span></el-menu-item>
                </el-submenu>

                <el-submenu index="4" class="center">
                    <template slot="title">
                        <i class="el-icon-s-home"></i>
                        <span>仓储管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="/main/siteMap"><span class="cursorHover"><a>站点地图</a></span></el-menu-item>
                    </el-menu-item-group>

                    <el-submenu index="4-3">
                        <span slot="title" class="cursorHover"><a>主站管理</a></span>
                       <el-menu-item index="/main/mainsites/:mainsiteId/inventory/sitein">出库审核</el-menu-item>
                        <el-menu-item index="/main/mainsites/:mainsiteId/inventory/siteout">入库审核</el-menu-item>
                    </el-submenu>

                    <el-menu-item index="/main/catalogInfo" style="padding-left: 68px"><span class="cursorHover"><a>整体商品信息</a></span></el-menu-item>
                </el-submenu>

                <el-submenu index="5" class="center">
                    <template slot="title">
                        <i class="el-icon-s-promotion"></i>
                        <span>配送管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="/main/taskForm" style="padding-left: 52px"><span class="cursorHover"><a>任务单管理</a></span></el-menu-item>
                        <el-menu-item index="5-2"><span class="cursorHover"><a>路径管理</a></span></el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item index="5-3" style="padding-left: 52px"><span class="cursorHover"><a>配送站管理</a></span></el-menu-item>
                </el-submenu>

            </el-menu>
        </el-col>
    </el-row>
        <div id="page">
            <router-view ></router-view>
        </div>
    </div>

</template>

<script>
    export default {
        name: "LeftMenu",
        data:function(){
          return{
              isDeepColor:false,
          }
        },
        watch: {
            $route: {
                handler: function(route) {
                    var routerArr = route.path.split("/");
                    var details = routerArr[routerArr.length-1];
                    if(details=="details"){
                        document.getElementById("page").style.height = "1500px";
                    }
                    else{
                        document.getElementById("page").style.height = "738px";
                    }

                    if(route.path == "/main/charts"){
                        document.getElementById("page").style.background = "#706caa";
                        document.getElementById("page").style.transition = "1.5s";
                    }
                    else{
                        document.getElementById("page").style.background = "#eff3f9";
                        document.getElementById("page").style.transition = "1s";
                    }
                },

            }
        },

    }
</script>

<style type="text/css" src="../../assets/css/left.css" scoped>

</style>