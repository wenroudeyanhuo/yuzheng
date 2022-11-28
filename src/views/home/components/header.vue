<template >

  <div  class="bgBackground">
<!--    class="bgBackground"  :style="background"-->
    <div style="z-index: 101;position: absolute;">
      <el-image style="position: absolute;top:0vh;left: 0vw;width: 80.20833333333334vw;height:5.555555555555555vh" :src="require('@/assets/bg_top_title.png')" fit="fill"></el-image>
      <el-image style="width: 20.833333333333336vw; height: 4.62962962962963vh" :src="require('@/assets/text@2x.png')" fit="fill" class="tupian"></el-image>
      <div style="position: relative;top:-3.7037037037037033vh;left: 23.4375vw">
      <el-button id="1" style="border: none;" align="center" class="el-icon-liuyanban" :plain="isPlainDefault" @click="redirect('/test1');btnGroup(null)">人机联防</el-button>
      <el-button  id="2" style="border: none;position: relative;top:-3.2407407407407405vh;left:10.416666666666668vw" align="center" :plain="isPlain[0]"  class="el-icon-liuyanban"  @click="redirect('/test2');btnGroup(1)">预警事件</el-button>
      <el-button id="3"  style="border: none;position: relative;top:-7.87037037037037vh;left:  23.4375vw" align="center"  :plain="isPlain[1]" class="el-icon-liuyanban" @click="redirect('/test3');btnGroup(2)">视频广场</el-button>
      <el-button id="4" size="mini" style="border: none;position: relative;top:-7.87037037037037vh;left: 23.4375vw" align="center"  :plain="isPlain[2]" class="el-icon-guanli"  @click="redirect('/map/mao');btnGroup(3)">
        <el-image style="width: 1.8229166666666667vw; height: 3.2407407407407405vh" :src="require('@/assets/icon_my@2x.png')" fit="fill" class="tempimg"></el-image>
       <span style="font-size: 1.759259259259259vh">超级管理员</span>
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
      isPlain: [], // 控制按钮组是否为朴素按钮
      isPlainDefault: false, // 默认为非朴素按钮

    }
  },
  mounted() {
    this.btnGroup()
  },
  methods: {
    // 按钮组
    btnGroup (index) {
      this.isPlainDefault = false // 每次点击按钮调用方法的时候给默认按钮重新赋予默认值
      this.isPlain = [true, true, true] // 设置按钮组默认为true（默认为朴素按钮）（有几个按钮写几个）
      if (index != null) { // 如果传入的值不是null 那么代表是其他按钮触发的
        this.isPlain[index - 1] = this.isPlainDefault // 将点击的按钮设置为非朴素按钮（plain的值为false）
        this.isPlainDefault = !this.isPlainDefault // 将默认的按钮赋值为true（变成朴素按钮）
      }
    },

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
  border-color:transparent;


}
/*按钮点击*/
 .el-button:focus {
  /*background-color:transparent;*/
  color:#FFFFBB;
  background-color:transparent;
  font-weight: bold;
  border-color: transparent;
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
  font-size:1.8518518518518516vh;
  color: white;
  background-color:transparent;
  background-image: url('~@/../public/icon_select@2x.png');
  width: 10.15625vw;
  height: 3.4259259259259256vh;
  /*border: 2px dashed;*/
}
.el-icon-liuyanban:hover{
  background-color: transparent;

  background-image: url('~@/../src/assets/icon_select_pre@2x.png');

}
.el-icon-liuyanban:focus{
  background-color: transparent;

  background-image: url('~@/../src/assets/icon_select_pre@2x.png');

}


.el-icon-guanli{
  color: white;
  background-color:transparent;
  background-image: url('~@/../public/bg_accout@2x.png');
  width: 8.59375vw;
  height: 4.444444444444444vh;
  /*border: 2px dashed;*/

}
.el-icon-guanli:hover{
  background-color: transparent;
}
.el-icon-guanli:focus{
  background-color: transparent;

}
.el-icon-monan2{
  background: url('~@/../public/icon_my@2x.png');
  width:1.6666666666666667vw;
  height:2.314814814814815vh;
}

</style>
