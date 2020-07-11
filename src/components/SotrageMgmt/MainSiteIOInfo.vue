<template>
  <div>
    <template>
      <el-tabs v-model="activeName" class="display-box">
        <el-tab-pane label="入库管理" name="MainSiteI">
          <BasicCard header="入库管理">
            <el-table :data="checkInItems">
              <el-table-column label="记录编号" prop="recordId"></el-table-column>
              <el-table-column>
                <template slot-scope="items">
                  <el-tag v-if="items.row.type==1" type="success">补货</el-tag>
                  <el-tag v-if="items.row.type==2">调货</el-tag>
                  <el-tag v-if="items.row.type==3" type="danger">退货</el-tag>
                  <el-tag v-if="items.row.type==4" type="warning">换货</el-tag>
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
            </el-table>
          </BasicCard>
        </el-tab-pane>
        <el-tab-pane label="出库管理" name="MainSiteO">
          <BasicCard header="出库管理">
            <el-table :data="checkOutItems">
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
            </el-table>
          </BasicCard>
        </el-tab-pane>
      </el-tabs>
    </template>
  </div>
</template>

<script>
import BasicCard from "../PanelCard/BasicCard";
export default {
  components: { BasicCard },
  data: () => {
    return {
      activeName: "MainSiteI",
      checkInItems: [
        {
          recordId: "8",
          type: 1,
          typeDescn: "补货",
          formId: "89",
          itemId: "54",
          itemNum: 77
        },
        {
          recordId: "93",
          type: 2,
          typeDescn: "调货",
          formId: "14",
          itemId: "61",
          itemNum: 48
        },
        {
          recordId: "27",
          type: 3,
          typeDescn: "退货",
          formId: "43",
          itemId: "77",
          itemNum: 24
        },
        {
          recordId: "75",
          type: 4,
          typeDescn: "换货",
          formId: "98",
          itemId: "25",
          itemNum: 52
        },
        {
          recordId: "52",
          type: 1,
          typeDescn: "补货",
          formId: "85",
          itemId: "41",
          itemNum: 63
        }
      ],
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