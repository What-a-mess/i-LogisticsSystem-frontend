<template>




  <el-row>
    <el-col :span="12">
      <el-card>
        <span slot="header">任务单信息</span>
        <el-table :data="taskForms">
          <el-table-column label="任务单ID" prop="taskId"></el-table-column>
          <el-table-column label="配送站ID" prop="subsiteId"></el-table-column>
          <el-table-column label="任务单状态" prop="status"></el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card>
          <span slot="header">退货单信息</span>
          <el-table :data="returnForm">
              <el-table-column label="退货单ID" prop="rfid"></el-table-column>
          </el-table>
      </el-card>
    </el-col>
  </el-row>

</template>

<script>
export default {
  data: () => {
    return {

      taskForms: [
        {
          taskId: 10101,
          subsiteId: 10101,
          status: "N"
        },
        {
          taskId: 10102,
          subsiteId: 10101,
          status: "Y"
        },
        {
          taskId: 10102,
          subsiteId: 10101,
          status: "W"
        }
      ],
      returnForm: [
          {
              rfid: 11111
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