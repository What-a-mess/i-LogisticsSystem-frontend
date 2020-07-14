<template>
    <BasicCard header="配送地图" style="left: 1.5%;top: 1.5%;width: 98.5%">
    <baidu-map class="map" :center="{lng: 116.432045, lat: 39.910683}" :zoom="18" :scroll-wheel-zoom="false">
        <bm-driving
                :start="startPosition"
                :end="endPosition"
                :auto-viewport="true"
                policy="BMAP_DRIVING_POLICY_LEAST_DISTANCE"
                :panel="false"
                location="北京"
                :waypoints="nowPosition">
        </bm-driving>
    </baidu-map>
    </BasicCard>
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
               startPosition:"天通苑北",
               endPosition:"宋家庄地铁站",
               nowPosition:['西二旗'],
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