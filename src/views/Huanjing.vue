<template>
    <div id="content">
        <div class="banner-ld" ng-controller="clgkbanner">
            <img src="../../static/pic1.jpg" width="100%">
        </div>
        <div class="ui" id="address">
            <div class="mainbox-ld"  ng-controller="clls">
                <div class="title-ld">
                    <div class="title-1">村落选址</div>
                </div>
                <div class="text-ld">
                    <div class="imgvideo">

                    </div>
                </div>
            </div>
        </div>
        <div class="ui" id="geju">
            <div class="mainbox-ld"  ng-controller="clls">
                <div class="title-ld">
                    <div class="title-1">村落格局</div>
                </div>
                <div class="text-ld">
                    <div class="imgvideo">
                        <ul>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="ui" id="build">
            <div class="mainbox-ld"  ng-controller="clls">
                <div class="title-ld">
                    <div class="title-1">建村智慧</div>
                </div>
                <div class="text-ld">
                    <div class="imgvideo">

                    </div>
                </div>
            </div>
        </div>
        <div class="ui" id="environment">
            <div class="mainbox-ld"  ng-controller="clls">
                <div class="title-ld">
                    <div class="title-1">自然环境</div>
                </div>
                <div class="text-ld">
                    <div class="imgvideo">

                    </div>
                </div>
            </div>
        </div>
        <div class="ui" id="mingsheng">
            <div class="mainbox-ld"  ng-controller="clls">
                <div class="title-ld">
                    <div class="title-1">风景名胜</div>
                </div>
                <div class="text-ld">
                    <div class="imgvideo">

                    </div>
                </div>
            </div>
        </div>
        <div class="ui" id="wenwu">
            <div class="mainbox-ld"  ng-controller="clls">
                <div class="title-ld">
                    <div class="title-1">文物古迹</div>
                </div>
                <div class="text-ld">
                    <div class="imgvideo">

                    </div>
                </div>
            </div>
        </div>
        <div class="ui" id="lishihuanjing">
            <div class="mainbox-ld"  ng-controller="clls">
                <div class="title-ld">
                    <div class="title-1">历史环境</div>
                </div>
                <div class="text-ld">
                    <div class="imgvideo">
                        <el-table
                                :data="tableData"
                                height="250"
                                border
                                style="width: 100%">
                            <el-table-column
                                    prop="num"
                                    label="编号"
                                    width="180">
                            </el-table-column>
                            <el-table-column
                                    prop="name"
                                    label="历史环境要素名称">
                            </el-table-column>
                        </el-table>
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
        name: "Huanjing",
        data() {
            return {
                tableData: [{
                    num: '王小虎',
                    name: '上海市普陀区金沙江路 1518 弄'
                }, {
                    num: '王小虎',
                    name: '上海市普陀区金沙江路 1518 弄'
                }, {
                    num: '王小虎',
                    name: '上海市普陀区金沙江路 1518 弄'
                }, {
                    num: '王小虎',
                    name: '上海市普陀区金沙江路 1518 弄'
                }, {
                    num: '王小虎',
                    name: '上海市普陀区金沙江路 1518 弄'
                }]
            }
        }
    }
</script>

<style scoped>

</style>