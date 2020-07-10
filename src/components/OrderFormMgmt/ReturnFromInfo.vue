<template>
  <div>
    <el-row>
      <el-col style="padding-left: 20px;">
        <el-card>
          <el-table :data="orderForms">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="退货单编号">
                    <span>{{props.row.createTime}}</span>
                  </el-form-item>
                  <el-form-item label="订单编号">
                    <span>{{props.row.paymentTime}}</span>
                  </el-form-item>
                  <el-form-item label="类型">
                    <!-- 退货/换货 -->
                    <span>{{props.row.paymentAmount}}</span>
                  </el-form-item>
                  <el-form-item label="商品编号">
                    <span>{{props.row.freight}}</span>
                  </el-form-item>
                  <el-form-item label="退/换货数量">
                    <span>{{props.row.freight}}</span>
                  </el-form-item>
                  <el-form-item label="申请时间">
                    <span>{{props.row.freight}}</span>
                  </el-form-item>
                  <el-form-item label="退款金额">
                    <span>{{props.row.paymentMethod}}</span>
                  </el-form-item>
                  <el-form-item label="处理状态">
                    <el-tag v-if="props.row.status=='N'" type="danger">未处理</el-tag>
                    <el-tag v-else-if="props.row.status=='P'" type="warning">处理中</el-tag>
                    <el-tag v-else-if="props.row.status=='D'" type="success">交易成功</el-tag>
                    <el-tag v-else-if="props.row.status=='C'" type="info">交易关闭</el-tag>
                  </el-form-item>
                  <el-form-item label="申请时间">
                    <span>{{props.row.receiver}}</span>
                  </el-form-item>
                  <el-form-item label="处理时间">
                    <span>{{props.row.receiverPhone}}</span>
                  </el-form-item>
                  <el-form-item label="申请原因">
                    <span>{{props.row.reason}}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column label="退货单ID" prop="rfId"></el-table-column>
            <el-table-column label="类型" prop="receiver"></el-table-column>
            <el-table-column label="状态">
              <template slot-scope="scope">
                <el-tag v-if="scope.row.status=='N'" type="danger">未处理</el-tag>
                <el-tag v-else-if="scope.row.status=='P'" type="warning">已处理</el-tag>
                <el-tag v-else-if="scope.row.status=='I'" type="success">进行中</el-tag>
                <el-tag v-else-if="scope.row.status=='Y'" type="info">成功</el-tag>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template>
                <el-button type="success">通过</el-button>
                <el-button type="danger">拒绝</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      spanValue: 20,
      orderForms: [
        {
          orderId: 3582048,
          createTime: "1996-01-28 11:20:17",
          paymentTime: "1997-04-26 11:43:12",
          paymentAmount: 56811112.815615684,
          freight: -92966740.21913517,
          status: "N",
          paymentMethod: "nulla culpa sint non ipsum",
          receiver: "dolore irure fugiat",
          receiverPhone: "18146568340",
          receiverAddress: "澳门特别行政区临汾市锡林浩特市",
          remarks: "consectetur",
          taskForms: [81, 43, 4, 64, 88]
        },
        {
          orderId: -71028570,
          createTime: "2013-09-08 05:18:16",
          paymentTime: "2014-09-20 20:58:44",
          paymentAmount: 70351359.7887876,
          freight: 20829072.801536694,
          status: "C",
          paymentMethod: "aute ipsum velit",
          receiver: "dolore",
          receiverPhone: "18681796356",
          receiverAddress: "台湾揭阳市田阳县",
          remarks: "ex proident",
          taskForms: [82, 24, 33]
        },
        {
          orderId: 68772420,
          createTime: "2001-10-21 07:03:09",
          paymentTime: "2019-08-15 22:33:18",
          paymentAmount: -32197521.945785075,
          freight: -69158588.8385692,
          status: "P",
          paymentMethod: "labore minim ut et non",
          receiver: "proident Excepteur laborum anim esse",
          receiverPhone: "18151145450",
          receiverAddress: "广西壮族自治区乌海市杜集区",
          remarks: "ad cupidatat in in laboris",
          taskForms: [60, 49, 68, 39]
        },
        {
          orderId: -77047171,
          createTime: "1992-01-20 09:17:49",
          paymentTime: "1970-03-31 06:26:22",
          paymentAmount: 2080963.1956221908,
          freight: 11754704.695173904,
          status: "D",
          paymentMethod: "nostrud non elit eiusmod ex",
          receiver: "irure ipsum velit",
          receiverPhone: "18667535606",
          receiverAddress: "安徽省石嘴山市西夏区",
          remarks: "amet sit deserunt",
          taskForms: [3, 23, 74]
        },
        {
          orderId: 49766969,
          createTime: "1972-02-04 12:17:57",
          paymentTime: "1985-03-06 16:15:35",
          paymentAmount: 99059670.48581079,
          freight: 20700434.62893802,
          status: "P",
          paymentMethod: "ad aute deserunt in",
          receiver: "cupidatat ea",
          receiverPhone: "13468431461",
          receiverAddress: "澳门特别行政区晋中市通江县",
          remarks: "Excepteur pariatur",
          taskForms: [36]
        }
      ]
    };
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