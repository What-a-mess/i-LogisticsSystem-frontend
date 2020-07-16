<template>
  <div class="card-box shadow mb-4">
    <el-row>
      <div class="image-container">
        <img draggable="false" :src="item.imgUrl" />
      </div>
    </el-row>
    <div class="content-box">
      <el-row>
        <el-col>
          <h5>
            <div class="text-label" style="width: 50px">编号:</div>
            <div class="text-value">{{item.itemId}}</div>
          </h5>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <h5>
            <div class="text-label" style="width: 50px">名称:</div>
            <div class="text-value">{{item.name}}</div>
          </h5>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="text-label">大类:</div>
          <div class="text-value">{{item.categoryId}}</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="text-label" v-if="warehouseId">库房:</div>
          <div class="text-value">{{warehouseId}}</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24" v-if="quantity">
          <div class="text-label">库存:</div>
          <div class="text-value">{{quantity}}</div>
        </el-col>
      </el-row>
      <el-row><el-button type="success" style="zoom: 0.8" @click="toDetails">详细信息</el-button></el-row>
    </div>
  </div>
</template>

<script>
import router from "../../plugins/router"

export default {
  props: ["item", "quantity", "warehouseId"],
  methods: {
    toDetails() {
      router.push("/main/goods/items/"+this.item.itemId)
    }
  },
  data: function() {
    return {};
  },
  mounted() {
    
  }
};
</script>

<style scoped>
.image-contaier {
  margin: 0;
}
img {
  width: 100%;
  height: 250px;
  width: 250px;
  border-radius: 0.35rem 0.35rem 0 0;
}
.card-box {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border-radius: 0.35rem;
  max-width: 250px;
}
.display-box {
  margin: 50px 50px 100px;
}
.text-label {
  float: left;
  width: 40px;
  min-height: 30px;
  text-align: right;
  zoom: .8;
}
.text-value {
  float: left;
  min-height: 30px;
  max-width: 80%;
  text-align: left;
  zoom: .8;
}
.content-box {
  margin: 20px;
}
</style>
<style type="text/css" src="../../assets/css/sb-admin-2.css" scoped>