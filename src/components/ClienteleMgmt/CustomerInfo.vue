<template>
  <el-row style="padding-top: 3%">

    <el-col :span="22" :offset="1">
      <BasicCard header="买家管理">
        <el-row>
          <el-col :span="4" :offset="18">
            <el-autocomplete
                    placeholder="请输入客户ID"
                    style="width: 100%"
                    v-model="keyCustomerId"
                    :fetch-suggestions="customerIdAutoCmpl"
                    :trigger-on-focus="false"
            ></el-autocomplete>
          </el-col>
          <el-col :span="2" >
            <el-button @click="clickToSearchTaskForm" type="primary" round>搜索</el-button>
          </el-col>
        </el-row>
        <el-table :data="customers">
          <el-table-column label="ID" prop="customerId"></el-table-column>
          <el-table-column label="姓名" prop="customerName"></el-table-column>
          <el-table-column label="电话" prop="customerPhone"></el-table-column>
          <el-table-column label="邮箱" prop="customerEmail"></el-table-column>
          <el-table-column label="地址" prop="customerAddress"></el-table-column>
        </el-table>

        <br />
        <el-row>
          <el-pagination
                  :current-page.sync="pageNum"
                  :page-count="totalPages"
                  layout="prev, pager, next"
                  @current-change="onPageChange"
          ></el-pagination>
        </el-row>
      </BasicCard>
    </el-col>
  </el-row>
</template>

<script>
  import BasicCard from "../PanelCard/BasicCard";
export default {
  components:{
    BasicCard,
  },
  data: () => {
    return {
      pageNum: 5,
      pageSize: 59,
      totalSize: 13,
      totalPages: 18,

      keyCustomerId:"",

      customers: [
        {
          customerId: 93633694,
          customerName: "声记小组",
          customerPhone: "18189486539",
          customerEmail: "k.bqvludanf@qq.com",
          customerAddress: "海南省玉树藏族自治州鄂托克前旗"
        },
        {
          customerId: -54997737,
          customerName: "性格身候目本或",
          customerPhone: "19835913636",
          customerEmail: "g.lihnabwx@qq.com",
          customerAddress: "澳门特别行政区平顶山市东至县"
        },
        {
          customerId: -59559654,
          customerName: "第些当类参养",
          customerPhone: "18123858686",
          customerEmail: "q.xyibjmjazy@qq.com",
          customerAddress: "青海省温州市石景山区"
        }
      ]
    };
  },
  methods:{
    fetchData:function() {
      //需要把请求结果 的 province  city district addr 合并处理到customers[i].customerAddress

    },
    onPageChange() {
      this.fetchData();
    },
    customerIdAutoCmpl(queryString, cb){
      //以queryString为依据获取cb提示  cb( Array )

      cb([{value: "dengyepeng"},{value: "wuzhijing"},{value: "fanshixu"}]);
      console.log(cb);
    },
  },
  mounted() {
    this.fetchData();
  }
};
</script>

<style scoped>
.el-col {
    padding: 20px;
}
</style>