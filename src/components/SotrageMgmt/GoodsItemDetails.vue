<template>
    <el-col>
    <el-row>
        <br /><br />
    </el-row>
    <el-row>
        <el-col :span=22 :offset="1">
            <BasicCard header="商品图片">
                <el-row>
                    <el-col :span="7">
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
                <div >
                    <div class="itemName"><span><b>{{item.name}}</b></span></div>
                    <div class="descn">
                        <time>{{item.descn}}</time>
                    </div>
                    <el-button type="primary" @click="getUniqueItemId" round>操作按钮</el-button>
                </div>
                    </el-col>
                    <el-col :span="6" :offset="1" style="text-align: left">
                        <el-row><b>商品大类ID：</b>{{item.categoryId}}</el-row><br />
                        <el-row><b>商品成本：</b>{{item.unitCost}}</el-row><br />
                        <el-row><b>商品状态：</b>
                                <el-tag v-if="item.status=='P'" type="success">上架</el-tag>
                                <el-tag v-else-if="item.status=='F'" type="danger">下架</el-tag>
                        </el-row><br />
                        <el-row><b>各主站库存情况：</b></el-row><br />
                        <el-table
                                :data="mainsiteInventoryList"
                                style="width: 100%"
                                height="250">
                            <el-table-column
                                    fixed
                                    prop="mainsiteId"
                                    label="主站ID"
                                    width="150">
                            </el-table-column>
                            <el-table-column
                                    prop="itemInventory"
                                    label="主站库存"
                                    width="150">
                            </el-table-column>

                        </el-table>
                    </el-col>
                    <el-col :span="6" :offset="1" style="text-align: left">
                        <el-row><b>商品ID：</b>{{item.itemId}}</el-row><br />
                        <el-row><b>商品标价：</b>{{item.listPrice}}</el-row><br />
                        <el-row><b>总库存量：</b>{{totalInventory}}</el-row><br />
                    </el-col>

                </el-row>
            </BasicCard>
        </el-col>
    </el-row>
    </el-col>
</template>

<script>
    import BasicCard from "../PanelCard/BasicCard";
    export default {
        name: "GoodsItemDetails",
        components:{
          BasicCard
        },
        data:function () {
            return{
                item: {
                itemId: "310000201504285550",
                    categoryId: "330000199204040555",
                    name: "wbappwxbes",
                    descn: "无实军家条活年是气场清九里又。",
                    unitCost: 68977032.58929197,
                    listPrice: 49541599.28394714,
                    imgUrl: "http://dummyimage.com/250x250",
                    status: "P"
            },
                totalInventory: 157,
                mainsiteInventoryList: [
                {
                    mainsiteId: "48",
                    itemInventory: 29
                },
                {
                    mainsiteId: "44",
                    itemInventory: 80
                },
                {
                    mainsiteId: "77",
                    "itemInventory": 37
                },
                {
                    mainsiteId: "95",
                    itemInventory: 11
                }
            ],}

        },
        methods:{
            getUniqueItemId: function() {
                // 获取了 主站号 和 商品ID  我觉得主站ID唯一的作用可能就是 获取 当前商品在该站 是否出于上架状态
                console.log(this.$route.params.mainsiteId);
                console.log(this.$route.params.goodsItemId);
                //通过 $route.params.mainsiteId $route.params.goodsItemId 获取商品详情 分配到 this.item  this.totalInventory this.mainsiteInventoryList
            },
        }
    }
</script>

<style scoped>
    .itemName{
        padding: 10px;
        font-size: 20px;
    }
    .descn{
        padding-bottom: 8px;
        font-size: 13px;
        color: #999;
    }
</style>