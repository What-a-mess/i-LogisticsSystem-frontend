<template>
    <el-row style="padding-top: 4%">
        <el-col :span="18" :offset="3">
    <BasicCard header="配送策略">
    <el-form ref="form" :model="form" label-width="80px">

        <el-col :span="10" :offset="1">
            <b>
        <el-form-item label="缺货比例">
            <el-col :span="20" >
            <el-input-number v-model="deliveryStrategy.outStockRatio" :min="0" :max="100"></el-input-number>
            </el-col>
        </el-form-item>
            </b>
        </el-col>

        <el-col :span="10" :offset="1">
            <b>
        <el-form-item label="调货数量" >
            <el-col :span="20" >
                <el-input-number v-model="deliveryStrategy.transferNum" :min="0" :max="100"></el-input-number>
            </el-col>
        </el-form-item>
                </b>
        </el-col>


        <el-col :span="20" :offset="1">
            <b>
        <el-form-item label="是否按时间分拣" :label-width="80">
            <el-col :span="4" >
            <el-switch active-color="#13ce66"  v-model="deliveryStrategy.byTime"></el-switch>
            </el-col>
        </el-form-item>
                </b>
        </el-col>

        <el-col :span="20" :offset="1">
            <b>
        <el-form-item label="出货主站优先设定" :label-width="100">
            <el-col :span="7">
            <el-select v-model="deliveryStrategy.transferSite" placeholder="请选择">
            <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    :disabled="item.disabled">
            </el-option>
            </el-select>
            </el-col>
        </el-form-item>
            </b>
        </el-col>

        <el-col :span="20" :offset="1">
            <b>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">修改提交</el-button>
            <el-button type="danger" @click="onClear">恢复默认</el-button>
        </el-form-item>
            </b>
        </el-col>

    </el-form>
    </BasicCard>
        </el-col>
    </el-row>
</template>

<script>
    import BasicCard from "./PanelCard/BasicCard";
    export default {
        name: "DeliverStrategy",
        components:{
          BasicCard
        },
        data() {
            return {
                options: [{
                    value: 'D',
                    label: '距离优先'
                }, {
                    value: 'N',
                    label: '数量多者优先',

                }, {
                    value: 'X',
                    label: '心情优先',
                    disabled: true
                }],
                value: '',
                deliveryStrategy:{
                    byTime:false,
                    outStockRatio:0,
                    transferNum:0,
                    transferSite:"D",
                },
            }
        },
        methods: {
            fetchData(){

            },
            onSubmit() {
                console.log('submit!');
                //提交内容为 this.deliveryStrategy
            },
            onClear(){
                this.deliveryStrategy.byTime = false;
                this.deliveryStrategy.outStockRatio = 1;
                this.deliveryStrategy.transferNum = 0;
                this.deliveryStrategy.transferSite = "D";
            }
        },
        mounted() {
            this.fetchData();
        }
    }
</script>

<style scoped>

</style>