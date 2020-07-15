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
                    {lng: 116.432045, lat: 39.910683},
                    {lng: 112.55, lat: 37.87},
                    {lng: 120.129721, lat: 30.314429},
                    {lng: 108.47, lat: 33.83},
                    {lng:113.23, lat:23.16},
                    {lng: 121.47, lat: 31.23},

                ],
                siteCity:['北京','太原','杭州','西安','广州','上海'],
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