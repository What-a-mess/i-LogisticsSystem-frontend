<template>
    <el-container>
        <el-header class="flex shadow-down bg-white"
                   style="height: 4.325rem;">
            <TopBar />
        </el-header>

        <el-container style="margin-top: 4.325rem;">

            <!--侧边栏控制按钮-->
            <input type="checkbox" id="check" checked>
            <label for="check">
                <i class="el-icon-menu" id="cancel"></i>
            </label>

            <el-aside class="bg-white shadow-right">
                <LeftMenu/>
            </el-aside>

            <el-main class="bg-blue-gray">
                <router-view ></router-view>
            </el-main>

        </el-container>

    </el-container>
</template>

<script>
    import TopBar from "./TopAndLeft/TopBar";
    import LeftMenu from "./TopAndLeft/LeftMenu";
    export default {
        name: "Main",
        components: {LeftMenu, TopBar},
    }
</script>

<style type="text/css" src="@/assets/css/main.css" scoped>
</style>