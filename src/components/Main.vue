<template>
  <div>
    <el-container>
      <el-top>
        <TopBar />
      </el-top>
      <el-container>
        <el-aside>
          <br/>
          <LeftMenu />
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import TopBar from "./TopAndLeft/TopBar";
import LeftMenu from "./TopAndLeft/LeftMenu";
export default {
  name: "Main",
  components: { LeftMenu, TopBar }
};
</script>

<style scoped>
</style>