<template >

  <div  class="bgBackground"  :style="background">
<!--    class="bgBackground"  :style="background"-->
    <div>
      <el-image style="width: 400px; height: 50px" :src="require('@/assets/text@2x.png')" fit="fill" class="tupian"></el-image>
      <el-button id="1" style="border: none" align="center" class="el-icon-liuyanban" @click="redirect('/test1')">人机联防</el-button>
      <el-button  id="2" style="border: none"align="center"  class="el-icon-liuyanban" @click="redirect('/test2')">预警事件</el-button>
      <el-button id="3"  style="border: none" align="center"  class="el-icon-liuyanban" @click="redirect('/test2')">视频广场</el-button>
      <el-button id="4" size="mini" style="border: none" align="center"  class="el-icon-guanli" @click="redirect('/test2')">
        <el-image style="width: 35px; height: 35px" :src="require('@/assets/icon_my@2x.png')" fit="fill" class="tempimg"></el-image>
       <span style="font-size: 19px">超级管理员</span>
      </el-button>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data(){
    return{
      background: {
        // 背景图片地址
        backgroundImage: 'url(' + require('../../../../public/bg_top_title.png') + ')',
        // 背景图片是否重复
        backgroundRepeat: 'no-repeat',
        // 背景图片大小
        backgroundSize: 'cover',
        // 背景颜色
        // 背景图片位置
        backgroundPosition: 'center top'
      }
    }
  },
  methods: {
    redirect (path) {
      if (path) {
        this.$router.push({ path: path })
      } else {
        window.open("http://localhost:9529", '_blank');
      }

    }
  }
}
</script>


<style>
.el-button:active {
  /*background-color:transparent;*/
  background-color:transparent;
  color: #FFFFBB;
  font-weight: bold;
}
/*按钮悬浮*/
.el-button:hover {
  /*background-color:transparent;*/
  background-color:transparent;
  color: #FFFFBB!important;
  font-weight: bold;
  border-color: #FFFFFF !important;
}
/*按钮点击*/
.el-button:focus {
  /*background-color:transparent;*/
  color:#FFFFBB;
  background-color:transparent;
  font-weight: bold;

  border-color: #01a8f9 !important;
}
.tupian{
  z-index:100;

}
.bgBackground {
  width: 100%;
  height:100%;
}
.el-icon-liuyanban{
  font-size: 20px;
  color: white;
  background-color:transparent;
  background-image: url('~@/../public/icon_select@2x.png');
  width: 195px;
  height: 37px;
  /*border: 2px dashed;*/
}
.el-icon-guanli{
  color: white;
  background-color:transparent;
  background-image: url('~@/../public/bg_accout@2x.png');
  width:165px;
  height:48px;
  /*border: 2px dashed;*/

}
.el-icon-monan2{
  background: url('~@/../public/icon_my@2x.png');
  width:32px;
  height:25px;
}

</style>
