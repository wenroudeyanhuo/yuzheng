<template>
  <div>
    <div style="background: #003377 ">
    <h1>{{ msg }}</h1>
    <button class="first" @click="isActive = 0">实时监控</button>
    <button class="second" @click="isActive = 1">录像回放</button>
    <button class="third" @click="isActive = 2">预警事件</button>
    </div>
    <div class="first1" v-if="isActive == 0">
      <!-- 实时监控 -->
      <el-col :span="15">
        <div style="position:relative;top:10px;left:-110px;">
          <el-image style="vertical-align:middle;" :src="require('@/assets/icon_jiankong.png')"></el-image>
          <span><font color="#f0f8ff">宁波松岙大阜1</font></span>
        </div>

        <div>
          <video style="position:relative;top:25px;left:-110px;width: 850px;">
            <source :src="require('@/assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4')">
          </video>
        </div>
      </el-col>

      <el-col :span="1">
        <div class="mo1">
          <span style="line-height: 30px;margin-left: 20px"><font color="#f0f8ff">云台控制</font></span>
        </div>

        <div class="mo2">
          <el-image style="width: 300px;height: 300px;vertical-align:middle;" :src="require('@/assets/bg_bottom(1).png')"></el-image>
        </div>

        <el-row>
          <el-col :span="5">
            <div class="mo3">
              <el-image style="width: 110px;height: 45px;vertical-align: middle" :src="require('@/assets/ssjk1.png')"></el-image>
              <el-image style="width: 110px;height: 45px;vertical-align: middle;margin-left: 3px" :src="require('@/assets/ssjk1.png')"></el-image>
              <!--<el-image style="width: 160px;height: 82px;vertical-align: middle;" :src="require('@/assets/ssjk1.png')"></el-image>-->
              <div>
                <el-image style="width: 110px;height: 45px;vertical-align: middle;margin-top: 10px" :src="require('@/assets/ssjk1.png')"></el-image>
                <el-image style="width: 110px;height: 45px;vertical-align: middle;margin-top: 10px;margin-left: 3px" :src="require('@/assets/ssjk1.png')"></el-image>
              </div>
            </div>
          </el-col>
          <el-col :span="19">
            <div>
              <el-image style="position:relative;left:200px;top:200px;width: 200px;height: 100px;vertical-align: middle;" :src="require('@/assets/ssjk1.png')"></el-image>
            </div>
          </el-col>
        </el-row>
      </el-col>

      <el-col :span="7">
        <div class="mo4">
          <el-image style="width: 70px;height: 70px;vertical-align: middle;" :src="require('@/assets/icon_up.png')"></el-image>
        </div>

        <div class="mo5">
          <el-image style="width: 70px;height: 70px;vertical-align: middle;" :src="require('@/assets/icon_left.png')"></el-image>
          <el-image style="width: 70px;height: 70px;vertical-align: middle;margin-left: 100px" :src="require('@/assets/icon_right.png')"></el-image>
        </div>

        <div class="mo6">
          <el-image style="width: 70px;height: 70px;vertical-align: middle;" :src="require('@/assets/icon_down.png')"></el-image>
        </div>

        <el-row>
          <el-col>
            <div class="mo7">
              <el-button type="text" style="color: #FFFFFF">变倍 +</el-button>
              <el-button type="text" style="color: #FFFFFF;margin-left: 60px">变倍 -</el-button>
            </div>

            <div class="mo8">
              <el-button type="text" style="color: #FFFFFF">变焦 +</el-button>
              <el-button type="text" style="color: #FFFFFF;margin-left: 60px">变焦 -</el-button>
            </div>
          </el-col>
          <el-col>
            <div>
              <el-image style="position:relative;top:-695px;left: 200px;width: 50px;height: 50px;vertical-align: middle" :src="require('@/assets/ssjk.png')"></el-image>
              <el-button type="text" style="position:relative;top:-695px;left: 200px;color: #FFFFFF;">开启激光</el-button>

              <!--    <el-image style="width: 50px;height: 50px;vertical-align: middle" :src="require('@/assets/ssjk.png')"></el-image>
                  <el-button type="text" style="color: #FFFFFF;">开启激光</el-button>-->
            </div>
          </el-col>
        </el-row>
      </el-col>


    </div>
    <div class="second2" v-else-if="isActive == 1">
      <!-- 录像回放 -->
    </div>


    <div class="third3" v-else-if="isActive == 2">
      <div style="margin:25px 0 25px 47px;">
        <div :style="background1" style="height: 95px;width: 210px;display: inline-block;">
          <span class="span2">累计预警</span>
          <!-- 后台数据交互     -->
          <span class="span3">12</span>
        </div>
        <div :style="background1" style="height: 95px;width: 210px;display: inline-block;margin:0px 15px 0px 15px;">
          <span class="span2">已处理预警</span>
          <!-- 后台数据交互     -->
          <span class="span4">4</span>
        </div>
        <div :style="background1" style="height: 95px;width: 210px;display: inline-block;">
          <span class="span2">未处理预警</span>
          <!-- 后台数据交互     -->
          <span class="span5">8</span>
        </div>

      </div>
       <!-- main设计 -->
     <div  class="outer-container" >
      <div class="inner-container">
        <ul class="imgList">
          <li>
            <div>
              <el-image class="image"
                        style="  display: block ;width: 360px;height:180px;margin-bottom: 8px;"
                        :src="require('@/assets/warning.jpg')"
              ></el-image>
              <span class="span8">疑似船只
                <span style="font-size: 15px">(类型)</span>
              </span>
              <span class="span9">已处理</span>
            </div>
          </li>
          <li>
            <div>
              <el-image   class="image"
                          style="  display: block ;width: 360px;height:180px;margin-bottom: 8px;"
                          :src="require('@/assets/warning.jpg')"
              ></el-image>
              <span class="span8">疑似船只
                <span style="font-size: 15px">(类型)</span>
              </span>
              <span class="span9">已处理</span>
            </div>
          </li>
           <li>
            <div>
              <el-image  class="image"
                         style="  display: block ;width: 360px;height:180px;margin-bottom: 8px;"
                        :src="require('@/assets/warning.jpg')"
              ></el-image>
              <span class="span8">疑似船只
                <span style="font-size: 15px">(类型)</span>
              </span>
              <span class="span9">已处理</span>
            </div>
          </li>
          <li>
            <div>
              <el-image  class="image"
                         style="  display: block ;width: 360px;height:180px;margin-bottom: 8px;"
                        :src="require('@/assets/warning.jpg')"
              ></el-image>
              <span class="span8">疑似船只
                <span style="font-size: 15px">(类型)</span>
              </span>
              <span class="span9">已处理</span>
            </div>
          </li> -->

          <li>
            <div>
              <el-image  class="image"
                         style="  display: block ;width: 360px;height:180px;margin-bottom: 8px;"
                        :src="require('@/assets/warning.jpg')"
              ></el-image>
              <span class="span8">疑似船只
                <span style="font-size: 15px">(类型)</span>
              </span>
              <span class="span9">已处理</span>
            </div>
          </li>
          <li>
            <div>
              <el-image  class="image"
                         style="  display: block ;width: 360px;height:180px;margin-bottom: 8px;"
                        :src="require('@/assets/warning.jpg')"
              ></el-image>
              <span class="span8">疑似船只
                <span style="font-size: 15px">(类型)</span>
              </span>
              <span class="span9">已处理</span>
            </div>
          </li>
          <li>
            <div>
              <el-image  class="image"
                         style="  display: block ;width: 360px;height:180px;margin-bottom: 8px;"
                        :src="require('@/assets/warning.jpg')"
              ></el-image>              <span class="span8">疑似船只
                <span style="font-size: 15px">(类型)</span>
              </span>
              <span class="span9">已处理</span>
            </div>
          </li>
          <li>
            <div>
              <el-image  class="image"
                         style="  display: block ;width: 360px;height:180px;margin-bottom: 8px;"
                        :src="require('@/assets/warning.jpg')"
              ></el-image>              <span class="span8">疑似船只
                <span style="font-size: 15px">(类型)</span>
              </span>
              <span class="span9">已处理</span>
            </div>
          </li>
        </ul>
        </div>
      </div>
      <div class="aside" style="display:inline;float: right;">
        <div style="margin-left: 20px;margin-top: 20px;">
          <el-image style="vertical-align:middle;" :src="require('@/assets/icon_jiankong.png')"></el-image>
          <span class="span6">宁波松岙大阜1</span>
        </div>

        <div :style="background2" style="height:40px;width: 450px;margin-left: 20px">
          <!--         vertical-align:middle;图片和文字居中 -->
          <el-image style="width: 30px; height: 27px;margin-left:8px;vertical-align:middle;" :src="require('@/assets/6.png')" fit="fill" ></el-image>
          <span class="span7">处理详情</span>
        </div>
<!--       封装 手写时间条-->
        <div style="position: relative;top:-7px">
        <div class="line" />
<!--        圆形图标-->
        <span style="position:relative;top:40px;left: -32px"><span class="login-cycle"></span></span>
        <span style="position:relative;top:230px;left: -47px"><span class="login-cycle"></span></span>
        </div>




        <!-- 描述列表       -->
          <!-- 这里的所有数据，后台交互改变数据       -->
          <!--      direction="vertical" 是指文字的排列方式  -->
        <div style="position: relative;top:-160px">
          <el-descriptions  :column="1" :span="2">
            <el-descriptions-item label="预警类型"
                                  label-class-name="my-label"
                                  content-class-name="my-content"
            >疑似船只</el-descriptions-item>
            <el-descriptions-item label="预警方位"
                                  label-class-name="my-label"
                                  content-class-name="my-content"
            > A5</el-descriptions-item>
            <el-descriptions-item label="预警时间"
                                  label-class-name="my-label"
                                  content-class-name="my-content"
            >2022-08-06 13:40:02</el-descriptions-item>
            <el-descriptions-item label="预警状态"
                                  label-class-name="my-label1"
            ><el-tag size="small">待处理</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="推送时间"
                                  label-class-name="my-label"
                                  content-class-name="my-content"
            >2022-08-06 13:40:02</el-descriptions-item>
            <el-descriptions-item label="负责人"
                                  label-class-name="my-label"
                                  content-class-name="my-content"
            >田七</el-descriptions-item>
            <el-descriptions-item label="联系方式"
                                  label-class-name="my-label"
                                  content-class-name="my-content"
            >12345678909</el-descriptions-item>
            <el-descriptions-item label="推送内容"
                                  label-class-name="my-label"
                                  content-class-name="my-content"
            >有疑似报警</el-descriptions-item>
            <el-descriptions-item label="反馈信息"
                                  label-class-name="my-label"
                                  content-class-name="my-content"
            >-</el-descriptions-item>
          </el-descriptions>
        </div>
       </div>
    </div>
  </div>
</template>

<script src="https://ajax.aspnetcdn.com/ajax/jquery/jquery-3.5.1.min.js"></script>

<script>
export default {
  name: 'Show',
  data() {
    return {
      activities: [{
        content: '_',
        color: '#33FFFF'
      }, {
        content: '_',
        color: '#33FFFF'
      }],
      isActive: -1,
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
        backgroundRepeat:'no-repeat',
        // 背景图片大小
        backgroundSize: '60%',
        // 背景颜色
        // 背景图片位置
        // backgroundPosition: 'center top'
      },
    };

  },
  props: {
    msg: String,
  },
};

/*图片点击出现边框样式（一图出现边框，其他图取消边框*/
$(function () {

var imgs = $(".image");
for (var i = 0; i < imgs.length; i++) {
  $(imgs[i]).on('click', function () {
    imgs.each(function () {
      $(this).removeClass('border');
    });
    // closeborder();
    $(this).addClass('border');
  })
}
})

</script>

<style  lang="scss" scoped>
//圆
.login-cycle{
  width: 10px;
  height: 10px;
  display: inline-block;
  background-color: #33FFFF;
  border-radius: 50%;
}
/* 竖线 */
.line{
  z-index: 99999;
  position: relative;
  top:50px;
  left: -10px;
  float: left;
  width: 0.1em;
  height: 12em;
  margin-right: 1em;
  margin-left: 3.5em;
  background:#33FFFF;
}

::v-deep .el-timeline-item__node{
  margin: 50px;
}
.J_block{
  z-index: 9999;
  position: relative;
  top:120px;

}

.mo1{
  position:relative;
  background-color: #203f5e;
  height: 30px;
  width: 450px;
  top:52px;
  left:-45px;
}

.mo2{
  position:relative;
  height: 300px;
  width: 300px;
  top:150px;
  left:40px;
}

.mo3{
  position:relative;
  height: 250px;
  width: 400px;
  top:200px;
  left:-45px;
}


.mo4{
  position:relative;
  height: 250px;
  width: 400px;
  top:200px;
  left:100px;
}

.mo5{
  position:relative;
  height: 250px;
  width: 400px;
  top:50px;
  left:20px;
}

.mo6{
  position:relative;
  height: 250px;
  width: 400px;
  top:-100px;
  left:100px;
}

.mo7{
  position:relative;
  height: 250px;
  width: 400px;
  top:-220px;
  left:-70px;
}
.mo8{
  position:relative;
  height: 250px;
  width: 400px;
  top:-415px;
  left:-70px;
}

.first{
  position: relative;
  color:#d9effe;
  background: transparent;
  border: none;
  margin-left: 800px;
  top:-10px;

}
.second{
  top:-10px;
  position: relative;
  color:#d9effe;
  background: transparent;
  border: none;
}
.third{
  top:-10px;
  position: relative;
  color:#d9effe;
  background: transparent;
  border: none;
}
.first1 {
  position: absolute;
  margin-top: 800px;
  width: 1300px;
  height: 700px;
}

.third3 {
  position: absolute;
  margin-top: 785px;
  margin-right: 200px;
  width: 1300px;
  height: 700px;
  // overflow: hidden;
}
.span2{
  color:#438fc5;
  font-size: 16px;
  line-height: 55px;
  margin-left:90px;
  display: block;

}
.span3{
  color:#dfcd63;
  font-size: 20px;
  font-weight:bold;
  margin-left: 95px;
}
.span4{
  color:#45e77e ;
  font-size: 20px;
  font-weight:bold;
  margin-left: 98px;
}
.span5{
  color:#c44c59;
  font-size: 20px;
  font-weight:bold;
  margin-left: 100px;
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
.span8{
  color:#dce7e7;
  margin:0 140px 0 20px;
}
.span9{
/*  height: 10px;
  width: 20px;*/
  color:#dce7e7;
  background-color:#2dc86a;
  border: 4px solid #2dc86a;
}
.el-icon-setting{
  margin-left: 6px;
  color: #3192a4;
}
/*main设置*/
//滚轮设置

.outer-container {
  width: 830px;
  height: 580px;
  display:inline;
  overflow: hidden;
  position: relative;
  float: left;
}

.inner-container {
  position: absolute;
  top:0;
  left: 0;
  bottom: 0;
  right: -25px;
  overflow-y: scroll;
}
/*精确测量宽高*/
ul{
  list-style: none;
}
ul.imgList{
/*  margin: 0 auto;*/
  /*精确*/
  width: 800px;
  overflow: hidden;
}
ul.imgList li{
  float: left;
  padding: 4px 8px;
  /*精确*/
  width: 370px;
}
ul .imgList li div{
  color: black;
}
/* ul .imgList li div .image{
  margin-right: 10px;
} */
ul .imgList li span{
  font-size: 6px;
  display: block;
  width: 100%;
  height: 40px;
  line-height: 40px;
}
.border{
  border:1px solid #d7ce91;
}
.aside{
  width: 450px;
  background-color: rgb(12, 37, 67,0.7);
}
::v-deep .el-descriptions__body {
  background: transparent;
  margin-left: 60px;
  margin-top: 30px;
/*  color:#dce7e7;*/
}
::v-deep .my-label{
  margin-bottom: 5px;
  color: #3fd9d5;

}
::v-deep .my-label1{
  margin-bottom: 30px;
  color: #3fd9d5;
}
::v-deep .my-content{
  margin-bottom: 5px;
  color:#dce7e7;
}
</style>
