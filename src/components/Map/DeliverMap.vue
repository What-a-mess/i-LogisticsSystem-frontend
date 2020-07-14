<template>
    <el-row >
        <el-col :span="11">
    <BasicCard header="配送信息" style="left: 0.75%;height: 600px">
        <el-steps  direction="vertical" :active=deliverStauts :process-status=processStatus>
            <el-step :title=startStep :description=startDescrip></el-step>
            <el-step :title=nowStep :description=nowDescrip></el-step>
            <el-step :title=endStep :description=endDescrip></el-step>
        </el-steps>
<!--        <el-steps direction="vertical" :active="1">-->
<!--            <el-step title="步骤 1"></el-step>-->
<!--            <el-step title="步骤 2"></el-step>-->
<!--            <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>-->
<!--        </el-steps>-->
<!--        <el-steps direction="vertical" :active="1">-->
<!--            <el-step title="步骤 1"></el-step>-->
<!--            <el-step title="步骤 2"></el-step>-->
<!--            <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>-->
<!--        </el-steps>-->
    </BasicCard>
        </el-col>
        <el-col :span="13">
    <BasicCard header="配送地图" style="left: 1.3%;width: 98.5%">
    <baidu-map class="map" :center="{lng: 116.432045, lat: 39.910683}" :zoom="18" :scroll-wheel-zoom="false">
        <bm-driving
                :start="startPosition"
                :end="endPosition"
                :auto-viewport="true"
                policy="BMAP_DRIVING_POLICY_LEAST_TIME"
                :panel="false"
                location="北京"
                :waypoints="nowPosition">
        </bm-driving>
    </baidu-map>
    </BasicCard>
            </el-col>
    </el-row>
</template>

<script>
    import BasicCard from "../PanelCard/BasicCard";
    import myaxios from "../../plugins/myaxios";
    export default {
        name: "DeliverMap",
        components:{
            BasicCard,
        },
        data(){
           return{
               startPosition:"南宁东站",
               endPosition:"武昌站",
               nowPosition:['长沙南站'],
               startDescrip:"",
               nowDescrip:"",
               endDescrip:"",
               deliverStauts:1,
               processStatus:"",
               startStep:"",
               nowStep:"",
               endStep:"",
               restDeliverDay:1,
           }
        },
        created() {
            this.startDescrip = "买家已发货，正在发往" + this.startPosition + "集运中心";
            this.startStep = "卖家已发货";
            this.processStatus = "finish";
            if(this.deliverStauts>0){
                this.nowStep = "预计还有"+this.restDeliverDay + "天送达";
                this.processStatus = "process";
              this.nowDescrip = "现已抵达："+this.nowPosition[0] +"集运中心";
            }
            if(this.deliverStauts>1){
                this.nowPosition = [];
                this.nowStep = "交易完成";
                this.processStatus = "success";
                this.endDescrip = "货物已送达";
            }
        },
        methods:{
            getDeliverPoints:function () {
                myaxios.get("/goods/catalog").then(res => {
                    this.startPosition = res.data[0];
                    this.endPosition = res.data[1];
                    this.nowPosition = res.data[2];
                });
            }
        }
    }
</script>

<style scoped>
    .map{
        width: 100%;
        height: 610px;

    }
</style>