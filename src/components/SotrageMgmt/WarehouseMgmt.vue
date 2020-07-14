<template>
  <div>
    <el-dialog
      :title="'将'+targetItemId+'从库房'+srcWarehouse+'转移至库房'+targetWarehouse"
      :visible.sync="dialogVisible"
    >
      <el-row>
        <el-col :span="12">
          <div class="text-label">移动数量：</div>
          <el-input-number v-model="transferNum" class="text-value"></el-input-number>
        </el-col>
      </el-row>
      <br />
      <el-row>
        <el-button type="primary" @click="comfirmTransfer">确认</el-button>
        <el-button @click="cancelTransfer">取消</el-button>
      </el-row>
    </el-dialog>
    <el-row>
      <el-col :span="16">
        <BasicCard header="库房商品" class="display-box">
          <ItemCard
            draggable="true"
            v-for="item in curInventory.itemList"
            :key="item.item.itemId"
            :item="item.item"
            :quantity="item.quantity"
            class="item-box"
            @dragstart.native="drag($event, item.item.itemId)"
          ></ItemCard>
        </BasicCard>
      </el-col>
      <el-col :span="7" style="margin: 50px 10px 100px;">
        <BasicCard
          v-for="warehouse in warehouseList"
          :key="warehouse.warehouseId"
          :header="'库房'+warehouse.warehouseId"
          @click.native="changeWarehouse(warehouse.warehouseId)"
          @drop.native="drop($event, warehouse.warehouseId)"
          @dragover.native="allowDrop($event)"
        >
          <el-row>
            <el-col :span="12" style="text-align: left">
              <div class="text-label">类别：</div>
              <div class="text-value">{{warehouse.category.name}}</div>
            </el-col>
            <el-col :span="12" style="text-align: left">
              <div class="text-label">描述：</div>
              <div class="text-value">{{warehouse.category.descn}}</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12" style="text-align: left">
              <div class="text-label">库存种类：</div>
              <div class="text-value">{{warehouse.kindNumOfItem + "种"}}</div>
            </el-col>
            <el-col :span="12" style="text-align: left">
              <div class="text-label">售价：</div>
              <div class="text-value">{{warehouse.totalSize}}</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12" style="text-align: left">
              <div class="text-label">最大库存：</div>
              <div class="text-value">{{warehouse.maxSize}}</div>
            </el-col>
          </el-row>
        </BasicCard>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BasicCard from "../PanelCard/BasicCard";
import ItemCard from "../DataCard/ItemCard";
import myaxios from "../../plugins/myaxios";

export default {
  components: { BasicCard, ItemCard },
  methods: {
    fetchWarehouses() {
      myaxios.get("/mainsites/" + this.mainsiteId + "/warehouses").then(res => {
        console.log(res);
        this.warehouseList = res.data.warehouseList;
        this.srcWarehouse = this.warehouseList[0].warehouseId;
        this.fetchWarehousDetail(this.srcWarehouse);
      });
    },
    fetchWarehousDetail(warehouseId) {
      myaxios
        .get("/mainsites/" + this.mainsiteId + "/warehouse/" + warehouseId)
        .then(res => {
          this.curInventory = res.data;
        });
    },
    allowDrop(ev) {
      ev.preventDefault();
    },
    drag(ev, itemId) {
      console.log(itemId);
      ev.dataTransfer.setData("itemId", itemId);
    },
    drop(ev, targetWarehouse) {
      ev.preventDefault();
      if (this.srcWarehouse == targetWarehouse) return;
      this.targetItemId = ev.dataTransfer.getData("itemId");
      this.targetWarehouse = targetWarehouse;
      this.dialogVisible = true;
    },
    changeWarehouse(warehouseId) {
      console.log(warehouseId);
      this.srcWarehouse = warehouseId;
    },
    comfirmTransfer() {
      if (this.transferNum == 0) return;
      console.log(
        "Transfering " +
          this.transferNum +
          " " +
          this.targetItemId +
          " from " +
          this.srcWarehouse +
          " to " +
          this.targetWarehouse
      );
      // 此处需要进行转移数据的传输
      this.dialogVisible = false;
      this.transferNum = 0;
    },
    cancelTransfer() {
      this.dialogVisible = false;
      this.transferNum = 0;
    }
  },
  data: () => {
    return {
      curInventory: {
        itemList: [
          {
            item: {
              itemId: "460000197801198481",
              name: "vcgu",
              unitCost: 41807478.715475254,
              listPrice: 37100326.35807219,
              status: "Duis ullamco irure",
              categoryId: "520000198912252170",
              descn: "元她从数效众出把时治阶问必设。",
              imgUrl: "http://dummyimage.com/240x400"
            },
            inventory: 64
          },
          {
            item: {
              itemId: "710000201704039236",
              name: "tgrt",
              unitCost: 23628441.259774346,
              listPrice: 20108817.269916233,
              status: "consectetur sed mollit commodo consequat",
              categoryId: "370000201305125483",
              descn: "精和所增路己展须如府型反电再。",
              imgUrl: "http://dummyimage.com/336x280"
            },
            inventory: 59
          }
        ],
        warehouseId: "76",
        mainSiteId: "92",
        mainSiteName: "口思打委道",
        category: {
          categoryId: "710000199402276981",
          descn: "美",
          name: "qbyb"
        }
      },
      warehouseList: [
        {
          siteId: "CN-HN",
          warehouseId: "WH-001",
          category: {
            categoryId: "YL",
            name: "饮料",
            descn: "需冷藏"
          },
          kindNumOfItem: 30,
          totalSize: 125,
          maxSize: 1000
        },
        {
          siteId: "CN-HN",
          warehouseId: "WH-002",
          category: {
            categoryId: "NUT",
            name: "坚果类",
            descn: "袋装，需防潮"
          },
          kindNumOfItem: 50,
          totalSize: 1200,
          maxSize: 1700
        }
      ],
      mainsiteId: "",
      srcWarehouse: "",
      targetWarehouse: "",
      targetItemId: "",
      transferNum: 0,
      dialogVisible: false
    };
  },
  mounted() {
    this.mainsiteId = this.$route.params.mainsiteId;
    this.fetchWarehouses();
  }
};
</script>

<style scoped>
.item-box {
  float: left;
  margin: 35px;
}
.display-box {
  margin: 50px 50px 100px;
}
.text-label {
  float: left;
  width: 100px;
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