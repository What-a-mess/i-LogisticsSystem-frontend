<template>
    <el-row >
        <el-col :span="11">
    <BasicCard header="配送信息" style="left: 0.75%;height: 600px">
        <el-steps  direction="vertical" :active=deliverStauts :process-status=processStatus>
            <el-step :title=startStep :description=startDescrip></el-step>
            <el-step :title=nowStep :description=nowDescrip></el-step>
            <el-step :title=endStep :description=endDescrip></el-step>
        </el-steps>
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
        <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
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
               deliverStauts:1,
               startPosition: {
                   lng: 116.432045,
                   lat: 39.910683
               },
               endPosition: {lng: 112.55, lat: 37.87},
               nowPosition:[],
               startDescrip:"",
               nowDescrip:"",
               endDescrip:"",
               processStatus:"",
               startStep:"",
               nowStep:"",
               endStep:"",
               restDeliverDay:1,




               first: {
                   distance: 27,
                   duration: 92,
                   steps: [
                       {
                           leg_index: 3,
                           start_location: {
                               lng: 108.47,
                               lat: 33.83
                           },
                           end_location: {
                               lng: 31,
                               lat: 96
                           }
                       },
                       {
                           leg_index: 69,
                           start_location: {
                               lng: 96,
                               lat: 60
                           },
                           end_location: {
                               lng: 114.31,
                               lat: 30.52
                           }
                       }
                   ]
               },
               second: {
                   distance: 31,
                   duration: 52,
                   steps: [
                       {
                           leg_index: 11,
                           start_location: {
                               lng: 56,
                               lat: 62
                           },
                           end_location: {
                               lng: 18,
                               lat: 46
                           }
                       },
                       {
                           leg_index: 26,
                           start_location: {
                               lng: 99,
                               lat: 37
                           },
                           end_location: {
                               lng: 1,
                               lat: 56
                           }
                       }, {
                           leg_index: 97,
                           start_location: {
                               lng: 60,
                               lat: 38
                           },
                           end_location: {
                               lng: 78,
                               lat: 49
                           }
                       },
                       {
                           leg_index: 83,
                           start_location: {
                               lng: 27,
                               lat: 22
                           },
                           end_location: {
                               lng: 65,
                               lat: 100
                           }
                       },
                       {
                           leg_index: 21,
                           start_location: {
                               lng: 49,
                               lat: 33
                           },
                           end_location: {
                               lng: 120.129721,
                               lat: 30.314429
                           }
                       }
                   ]
               },
           }
        },
        created() {
            this.startPosition = this.first.steps[0].start_location;
            this.endPosition = this.second.steps[this.second.steps.length-1].end_location;
            this.nowPosition.push(this.first.steps[this.first.steps.length-1].end_location);

            this.startDescrip = "买家已发货，正在发往集运中心";
            this.startStep = "卖家已发货";
            this.processStatus = "finish";

            if(this.deliverStauts>0){
                this.nowStep = "预计还有"+this.restDeliverDay + "天送达";
                this.processStatus = "process";
              this.nowDescrip = "现已抵达经度为："+this.nowPosition[0].lng+"\t纬度为："+this.nowPosition[0].lat+"的位置";
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
                    console.log(res);
                    // this.startPosition = res.data[0];
                    // this.endPosition = res.data[1];
                    // this.nowPosition = res.data[2];
                });
            }
        },
        mounted() {
            //先 getDeliverPoints() get到数据 赋到 this.first 和 this.second 中
            //


        }
    }
</script>

<style scoped>
    .map{
        width: 100%;
        height: 610px;

    }
</style>