<template class="background_1">
  <el-row>
    <el-col :span="5">
      <el-card class="box-card">
           <div  class="clearfix" :style="background">
      <!--          style="border: none" align="center"-->
      <span>监控点位</span>

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
      <input style="background:transparent;margin-bottom: 20px;margin-top: 20px" type="text"  maxlength="11"  placeholder="请输入合适的点位"></input>
    </div>
    <span></span>

    <template>
      <el-tree style="background:transparent;color: white" :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    </template>
  </el-card>
    </el-col>
    <el-col :span="19">
      <el-card class="box-card1">
      </el-card>
    </el-col>
  </el-row>
</template>
<style  lang="scss"  scoped>
.background_1
{
  background-image: url("~@/../public/bg_bottom@2x.png");
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
  z-index: 10;
}
.box-card1 {
  z-index: 10;

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
export default {
  name: "test3",
  data()
  {
    return{
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

  }

}
</script>


