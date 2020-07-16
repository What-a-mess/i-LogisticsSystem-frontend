<template>
  <div>
    <div class="display-box">
      <el-row>
        <el-form :inline="true">
          <el-form-item label="大类ID">
            <el-select v-model="selectedCategory" multiple placeholder="请选择" @change="getItems">
              <el-option
                v-for="category in categoryOptions"
                :key="category.categoryId"
                :label="category.categoryName"
                :value="category.categoryId"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="关键词">
            <el-input v-model="keyword" @blur="getItems"></el-input>
          </el-form-item>
        </el-form>
      </el-row>
      <el-row>
        <el-col :span="20" :offset="2">
          <ItemCard v-for="item in items" :key="item.itemId" :item="item" class="item-box"></ItemCard>
        </el-col>
      </el-row>
      <el-row>
        <el-pagination
          :current-page.sync="curPage"
          :page-count="totalPages"
          layout="prev, pager, next"
          @current-change="onPageChange"
        ></el-pagination>
      </el-row>
    </div>
  </div>
</template>

<script>
import ItemCard from "../DataCard/ItemCard";
import { getCatergies, getItemList } from "../../api/storage";

export default {
  components: { ItemCard },
  methods: {
    getItems() {
      getItemList({
        pageNum: this.curPage,
        pageSize: this.pageSize,
        categoryIdList: this.selectedCategory,
        keyword: this.keyword
      }).then(res => {
        this.items = res.data.content;
        this.totalPages = res.data.totalPages;
      });
    },
    getCatorgyOptions() {
      getCatergies().then(res => {
        this.categoryOptions = res.data;
      });
    },
    onPageChange() {
      this.getItems();
    }
  },
  data: function() {
    return {
      curPage: 1,
      pageSize: 4,
      totalPages: 0,
      selectedCategory: [],
      keyword: "",
      categoryOptions: [
        {
          categoryId: 4,
          categoryName: "世片切效适或界",
          description: "dolore"
        },
        {
          categoryId: 78,
          categoryName: "气律年我",
          description: "reprehenderit enim dolore"
        }
      ],
      items: []
    };
  },
  mounted() {
    this.getItems();
    this.getCatorgyOptions();
  }
};
</script>

<style scoped>
.item-box {
  float: left;
  margin: 35px;
}
.display-box {
  margin: 50px 50px 50px;
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