<template>
    <div >
        <el-cascader
                style="left: -22%"
                v-model="value1"
                :options="options"
                :props="{ expandTrigger: 'hover' }"
                @change="handleChange"
        ></el-cascader>

    </div>
</template>

<script>
    export default {
        name: "goodsSelection",
        props:["Goods"],
        data:function () {
            return{

                value1: [],
                options: [{
                    value: 'food',
                    label: '食品',
                    children: [{
                        value: 'apple',
                        label: '苹果',
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
            handleChange(value1) {
                console.log(value1);

                console.log(this.Goods)
                // this.$watch('Goods', function(newVal, oldVal){
                //     console.log('newVal');
                // });
                    //this.$emit("emitGoodsItem", itemId);

            },
        },
        // watch:{
        //     Goods:function (newVal,oldVal) {
        //         console.log(newVal);
        //         console.log(oldVal);
        //     }
        // }
    }
</script>

<style scoped>

</style>