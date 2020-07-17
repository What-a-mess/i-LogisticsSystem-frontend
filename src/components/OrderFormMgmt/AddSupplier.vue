<template>
    <div>
    <el-button type="primary" @click="addNewSupplier()" round>新增供应商</el-button>

        <el-dialog title="新增供应商" :visible.sync="dialogFormVisible" width="35%" top="3%">
            <el-form label-width="100px">
                <el-form-item label="供应商ID">
                    <el-input v-model="supplier.supplierId" style="width:90%"></el-input>
                </el-form-item>
                <el-form-item label="供应商名称">
                    <el-input v-model="supplier.brandName" style="width:90%"></el-input>
                </el-form-item>
                <el-form-item label="经理姓名">
                    <el-input v-model="supplier.managerName" style="width:90%"></el-input>
                </el-form-item>
                <el-form-item label="供应商电话">
                    <el-input v-model="supplier.tel" style="width:90%"></el-input>
                </el-form-item>
                <el-form-item label="供应商邮箱">
                    <el-input v-model="supplier.email" style="width:90%"></el-input>
                </el-form-item>
                <el-form-item label="供应商地址">
                    <AddrSelector @emitSupplierAddr="handlerSupplierAddr" />
                </el-form-item>

                <el-form-item label="详细地址">
                    <el-input v-model="supplier.addr" style="width:90%"></el-input>
                </el-form-item>
            </el-form>

            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="emitSupplier">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import AddrSelector from "../ClienteleMgmt/AddrSelector";
    export default {
        name: "AddSupplier",
        components:{
          AddrSelector
        },
        methods:{
            fetchData(){

            },
            addNewSupplier(){
                this.dialogFormVisible = true;
            },
            handlerSupplierAddr:function(supplierAddr){
                this.supplier.province = supplierAddr[0];
                this.supplier.city = supplierAddr[1];
                this.supplier.diatrict = supplierAddr[2];
            },
            emitSupplier:function () {
                this.dialogFormVisible = false;
                this.SupplierAddReq.supplier = this.supplier;
                this.SupplierAddReq.itemSupplyList = this.itemSupplyList;
                //post把SupplierAddReq 发出去

                setTimeout(this.clear,2000);
            },
            clear(){
                for(var k in this.suppliers){
                    this.suppliers[k] = "";
                }
            }
        },
        mounted() {
            this.fetchData();
        },
        data:function () {
            return{
                dialogFormVisible: false,

                SupplierAddReq : {
                    supplier:null,
                    itemSupplyList:[],
                },

                supplier: {
                    supplierId: "",
                    brandName: "",
                    managerName: "",
                    tel: "",
                    email: "",
                    province: "",
                    city: "",
                    diatrict: "",
                    addr: ""
                },
                itemSupplyList: [
                    // {
                    //     itemId: "520000200309194543",
                    //     categoryId: "150000201908097759",
                    //     name: "gedfipw",
                    //     descn: "应当音还写联性应委种百音而引称十。",
                    //     unitCost: 12415014.21692579,
                    //     listPrice: 60537656.29693144,
                    //     imgUrl: "http://dummyimage.com/728x90",
                    //     status: "ex qui"
                    // },
                    // {
                    //     itemId: "230000197408041135",
                    //     categoryId: "710000201012070427",
                    //     name: "joyopkiuv",
                    //     descn: "便王至习命直深做都圆易教于三自记。",
                    //     unitCost: 76512710.35395956,
                    //     listPrice: 20354704.378009673,
                    //     imgUrl: "http://dummyimage.com/728x90",
                    //     status: "enim cupidatat cillum"
                    // },
                    // {
                    //     itemId: "810000197006278138",
                    //     categoryId: "430000199310302137",
                    //     name: "njp",
                    //     descn: "接以己收任周育常近对等于。",
                    //     unitCost: 47252349.02491245,
                    //     listPrice: 5792743.568395251,
                    //     imgUrl: "http://dummyimage.com/160x600",
                    //     status: "deserunt"
                    // },{
                    //     itemId: "430000197002097347",
                    //     categoryId: "440000200403240745",
                    //     name: "uppf",
                    //     descn: "布般切工产车国斯却当事验报最。",
                    //     unitCost: 88953662.8988478,
                    //     listPrice: 79506080.91544122,
                    //     imgUrl: "http://dummyimage.com/88x31",
                    //     status: "amet ex esse dolore quis"
                    // }
                ]
            }
        }
    }
</script>

<style scoped>

</style>