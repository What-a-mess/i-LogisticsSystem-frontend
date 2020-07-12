<template>
    <div>
    <el-button type="primary" @click="addNewOrder()" v-bind:Goods="getGoods()" round>新增订单</el-button>

    <el-dialog title="订单详情" :destroy-on-close="true" :visible.sync="dialogFormVisible"  width="35%" top="3%">
        <el-form  label-width="80px">
            <el-form-item label="订单ID">
                <el-input v-model="order.orderId" style="width:90%"></el-input>
            </el-form-item>


            <el-form-item label="收件人ID">
                <el-input v-model="order.customerId" style="width:90%"></el-input>
            </el-form-item>
            <el-form-item label="收件人">
                <el-input v-model="order.billName" style="width:90%"></el-input>
            </el-form-item>
            <el-form-item label="选择商品">
                <GoodsSelection  @emitGoodsItem="handleGoodsItem" />
            </el-form-item>

            <el-form-item label="商品数量" @emitGoodsItem="handleGoodsItem">
                <el-input-number style="left: -26%" v-model="orderItemList[0].quantity" :min="1" :max="99"></el-input-number>
<!--                <el-button @click="clickfun">选择</el-button>-->
            </el-form-item>

            <el-form-item label="付款状态">
            <el-select v-model="order.payStatus" placeholder="请选择" style="left: -22%">
                <el-option
                        v-for="item in payOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
            </el-form-item>
            <el-form-item label="订单状态">
                <el-select v-model="order.processStatus" placeholder="请选择" style="left: -22%">
                    <el-option
                            v-for="item in orderOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="下单日期">
                <el-date-picker
                        v-model="order.createDateTime"
                        type="date"
                        placeholder="选择日期" style="left: -22%">
                </el-date-picker>
            </el-form-item>

            <el-form-item label="付款日期">
                <el-date-picker
                        v-model="order.payDateTime"
                        type="date"
                        placeholder="选择日期" style="left: -22%">
                </el-date-picker>
            </el-form-item>

<!--            <el-form-item label="总付款">-->
<!--                <el-input v-model="order.totalPrice" style="width:90%"></el-input>-->
<!--            </el-form-item>-->

            <el-form-item label="运费">
                <el-input v-model="order.shippingCost" style="width:90%"></el-input>
            </el-form-item>
            <el-form-item label="支付方式">
                <el-input v-model="order.payMethod" style="width:90%"></el-input>
            </el-form-item>



            <el-form-item label="下单地址"><cascade-selection @emitAddr="handleAddr">
            </cascade-selection></el-form-item>
            <el-form-item label="详细地址">
                <el-input v-model="order.billAddr" style="width:90%"></el-input>
            </el-form-item>


            <el-form-item label="是否为手动订单" label-width="20">
            <el-switch
                    v-model="manual"
                    active-color="#13ce66"
                    style="left: -35%"
                    >
            </el-switch>
            </el-form-item>

            <el-form-item label="备注信息">
                <el-input type="textarea" v-model="order.note" style="width:90%"></el-input>
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
    import cascadeSelection from "./cascadeSelection";
    import GoodsSelection from "./goodsSelection";
    export default {
        name: "add-order",

        components:{
            GoodsSelection,
            cascadeSelection
        },
        methods:{
            addNewOrder:function(){
                this.dialogFormVisible = true;
                console.log(this.getGoods());
            },
            getGoods:function(){
                //应该是向后端请求 货物数据
                return [{
                    categoryId: 12312,
                    categoryName:"food",
                    items:[{
                        itemId:"EST-18",
                        itemName:"banana",
                        itemPrice: 15
                    },{
                        itemId:"EST-19",
                        itemName:"apple",
                        itemPrice: 25
                    }]
                },
                    {
                        categoryId: 12313,
                        categoryName:"drink",
                        items:[{
                            itemId:"ESK-18",
                            itemName:"milk",
                            itemPrice: 20
                        },{
                            itemId:"ESK-19",
                            itemName:"coco",
                            itemPrice: 30
                        }]
                    },
                ]
            },
            handleAddr:function(e){
                var Addr = e;
                this.billPro = Addr[0];
                this.billCity = Addr[1];
                this.billDistrict = Addr[2];

            },
            handleGoodsItem:function(e){
                var GoodsItem = e;
                this.orderItemList[0].item= GoodsItem;
                console.log(this.orderItemList[0].item)
            },
            emitOrder:function () {
                for(var i=0;i<this.orderItemList.length;i++){
                    this.orderItemList[i].totalPrice = 20*this.orderItemList[i].quantity;
                }

                //封装数据到OrderAddReq数组中
                this.dialogFormVisible = false;
                var order = {};
                order =  this.order;
                this.OrderAddReq.push(order);

                this.OrderAddReq.push(this.orderItemList);

                var isHand = false;
                 isHand =  this.manual;
                 this.OrderAddReq.push(isHand);

                 var sendData = [];
                 sendData = this.OrderAddReq;
                console.log(sendData);
                /*
                这一部分代码为发送数据给后端  注意传的是sendData

                */

               // setTimeout(this.clear,500)

            },
            clear:function () {
                for(var k in this.order){
                        this.order[k] = "";
                }

                this.manual = false;
                this.OrderAddReq=[];
            }
        },
        data: function() {
            return {
                OrderAddReq :[],
                dialogFormVisible: false,

                payOptions: [{
                    value: 'P',
                    label: '已付款'
                }, {
                    value: 'W',
                    label: '未付款'
                }],
                goodsOptions: [{
                    value: 'P',
                    label: '已付款'
                }, {
                    value: 'W',
                    label: '未付款'
                }],
                orderOptions: [{
                    value: 'N',
                    label: '未处理'
                }, {
                    value: 'P',
                    label: '正常处理'
                },{
                    value: 'D',
                    label: '交易成功'
                },{
                    value: 'C',
                    label: '交易关闭'
                }],


                order: {
                    orderId: "1",
                    createDateTime: "",
                    payDateTime: "",
                    totalPrice: "",
                    billName:"",
                    shippingCost:"",
                    payStatus:"",
                    processStatus: "",
                    payMethod: "",
                    customerId: "",
                    billPro: "",
                    billCity: "",
                    billDistrict: "",
                    billAddr:"",
                    note: "",
                },
                orderItemList:[ {
                    quantity:"",
                    totalPrice: "",
                    item: {
                        itemId:"",
                    },
                }
                ],

                manual : false,

            }
        }
    }
</script>

<style scoped>

</style>