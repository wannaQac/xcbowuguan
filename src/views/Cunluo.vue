<template>
    <div>
        <div id="cunluo_index" style="margin-top: -215px;">
            <div class="sub_tit ng-binding">山东省胶南市六汪镇</div>
            <div class="main_tit ng-binding" style="height: 430px;">墨得水村</div>
            <div class="open_icon" onclick="showDiscript();" style="opacity: 1; display: none;"></div>
            <div class="descript" style="left: 0%;">
                <div class="cont">
                    <div class="txt_area ">
                        <p class="te ng-binding" ng-bind-html="cltd|to_trusted">&nbsp;&nbsp;&nbsp;&nbsp;村落选址得天独厚，生态宜居；聚落环境山环水抱，格局严整；历史文化历尽沧桑，源远流长；商业古街盛极一时，繁荣兴旺。</p>
                        <p class="tw ng-binding" ng-bind-html="clzs|to_trusted">&nbsp;&nbsp;&nbsp;&nbsp;南窖村位于南窖乡中心地带，是乡政府所在地，房山区山区人口第一大村。村落有六百年建村史，一度商贸繁盛，有“西山小北京”之美誉。<br>村落地处大房山北麓低山区，群山环绕，南部坡缓地平。据《北京市房山区志》中对南窖村的记载，“明已成村，村坐落在猫耳山北麓小盆地南部一条山沟内，山沟口窄腹阔，形状如窖，故名南窖”。村落海拔在260米至300米，村域面积9.53平方公里。村域东至小西安，北安村；西至大西沟村4公里；北至中窖梁；南至水峪村2公里，几近对接；西北至大西沟村黄石岩2.5公里，西北途经中窖口、花港村，至红煤厂108国道9公里。全村共有3105人，1496户，其中农业人口1560人，846户，可耕土地2712亩，土地人口均占全乡&nbsp;1/3，依山形垒地均为梯田。<br>村落顺应河道向东西方向延伸，地势东高西低，村址得天独厚：从村西水峪口向东，南北两侧山退谷开，豁然开阔，至村东龙王庙才逐渐缩窄，形成一个核形小盆地，山水福地，藏风纳气。<br>民居大多是南北朝向，聚落呈散列状。村中有两条主街，北街是柏油路，穿街而过，沿途有乡政府、村委会、乡卫生院、商店、饭店、中心小学等。南窖古商街位于南街，西起娘娘庙，东至东兴厂。内有白米行、屠行、油行、五熟行、果子行、炭行、生铁行、磨行、丝帛行等70多家店铺，到民国时期成为鼎盛。古道两侧房屋大部分为明清建筑，少数为民国建筑，砖石木架结构，石板盖顶。全村有古院落400多座，古壁书10多出，古庙宇4处，过街门楼三座，古窗棂10000平米，古街胡同88个，民间花会13档，古树50棵，多处门当角柱石等，形成了璀璨的历史文化。2016年，南窖村列入第四批中国传统村落名录。</p>
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tbody>
                            <tr>
                                <td valign="top"><p class="ng-binding">村落属性：行政村</p>
                                    <p class="ng-binding">村域面积：9.53平方公里</p>
                                    <p class="ng-binding">户籍人口：2553人</p>
                                    <p class="ng-binding">主要民族：汉</p>
                                </td>
                                <td valign="top"><p class="ng-binding">村落形成年代：明代</p>
                                    <p class="ng-binding">村庄占地面积：764.4亩</p>
                                    <p class="ng-binding">常住人口：2600人</p>
                                    <p class="ng-binding">主要产业：种植业和劳务输出</p>
                                </td>
                                <td valign="top"><p class="ng-binding">海拔：264-285米</p>
                                    <p class="ng-binding">地形地貌特征：山中小盆地</p>
                                    <p class="ng-binding">村集体年收入：746万元</p>
                                </td>
                                <td valign="top"><p>&nbsp;</p>
                                    <p>&nbsp;</p>
                                    <p class="ng-binding">村民人均年收入：6484.7元</p>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="closeButton" onclick="hidDiscript();"></div>
                <div class="right_line"></div>
                <div class="enter_cnt" style="opacity: 1;"> <a href="/Lishi"></a><span>进入村落</span></div>
            </div>
        </div>

        <el-carousel :interval="5000" arrow="always" height="550px" >
            <el-carousel-item v-for="item in address" :key="item">
                <img :src="item.addre" style="">
            </el-carousel-item>
        </el-carousel>
        <el-backtop :visibility-height="60">
            <i class="el-icon-caret-top"></i>
        </el-backtop>

    </div>

</template>

<script>
    export default {
        name: "Cunluo",
        data (){
            return {
                address:[
                    {addre: require('../../static/pic1.jpg')},
                    {addre: require('../../static/pic5.png')}
                ]
            }
        }
    }
</script>

<style scoped>
    @import "../../static/css/common.css";
    @import "../../static/css/section.css";
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }
    .te{width:100%  !important; font-size:18px !important; margin-bottom:25px  !important; }
    .tw{width:100%  !important; font-size:18px !important; margin-bottom:25px !important;}
    td p{
        width: 100% !important;;
        font-size:18px !important;
        line-height:25px;
    }
    .txt_area{padding-left:30px !important;}

    /*本页正文内容样式*/
    .te{width:100%  !important; font-size:18px !important; margin-bottom:25px  !important; }
    .tw{width:100%  !important; font-size:18px !important; margin-bottom:25px !important;}
    td p{
        width: 100% !important;;
        font-size:18px !important;
        line-height:25px;
    }
    .txt_area{padding-left:30px !important;}
</style>