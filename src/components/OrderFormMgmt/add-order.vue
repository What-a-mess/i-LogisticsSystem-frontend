<template>
    <div>
    <el-button type="primary" @click="dialogFormVisible = true" round>新增订单</el-button>

    <el-dialog title="订单详情" :visible.sync="dialogFormVisible" width="35%" top="3%">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="订单ID">
                <el-input v-model="form.name" style="width:90%"></el-input>
            </el-form-item>
            <el-form-item label="收件人">
                <el-input v-model="form.name" style="width:90%"></el-input>
            </el-form-item>
            <el-form-item label="订单状态">
                <el-input v-model="form.name" style="width:90%"></el-input>
            </el-form-item>

            <el-form-item label="下单日期">
                <el-date-picker
                        v-model="value1"
                        type="date"
                        placeholder="选择日期" style="left: -22%">
                </el-date-picker>
            </el-form-item>

            <el-form-item label="付款日期">
                <el-date-picker
                        v-model="value2"
                        type="date"
                        placeholder="选择日期" style="left: -22%">
                </el-date-picker>
            </el-form-item>

            <el-form-item label="订单金额">
                <el-input v-model="form.name" style="width:90%"></el-input>
            </el-form-item>

            <el-form-item label="运费">
                <el-input v-model="form.name" style="width:90%"></el-input>
            </el-form-item>
            <el-form-item label="支付方式">
                <el-input v-model="form.name" style="width:90%"></el-input>
            </el-form-item>
            <el-form-item label="收件电话">
                <el-input v-model="form.name" style="width:90%"></el-input>
            </el-form-item>


            <el-form-item label="收件地址">
                <el-input v-model="form.name" style="width:90%"></el-input>
            </el-form-item>



            <el-form-item label="备注信息">
                <el-input type="textarea" v-model="form.desc" style="width:90%"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
    </el-dialog>
</div>
</template>

<script>
    export default {
        name: "add-order",
        data: function() {
            return {
                input: "",
                select: "",
                value1: "",
                value2: "",
                sDay: "",
                eDay: "",

                dialogFormVisible: false,
                form: {
                    name: "",
                    region: "",
                    date1: "",
                    date2: "",
                    delivery: false,
                    type: [],
                    resource: "",
                    desc: ""
                },
                formLabelWidth: "120px",
            }
        }
    }
</script>

<style scoped>

</style>