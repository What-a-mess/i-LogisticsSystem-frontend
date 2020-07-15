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
        <el-col :span="12">
          <div class="text-label">现价:</div>
          <div class="text-value">{{item.unitCost}}</div>
        </el-col>
        <el-col :span="12">
          <div class="text-label">原价:</div>
          <div class="text-value">{{item.listPrice}}</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div class="text-label">状态:</div>
          <div class="text-value">{{item.status}}</div>
        </el-col>
        <el-col :span="12">
          <div class="text-label">大类:</div>
          <div class="text-value">{{item.categoryId}}</div>
        </el-col>
      </el-row>
      <el-row>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item", "quantity"],
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
}
.text-value {
  float: left;
  min-height: 30px;
  max-width: 80%;
  text-align: left;
}
.content-box {
  margin: 20px;
}
</style>
<style type="text/css" src="../../assets/css/sb-admin-2.css" scoped>