<template>
    <div id="content">
        <el-carousel :interval="4000" type="card" height="500px">
            <el-carousel-item v-for="(item,i) in address" :key="i">
                <img :src="item.addre">
            </el-carousel-item>
        </el-carousel>

        <div class="ui" id="history">
            <div class="mainbox-ld"  ng-controller="clls">
                <div class="title-ld">
                    <div class="title-1">村落风貌</div>
                </div>
                <div class="text-ld">
                    <div class="imgvideo">
                        <h1>村落风貌简介</h1>
                    </div>
                </div>
            </div>
        </div>
        <el-backtop :visibility-height="60">
            <i class="el-icon-caret-top"></i>
        </el-backtop>
    </div>
</template>

<script>
    export default {
        name: "Chuantong",
        data (){
            return {
                address:[
                    {addre: require('../../static/pic2.jpg')},
                    {addre: require('../../static/pic3.jpg')},
                    {addre: require('../../static/pic4.jpg')}
                ]
            }
        }
    }
</script>
<style scoped>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }
</style>