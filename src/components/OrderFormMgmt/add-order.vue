<template>
    <div>
    <el-button type="primary" @click="addNewOrder()"  round>新增订单</el-button>

    <el-dialog title="订单详情" :destroy-on-close="true" :visible.sync="dialogFormVisible"  width="35%" top="3%">
        <el-form label-width="80px">
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
                <GoodsSelection v-bind:Goods="getGoods()"  @emitGoodsItemId="handleGoodsItemId" />
            </el-form-item>

            <el-form-item label="商品数量">
                <el-input-number style="left: -19%" v-model="orderItemList[number_of_Items].quantity" :min="0" :max="99"></el-input-number>
                <el-button type="success" plain @click="clickAddItem">选择</el-button>
            </el-form-item>
            <el-form-item label="已选择商品: "  label-width="20">
            <el-tag
                    :key="tag"
                    v-for="tag in dynamicTags"
                    closable
                    :disable-transitions="false"
                    @close="handleClose(tag)">
                {{tag}}
            </el-tag>
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
    import {Loading} from 'element-ui'
    export default {
        name: "add-order",

        components:{
            GoodsSelection,
            cascadeSelection
        },
        methods:{
            addNewOrder:function(){
                this.dialogFormVisible = true;
            },
            getGoods:function(){
                //应该是向后端请求 货物数据
                return [{
                    categoryId: 12312,
                    categoryName:"food",
                    items:[{
                        itemId:"EST-18",
                        itemName:"banana",
                        listPrice: 15
                    },{
                        itemId:"EST-19",
                        itemName:"apple",
                        listPrice: 25
                    }]
                },
                    {
                        categoryId: 12313,
                        categoryName:"drink",
                        items:[{
                            itemId:"ESK-18",
                            itemName:"milk",
                            listPrice: 20
                        },{
                            itemId:"ESK-19",
                            itemName:"coco",
                            listPrice: 30
                        }]
                    },
                ]
            },
            handleGoodsItemId:function(e){
                var goodsItemId = e;
                this.orderItemList[this.number_of_Items].item.itemId= goodsItemId;
            },
            handleAddr:function(e){
                var Addr = e;
                this.order.billPro = Addr[0];
                this.order.billCity = Addr[1];
                this.order.billDistrict = Addr[2];
            },
            clickAddItem:function(){
                // console.log("第"+this.number_of_Items+"个商品数量为"+this.orderItemList[this.number_of_Items].quantity+"商品为：");
                // console.log(this.orderItemList);
                var allGoods = this.getGoods();

                for(var i=0;i<allGoods.length;i++){
                    for(var j=0;j<allGoods[i].items.length;j++){
                        console.log()
                        if(this.orderItemList[this.number_of_Items].item.itemId == allGoods[i].items[j].itemId){
                            this.orderItemList[this.number_of_Items].totalPrice = this.orderItemList[this.number_of_Items].quantity *allGoods[i].items[j].listPrice;
                            break;
                        }
                    }
                }
                //console.log(this.orderItemList);
                this.number_of_Items +=1;
                var newItem = {
                    quantity:1,
                    totalPrice:0,
                    item:{
                        itemId:"",
                    }
                };
                this.orderItemList.push(newItem);
            },
            emitOrder:function () {
                let loadingInstance1 = Loading.service({ fullscreen: true });
                //视觉关闭
                this.dialogFormVisible = false;

                //弹出最后一个空对象
                this.orderItemList.pop();
                //计算此订单的总价
                for(var k=0;k<this.orderItemList.length;k++){
                    this.order.totalPrice += this.orderItemList[k].totalPrice;
                }
                //封装数据到OrderAddReq数组中
                this.OrderAddReq.push(this.order);
                this.OrderAddReq.push(this.orderItemList);
                 this.OrderAddReq.push(this.manual);
                console.log(this.OrderAddReq);

                /*

                这一部分代码为发送数据给后端  注意传的是sendData

                */
                 setTimeout(loadingInstance1.close(),2000)
                 setTimeout(this.clear,1000);

            },
            closeDialog(){

            },
            clear:function () {
                for(var k in this.order){
                        this.order[k] = "";
                }
                this.orderItemList=[ {
                    quantity:1,
                    totalPrice: "",
                    item: {
                        itemId:"",
                    },
                }
                ];
                this.manual = false;
                this.OrderAddReq=[];
            },
            handleClose(tag) {
                this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
            },
        },
        data: function() {
            return {
                dynamicTags: ['milk * 3', 'bananas * 2', 'coco * 9'],
                inputValue: '',

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
                    orderId: "",
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
                    quantity:1,
                    totalPrice: "",
                    item: {
                        itemId:"",
                    },
                }
                ],
                number_of_Items:0,

                manual : false,

            }
        }
    }
</script>

<style scoped>

</style>