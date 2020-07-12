<template>
  <div class="display-box">
    <BasicCard header="审核出库申请">
      <!-- <el-table :data="checkOutItems">
        <el-table-column label="记录编号" prop="recordId"></el-table-column>
        <el-table-column>
          <template slot-scope="items">
            <el-tag v-if="items.row.type==1" type="warning">退货</el-tag>
            <el-tag v-if="items.row.type==2">调货</el-tag>
            <el-tag v-if="items.row.type==3" type="success">发货</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="商品ID" prop="itemId"></el-table-column>
        <el-table-column label="商品数量" prop="itemNum"></el-table-column>
        <el-table-column label="操作">
          <template>
            <el-button type="danger">拒绝</el-button>
            <el-button type="success">通过</el-button>
          </template>
        </el-table-column>
      </el-table>-->
      <el-row v-for="item in checkOutItems" :key="item.recordId">
        <BasicCard :header="'入库请求 '+item.recordId">
          <el-row type="flex" align="center">
            <el-col :span="20">
              <el-row class="form-line">
                <el-col :span="12">
                  <div class="text-label">商品ID：</div>
                  <div class="text-value">{{item.itemId}}</div>
                </el-col>
                <el-col :span="12">
                  <div class="text-label">商品数量：</div>
                  <div class="text-value">{{item.itemNum}}</div>
                </el-col>
              </el-row>
              <el-row class="form-line">
                <el-col :span="12">
                  <div class="text-label">退货类型：</div>
                  <div class="text-value">
                    <el-tag v-if="item.type==1" type="warning">退货</el-tag>
                    <el-tag v-if="item.type==2">调货</el-tag>
                    <el-tag v-if="item.type==3" type="success">发货</el-tag>
                  </div>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="4">
              <el-button type="danger">拒绝</el-button>
              <el-button type="success" @click="passOnClick(item)">通过</el-button>
            </el-col>
          </el-row>
        </BasicCard>
      </el-row>
    </BasicCard>
  </div>
</template>

<script>
import BasicCard from "../PanelCard/BasicCard";

export default {
  components: { BasicCard },
  data: () => {
    return {
      checkOutItems: [
        {
          recordId: "5",
          type: 1,
          typeDescn: "退货",
          formId: "75",
          itemId: "24",
          itemNum: 74
        },
        {
          recordId: "18",
          type: 2,
          typeDescn: "调货",
          formId: "80",
          itemId: "77",
          itemNum: 90
        },
        {
          recordId: "75",
          type: 3,
          typeDescn: "发货",
          formId: "25",
          itemId: "50",
          itemNum: 94
        },
        {
          recordId: "23",
          type: 1,
          typeDescn: "退货",
          formId: "85",
          itemId: "43",
          itemNum: 24
        }
      ]
    };
  },
  methods: {
    passOnClick: function(item) {
      console.log(this);
      this.checkOutItems = this.checkOutItems.filter(tempItem => {
        return tempItem.recordId !== item.recordId;
      });
      console.debug(item);
    }
  }
};
</script>

<style scoped>
.display-box {
  margin: 50px 50px 100px;
}
.text-label {
  float: left;
  width: 150px;
  min-height: 30px;
  text-align: right;
}
.text-value {
  float: left;
  min-height: 30px;
  max-width: 80%;
  text-align: left;
}
.form-line {
  text-align: left;
}
</style>