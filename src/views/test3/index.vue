<template>
  <el-row>
    <el-col :span="5">
      <el-card class="box-card">
           <div  style="width: 300px;height: 40px" class="clearfix" :style="background">
      <!--          style="border: none" align="center"-->
      <span style="position:absolute;color:white;left:120px;top:30px">监控点位</span>

    </div>

    <div>
      <el-image style="width: 30px; height: 31px;" :src="require('@/assets/icon_number@2x.png')" fit="fill" ></el-image>
      <span  class="span1">7</span>
      <span  class="span2">点位数量</span>
      <el-image style="width: 29px; height: 29px;" :src="require('@/assets/icon_area@2x.png')" fit="fill" ></el-image>
      <span  class="span1">4</span>
      <span  class="span2">涉及区域</span>
    </div>

    <div>
      <input style="background:transparent;margin-bottom: 20px;margin-top: 20px" type="text"  maxlength="11"  placeholder="请输入合适的点位"/>
    </div>
    <span></span>

    <template>
      <el-tree style="background:transparent;color: white" :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    </template>
  </el-card>
    </el-col>
    <el-col :span="19">
      <el-card class="box-card1">
<!--        头-->
        <div style="background-color:#409EFF;top:10px;width: 1200px;height: 40px;margin-left: -10px" >
          <el-image style="width: 60px;height: 60px ;position: relative;top:-15px;left: -25px" :src="require('@/assets/icon_title_dianwei@2x.png')" fit="fill"></el-image>


          <div class=TabsShow>
            <TabsShow msg=""/>
          </div>
        </div>






      </el-card>
    </el-col>
  </el-row>
</template>
<style  lang="scss"  scoped>
//头
//.TabsShow{
//  position: absolute;
//  top:1px;
//  right:-600px;
//
//}
//#test3 {
//  text-align: center;
//  margin-top: 60px;
//}
//视频播放器
.video_text{
  width: 70%;
  margin: 0 auto;
}
video:focus{
  outline: 0;      //去掉选中蓝框
}
.video-js .vjs-big-play-button{
  /*对播放按钮的样式进行设置*/
  width: 100px;
  height: 60px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%,-50%,0);
}
.demo {
  height: 450px;
  width: 450px;
}
//分页
.fenye_1{
  position: absolute;
  left: 100px;

}
//输入框
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
.box-card {

//margin-bottom: 20px;
  background-color:#000088 ;
  opacity:0.7;
  height:700px;
  width: 300px;

  padding: 0px 0px;
  border: none;
  z-index: 100;
}
.box-card1 {
  z-index: 100;

  margin-bottom: 20px;
  background-color:#000088 ;
  opacity:0.7;
  height:700px;
  width: 1170px;

  padding: 0px 0px;
  border: none;
}
</style>
<script>
import TabsShow from './components/signal_one';

export default {
  name: "test3",
  components:{
    TabsShow,
  },
  mounted()
  {
  },
  data() {
    return {
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
      data:
    [{
      label: '鄞州区',
      children: [{
        label: '宁波-松岙大埠',
        children: [{
          label: '宁波-松岙大埠1'
        },{
          label: '宁波-松岙大埠2'
        },{
          label: '宁波-松岙大埠3'
        },{
          label: '宁波-松岙大埠4'
        },{
          label: '宁波-松岙大埠5'
        },],
      },{
        label: '宁波-动迁',
        children: [{
          label: '宁波-动迁1'
        },{
          label: '宁波-动迁2'
        },{
          label: '宁波-动迁3'
        },{
          label: '宁波-动迁4'
        },{
          label: '宁波-动迁5'
        },],
      }]
    }],
      defaultProps:
    {
      children: 'children',
        label: 'label'
    }
  }
    ;
  },
  methods: {

    },

  }



</script>


