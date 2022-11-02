<template>
  <div>
    <div style="background: #003377 ">
    <h1>{{ msg }}</h1>
    
    <button class="first"  id = "underline" @click="isActive = 0">实时监控</button>
    <button class="second" id = "underline" @click="isActive = 1">录像回放</button>
    <button class="third" id = "underline" @click="isActive = 2">预警事件</button>
    <el-icon class="el-icon-setting"></el-icon>
    </div>
    <div class="first1" v-if="isActive == 0">
      <!-- 实时监控 -->
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
              <el-image class="images"
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
              <el-image   class="images"
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
              <el-image  class="images"
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
              <el-image  class="images"
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
              <el-image  class="images"
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
              <el-image  class="images"
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
              <el-image  class="images"
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
              <el-image  class="images"
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
          <!-- 描述列表       -->
          <!-- 这里的所有数据，后台交互改变数据       -->
          <!--      direction="vertical" 是指文字的排列方式  -->
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
</template>

<!-- 引入jquery -->
<script src="https://ajax.aspnetcdn.com/ajax/jquery/jquery-3.5.1.min.js"></script>

<script>
export default {
  name: 'Show',
  data() {
    return {
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

var imgs = $(".images");
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
.first{
  top:-10px;
  position: relative;
  color:#d9effe;
  background: transparent;
  border: none;
  margin-left: 800px;
  cursor:pointer;

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
.first:focus{
  color: #27c7ca;
}
.second:focus{
  color: #27c7ca; 
}
.third:focus{
  color: #27c7ca;
}
//css伪类
#underline:after{
  content: "";
  width: 0px;
  height: 3px;
  background-color: #27c7ca;
  position: absolute;
  top:100%;
  left: 50%;
  right: 50%;
  margin-top: 10px;
  // transition: all .8s;
}

#underline:focus:after{
  left: 10%;
  right: 25%;
  width: 80%;
}
// .first:hover{
//   text-decoration:underline;
// }
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
