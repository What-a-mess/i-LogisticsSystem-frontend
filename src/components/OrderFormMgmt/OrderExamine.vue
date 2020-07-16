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
            <el-button type="danger" @click="handleRefuse(scope.row)">拒绝</el-button>
            <el-button type="success" @click="handlePass(scope.row)">通过</el-button>
            <!-- <router-link style="padding-left: 3%" :to="orderDetailRoute"><el-button type="primary" @click="clickToExamOrderDetails(scope.row.orderId)">查看详情</el-button>
            </router-link>-->
            <el-button type="primary" @click="toDetail(scope.row)">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </BasicCard>
  </div>
</template>

<script>
import BasicCard from "../PanelCard/BasicCard";
import mq from "@/plugins/rabbitmq";
import { patchOrderStatus } from "../../api/orders.js";
import AddOrder from "./add-order";

export default {
  // inject: ['reload'],
  name: "OrderExamine",
  components: { BasicCard, AddOrder },
  data: () => {
    return {
      orderMsgs: [],
      orderDetailRoute: ""
    };
  },
  // activated () {
  //   mq.client.heartbeat.outgoing=0;
  //   mq.client.heartbeat.incoming=0;
  //   mq.connect('unreviewed order',this.onMessage, this.onFailed);
  //   console.log('实例被激活时使用，用于重复激活一个实例的时候')
  //
  // },
  mounted() {
    //每次进页面前刷新一次
    if (location.href.indexOf("#") == -1) {
      //在当前页面地址加入"#"，使下次不再进入此判断
      location.href = location.href + "#";
      location.reload();
    }

    //连接待审核消息队列
    mq.client.heartbeat.outgoing = 0;
    mq.client.heartbeat.incoming = 0;
    mq.connect("unreviewed order", this.onMessage, this.onFailed);
  },
  methods: {
    onMessage(frame) {
      // console.log("Whole Frame: " + frame)
      console.log("msg: " + frame.body);

      //处理消息
      var obj = JSON.parse(frame.body);
      obj.ack = frame.ack;

      //在组件中显示
      this.orderMsgs.push(obj);
    },
    onFailed(frame) {
      console.log("err:" + frame);
    },
    handleRefuse(rowFrame) {
      var alertMsg = "是否确认拒绝 订单" + rowFrame.orderId + " ?";

      this.$confirm(alertMsg, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          console.log("拒绝接收 订单" + rowFrame.orderId);
          this.confirmCheck(rowFrame, "C"); //拒绝接收
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消操作"
          });
        });
    },
    handlePass(rowFrame) {
      var alertMsg = "是否确认接收 订单" + rowFrame.orderId + " ?";

      this.$confirm(alertMsg, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "success"
      })
        .then(() => {
          console.log("确认接收 订单" + rowFrame.orderId);
          this.confirmCheck(rowFrame, "P"); //确认接收
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消操作"
          });
        });
    },
    confirmCheck(rowFrame, status) {
      var msg; //提示消息
      if (status == "C") {
        msg = "订单" + rowFrame.orderId + " 已拒绝";
      } else if (status == "P") {
        msg = "订单" + rowFrame.orderId + " 成功接收!";
      } else {
        msg = "processStatus:'" + status + "' 不存在!";
      }

      //修改订单状态
      patchOrderStatus(rowFrame.orderId, status).then(resp => {
        if (resp.status == 200) {
          console.log(resp.status);
          this.$message({
            type: "success",
            message: msg
          });
          //向消息队列确认接收消息, 不会再发送已消费成功的订单消息
          rowFrame.ack();
        } else {
          this.$message({
            type: "error",
            message: "订单" + rowFrame.orderId + "确认失败!"
          });
        }
      });

      //更新dom组件
      var index = this.orderMsgs.indexOf(rowFrame);
      this.orderMsgs.splice(index, 1);
    },
    toDetail: function(rowFrame) {
      console.log(rowFrame)
      this.$router.push({
        path: "orderExamine/"+rowFrame.orderId,
        query: { rowFrame }
      })
    },
    refresh: function() {
      window.location.reload();
    }
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