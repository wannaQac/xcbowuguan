<template>
    <div id="content">
        <div class="banner-ld" ng-controller="clgkbanner">
            <img src="../../static/pic1.jpg" width="100%">
        </div>
        <div class="ui" id="history">
            <div class="mainbox-ld"  ng-controller="clls">
                <div class="title-ld">
                    <div class="title-1">建村历史</div>
                </div>
                <div class="text-ld">
                    <div class="imgvideo">

                    </div>
                </div>
            </div>
        </div>
        <div class="ui" id="renwu">
            <div class="mainbox-ld"  ng-controller="clls">
                <div class="title-ld">
                    <div class="title-1">历史人物</div>
                </div>
                <div class="text-ld">
                    <div class="imgvideo">
                        <ul>
                            <div>
                                <span>青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪</span>
                                <el-divider></el-divider>
                                <span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
                                <el-divider></el-divider>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="ui" id="shijian">
            <div class="mainbox-ld"  ng-controller="clls">
                <div class="title-ld">
                    <div class="title-1">历史事件</div>
                </div>
                <div class="text-ld">
                    <div class="imgvideo">

                    </div>
                </div>
            </div>
        </div>
        <div class="ui" id="people">
            <div class="mainbox-ld"  ng-controller="clls">
                <div class="title-ld">
                    <div class="title-1">视频集锦</div>
                </div>
                <div class="text-ld">
                    <div class="imgvideo">

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
        name: "Lishi"
    }
</script>

<style scoped>
    @import "../../static/css/model.css";
    @import "../../static/css/main-new.css";
</style>