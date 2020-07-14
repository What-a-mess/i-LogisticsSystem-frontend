<template>
  <div class="display-box">
    <el-row :gutter="80">
      <el-col :span="1" :offset="19">
        <el-button type="danger" @click="onChangeStatus('F')">拒绝</el-button>
      </el-col>
      <el-col :span="1">
        <el-button
          type="primary"
          @click="dialogVisible=true;formData.warehouseId = record.warehouseId;"
        >编辑</el-button>
      </el-col>
      <el-col :span="1">
        <el-button type="success" @click="onChangeStatus('Y')">通过</el-button>
      </el-col>
    </el-row>
    <br />
    <el-row>
      <BasicCard header="出库请求详情">
        <el-row>
          <el-col :span="12" style="text-align: left">
            <h3>
              <div class="text-label">记录编号:</div>
              <div class="text-value">{{record.recordId}}</div>
            </h3>
          </el-col>
        </el-row>
        <el-divider></el-divider>
        <!-- 订单详情 -->
        <el-row>
          <el-col :span="12" style="text-align: left">
            <div class="text-label">请求日期：</div>
            <div class="text-value">{{record.timeStamp}}</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12" style="text-align: left">
            <div class="text-label">所属库房：</div>
            <div class="text-value">{{record.warehouseId}}</div>
          </el-col>
          <el-col :span="12" style="text-align: left">
            <div class="text-label">操作类型：</div>
            <div class="text-value">{{record.typeDescn}}</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12" style="text-align: left">
            <div class="text-label">关联ID：</div>
            <div class="text-value">{{record.formId}}</div>
          </el-col>
          <el-col :span="12" style="text-align: left">
            <div class="text-label">货物去向：</div>
            <div class="text-value">{{record.itemSrc}}</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12" style="text-align: left">
            <div class="text-label">批准状态：</div>
            <div class="text-value">
              <el-tag v-if="record.approvalStatus=='W'" type="warning">待审核</el-tag>
              <el-tag v-if="record.approvalStatus=='Y'" type="success">已审核</el-tag>
              <el-tag v-if="record.approvalStatus=='F'" type="info">已失效</el-tag>
            </div>
          </el-col>
          <el-col :span="12" style="text-align: left">
            <div class="text-label">操作人：</div>
            <div class="text-value">{{record.approver}}</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12" style="text-align: left">
            <div class="text-label">商品数量：</div>
            <div class="text-value">{{record.itemNum}}</div>
          </el-col>
        </el-row>
      </BasicCard>
      <BasicCard header="入库商品信息">
        <el-row style="text-align: left">
          <el-col :span="2">
            <el-image style="width: 100px; height: 100px" :src="record.item.imgUrl" fit="fit"></el-image>
          </el-col>
          <el-col :span="22">
            <el-row>
              <el-col :span="12" style="text-align: left">
                <div class="text-label">商品ID：</div>
                <div class="text-value">{{record.item.itemId}}</div>
              </el-col>
              <el-col :span="12" style="text-align: left">
                <div class="text-label">大类ID：</div>
                <div class="text-value">{{record.item.categoryId}}</div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12" style="text-align: left">
                <div class="text-label">商品名称：</div>
                <div class="text-value">{{record.item.name}}</div>
              </el-col>
              <el-col :span="12" style="text-align: left">
                <div class="text-label">文字描述：</div>
                <div class="text-value">{{record.item.descn}}</div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12" style="text-align: left">
                <div class="text-label">原价：</div>
                <div class="text-value">{{record.item.unitPrice}}</div>
              </el-col>
              <el-col :span="12" style="text-align: left">
                <div class="text-label">售价：</div>
                <div class="text-value">{{record.item.listPrice}}</div>
              </el-col>
            </el-row>
            <el-row v-if="record.item.status">
              <el-col :span="12" style="text-align: left">
                <div class="text-label">状态：</div>
                <div class="text-value">{{record.item.status}}</div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </BasicCard>
    </el-row>
  </div>
</template>

<script>
import BasicCard from "../PanelCard/BasicCard";
import myaxious from "../../plugins/myaxios";
import router from "../../plugins/router";

export default {
  components: { BasicCard },
  methods: {
    fetchData() {
      myaxious
        .get(
          "/mainsites/" +
            this.mainsiteId +
            "/inventory/siteout/" +
            this.recordId
        )
        .then(res => {
          this.record = res.data;
        });
    },
    updateOnClick() {
      myaxious
        .patch(
          "/mainsites/" +
            this.mainsiteId +
            "/inventory/siteout/" +
            this.recordId,
          {
            warehouseId: this.formData.warehouseId
          }
        )
        .then(res => {
          console.log(res.status);
        });
      this.dialogVisible = false;
      this.fetchData();
    },
    onChangeStatus(status) {
      console.log(status);
      myaxious.patch(
        "/mainsites/" + this.mainsiteId + "/inventory/siteout/" + this.recordId,
        { approvalStatus: status }
      );
      router.push("/main/mainsites/" + this.mainsiteId + "/inventory/sitein");
    }
  },
  data: () => {
    return {
      record: {
        recordId: 162877391,
        timeStamp: "2020年7月11日15:57:31",
        warehouseId: "WH-001",
        item: {
          itemId: "EST-01",
          name: "牛奶",
          categoryId: "YL-01",
          categoryName: "饮料",
          unitPrice: 40,
          listPrice: 55,
          descn: "草莓味",
          imgUrl: "milk.jpg"
        },
        itemNum: 2,
        type: 2,
        typeDescn: "调货",
        formId: 8391864581,
        itemDest: "CN-GD",
        approvalStatus: "W",
        approver: "Jack"
      }
    };
  },
  mounted() {
    this.mainsiteId = this.$route.params.mainsiteId;
    this.recordId = this.$route.params.recordId;
    console.log(this.mainsiteId);
    console.log(this.recordId);
    this.fetchData();
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
</style>