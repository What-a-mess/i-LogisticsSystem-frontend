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
                    }]
                }],


            }
        },
        methods: {
            handleChange(value1) {

                    this.$emit("emitGoodsItemId", value1[1]);

            },

        },
        created() {
            for(var i=0;i<this.Goods.length;i++){
                this.options[i].value = this.Goods[i].categoryId;
                this.options[i].label = this.Goods[i].categoryName;
                for(var j=0;j<this.Goods[i].items.length;j++){
                    this.options[i].children[j].value = this.Goods[i].items[j].itemId;
                    this.options[i].children[j].label = this.Goods[i].items[j].itemName;
                }
            }
        },
        // watch:{
        //     Goods:function (val) {
        //         for(var i=0;i<val.length;i++){
        //             this.options[i].value = val[i].categoryId;
        //             this.options[i].label = val[i].categoryName;
        //             for(var j=0;j<val[i].items.length;j++){
        //                 this.options[i].children[j].value = val[i].items[j].itemId;
        //                 this.options[i].children[j].label = val[i].items[j].itemName;
        //             }
        //         }
        //     }
        // }
    }
</script>

<style scoped>

</style>