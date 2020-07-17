<template>
  <el-row>
    <el-col :span="12">
      <BasicCard header="订单详情">
        <el-col style="text-align: left;">
          <el-row>
            <el-col>
              <b>订单编号：</b>
              {{order.orderId}}
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <b>客户编号：</b>
              {{order.customerId}}
            </el-col>
            <el-col :span="12">
              <b>发货人姓名：</b>
              {{order.billName}}
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <b>付款状态：</b>
              {{order.payStatus}}
            </el-col>
            <el-col :span="12">
              <b>订单状态：</b>
              {{order.processStatus}}
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <b>卖家地区：</b>
              {{order.billPro}}-{{order.billCity}}-{{order.billDistrict}}
            </el-col>
            <el-col :span="12">
              <b>卖家详细地址：</b>
              {{order.billAddr}}
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <b>订单总价：</b>
              {{order.totalPrice}}
            </el-col>
            <el-col :span="12">
              <b>运费：</b>
              {{order.shippingCost}}
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <b>订单创建时间：</b>
              {{order.createDateTime}}
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <b>订单付款时间：</b>
              {{order.payDateTime}}
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <b>支付方式：</b>
              {{order.payMethod}}
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <b>订单备注：</b>
              {{order.note}}
            </el-col>
          </el-row>

          <el-row>
            <el-row>
              <el-col>
                <b>订单商品详情：</b>
                <br />
              </el-col>
            </el-row>
            <el-collapse
              style="width: 98%;padding-left: 3%"
              v-for="orderItem in orderItemList"
              v-bind:key="orderItem.orderId"
            >
              <el-collapse-item :title="orderItem.item.name">
                <el-row>
                  <el-col :span="12">
                    <b>商品大类ID：</b>
                    {{orderItem.item.categoryId}}
                  </el-col>
                  <el-col :span="12">
                    <b>商品ID：</b>
                    {{orderItem.item.itemId}}
                  </el-col>
                  <el-col :span="12">
                    <b>任务单ID：</b>
                    {{orderItem.taskId}}
                  </el-col>
                  <el-col :span="12">
                    <b>任务单状态：</b>
                    {{orderItem.status}}
                  </el-col>
                  <el-col :span="12">
                    <b>商品下单数量：</b>
                    {{orderItem.itemNum}}
                  </el-col>
                  <el-col :span="12">
                    <b>商品状态：</b>
                    {{orderItem.item.status}}
                  </el-col>
                  <el-col :span="12">
                    <b>商品成本：</b>
                    {{orderItem.item.unitCost}}
                  </el-col>
                  <el-col :span="12">
                    <b>商品售价：</b>
                    {{orderItem.item.listPrice}}
                  </el-col>
                  <el-col>
                    <b>商品描述：</b>
                    {{orderItem.item.descn}}
                  </el-col>
                  <el-col>
                    <b>商品图片：</b>
                    {{orderItem.item.imgUrl}}
                  </el-col>
                </el-row>
              </el-collapse-item>
            </el-collapse>
          </el-row>
        </el-col>
      </BasicCard>
    </el-col>
    <el-col :span="12">
      <el-row>
        <BasicCard header="任务单信息">
          <el-table :data="taskForms">
            <el-table-column label="任务单ID" prop="taskId"></el-table-column>
            <el-table-column label="配送站ID" prop="subSiteId"></el-table-column>
            <el-table-column label="任务单状态">
              <!-- 缺货等待调货（W），未发出（U），运输中（O），未配送（N），已签收（Y） -->
              <template slot-scope="scope">
                <el-tag v-if="scope.row.status == 'W'" type="danger">缺货</el-tag>
                <el-tag v-else-if="scope.row.status == 'U'" type="info">未发货</el-tag>
                <el-tag v-else-if="scope.row.status == 'O'" type="primary">运输中</el-tag>
                <el-tag v-else-if="scope.row.status == 'N'" type="warning">未配送</el-tag>
                <el-tag v-else-if="scope.row.status == 'Y'" type="success">已签收</el-tag>
              </template>
            </el-table-column>
            <el-table-column>
              <template slot-scope="scope">
              <el-button type="primary" @click="clickToTaskDetails(scope.row.taskId)">查看详情</el-button>
              </template>
            </el-table-column>
          </el-table>
        </BasicCard>
      </el-row>
      <el-row>
        <BasicCard header="退货单信息">
          <el-table :data="returnForm">
            <el-table-column label="退货单ID" prop="formId"></el-table-column>
            <el-table-column label="退货商品" prop="item.name"></el-table-column>
            <el-table-column label="类型">
              <template slot-scope="scope">
                  <p v-if="scope.row.isChange == 1">换货</p>
                  <p v-else>退货</p>
              </template>
            </el-table-column>
            <el-table-column label="退货金额" prop="returnMoney"></el-table-column>
          </el-table>
        </BasicCard>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import BasicCard from "../PanelCard/BasicCard";
import { getOrderDetail, getReturnForms, getTaskForms } from "../../api/orders";

export default {
  components: {
    BasicCard
  },
  data: () => {
    return {
      //订单详情数据
      orderId: "",
      order: {
        orderId: 49,
        customerId: "10000000",
        payStatus: "未付款",
        processStatus: "ut est",
        billPro: "江西省",
        billCity: "三亚市",
        billDistrict: "火星区",
        billAddr: "华北",
        totalPrice: 5,
        billName: "龙娜",
        createDateTime: "2013-02-17 22:14:47",
        payDateTime: "1972-06-12 10:20:39",
        shippingCost: 65,
        payMethod: "sint qui cupidatat dolor",
        note: "书示意接所被花发南候精品圆共次。"
      },
      orderItemList: [
        {
          orderId: 9,
          itemNum: 688873,
          status: "proident non",
          total: 82,
          item: {
            itemId: "420000197710161862",
            categoryId: "120000199302137618",
            name: "bghgre",
            descn: "商时给要际只里五有该因世西经会单流最。",
            unitCost: 16515339.862707546,
            listPrice: 82423086.78614254,
            imgUrl: "http://dummyimage.com/180x150",
            status: "enim dolore ex"
          },
          taskId: null
        },
        {
          orderId: 70,
          itemNum: 467136,
          status: "anim nulla quis voluptate sunt",
          total: 60,
          item: {
            itemId: "350000199107316146",
            categoryId: "530000200408165723",
            name: "snsbingmg",
            descn: "更王听状于容般们般务处革族日影红以。",
            unitCost: 97779894.32842384,
            listPrice: 78370764.79524389,
            imgUrl: "http://dummyimage.com/88x31",
            status: "quis"
          },
          taskId: null
        },
        {
          orderId: 73,
          itemNum: 24363,
          status: "id ullamco cillum",
          total: 64,
          item: {
            itemId: "210000200706199003",
            categoryId: "540000199903011007",
            name: "ihejg",
            descn: "何委华育制保度群人下两领响热我构照。",
            unitCost: 28890209.51457608,
            listPrice: 39411567.34831933,
            imgUrl: "http://dummyimage.com/250x250",
            status: "sunt in eu ut"
          },
          taskId: null
        }
      ],

      //任务单数据
      taskForms: [
        {
          taskId: 10101,
          subsiteId: 10101,
          status: "N"
        },
        {
          taskId: 10102,
          subsiteId: 10101,
          status: "Y"
        },
        {
          taskId: 10102,
          subsiteId: 10101,
          status: "W"
        }
      ],

      //退单数据
      returnForm: [
        {
          rfid: 11111
        }
      ]
    };
  },
  methods: {
    getUniqueOrder: function() {
      // 获取唯一订单号后
      console.log(this.$route.params.orderId);
      
      //通过 $route.params.orderId 获取订单详情 分配到 this.order  this.orderItemList
    },
    fetchData() {
      getOrderDetail(this.orderId).then(res => {
        this.order = res.data.order;
        this.orderItemList = res.data.orderItemList
      });
      getTaskForms(this.orderId).then(res => {
        this.taskForms = res.data;
      });
      getReturnForms(this.orderId).then(res => {
          this.returnForm = res.data
      })
    },
    clickToTaskDetails:function (taskId) {
      this.$router.push("/main/taskforms/"+taskId+"/details");
    }
    // heightChange:function (e) {
    //   console.log(e);
    //   var height = 738;
    //     if(e.length>0){
    //         height +=300;
    //     }
    //     else {
    //         height -=300;
    //     }
    //     height = height.toString() + "px";
    //     console.log(height);
    //     document.getElementById("page").style.height = height;
    // }
  },
  mounted() {
    this.orderId = this.$route.params.orderId;
    this.fetchData();
  }
};
</script>

<style scoped>
.el-col {
  padding: 20px;
}
</style>