<template>
  <div>
      <el-row>
          <el-col :span="1" :offset="22">
              <AddOrder />
          </el-col>
      </el-row>

    <BasicCard class="display-box" header="待审核订单">
      <el-table :data="orderMsgs">
          <el-table-column label="订单ID" prop="orderId"></el-table-column>
          <el-table-column :width="240" label="收件人姓名" prop="billName"></el-table-column>
          <el-table-column label="订单创建时间" prop="createDateTime"></el-table-column>
          <el-table-column :width="240" label="订单总价" prop="totalPrice"></el-table-column>
          <el-table-column label="操作">
              <template slot-scope="scope">
                  <el-button type="danger" @click="clickToRejectOrder(scope.row)">拒绝</el-button>
                  <el-button  type="success" @click="clickToPassOrder(scope.row)">通过</el-button>
                  <router-link style="padding-left: 3%" :to="orderDetailRoute"><el-button type="primary" @click="clickToExamOrderDetails(scope.row.orderId)">查看详情</el-button>
                  </router-link>
              </template>
          </el-table-column>
      </el-table>
    </BasicCard>
  </div>
</template>

<script>
import BasicCard from "../PanelCard/BasicCard";
import AddOrder from "./add-order";

export default {
  components: { BasicCard,
            AddOrder},
    methods:{
        clickToRejectOrder:function (e) {
            this.$confirm('此操作将拒绝该订单, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                /*
                这里是  patch  修改订单状态
                */
                this.orderMsgs.splice(this.orderMsgs.indexOf(e),1);
                this.$message({
                    type: 'success',
                    message: '成功拒绝该订单！'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '取消拒绝该订单'
                });
            });
        },
        clickToPassOrder:function (e) {
            this.$confirm('此操作将接受该订单, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                /*
                这里是  patch  修改订单状态
                */
                this.orderMsgs.splice(this.orderMsgs.indexOf(e),1);
                this.$message({
                    type: 'success',
                    message: '已成功接受该订单!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消接受该订单'
                });
            });
        },
        clickToExamOrderDetails:function (e) {
            this.orderDetailRoute = "/main/order/"+e+"/details";
        },
    },
  data: () => {
    return {
        orderDetailRoute:"",
      orderMsgs: [
        {
          orderId: 58,
          billName: "高静",
          createDateTime: "2016-12-30 06:38:10",
          totalPrice: 95
        },
        {
          orderId: 99,
          billName: "潘杰",
          createDateTime: "1970-02-03 21:15:39",
          totalPrice: 72
        },
        {
          orderId: 32,
          billName: "万磊",
          createDateTime: "1986-08-12 23:09:19",
          totalPrice: 55
        }
      ]
    };
  }
};
</script>

<style scoped>
.display-box {
  margin: 1.5% 1.5%;
    width: 97.5%;
}
.el-row {
  padding-top: 20px;
}
</style>