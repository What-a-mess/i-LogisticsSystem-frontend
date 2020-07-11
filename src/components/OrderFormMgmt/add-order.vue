<template>
    <div>
    <el-button type="primary" @click="dialogFormVisible = true" round>新增订单</el-button>

    <el-dialog title="订单详情" :destroy-on-close="true" :visible.sync="dialogFormVisible" width="35%" top="3%">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="订单ID">
                <el-input v-model="order.orderId" style="width:90%"></el-input>
            </el-form-item>
            <el-form-item label="收件人">
                <el-input v-model="order.receiver" style="width:90%"></el-input>
            </el-form-item>
            <el-form-item label="订单状态">
                <el-input v-model="order.status" style="width:90%"></el-input>
            </el-form-item>

            <el-form-item label="下单日期">
                <el-date-picker
                        v-model="order.createTime"
                        type="date"
                        placeholder="选择日期" style="left: -22%">
                </el-date-picker>
            </el-form-item>

            <el-form-item label="付款日期">
                <el-date-picker
                        v-model="order.paymentTime"
                        type="date"
                        placeholder="选择日期" style="left: -22%">
                </el-date-picker>
            </el-form-item>

            <el-form-item label="订单金额">
                <el-input v-model="order.paymentAmount" style="width:90%"></el-input>
            </el-form-item>

            <el-form-item label="运费">
                <el-input v-model="order.freight" style="width:90%"></el-input>
            </el-form-item>
            <el-form-item label="支付方式">
                <el-input v-model="order.paymentMethod" style="width:90%"></el-input>
            </el-form-item>
            <el-form-item label="收件电话">
                <el-input v-model="order.receiverPhone" style="width:90%"></el-input>
            </el-form-item>


            <el-form-item label="收件地址">
                <el-input v-model="order.receiverAddress" style="width:90%"></el-input>
            </el-form-item>



            <el-form-item label="备注信息">
                <el-input type="textarea" v-model="order.remarks" style="width:90%"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="emitOrder">确 定</el-button>
        </div>
    </el-dialog>
</div>
</template>

<script>
    export default {
        name: "add-order",
        methods:{
            emitOrder:function () {
                this.dialogFormVisible = false;
                this.$emit("addOrder",this.order);
                setTimeout(this.clear,1000)

            },
            clear:function () {
                for(var k in this.order){
                    if(k!="taskForms") {
                        this.order[k] = "";
                    }
                }
            }
        },
        data: function() {
            return {

                dialogFormVisible: false,
                order: {
                    orderId: "",
                    createTime: "",
                    paymentTime: "",
                    paymentAmount: "",
                    freight:"",
                    status: "",
                    paymentMethod: "",
                    receiver: "",
                    receiverPhone: "",
                    receiverAddress: "",
                    remarks: "",
                    taskForms: []
                },
            }
        }
    }
</script>

<style scoped>

</style>