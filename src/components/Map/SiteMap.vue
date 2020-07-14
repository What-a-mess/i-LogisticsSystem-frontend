<template>
    <BasicCard header="站点地图" style="left: 1.5%;top: 1.5%;width: 98.5%">
    <baidu-map class="map" :center="{lng: 118.454, lat: 32.955}" :zoom="6" :scroll-wheel-zoom="false">
<!--        <bm-label content="北京站点" :position="{lng: 116.404, lat: 39.915}" :labelStyle="{color: 'red', fontSize : '12px'}" title="Hover me"/>-->
        <bml-curve-line :points="points" :editing="true" @lineupdate="update"></bml-curve-line>
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
            }
        },
        data () {
            return {
                points: [
                    {lng: 116.432045, lat: 39.910683},
                    {lng: 112.55, lat: 37.87},
                    {lng: 120.129721, lat: 30.314429},
                    {lng: 108.47, lat: 33.83},
                    {lng: 112.55, lat: 37.87},
                    {lng:113.23, lat:23.16},
                    {lng: 108.47, lat: 33.83},
                    {lng: 121.47, lat: 31.23},
                    {lng: 116.432045, lat: 39.910683},

                ]
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