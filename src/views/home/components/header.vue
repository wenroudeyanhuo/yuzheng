<template >

  <div  class="bgBackground">
<!--    class="bgBackground"  :style="background"-->
    <div style="z-index: 101;position: absolute;">
      <el-image style="position: absolute;top:0px;left: 0px;width: 1540px;height: 60px" :src="require('@/assets/bg_top_title.png')" fit="fill"></el-image>
      <el-image style="width: 400px; height: 50px" :src="require('@/assets/text@2x.png')" fit="fill" class="tupian"></el-image>
      <div style="position: relative;top:-40px;left: 450px">
      <el-button id="1" style="border: none;" align="center" class="el-icon-liuyanban" @click="redirect('/test1')">人机联防</el-button>
      <el-button  id="2" style="border: none;position: relative;top:-35px;left: 200px" align="center"  class="el-icon-liuyanban" @click="redirect('/test2')">预警事件</el-button>
      <el-button id="3"  style="border: none;position: relative;top:-85px;left: 450px" align="center"  class="el-icon-liuyanban" @click="redirect('/test3')">视频广场</el-button>
      <el-button id="4" size="mini" style="border: none;position: relative;top:-85px;left: 450px" align="center"  class="el-icon-guanli" @click="redirect('/map')">
        <el-image style="width: 35px; height: 35px" :src="require('@/assets/icon_my@2x.png')" fit="fill" class="tempimg"></el-image>
       <span style="font-size: 19px">超级管理员</span>
      </el-button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data(){
    return{

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
  position: absolute;

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
.el-icon-liuyanban:hover{

  background-image: url('~@/../src/assets/icon_select_pre@2x.png');

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
