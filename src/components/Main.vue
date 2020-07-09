<template>
  <div>
    <el-container>
      <el-top>
        <TopBar />
      </el-top>

      <el-container>
        <el-aside>
          <br/><br />
          <LeftMenu />
        </el-aside>
        <el-main :style="note">
          <router-view style="padding-top: 10px"></router-view>
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
  components: { LeftMenu, TopBar },
  data:function(){
    return{
      note:{
        background: "#eff3f9",
        height: "770px",
        marginLeft:"0px"
      }
    }
  },
  methods:{
    checked:function(e){
      console.log("xx");
      if(e) {
        this.note.marginLeft = "300px";
      }
      else{
        this.note.marginLeft = "0px";
      }
},
  }
};
</script>

<style scoped>
</style>