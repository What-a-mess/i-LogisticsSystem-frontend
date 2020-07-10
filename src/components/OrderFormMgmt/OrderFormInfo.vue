<template>
  <div>
    <el-row>


      <el-col :span="1" :offset="22">
        <add-order></add-order>
      </el-col>
    </el-row>
    <el-row>
      <el-col style="padding-left: 20px">
        <el-card>
          <!-- 筛选信息行 -->
          <el-row>
            <el-col>
              <el-form :inline="true" :model="inlineQuery">
                <el-form-item label="用户ID" >
                  <el-autocomplete
                    class="inline-input"
                    v-model="inlineQuery.userIdQuery"
                    :fetch-suggestions="userIdAutoCmpl"
                    :trigger-on-focus="false"
                  ></el-autocomplete>
                </el-form-item>
                <el-form-item label=" 订单ID">
                  <el-input v-model="inlineQuery.orderIdQuery"></el-input>
                </el-form-item>
                <el-form-item label=" 订单状态">
                  <el-select v-model="inlineQuery.orderStatus">
                    <el-option label="未处理" value="N"></el-option>
                    <el-option label="处理中" value="P"></el-option>
                    <el-option label="交易成功" value="D"></el-option>
                    <el-option label="交易关闭" value="C"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label=" 日期">
                  <el-date-picker

                    v-model="value1"
                    type="datetimerange"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :default-time="['12:00:00']"
                  ></el-date-picker>
                </el-form-item>
                <el-button type="primary" @click="fetchData">搜索</el-button>
              </el-form>
            </el-col>
          </el-row>

          <el-table :data="orderForms">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="下单日期">
                    <span>{{props.row.createTime}}</span>
                  </el-form-item>
                  <el-form-item label="付款日期">
                    <span>{{props.row.paymentTime}}</span>
                  </el-form-item>
                  <el-form-item label="订单金额">
                    <span>{{props.row.paymentAmount}}</span>
                  </el-form-item>
                  <el-form-item label="运费">
                    <span>{{props.row.freight}}</span>
                  </el-form-item>
                  <el-form-item label="订单状态">
                    <el-tag v-if="props.row.status=='N'" type="danger">未处理</el-tag>
                    <el-tag v-else-if="props.row.status=='P'" type="warning">处理中</el-tag>
                    <el-tag v-else-if="props.row.status=='D'" type="success">交易成功</el-tag>
                    <el-tag v-else-if="props.row.status=='C'" type="info">交易关闭</el-tag>
                  </el-form-item>
                  <el-form-item label="支付方式">
                    <span>{{props.row.paymentMethod}}</span>
                  </el-form-item>
                  <el-form-item label="收件人">
                    <span>{{props.row.receiver}}</span>
                  </el-form-item>
                  <el-form-item label="收件电话">
                    <span>{{props.row.receiverPhone}}</span>
                  </el-form-item>
                  <el-form-item label="收件地址">
                    <span>{{props.row.receiverAddress}}</span>
                  </el-form-item>
                  <el-form-item label="备注">
                    <span>{{props.row.remarks}}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column label="订单ID" prop="orderId"></el-table-column>
            <el-table-column label="收件人" prop="receiver"></el-table-column>
            <el-table-column label="状态">
              <template slot-scope="scope">
                <el-tag v-if="scope.row.status=='N'" type="danger">未处理</el-tag>
                <el-tag v-else-if="scope.row.status=='P'" type="warning">处理中</el-tag>
                <el-tag v-else-if="scope.row.status=='D'" type="success">交易成功</el-tag>
                <el-tag v-else-if="scope.row.status=='C'" type="info">交易关闭</el-tag>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template>
                <el-button type="primary">任务单</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>


  </div>
</template>

<script>
import myaxios from "../../plugins/myaxios";
import AddOrder from "./add-order";

export default {
  components: {AddOrder},
  data: function() {
    return {
      input: "",
      select: "",
      value1: "",
      value2: "",
      sDay: "",
      eDay: "",


      inlineQuery: {
        userIdQuery: "",
        orderIdQuery: "",
        orderStatus: ""
      },

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
  },
  watch: {
    value1(val) {
      var startDate = JSON.stringify(val[0]).substr(0, 11);
      var endDate = JSON.stringify(val[1]).substr(0, 11);
      this.sDay = startDate;
      this.eDay = endDate;
      console.log(startDate);
      console.log(endDate);
    }
  },
  methods: {
    fetchData() {
      myaxios.get("/orders").then(res => {
        this.orderForms = res.data;
      });
    },
    userIdAutoCmpl(queryString, cb) {
      queryString;
      cb([
        {value: "123"},
        {value: "321"}
      ])
    }
  },
  mounted: function() {
    this.fetchData();
  }
  // computed: {
  //   status: function(statusString) {
  //     switch (statusString) {
  //       case "N":
  //         return "未处理";
  //       case "P":
  //         return "正在处理";
  //       case "D":
  //         return "交易成功";
  //       case "C":
  //         return "交易关闭";
  //       default:
  //         return "未定义";
  //     }
  //   }
  // }
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