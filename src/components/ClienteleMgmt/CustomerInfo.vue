<template>
  <el-row>
    <el-col>
      <el-card>
        <el-table :data="customers">
          <el-table-column label="ID" prop="customerId"></el-table-column>
          <el-table-column label="姓名" prop="customerName"></el-table-column>
          <el-table-column label="电话" prop="customerPhone"></el-table-column>
          <el-table-column label="邮箱" prop="customerEmail"></el-table-column>
          <el-table-column label="地址" prop="customerAddress"></el-table-column>
        </el-table>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data: () => {
    return {
      customers: [
        {
          customerId: 93633694,
          customerName: "声记小组",
          customerPhone: "18189486539",
          customerEmail: "k.bqvludanf@qq.com",
          customerAddress: "海南省玉树藏族自治州鄂托克前旗"
        },
        {
          customerId: -54997737,
          customerName: "性格身候目本或",
          customerPhone: "19835913636",
          customerEmail: "g.lihnabwx@qq.com",
          customerAddress: "澳门特别行政区平顶山市东至县"
        },
        {
          customerId: -59559654,
          customerName: "第些当类参养",
          customerPhone: "18123858686",
          customerEmail: "q.xyibjmjazy@qq.com",
          customerAddress: "青海省温州市石景山区"
        }
      ]
    };
  }
};
</script>

<style scoped>
.el-col {
    padding: 20px;
}
</style>