<template>
    <div >
        <el-cascader
                style="left: -22%"
                v-model="value"
                :options="options"
                :props="{ expandTrigger: 'hover' }"
                @change="handleChange"></el-cascader>
    </div>
</template>

<script>
    export default {
        name: "goodsSelection",
        data:function () {
            return{
                goodsItem:{
                    itemId:"",
                    categoryId:"",
                    name:"",
                    descn:"",
                    unitCost:"",
                    listPrice:"",
                    imgUrl	:"",
                    status:"",
                },

                options: [{
                    value: 'zhinan',
                    label: '指南',
                    children: [{
                        value: 'shejiyuanze',
                        label: '设计原则',
                    }, {
                        value: 'daohang',
                        label: '导航',
                    }]
                }, {
                    value: 'zujian',
                    label: '组件',
                    children: [{
                        value: 'basic',
                        label: 'Basic基础',
                    }, {
                        value: 'form',
                        label: 'Form表单',
                    }, {
                        value: 'data',
                        label: 'Data数据',
                    }, {
                        value: 'notice',
                        label: 'Notice通知',
                    }, {
                        value: 'navigation',
                        label: 'Navigation导航',

                    }, {
                        value: 'others',
                        label: 'Others',
                    }]
                }, {
                    value: 'ziyuan',
                    label: '资源',
                    children: [{
                        value: 'axure',
                        label: 'Axure组件'
                    }, {
                        value: 'sketch',
                        label: 'Sketch模板'
                    }, {
                        value: 'jiaohu',
                        label: '组件交互文档'
                    }]
                }],


            }
        },
        methods: {
            handleChange(value) {
                var GoodsItem=[];
                GoodsItem = value;
                this.$emit("emitGoodsItem",GoodsItem);
            }
        }
    }
</script>

<style scoped>

</style>