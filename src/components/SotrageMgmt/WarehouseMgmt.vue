<template>
  <div>
    <el-dialog
      :title="'将'+targetItemId+'从库房'+srcWarehouse+'转移至库房'+targetWarehouse"
      :visible.sync="dialogVisible"
    >
      <el-row>
        <el-col :span="12">
          <div class="text-label">移动数量：</div>
          <el-input-number v-model="transferNum" :min="0" :max="maxNum" class="text-value"></el-input-number>
        </el-col>
      </el-row>
      <br />
      <el-row>
        <el-button type="primary" @click="comfirmTransfer">确认</el-button>
        <el-button @click="cancelTransfer">取消</el-button>
      </el-row>
    </el-dialog>
    <el-row>
      <el-col :span="14" class="display-box">
        <!-- <BasicCard header="库房商品" class="display-box"> -->
        <el-row>
          <el-form :inline="true">
            <el-form-item label="大类ID">
              <el-input v-model="categoryId" @blur="fetchItems"></el-input>
            </el-form-item>
            <el-form-item label="关键词">
              <el-input v-model="keyword" @blur="fetchItems"></el-input>
            </el-form-item>
          </el-form>
        </el-row>
        <el-row>
          <ItemCard
            draggable="true"
            v-for="item in curInventory"
            :key="item.item.itemId"
            :item="item.item"
            :quantity="item.inventory"
            :warehouseId="item.warehouseId"
            class="item-box"
            @dragstart.native="drag($event, item)"
          ></ItemCard>
        </el-row>
        <el-row>
          <el-pagination
            :current-page.sync="curPage"
            :page-count="totalPages"
            layout="prev, pager, next"
            @current-change="onPageChange"
          ></el-pagination>
        </el-row>
        <!-- </BasicCard> -->
      </el-col>
      <el-col :span="7" style="margin: 50px 10px 100px;">
        <el-checkbox-group v-model="selectedWarehouse" @change="fetchItems">
          <el-row
            v-for="warehouse in warehouseList"
            :key="warehouse.warehouseId"
            style="padding-bottom: 30px"
          >
            <el-checkbox
              :label="warehouse.warehouseId"
              border
              class="warehouse-container"
              @drop.native="drop($event, warehouse.warehouseId)"
              @dragover.native="allowDrop($event)"
            >库房{{warehouse.warehouseId}}</el-checkbox>
          </el-row>
        </el-checkbox-group>
        <!-- <BasicCard
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
        </BasicCard>-->
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import BasicCard from "../PanelCard/BasicCard";
import ItemCard from "../DataCard/ItemCard";
// import myaxios from "../../plugins/mockaxios";
import { getWarehousesList, getItems, transferItem } from "../../api/storage";

export default {
  components: { ItemCard },
  methods: {
    fetchWarehouses() {
      getWarehousesList(this.mainsiteId).then(res => {
        console.log(res);
        this.warehouseList = res.data;
        this.fetchItems();
      });
    },
    fetchItems() {
      getItems(this.mainsiteId, {
        warehouseIdList: this.selectedWarehouse,
        categoryIdList: this.categoryId,
        keyword: this.keyword,
        pageNum: this.curPage,
        pageSize: 3
      }).then(res => {
        this.curInventory = res.data.content;
        this.totalPages = res.data.totalPages;
      });
    },
    allowDrop(ev) {
      ev.preventDefault();
    },
    drag(ev, item) {
      console.log(item);
      ev.dataTransfer.setData("itemId", item.item.itemId);
      this.maxNum = item.inventory;
      console.log(this.maxNum);
      this.srcWarehouse = item.warehouseId;
    },
    drop(ev, targetWarehouse) {
      ev.preventDefault();
      if (this.srcWarehouse == targetWarehouse) return;
      this.targetItemId = ev.dataTransfer.getData("itemId");
      this.targetWarehouse = targetWarehouse;
      this.dialogVisible = true;
    },
    // changeWarehouse(warehouseId) {
    //   console.log(warehouseId);
    //   this.srcWarehouse = warehouseId;
    //   this.fetchWarehousDetail();
    // },
    // TODO: 把选择库房的触发事件改为直接拉取items
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
      transferItem(this.mainsiteId, this.targetItemId, {
        sourceWarehouseId: this.srcWarehouse,
        destWarehouseId: this.targetWarehouse,
        itemNum: this.transferNum
      })
        .then(res => {
          console.log(res.status);
          this.dialogVisible = false;
          this.transferNum = 0;
        })
        .catch(() => {
          alert("目标库房无法存储该商品")
        });
    },
    cancelTransfer() {
      this.dialogVisible = false;
      this.transferNum = 0;
    },
    onPageChange() {
      this.fetchItems();
    }
  },
  data: () => {
    return {
      curInventory: [
        {
          warehouseId: "94",
          item: {
            itemId: "150000200403234864",
            categoryId: "35000020100701014X",
            name: "dtmsqcwd",
            descn: "京号划图个认带由引运声采层天龙联意。",
            unitCost: 21985411.368915252,
            listPrice: 25068823.904894244,
            imgUrl: "http://dummyimage.com/180x150",
            status: "ea veniam"
          },
          inventory: 4
        },
        {
          warehouseId: "77",
          item: {
            itemId: "630000197203073357",
            categoryId: "150000201805043651",
            name: "jiljum",
            descn: "候华主段再引始都资色图品号白。",
            unitCost: 9554652.617325332,
            listPrice: 2479658.4495110977,
            imgUrl: "http://dummyimage.com/720x300",
            status: "labore Duis qui anim"
          },
          inventory: 6
        },
        {
          warehouseId: "86",
          item: {
            itemId: "520000197804137365",
            categoryId: "460000198607217815",
            name: "fzkhwnx",
            descn: "各厂已级价规话解省进式所道它非度四。",
            unitCost: 22343684.804108933,
            listPrice: 8774210.858108198,
            imgUrl: "http://dummyimage.com/234x60",
            status: "aute officia sunt in consectetur"
          },
          inventory: 77
        },
        {
          warehouseId: "42",
          item: {
            itemId: "460000200707097240",
            categoryId: "710000199807182932",
            name: "gwgqkm",
            descn: "走表分情石总切系写利它高导被持什。",
            unitCost: 98919673.98554613,
            listPrice: 30799510.484512243,
            imgUrl: "http://dummyimage.com/336x280",
            status: "ad minim"
          },
          inventory: 76
        }
      ],
      warehouseList: [
        {
          siteId: "MAIN-002",
          warehouseId: "WH-006",
          categoryId: "SHOES",
          category: {
            categoryId: "SHOES",
            name: "shoes",
            descn:
              "https://i-petstore.oss-cn-shenzhen.aliyuncs.com/i-logistics-system/image/category/shoes.jpg"
          },
          kindNumOfItem: 3,
          totalSize: 1600,
          maxSize: 20000
        },
        {
          siteId: "MAIN-002",
          warehouseId: "WH-007",
          categoryId: "APPLIANCES",
          category: {
            categoryId: "APPLIANCES",
            name: "appliances",
            descn:
              "https://i-petstore.oss-cn-shenzhen.aliyuncs.com/i-logistics-system/image/category/appliances.jpg"
          },
          kindNumOfItem: 3,
          totalSize: 301,
          maxSize: 800
        },
        {
          siteId: "MAIN-002",
          warehouseId: "WH-008",
          categoryId: "DRINK",
          category: {
            categoryId: "DRINK",
            name: "drink",
            descn:
              "https://i-petstore.oss-cn-shenzhen.aliyuncs.com/i-logistics-system/image/category/drink.jpg"
          },
          kindNumOfItem: 3,
          totalSize: 545,
          maxSize: 6000
        },
        {
          siteId: "MAIN-002",
          warehouseId: "WH-009",
          categoryId: "FRUITS",
          category: {
            categoryId: "FRUITS",
            name: "fruits",
            descn:
              "https://i-petstore.oss-cn-shenzhen.aliyuncs.com/i-logistics-system/image/category/fruits.jpg"
          },
          kindNumOfItem: 3,
          totalSize: 850,
          maxSize: 1000
        },
        {
          siteId: "MAIN-002",
          warehouseId: "WH-010",
          categoryId: "CLOTHES",
          category: {
            categoryId: "CLOTHES",
            name: "clothes",
            descn:
              "https://i-petstore.oss-cn-shenzhen.aliyuncs.com/i-logistics-system/image/category/clothes.jpg"
          },
          kindNumOfItem: 8,
          totalSize: 5513,
          maxSize: 15000
        }
      ],
      mainsiteId: "",
      srcWarehouse: "",
      targetWarehouse: "",
      targetItemId: "",
      categoryId: "",
      transferNum: 0,
      selectedWarehouse: [],
      dialogVisible: false,
      keyword: "",
      maxNum: 0,
      pageSize: 10,
      totalPages: 5,
      curPage: 1
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
.warehouse-container {
  zoom: 1.7;
  background-color: #ffffff;
}
</style>