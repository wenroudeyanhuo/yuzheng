<template>
  <el-row type="flex"style="background-color: #0f2c4e;">
    <el-col :span="12">
      <div style="background-color: #203f5e;height: 40px;">
        <el-image style="width: 40px;height: 40px;vertical-align:middle;" :src="require('@/assets/icon_title_dianwei.png')"></el-image>
        <span class="span1">点位详情</span>
      </div>


      <div style="margin:25px 0 25px 0;">
        <div :style="background1" style="height: 72px;width: 162px;display: inline-block;" >
          <span class="span2">累计预警</span>
          <!-- 后台数据交互     -->
          <span class="span3">12</span>
        </div>
        <div :style="background1" style="height: 72px;width: 162px;display: inline-block;margin:0px 15px 0px 15px;">
          <span class="span2">已处理预警</span>
          <!-- 后台数据交互     -->
          <span class="span4">4</span>
        </div>
        <div :style="background1" style="height: 72px;width: 162px;display: inline-block;">
          <span class="span2">未处理预警</span>
          <!-- 后台数据交互     -->
          <span class="span5">8</span>
        </div>
      </div>
      <div>
        <div class="demo-image__placeholder">
          <div class="block">
            <span class="demonstration">默认</span>
            <el-image :src="require('@/assets/位图.png')" style="width: 200px"></el-image>
          </div>
          <div class="block">
            <span class="demonstration">自定义</span>
            <el-image :src="require('@/assets/位图.png')" style="width: 200px">
              <div slot="placeholder" class="image-slot">
                加载中<span class="dot">...</span>
              </div>
            </el-image>
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="12">
      <div style="background-color: #203f5e;height: 40px;">
        <ul id="list" style="margin-left: 450px">
          <li class="current_li">
            <a href="#" class="current">实时监控</a>
          </li>
          <li>
            <a href="#">录像回放</a>
          </li>
          <li>
            <a href="#">预警事件</a>
          </li>
<!--          <el-button type="text" class="current_button">
            实时监控
          </el-button>
          <el-button type="text" class="button">
            录像回放
          </el-button>
          <el-button type="text" class="button">
            预警事件
          </el-button>-->
          <el-icon class="el-icon-setting" ></el-icon>
        </ul>
      </div>
      <div class="aside">
        <div style="margin-left: 20px">
          <el-image style="vertical-align:middle;" :src="require('@/assets/icon_jiankong.png')"></el-image>
          <span class="span6">宁波松岙大阜1</span>
        </div>

        <div :style="background2" style="height:40px;width: 250px;margin-left: 20px">
          <!--         vertical-align:middle;图片和文字居中 -->
          <el-image style="width: 30px; height: 27px;margin-left:8px;vertical-align:middle;" :src="require('@/assets/6.png')" fit="fill" ></el-image>
          <span class="span7">处理详情</span>
        </div>
          <!-- 描述列表       -->
          <!-- 这里的所有数据，后台交互改变数据       -->
          <!--      direction="vertical" 是指文字的排列方式  -->
          <el-descriptions  :column="1" :span="2">
            <el-descriptions-item label="预警类型" label-class-name="my-label" content-class-name="my-content">疑似船只</el-descriptions-item>
            <el-descriptions-item label="预警方位"> A5</el-descriptions-item>
            <el-descriptions-item label="预警时间">2022-08-06 13:40:02</el-descriptions-item>
            <el-descriptions-item label="预警状态">
              <el-tag size="small">待处理</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="推送时间">2022-08-06 13:40:02</el-descriptions-item>
            <el-descriptions-item label="负责人">田七</el-descriptions-item>
            <el-descriptions-item label="联系方式">12345678909</el-descriptions-item>
            <el-descriptions-item label="推送内容">有疑似报警</el-descriptions-item>
            <el-descriptions-item label="反馈信息">-</el-descriptions-item>
          </el-descriptions>
      </div>
    </el-col>
  </el-row>
</template>
<style lang="scss"  scoped>
.span1{
  color:#dce7e7;
}
.span2{
  color:#438fc5;
  font-size: 13px;
  line-height: 64px;
  margin-left:65px;

}
.span3{
  color:#dfcd63;
}
.span4{
color:#45e77e ;
}
.span5{
color:#c44c59 ;
}
.span6{
  color:#dce7e7;
  /*解决父子元素margin叠加问题*/
  display:inline-block;
  margin: 30px 0px 30px 10px;
}
.span7{
/*  !*解决父子元素margin叠加问题*!
  display:inline-block;*/
  margin-left:40px;
/*  margin-bottom: 30px;*/
  line-height: 40px;
  color:#dce7e7;
  font-size: 18px;
}

/*.button{
  color:#dce7e7 ;
}*/
.el-icon-setting{
  margin-left: 6px;
  color: #3192a4;
}
.aside{
  height: 700px;
  width: 600px;
  background-color: rgb(12, 37, 67,0.7);
  margin-top: 120px;
  overflow: hidden;
/*  position: absolute;*/
  //margin-left: 20px;
}

/*.labelStyle{
  background: rgb(12, 37, 67);
}*/
/*.my-label{
  background: rgb(12, 37, 67);
}*/
::v-deep .el-descriptions__body {
  background: transparent;
  margin-left: 20px;
  margin-top: 20px;
  color:#dce7e7;
}
/*字的颜色*/
/*下划线的测试*/
/*下划线跟随*/
ul{
  display: flex;
  position: initial;
}
li{
  position: relative;
  padding: 1em 2em;
  font-size: 12px;
  list-style: none;
  white-space:nowrap;
  width: 25%;
  text-align: center;
}
li.current_li{
  list-style-type:none;
  border-bottom:2px solid #3192a4;
  padding-bottom: 2px;
}
a:active, a:hover, a.current {
  color: #3192a4;
}
li::after{
  content: '';
  position: absolute;
  bottom: 0;
  width: 0;
  height: 2px;
  color: #3192a4;
  background-color: #3192a4;
  transition: .5s all linear;
}
li:hover::after{
  width: 100%;
}
li::after{
  left: 100%;     /*选中项上一个下划线收回的方向，从左往右收线*/
}
li:hover::after{
  left: 0;      /*选中项下划线出线的方向，从左往右出线*/
}
li:hover ~ li::after {
  left: 0;    /*选中项下一个下划线出线的方向，从左往右收线*/
}
 </style>



<script>
export default {
  name: 'songpan1',
  data(){
    return{
      background1: {
        // 背景图片地址
        backgroundImage: 'url(' + require('@/assets/cccc.png') + ')',
        // 背景图片是否重复
        // 背景图片大小
        backgroundSize: 'cover',
        // 背景颜色
        // 背景图片位置
       // backgroundPosition: 'center top'
      },
      background2: {
        // 背景图片地址
        backgroundImage: 'url(' + require('@/assets/bg_title@2x.png') + ')',
        // 背景图片是否重复
        //backgroundRepeat:1,
        // 背景图片大小
        backgroundSize: 'cover',
        // 背景颜色
        // 背景图片位置
        // backgroundPosition: 'center top'
      },
    }
  },
}

    /*css 导航栏下划线跟随效果，默认第一个li为选中状态*/
    $("#list li").click(function(){
      $("#list li").removeClass("current_li");
      $("#list li a").removeClass("current");
    })
</script>
