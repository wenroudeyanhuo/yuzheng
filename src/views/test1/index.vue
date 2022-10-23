<template>
  <el-row >
    <el-col >
      <el-card class="box-card">
        <div  class="clearfix" :style="background">
          <!--          style="border: none" align="center"-->
          <el-image style="width: 30px; height: 27px" :src="require('@/assets/2.png')" fit="fill" class="tempimg"></el-image>
          <span class="span">                 监控/预警/巡检</span>
<!--          <el-button @click="card_click(0)" :style="{color:m_color[0]}">卡片1</el-button>-->
<!--          <el-button @click="card_click(1)" :style="{color:m_color[1]}">卡片2</el-button>-->
<!--          <el-button @click="card_click(2)" :style="{color:m_color[2]}">卡片3</el-button>-->

          <!--          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
        </div>
        <el-image style="width: 30px; height: 31px;margin:25px" :src="require('@/assets/icon_jiankong.png')" fit="fill" ></el-image>

        <el-image style="width: 29px; height: 29px;margin:25px" :src="require('@/assets/icon_type@3x.png')" fit="fill"></el-image>
        <el-image style="width: 29px; height: 29px;margin:30px" :src="require('@/assets/9.png')" fit="fill" ></el-image>

        <el-button-group class="card-toggle-table">
          <el-tooltip
            v-if="cardType"
            class="item"
            effect="dark"
            content="切换成表格"
            placement="top-start"
          >
            <el-button size="mini" plain icon="el-icon-s-grid" @click="toggle" />
          </el-tooltip>
          <el-tooltip
            v-else
            class="item"
            effect="dark"
            content="切换成卡片"
            placement="top-start"
          >
            <el-button
              size="mini"
              plain
              icon="el-icon-bank-card"
              @click="toggle"
            />
          </el-tooltip>
        </el-button-group>


        <!-- 如果cardType为true,则显示卡片风格 -->
        <el-row v-if="cardType">
            <el-card class="box-card2">
              <div>
                <el-image style="width: 30px; height: 31px;" :src="require('@/assets/icon_number@2x.png')" fit="fill" ></el-image>
                <span  class="span1">7</span>
                <span  class="span2">点位数量</span>
                <el-image style="width: 29px; height: 29px;" :src="require('@/assets/icon_area@2x.png')" fit="fill" ></el-image>
                <span  class="span1">4</span>
                <span  class="span2">涉及区域</span>
              </div>

              <div>
                <input style="background:transparent;margin-bottom: 20px;margin-top: 20px" type="text"  maxlength="11"  placeholder="输入点位关键词"></input>
              </div>
              <span></span>

              <template>
                <el-tree style="background:transparent;color: white" :data="data" :props="defaultProps"
                         @node-click="handleNodeClick">
                </el-tree>
              </template>


              <el-button type="text" @click="centerDialogVisible = true">点击打开 Dialog</el-button>

              <el-dialog
                title="提示"
                :visible.sync="centerDialogVisible"
                width="90%"
                height="90%"
                :show-close="false"
                center>
                <el-dialog
                  width="50%"
                  title="内层 Dialog"
                  :visible.sync="innerVisible"
                  :append-to-body="true"
                  >
                </el-dialog>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="outerVisible = false">取 消</el-button>
                  <el-button type="primary" @click="innerVisible = true">打开内层 Dialog</el-button>
                </div>
                <span>需要注意的是内容是默认不居中的</span>
                <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
                </span>
              </el-dialog>











            </el-card>


        </el-row>

        <!-- 如果cardType为false则显示列表风格 -->
        <el-row
          v-else
          ref="ruleForm"
          :data="roles"
          style="width: 100%; font-size: 13px;"
          :model="ruleForm"
        >
          <el-select   v-model="ruleForm.cities" :popper-append-to-body="false"  clearable prop-class="select-down" placeholder="事件类型"  class="select_shijian" >
            <el-option
              v-for="item in cities"
              :key="item.value"
              :label="item.label"
              :value="item"
            >
              <span style="float: left">{{ item.label }}</span>
              <span style="float: right;font-size: 13px;">{{ item.value }}</span>
            </el-option>
          </el-select>




          <el-select v-model="ruleForm.shebei"  :popper-append-to-body="false"  clearable prop-class="select-down" placeholder="设备"  class="select_shebei">
            <el-option
              v-for="item in shebei"
              :key="item.value"
              :label="item.label"
              :value="item">
              <span style="float: left">{{ item.label }}</span>
              <span style="float: right;font-size: 13px">{{ item.value }}</span>
            </el-option>
          </el-select>

<!--          日期范围选择-->
          <div class="block1">
            <el-date-picker v-model="startDate" type="daterange" range-separator=" 至 " start-placeholder="开始日期" end-placeholder="结束日期"
                            style="background: transparent;position: absolute;top: 45px;width:260px;color: #FFFFFF" value-format="yyyy-MM-dd" @change="handleStartDateChange">
            </el-date-picker>
          </div>





          <el-select v-model="ruleForm.chulizhuangtai"  :popper-append-to-body="false"  clearable prop-class="select-down" placeholder="处理状态"  class="select_chulizhuangtai">
            <el-option
              v-for="item in chulizhuangtai"
              :key="item.value"
              :label="item.label"
              :value="item">
              <span style="float: left">{{ item.label }}</span>
              <span style="float: right;font-size: 13px">{{ item.value }}</span>
            </el-option>
          </el-select>


<!--          <div class="for_brach" v-for="(contents,index) in for_brach" :key="index">-->
<!--            <div>-->
<!--              <el-image :src="contents.src"/>-->
<!--              <p v-html="contents.title"></p>-->
<!--            </div>-->

<!--          </div>-->

<!--懒加载-->
<!--          <template>-->
<!--            <div class="demo-image__lazy">-->
<!--              <el-image v-for="url in urls" :key="url" :src="url" label="图片git pull --rebase origin master"></el-image>-->
<!--            </div>-->
<!--          </template>-->
<!--          这里我打算继续用卡片-->
          <el-card class="box-card3">
            <<div>
            <ul>
              <li>
                <div>
                  <span class="span">文字                                                      文字1</span>
                  <el-image style="width:260px; height: 235px;" :src="require('@/assets/for_brach/1.jpg')" fit="fill" ></el-image>
                </div>

              </li>
              <li>
                <div>
                  <span class="span">文字                                                      文字1</span>
                <el-image style="width:260px; height: 235px;" :src="require('@/assets/for_brach/1.jpg')" fit="fill" ></el-image>
              </div>
              </li>
              <li>
                <div>
                  <span class="span">文字                                                      文字1</span>
                <el-image style="width:260px; height: 235px;" :src="require('@/assets/for_brach/1.jpg')" fit="fill" ></el-image>
              </div>
              </li>
              <li>
                <div>
                  <span class="span">文字                                                      文字1</span>
                <el-image style="width:260px; height: 235px;" :src="require('@/assets/for_brach/1.jpg')" fit="fill" ></el-image>
              </div>
              </li>
              <li>
                <div>
                  <span class="span">文字                                                      文字1</span>
                  <el-image style="width:260px; height: 235px;" :src="require('@/assets/for_brach/1.jpg')" fit="fill" ></el-image>
                </div>
              </li>
              <li>
                <div>
                  <span class="span">文字                                                      文字1</span>
                  <el-image style="width:260px; height: 235px;" :src="require('@/assets/for_brach/1.jpg')" fit="fill" ></el-image>
                </div>
              </li>
              <li>
                <div>
                  <span class="span">文字                                                      文字1</span>
                  <el-image style="width:260px; height: 235px;" :src="require('@/assets/for_brach/1.jpg')" fit="fill" ></el-image>
                </div>
              </li>
              <li>
                <div>
                  <span class="span">文字                                                      文字1</span>
                  <el-image style="width:260px; height: 235px;" :src="require('@/assets/for_brach/1.jpg')" fit="fill" ></el-image>
                </div>
              </li>
              <li>
                <div>
                  <span class="span">文字                                                      文字1</span>
                  <el-image style="width:260px; height: 235px;" :src="require('@/assets/for_brach/1.jpg')" fit="fill" ></el-image>
                </div>
              </li>
            </ul>
          </div>
          </el-card>








        </el-row>

      </el-card>
    </el-col>
    <el-card class="box-card4">

      <template>
        <el-radio  class="card_bottom" v-model="radio" label="1">点位显示</el-radio>
        <el-radio class="card_bottom"v-model="radio" label="2">覆盖范围</el-radio>
        <el-radio class="card_bottom"v-model="radio" label="3">事件显示</el-radio>
        <el-radio class="card_bottom"v-model="radio" label="4">热力图</el-radio>
      </template>
    </el-card>

    <el-col :span="5">
      <el-card class="box-card">
        <div :style="background">
          <!--          style="border: none" align="center"-->
          <el-image style="width: 30px; height: 27px" :src="require('@/assets/6.png')" fit="fill" class="tempimg"></el-image>
          <span class="span">                   预警数统计</span>

          <el-image style="width: 135px; height: 120px" :src="require('@/assets/1.png')" fit="fill" class="tempimg"></el-image>
          <div class="wenzi_1">
            <span style="color: white;" class="span">今日预警数  </span>
            <span style="color: yellow;">6</span>
          </div>
          <div class="wenzi_2">
            <span style="color: white;" class="span">本月预警数  </span>
            <span style="color: yellow;">6</span>
          </div>
          <div class="wenzi_3">
            <span style="color: white;"class="span">累计预警数  </span>
            <span style="color: yellow;">6</span>
          </div>
        </div>

        <div  class="clearfix" :style="background">
          <!--          style="border: none" align="center"-->
          <el-image style="width: 30px; height: 27px" :src="require('@/assets/6.png')" fit="fill" class="tempimg"></el-image>
          <span class="span">                   处理数统计</span>
        </div>
        <div>
          <el-image style="width: 135px; height: 120px" :src="require('@/assets/4.png')" fit="fill" class="tempimg"></el-image>
          <div class="wenzi_4">
            <span class="span">今日处理数  </span>
            <span style="color: yellow;">6</span>
          </div>
          <div class="wenzi_5">
            <span class="span">本月处理数  </span>
            <span style="color: yellow;">6</span>
          </div>
          <div class="wenzi_6">
            <span class="span">累计处理数  </span>
            <span style="color: yellow;">6</span>
          </div>
        </div>





        <div  class="clearfix" :style="background">
          <!--          style="border: none" align="center"-->
          <el-image style="width: 30px; height: 27px" :src="require('@/assets/6.png')" fit="fill" class="tempimg"></el-image>
          <span class="span">                   事件趋势日历</span>
        </div>
        <div class="home">
          <Calendar
            :date="new Date()"
            @enter="mouseenter"
            @leave="mouseleave"
            @changeMonth="changeMonth"
            style="width:270px;height:400px"
          >
            <!-- 可使用动态插槽名设置，v-slot:[slotName] -->
            <template v-slot:2022-5-21>
              <div style="position:absolute;bottom:-20px">今天</div>
            </template>
          </Calendar>
        </div>
<!--        <div>-->
<!--          <el-calendar v-model="valueData">-->
<!--            <template-->
<!--              slot="dateCell"-->
<!--              slot-scope="{data}">-->
<!--              &lt;!&ndash;自定义内容&ndash;&gt;-->
<!--              <div>-->
<!--                <div class="calendar-day" >{{ data.day.split('-').slice(2).join('-') }}</div>-->
<!--              </div>-->
<!--            </template>-->
<!--          </el-calendar>-->
<!--        </div>-->

      </el-card>
    </el-col>
  </el-row>
</template>
<!--<script>-->
<!--export default {-->

<!--  name: 'Test1',-->
<!--  data()-->
<!--  {-->
<!--    return {-->
<!--      imgList:['public/bg_top_title.png'],-->
<!--      background: {-->
<!--        // 背景图片地址-->
<!--        backgroundImage: 'url(' + require('../../../public/位图.png') + ')',-->
<!--        // 背景图片是否重复-->
<!--        backgroundRepeat: 'no-repeat',-->
<!--        // 背景图片大小-->
<!--        backgroundSize: 'cover',-->
<!--        // 背景颜色-->
<!--        backgroundColor: '#000',-->
<!--        // 背景图片位置-->
<!--        backgroundPosition: 'center top'-->
<!--      }-->
<!--    }-->
<!--  },-->

<!--}-->
<!--</script>-->

<style  lang="scss"  scoped>
::v-deep .el-dialog{
  height: 700px;
}
::v-deep .el-descriptions__body
{
  background: transparent;
}
//::v-deep .el-descriptions-item{
//  background: transparent;
//}
.ha{
  background: transparent;
}
//弹窗
::v-deep .el-dialog { // 取消阴影和背景色

  background: #409EFF;

  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0);

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0);
  z-index: 1000;

}
/* 刷新弹窗样式闪烁问题去掉v-cloak下面这个样式 */
[v-cloak] {
  display: none;
}
.box{
  display: flex;
  flex-direction: column;
}
.mask {
  background:transparent;
  background-color:  #409EFF;
  //opacity: 0;
  position: fixed;
  top: 20px;
  left: 20px;
  width: 100%;
  height: 100%;
  z-index: 10000
}

.pop {
  position: fixed;
  background-color: #c1c8d6;
  width: 520px;
  display: flex;
  left: 50%;
  top: 0;
  bottom: 0;
  z-index: 90;
  margin-left: -20px;
  box-shadow: -20px 0 20px 0 rgb(0 0 0 / 10%);
  flex-direction: column;
  color: #fff;
}

.btn {
  /* background-color: #fff; */
  border-radius: 4px;
  border: 1px solid blue;
  padding: 4px 12px;
}
//点击前的样式
::v-deep
.el-radio__inner{
  border-radius:0;
  width: 20px;
  height: 20px;
  color: #FFFFFF;
}
.el-radio__inner::after {
  width: 22px;
  height: 22px;
  //让圆框变成方框
  border-radius: 0;
  color: #FFFFFF;
}
//点击后的字体颜色
.el-radio__input.is-checked+.el-radio__label {
  color: #FFFFFF;
}
//::v-deep .el-card__body{
//  //padding: 0px 0px;
//
//}
ul {
  position: relative;
  width: 400px;
  height: 500px;
  margin-left: 0px;
  overflow: scroll;
}
li {
  color: #FFFFFF;

  width:230px;
  //line-height: 50px;
}
/* 滚动条 */
body *::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
body *::-webkit-scrollbar-track {
  background: #fff;
  border-radius: 2px;
}
body *::-webkit-scrollbar-thumb {
  background: rgb(205, 206, 206);

  border-radius: 10px;
}
body *::-webkit-scrollbar-thumb:hover {
  background: #333;
}
body *::-webkit-scrollbar-corner {
  background: #fff;
}
.table {
  color: #FFFFFF;
  height: 700px;
  overflow: hidden;
}
.table:hover {
  height: 700px;
  overflow-y: auto;
}
.el-tab-pane {
  height: 500px;
  overflow-y: auto;
}
//懒加载
img[lazy="loading"]{
  display:block;
  width:150px !important;
  height:150px !important;
  margin:0 auto;
}

//for_brach
.demo-image__lazy {
  font-size: 15px;
  color: #FFFFFF;
  position: relative;
  top: 130px;
  height: 500px;
  overflow-y: auto;
}
.demo-image__lazy .el-image {
  display: block;
  min-height: 200px;
  margin-bottom: 5px;
}
.demo-image__lazy .el-image:last-child {
  margin-bottom: 0;
}
.for_brach{
  top: 300px;
  color: #FFFFFF;
}
.block1 {
  padding: 10px 0px;
  background: transparent;
  color: #FFFFFF;
}
::v-deep .el-range-input{
  color: #FFFFFF;
  background: transparent;
}
::v-deep .el-range-separator{
  background: transparent;
  color: #FFFFFF;
}

//输入框
::v-deep .el-input__inner {
  padding: 0;
  background: transparent;
  color: #fff;
  //border: none;
  font-size: 18px;
}
::v-deep
  //下拉框面板
  .el-select-dropdown{
  font-size: 30px;
  color: black;
  //background-color:transparent;
}
::v-deep .el-popper{
  color: black;
}
::v-deep .el-select-dropdown__item{
  color: black;
}
//选中时的样式
::v-deep .el-select-dropdown__item.hover{
  background: transparent;
}
::v-deep .el-scrollbar{
  color: black;
}

.select_shijian{
  //color: #FFFFFF;
  background: transparent;
  width: 260px;
  position: absolute;
  top: -10px;
  left: 0px;
  //right: 0px;

}

.select_shebei{
  background: transparent;
  width: 130px;
  position: absolute;
  top:100px;
  left: 0px;
}
.select_chulizhuangtai{
  background: transparent;
  width: 130px;
  position: absolute;
  top:100px;
  left: 130px;
}

*{
  padding: 0;    //去掉默认内边距，也就是ul标签左边的内边距40px；
  margin:0;    //去掉li的外边距。
}
ul{
  list-style:none;    //去掉标签默认的左边符号
  flex-wrap:wrap;
}
li{
  list-style-type:none;    //去掉标签默认的左边符号
}
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
.el-icon-arrow-down {
  font-size: 12px;
}
::v-deep  .el-calendar__header {
  padding: 0px;
}

::v-deep .el-calendar__button-group {
  width: 100%;
}

::v-deep .el-button-group {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

::v-deep .el-button-group > .el-button:first-child:before {
  content: "<";
}

::v-deep .el-button-group > .el-button:last-child:before {
  content: ">";
}

::v-deep .el-button-group > .el-button:first-child span,
::v-deep .el-button-group > .el-button:last-child span {
  display: none;
}

::v-deep .el-button {
  border: 0;
  background: transparent;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 6px;
}

::v-deep .el-calendar-table thead>th{
  color: #00928C;
  border-bottom: 1px solid #00928C;
}

::v-deep .el-calendar-table td.is-selected {
  // background: transparent;
  color: #00928C;
  font-weight: 500;
}

::v-deep .el-calendar-table td.is-today {
  font-weight: 500;
}

::v-deep .el-calendar__body {
  padding: 0px 6px 0px;
}

::v-deep .el-calendar-table .el-calendar-day{
  width: 33px;
  height: 30px;
}
::v-deep .el-calendar__title{
  display: none;
}
// 日历内容部分
.cell-container {
  height: 100%;
  width: 100%;

  position: relative;
}
.word-container {
  height: 100%;
  font-size: 12px;
  .date {
    font-size: 16px;
    z-index: 4;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 20px;
  }
  .solar-terms {
    z-index: 4;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 20px;
  }
  .festival {
    position: absolute;
    font-weight: bold;
    margin: 10px 0 0 10px;
    z-index: 4;
  }
  .red-word {
    color: #ff4949;
    position: absolute;
    z-index: 4;
  }
}

>>> .el-calendar-day {
  margin: 4px;
  padding: 0;
  border-radius: 8px;
  background: rgba(202, 249, 240, 0.4);
}

// 日历样式
>>> .el-calendar__header .el-calendar__title {
  position: absolute;
}

>>> .el-calendar__button-group {
  width: 100%;
}

>>> .el-button-group {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

>>> .el-button-group > .el-button:first-child:before {
  content: "<";
}

>>> .el-button-group > .el-button:last-child:before {
  content: ">";
}

>>> .el-button-group > .el-button:first-child span,
>>> .el-button-group > .el-button:last-child span {
  display: none;
}

>>> .el-button {
  border: 0;
  background: transparent;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 6px;
}

>>> .el-calendar-table td {
  border: 0;
}
>>> .el-calendar-table tr td:first-child {
  border: 0;
}
>>> .el-calendar-table tr:first-child td {
  border: 0;
}
>>> .el-calendar-table td.is-selected {
  background: transparent;
}
>>> .el-calendar-table td.is-today {
  font-weight: bold;
}
// 不能预约的遮罩层
.wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(253, 227, 228, 0.8);
  border-radius: 8px;
}
.tupian{
  z-index:100;
  position: absolute;
  left:1360px; //只是假定的值，具体需测量
  top:80px;

}
.wenzi_1{
  position: absolute;
  left:1360px; //只是假定的值，具体需测量
  top:80px;
  z-index:101;
}
.wenzi_2{
  position: absolute;
  left:1360px; //只是假定的值，具体需测量
  top:110px;
  z-index:101;
}
.wenzi_3{
  position: absolute;
  left:1360px; //只是假定的值，具体需测量
  top:140px;
  z-index:101;
}
//第二个区块
.wenzi_4{
  position: absolute;
  left:1360px; //只是假定的值，具体需测量
  top:240px;
  z-index:101;
}
.wenzi_5{
  position: absolute;
  left:1360px; //只是假定的值，具体需测量
  top:270px;
  z-index:101;
}
.wenzi_6{
  position: absolute;
  left:1360px; //只是假定的值，具体需测量
  top:300px;
  z-index:101;
}
.index_backcol{
  background-color:#000088 ;
  color:#FFFFFF;
}

::v-deep
.collapse-title {
  color:#FFFFFF;
  background-color:#000088 ;
  flex: 1 0 90%;
  order: 1;
  .el-collapse-item__header {
    //background-color:#000088 ;
    flex: 1 0 auto;
    //order: 0;
    background: transparent;

  }
}
.el-collapse-item__arrow {
  display: none
}
.el-icon-arrow-right:before {
  content: "" !important;
}




input[type="text"],input[type="password"],input[type="email"]{

  -web-kit-appearance:none;
  -moz-appearance: none;
  outline:0;

  box-sizing: border-box;
  text-align:left;
  font-size:1.2em;
  height:2.1em;
  border-radius:5px;
  border:1px solid #c8cccf;
  color:white;;
  display:block;
  padding:0 1em;
  text-decoration:none;
  width:100%;
}
input::-webkit-input-placeholder{
  color: white;
}

.text {
  font-size: 14px;
}
.span{
  color:#FFFFFF;
  white-space: pre;
  font-weight:bold;
}
.span1{
  color:#FFFFFF;
  display: inline-block;
  overflow: hidden;
}
.span2{
  margin-top: 5px;
  color:#FFFFFF;
  display: inline-block;
  overflow: hidden;
}
.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {

  //margin-bottom: 20px;
  background-color:#000088 ;
  opacity:0.7;
  height:800px;
  width: 300px;

  padding: 0px 0px;
  border: none;
  z-index: 10;
}
.box-card2 {
  z-index: 10;

  margin-bottom: 20px;
  background-color:#000088 ;
  opacity:0.7;
  height:800px;
  width: 300px;

  padding: 0px 0px;
  border: none;
}
.box-card3{
  position: relative;
  margin-top: 130px;
  height:700px;
  width: 320px;

  border: 3px;
  border-color: #FFFFFF;
  background-color:#000088 ;
  padding: 1px 1px;

}
.box-card3 ::v-deep .el-card__body{
    padding: 0px 0px;

  }
.box-card4
{
  //display: flex;
  position:absolute;
  margin-top:600px;
  //margin-right:500px;
  right: 350px;
  height:200px;
  width: 150px;
  padding: 0px 0px;
  border: none;
  background-color:#000088 ;
  opacity:0.7;
}
.card_bottom{
  line-height: 40px;
}
.app-wrapper {
  background-image: url("~@/../public/位图.png");
  height:100vh;
  width: 100%;
  position:fixed;
  background-size:100% 100%;
}
.el-header{
}
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
}

body > .el-container {
  margin-bottom:  30px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
//.el-icon-1{
//
//  border: none;
//  background-image: url('~@/../public/2.png');
//  width:5px;
//  height: 2px;
//
//}
.el-icon-2{
  border: none;
  opacity:0.3;
}



.el-icon-monan{
  background: url('~@/../public/icon_jiankong.png');
  width:15px;
  height: 28px;
  /*border: 2px dashed;*/
  border-radius: 20px;
}
.el-icon-monan2{
  background: url('~@/../public/icon_type@3x.png');
  width:15px;
  height:21px;
  /*border: 2px dashed;*/
  border-radius: 20px;
}
.el-icon-liuyanban{
  background: url('~@/../public/9.png');
  width: 15px;
  height: 22px;
  /*border: 2px dashed;*/
  border-radius: 20px;
}

.box {
  box-sizing: border-box;
  width: 155px;
  height: 100px;
  padding: 10px;
  border:  2px solid green;
  background: blue;
  overflow: auto;
}
</style>
<script>

import Header from '../home/components/header'
import {getOrderDate,updateWorkdate }from "@/api/calendar";
import Calendar from '@/components/Calendar.vue'
import moment from 'moment';


export default {

  name: 'home',
  components: {
    Header,
    Calendar,
  },
  data(){

    return{
      innerVisible: false,
      centerDialogVisible: false,
      //
      radio:'1',
      //for_barch
      for_brach:[{title:'1',src:require('@/assets/for_brach/1.jpg'),key:0},{title:'2',src:require('@/assets/for_brach/2.jpg'),key:1},{title:'3',src:require('@/assets/for_brach/3.jpg'),key: 2}],
      urls:['',
        'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
        'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
        'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
        'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
        'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',],
      urls_test:[{title:'1',url:"https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"},{title:'2',url:"https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg"}],
      //日期范围选择
      startDate: '',

      // selectedArray: [],
      aString:['宁波松岙大埠1','宁波松岙大埠1','宁波松岙大埠3'],
      aString1:['海曙大埠1','海曙大埠2','海曙大埠3'],
      aString2:['镇海大埠1','镇海大埠2','镇海大埠3'],
      cardType: true,
      /*测试弹框添加的新内容*/
      currentDay: new Date(),
      currentDateList: [],
      value: new Date(),
      ruleForm:{
        shebei:{},
        cities:{},
        chulizhuangtai:{}
      },
      background: {
        // 背景图片地址
        backgroundImage: 'url(' + require('../../../public/bg_title@2x.png') + ')',
        // 背景图片是否重复
        // 背景图片大小
        backgroundSize: 'cover',
        // 背景颜色
        // 背景图片位置
        backgroundPosition: 'center top'
      },
      cities:[{'value':'疑似船只','label':'事件类型'},{'value':'测试船只','label':'事件类型'},{'value':'确认船只','label':'事件类型'}],
      shebei:[{'value':'设备1','label':'1'},{'value':'设备2','label':'2'},{'value':'设备3','label':'3'}],
      chulizhuangtai:[{'value':'待处理','label':'1'},{'value':'已处理','label':'2'}],
      data: [{
                label: '鄞州区',
                children: [{
                  label: '宁波松岙大埠1',
                },{
                  label: '宁波松岙大埠2',
                },{
                  label: '宁波松岙大埠3',
                }]
            },
            {
                 label: '海曙区',
                  children: [{
                    label: '海曙大埠1',
                }, {
                   label: '海曙大埠2',
                   }, {
                    label: '海曙大埠3',
                  }]
              },
            {
                 label: '镇海区',
                   children: [{
                    label: '镇海大埠1',
              }, {
                     label: '镇海大埠2',

                  }, {
                     label: '镇海大埠3',

                   }]
              }],
            defaultProps: {
                 children: 'children',
                  label: 'label'
              }
           }
           ;

  },
  mounted() {

  },
  beforeDestroy() {
  },
  created() {

  },
  methods: {

    handleStartDateChange() {
      if (this.startDate && this.startDate.length > 0) {
        const timestampBegin = +new Date(this.startDate[0])
        const timestampEnd = +new Date(this.startDate[1])
        if (timestampEnd > timestampBegin + 3600 * 1000 * 24 * 10) {
          this.$alert('规定为日期的起止时间跨度不能超过10天', '提示', {
            confirmButtonText: '确定',
            type: 'warning'
          })
            .then(() => (this.startDate = null))
            .catch(() => (this.startDate = null))
        }
      }
    },

    mouseenter (event, dateInfo) {
      console.log("悬浮进入", event, dateInfo)
    },
    mouseleave (event, dateInfo) {
      console.log("悬浮离开", event, dateInfo)
    },
    changeMonth (start, end) {
      console.log("开始:", start)
      console.log("结束:", end)
    },


    getMethod () {      //点击事件的时候去寻找相应的方法，在底层做转换直接写方法名，大括号里面写相应的业务逻辑
      console.log('11');
    },
    handleCommand(command) {
      this.$message('click on item ' + command);
    },
    toggle() {
      this.cardType = !this.cardType
    },
    // 获取数据的方法
    init() {
      getOrderDate().then((res) => {
        this.currentDateList = res.content;
      });
    },
    // 过滤出背景色为粉色的数据方法
    dealMyDate(value) {
      if (this.currentDateList.length > 0) {
        let flag;
        let disabledArr = [];

        this.currentDateList.map((item) => {
          if (item.isDeleted === "1" && item.modalType === "1") {
            disabledArr.push({
              date: item.workDate,
              hasRecord: true,
            });
          }
        });

        for (let i = 0; i < disabledArr.length; i++) {
          if (disabledArr[i].date === value) {
            flag = disabledArr[i].hasRecord;
            break;
          }
        }

        return flag;
      }
    },
    // 点击日历格子的方法
    chooseDay(data) {
      // 如果点击的格子为当月的话我们就进行数据转换，如果不是当月就让它去那个
      // 月
      if (data.type === "current-month") {
        updateWorkdate({
          workDate: data.day,
          modalType: "1",
        })
          .then((res) => {
            if (res.data.code === 200 && res.data.success) {
              this.$message.success("操作成功");
              this.init();
            } else {
              this.$message(res.data.message);
            }
          })
          .catch((err) => {
            console.error(err);
          });
      }
    },
    // 公立转农历
    // 这个方法原本是网上抄来的，不过我的需求不大一样，所以做了一点小小的改动
    solarToLunar(slotDate, slotData) {
      let solarDayArr = slotData.day.split("-");
      let lunarDay = calendar.solar2lunar(
        solarDayArr[0],
        solarDayArr[1],
        solarDayArr[2]
      );
      // 这个lunarDay里有很多东西，后面会贴图

      // 农历日期
      let lunarMD = lunarDay.IMonthCn + lunarDay.IDayCn;

      // 公历节日\农历节日\农历节气
      let festAndTerm = [];
      festAndTerm.push(
        lunarDay.festival == null ? "" : " " + lunarDay.festival
      );
      festAndTerm.push(
        lunarDay.lunarFestival == null ? "" : "" + lunarDay.lunarFestival
      );
      festAndTerm.push(lunarDay.Term == null ? "" : "" + lunarDay.Term);
      festAndTerm = festAndTerm.join("");

      return festAndTerm == "" ? lunarMD : festAndTerm;
    },
    isFestival(slotDate, slotData) {
      // slotDate是标准时间
      // slotData是对象
      let solarDayArr = slotData.day.split("-");
      let lunarDay = calendar.solar2lunar(
        solarDayArr[0],
        solarDayArr[1],
        solarDayArr[2]
      );

      // 公历节日\农历节日\农历节气
      let festAndTerm = [];
      festAndTerm.push(
        lunarDay.festival == null ? "" : " " + lunarDay.festival
      );
      festAndTerm.push(
        lunarDay.lunarFestival == null ? "" : "" + lunarDay.lunarFestival
      );
      festAndTerm.push(lunarDay.Term == null ? "" : "" + lunarDay.Term);
      festAndTerm = festAndTerm.join("");
      // 原本的方法，return出的是一个Boolean
      // 更改过后返回Object：公立日期、农历日期
      return {
        solarDate: lunarDay.date,
        lunarDate: lunarDay.lunarDate
      };
    },
    // 这个方法是我自己后面添加的，判断是否是公休日。在calendar的文件中也做了
    // 一丢丢改动
    // 元旦1天、春假3天、清明节1天、端午节1天、五一劳动节1天、中秋节1天、国
    // 庆节3天
    isVacation(date, data) {
      let obj = this.isFestival(date, data);

      let valSolar = obj.solarDate.slice(5) ;
      let valLunar = obj.lunarDate.slice(5) ;

      let solar = calendar.isSolarPublicHoliday(valSolar);
      let lunar = calendar.isLunarPublicHoliday(valLunar);

      if(solar || lunar)
        return true;
      return false;
    },
    /*新添加的东西*/
/*    leftClick(event,object,value,element){
               if(value.level == 1){
                  this.menuVisible = true;
                  let menu = document.querySelector("#menu");
                 /!* 菜单定位基于鼠标点击位置 *!/
                  menu.style.left = event.clientX + 20 + "px" ;
                  menu.style.top = event.clientY -10 + "px"
               }
    },*/
 /*   contextmenu(e,data,node,comp){

      if(node.isLeaf){
        let menu = document.querySelector('.visible')
        menu.style.display='block'
      }
    },*/

  }
};




</script>
