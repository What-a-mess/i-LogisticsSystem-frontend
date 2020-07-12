<template>
  <div>
    <BasicCard class="display-box" header="待审核订单">
      <el-table :data="orderMsgs">
          <el-table-column label="订单ID" prop="orderId"></el-table-column>
          <el-table-column label="收件人姓名" prop="billName"></el-table-column>
          <el-table-column label="订单创建时间" prop="createDateTime"></el-table-column>
          <el-table-column label="订单总价" prop="totalPrice"></el-table-column>
          <el-table-column label="操作">
              <template>
                  <el-button type="danger">拒绝</el-button>
                  <el-button type="success">通过</el-button>
                  <el-button type="primary">查看详情</el-button>
              </template>
          </el-table-column>
      </el-table>
    </BasicCard>
  </div>
</template>

<script>
import BasicCard from "../PanelCard/BasicCard";

export default {
  components: { BasicCard },
  data: () => {
    return {
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
  margin: 50px 50px 100px;
}
.el-row {
  padding-top: 20px;
}
</style>