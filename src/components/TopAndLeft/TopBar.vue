<template>
  <nav class="topnav bg-white">
    <el-row type="flex" align="middle">
      <el-col :span="1">

      </el-col>
      <el-col :span="2">
        <h3><a class="navbar-brand">物流管理系统</a></h3>
      </el-col>
      <el-col :span="1">

      </el-col>
      <el-col :span="4" :offset="-1">
        <el-autocomplete
          v-model="modulesKey"
          :fetch-suggestions="queryModules"
          placeholder="Search"
        >
          <i class="el-icon-search el-input__icon" slot="suffix"></i>
        </el-autocomplete>
      </el-col>
      <el-col :span="1" :offset="12">
            <i class="el-icon-refresh" style="font-size: 20px"></i>
      </el-col>
      <el-col :span="1">
        <el-dropdown>
          <span class="el-dropdown-link">
            <i class="el-icon-message-solid" style="font-size: 20px"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <!-- TODO: 目前还没有决定好这里面会有何条目 -->
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>

      <el-col :span="1">
        <el-dropdown>
          <div class="demo-basic--circle">
            <div class="block">
              <el-avatar
                size="large"
                src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
              ></el-avatar>
            </div>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item>注销</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </nav>

</template>

<script>
export default {
  name:'TopBar',
  data: function() {
    return {
      modules: [
        { value: "买家管理" },
        { value: "供应商管理" },
        { value: "调货策略" },
        { value: "补货策略" },
        { value: "分配策略" },
        { value: "发货策略" },
        { value: "订单查询" },
        { value: "新增订单" },
        { value: "订单审核" },
      ],
      modulesKey: ""
    };
  },
  methods: {
    queryModules(queryString, cb) {
      var modules = this.modules;
      var results = queryString
        ? modules.filter(module => {
            return (
              module.value.toLowerCase().indexOf(queryString.toLowerCase()) > -1
            );
          })
        : modules;
      cb(results);
    }
  }
};
</script>

<style scoped>
.el-row {
  margin-bottom: 10px;
  margin-top: 10px;
}

.topnav {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1039;
}
.bg-white {
  background-color: #fff !important;
  box-shadow: 0px 6px 5px #a89dac;
}
.topnav .navbar-brand {
  /* width: 15rem;
    padding-left: 1rem;
    padding-right: 1rem;
    margin: 0;
    font-size: 1rem; */
  font-weight: bold;

}
.el-dropdown-link {
  cursor: pointer;
  font-weight: bold;
}
.el-icon-arrow-down {
  font-size: 12px;
}



</style>