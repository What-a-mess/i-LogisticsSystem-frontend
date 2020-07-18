<template>
  <div>
    <el-row>
      <el-col :offset="1">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/main' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>订单管理</el-breadcrumb-item>
          <el-breadcrumb-item>订单查询</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
    <br />
    <BasicCard header="订单总览" style="left: 1.5%;width: 98.5%">
      <el-row>
        <el-col style="padding-left: 20px">
          <!-- 筛选信息行 -->
          <el-row>
            <el-col>
              <el-form :inline="true" :model="inlineQuery">
                <el-form-item label="用户名">
                  <el-autocomplete
                    style="width: 140px"
                    v-model="inlineQuery.userIdQuery"
                    :fetch-suggestions="userIdAutoCmpl"
                    :trigger-on-focus="false"
                  ></el-autocomplete>
                </el-form-item>
                <el-form-item label=" 订单ID">
                  <el-input style="width: 140px" v-model="inlineQuery.orderIdQuery"></el-input>
                </el-form-item>
                <el-form-item label=" 订单状态">
                  <el-select style="width: 150px" v-model="inlineQuery.orderStatus" clearable>
                    <el-option label="未处理" value="N"></el-option>
                    <el-option label="处理中" value="P"></el-option>
                    <el-option label="交易成功" value="D"></el-option>
                    <el-option label="交易关闭" value="C"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label=" 日期">
                  <el-date-picker
                    v-model="dateRange"
                    type="daterange"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :default-time="['00:00:00', '23:59:59']"
                    value-format="yyyy-MM-dd HH:mm:ss"
                  ></el-date-picker>
                </el-form-item>
                <el-button type="primary" @click="fetchData">搜索</el-button>
              </el-form>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-table :data="orderForms">
                <el-table-column label="订单ID" prop="orderId"></el-table-column>
                <el-table-column label="收件人" prop="billName"></el-table-column>
                <el-table-column label="状态">
                  <template slot-scope="scope">
                    <el-tag v-if="scope.row.processStatus=='N'" type="danger">未处理</el-tag>
                    <el-tag v-else-if="scope.row.processStatus=='P'" type="warning">处理中</el-tag>
                    <el-tag v-else-if="scope.row.processStatus=='D'" type="success">交易成功</el-tag>
                    <el-tag v-else-if="scope.row.processStatus=='C'" type="info">交易关闭</el-tag>
                  </template>
                </el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button type="primary" @click="clickToOrderDetails(scope.row.orderId)">查看详情</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row>
        <el-pagination
          :current-page.sync="curPage"
          :page-count="totalPages"
          layout="prev, pager, next"
          @current-change="onPageChange"
        ></el-pagination>
      </el-row>
    </BasicCard>
  </div>
</template>

<script>
// import myaxios from "../../plugins/myaxios";
import { getOrders } from "../../api/orders";
import BasicCard from "../PanelCard/BasicCard";

export default {
  components: { BasicCard },
  data: function() {
    return {
      input: "",
      select: "",
      dateRange: "",
      value2: "",
      sDay: "",
      eDay: "",

      inlineQuery: {
        userIdQuery: "",
        orderIdQuery: "",
        orderStatus: ""
      },

      orderForms: [],
      pageSize: 10,
      totalPages: 5,
      curPage: 1,

      orderDetailRoute: ""
    };
  },
  methods: {
    fetchData() {
      getOrders({
        billName: this.inlineQuery.userIdQuery,
        orderId: this.inlineQuery.orderIdQuery,
        processStatus: this.inlineQuery.orderStatus,
        dateFrom: this.dateRange ? this.dateRange[0] : null,
        dateTo: this.dateRange ? this.dateRange[1] : null,
        pageNum: this.curPage,
        pageSize: 8
      }).then(res => {
        this.orderForms = res.data.content;
        this.totalPages = res.data.totalPages;
      });
    },
    clickToOrderDetails: function(e) {
      this.$router.push("/main/order/" + e + "/details");
    },

    onPageChange() {
      console.log("page", this.curPage);
      this.fetchData();
    },

    // addOrder:function(e){
    //   var newOrder = {};
    //   for(var k in e){
    //     newOrder[k] = e[k];
    //   }
    //   this.orderForms.push(newOrder);
    // },

    userIdAutoCmpl(queryString, cb) {
      queryString;
      cb([{ value: "123" }, { value: "321" }]);
    }
  },
  mounted: function() {
    this.fetchData();
  }
};
</script>

<style scoped>
.el-row {
  padding-top: 20px;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>