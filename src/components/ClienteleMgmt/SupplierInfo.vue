<template>
  <div>
  <el-row style="padding-top: 2%">
    <el-col :span="2" :offset="21">
      <AddSupplier />
    </el-col>
  </el-row>

  <el-row>
    <el-col :span="23">
      <BasicCard header="供应商管理">
        <el-table :data="suppliers">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="供应商ID：">{{props.row.supplierId}}</el-form-item>
                <el-form-item label="供应商名称：">{{props.row.brandName}}</el-form-item>
<!--                <el-form-item label="联系人姓名">{{props.row.contactName}}</el-form-item>-->
                <el-form-item label="供应商电话：">{{props.row.tel}}</el-form-item>
                <el-form-item
                  label="供应商地址："
                >{{props.row.province}} {{props.row.city}} {{props.row.diatrict}}</el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column label="ID" prop="supplierId"></el-table-column>
          <el-table-column label="名称" prop="brandName"></el-table-column>
          <el-table-column label="省市">
            <template slot-scope="props">{{props.row.province}} {{props.row.city}}</template>
          </el-table-column>
          <el-table-column label="详细地址" prop="addr"></el-table-column>
          <el-table-column label="管理操作">
            <template slot-scope="scope">
            <el-button type="danger" @click="clickToDelSupplier(scope.row)">删除</el-button>
            <el-button type="warning">修改</el-button>
              <el-button type="primary">查看供应商</el-button>
            </template>
          </el-table-column>
        </el-table>

        <br />
        <el-row>
          <el-pagination
                  :current-page.sync="pageNum"
                  :page-count="totalPages"
                  layout="prev, pager, next"
                  @current-change="onPageChange"
          ></el-pagination>
        </el-row>
      </BasicCard>
    </el-col>
  </el-row>
  </div>
</template>

<script>
  import BasicCard from "../PanelCard/BasicCard";
  import AddSupplier from "../OrderFormMgmt/AddSupplier";
export default {
  components:{
    BasicCard,
    AddSupplier
  },
  methods:{
    onPageChange() {
      this.fetchData();
    },
    clickToDelSupplier:function (supplied) {
      this.$confirm('此操作将删除该供应商, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log(supplied);
        //supplied为供应商对象 拿着suppliedId去请求删除   //删除成功则提示删除成功
        this.suppliers.splice(this.suppliers.indexOf(supplied),1)
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }
  },
  data: () => {
    return {
      pageNum: 5,
      pageSize: 59,
      totalSize: 13,
      totalPages: 18,


      suppliers: [
        {
          supplierId: -97429195,
          brandName: "当情性通度",
          tel: "18610391758",
          email: "1062075107@qq.com",
          province: "西藏自治区",
          city: "固原市",
          diatrict: "天津天津市黄浦区",
          addr:"aliquip amet dolore"
        },
        {
          supplierId: "SUP-H-001",
          brandName: "且气认往",
          tel: "18170572554",
          email: "w.xdalw@qq.com",
          province: "河南省",
          city: "天津市",
          diatrict: "sunt do",
          addr: "aliquip amet dolore"
        },
        {
          supplierId: "SUP-H-002",
          brandName: "系非毛从每",
          tel: "19831854924",
          email: "o.yhkyblpu@qq.com",
          province: "河南省",
          city: "洛阳市",
          diatrict: "deserunt ea Duis",
          addr: "qui amet dolore"
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