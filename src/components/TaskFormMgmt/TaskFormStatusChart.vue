<template>
    <el-row style="padding-top: 3%">
        <el-col :span="12" :offset="6">
    <div class="small">
        <canvas id="myChart2" width="400px" height="400px"></canvas>
    </div>
        </el-col>
    </el-row>
</template>
<script>
    import Chart from 'chart.js';


    export default {
        components: {

        },
        data() {
            return {
                taskStatusData:[{
                    status: "Y",
                    number: "40"
                },{
                    status: "U",
                    number: "20"
                },{
                    status: "O",
                    number: "60"
                },{
                    status: "N",
                    number: "10"
                },{
                    status: "W",
                    number: "5"
                },],
                dataUsed:[]
            }
        },
        mounted() {
            this.fetchData();
            //然后把数据如下处理 （你有更好的方法也行

            // for(var i=0;i<5;i++){
            //     if(this.taskFromData[i].status == "Y"){
            //         this.dataUsed[i] = parseInt(this.taskFromData[i].number);
            //     }
            //     else if(this.taskFromData[i].status == "U"){
            //         this.dataUsed[i] = parseInt(this.taskFromData[i].number);
            //     }
            //     else if(this.taskFromData[i].status == "O"){
            //         this.dataUsed[i] = parseInt(this.taskFromData[i].number);
            //     }
            //     else if(this.taskFromData[i].status == "N"){
            //         this.dataUsed[i] = parseInt(this.taskFromData[i].number);
            //     }
            //     else{
            //         this.dataUsed[i] = parseInt(this.taskFromData[i].number);
            //     }
            // }
                        // 然后把 this.dataUsed 赋给 dataset的data

            var ctx2 = document.getElementById("myChart2");

           new Chart(ctx2, {
                type: "doughnut",
                data: {
                    labels: ['已签收', '未发出', '运输中', '未配送','缺货待调货'],
                    datasets: [
                        {
                            backgroundColor: [
                                '#41B883',
                                '#E46651',
                                '#00D8FF',
                                '#DD1B16',
                                '#C0C0C0'
                            ],
                            data: [40,20,60,10,5],
                        }
                    ]
                },
                responsive: true,
                maintainAspectRatio: false,
                options: {

                }

            });
        },
        methods: {
            fetchData(){

            }
        }
    }
</script>
<style>
    .small {
        width: 600px;
        height: 600px;
    }
</style>