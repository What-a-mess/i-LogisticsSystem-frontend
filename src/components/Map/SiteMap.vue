<template>
    <BasicCard header="站点地图" style="left: 1.5%;top: 1.5%;width: 98.5%">
    <baidu-map class="map" :center="{lng: 118.454, lat: 32.955}" :zoom="6" :scroll-wheel-zoom="false">
        <bml-curve-line :points="points" :editing="true" @lineupdate="update"></bml-curve-line>
        <div v-for="(point,index) in points" v-bind:key="point.assign">
            <bm-marker :position="point" :dragging="false"  @click="infoWindowOpen(index)">
            </bm-marker>
        </div>



        <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
    </baidu-map>
    </BasicCard>
</template>

<script>
    import {BmlCurveLine} from 'vue-baidu-map'
    import BasicCard from "../PanelCard/BasicCard";
    import myaxios from "../../plugins/myaxios";
    export default {
        name: "SiteMap",
        components:{
            BasicCard,
            BmlCurveLine,
        },
        methods: {
            update (e) {
                this.points = e.target.cornerPoints
            },
            getSitePoints:function () {
                myaxios.get("/goods/catalog").then(res => {
                    this.points = res.data;
                });
            },
            infoWindowOpen (index) {

                const h = this.$createElement;
                this.$notify({
                    title: '主站',
                    message: h('i', { style: 'color: teal'}, this.siteCity[index]+"主站, 美丽富饶")
                });
            }
        },
        data () {
            return {
                points: [
                    {lng: 120.565, lat: 30.630},
                    {lng: 113.273, lat: 23.158},
                    {lng: 121.109, lat: 31.450},
                    {lng:112.820, lat:28.347},
                    {lng: 108.961, lat: 34.266},


                ],
                siteCity:['嘉兴','广州','苏州','长沙','西安'],
            }
        },
    }
</script>

<style scoped>
.map{
    width: 100%;
    height: 610px;

}
</style>