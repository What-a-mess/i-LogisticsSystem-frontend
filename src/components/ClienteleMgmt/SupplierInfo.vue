<template>
  <el-row>
    <el-col>
      <el-card>
        <el-table :data="suppliers">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="供应商ID">{{props.row.supplierId}}</el-form-item>
                <el-form-item label="供应商名称">{{props.row.supplierName}}</el-form-item>
                <el-form-item label="联系人姓名">{{props.row.contactName}}</el-form-item>
                <el-form-item label="联系人电话">{{props.row.contactPhone}}</el-form-item>
                <el-form-item
                  label="供应商地址"
                >{{props.row.supplierProvince}} {{props.row.supplierCity}} {{props.row.supplierAddress}}</el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column label="ID" prop="supplierId"></el-table-column>
          <el-table-column label="名称" prop="supplierName"></el-table-column>
          <el-table-column label="省市">
            <template slot-scope="props">{{props.row.supplierProvince}} {{props.row.supplierCity}}</template>
          </el-table-column>
          <el-table-column label="详细地址" prop="supplierAddress"></el-table-column>
        </el-table>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data: () => {
    return {
      suppliers: [
        {
          supplierId: -97429195,
          supplierName: "当情性通度",
          contactName: "广还知面起型",
          contactPhone: "18610391758",
          supplierProvince: "西藏自治区",
          supplierCity: "固原市",
          supplierAddress: "天津天津市黄浦区"
        },
        {
          supplierId: 84433710,
          supplierName: "花那那他六",
          contactName: "切代节八几民十",
          contactPhone: "13399664891",
          supplierProvince: "重庆",
          supplierCity: "吴忠市",
          supplierAddress: "澳门特别行政区桃园县西华县"
        },
        {
          supplierId: -16476637,
          supplierName: "应细层节",
          contactName: "务族放团几商值",
          contactPhone: "18657123543",
          supplierProvince: "重庆",
          supplierCity: "东营市",
          supplierAddress: "云南省鄂州市西秀区"
        },
        {
          supplierId: -65878502,
          supplierName: "红适处素门人",
          contactName: "群着斯",
          contactPhone: "18132252703",
          supplierProvince: "西藏自治区",
          supplierCity: "保定市",
          supplierAddress: "重庆昌都地区孝南区"
        }
      ]
    };
  }
};
</script>

<style scoped>
.el-row {
  padding: 20px;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>