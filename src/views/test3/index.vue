<template>
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
<!--        视频播放器-->
        <div class='demo'>
          <div v-for="video in videoList" :key="video">
            <video-player class="video-player vjs-custom-skin"
                          ref="videoPlayer"
                          :playsinline="true"
                          :options="playerOptions">
            </video-player>
          </div>
        </div>




        <!--        分页-->
        <el-pagination class="fenye_1"
          background
          layout="prev, pager, next"
          :total="100">
        </el-pagination>

      </el-card>
    </el-col>
  </el-row>
</template>
<style  lang="scss"  scoped>
.demo {
  height: 450px;
  width: 450px;
}
//分页
.fenye_1{
  position: relative;

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
  mounted()
  {
  },
  data() {
    return {
      playerOptions: {
        playbackRates: [0.5, 1.0, 1.5, 2.0], // 可选的播放速度
        autoplay: false, // 如果为true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 是否视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: "video/mp4", // 类型
          src: 'http://www.si-tech.com.cn/pub-ui/images/radio/sitech.mp4' // url地址
        }],
        poster: '', // 封面地址
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true, // 当前时间和持续时间的分隔符
          durationDisplay: true, // 显示持续时间
          remainingTimeDisplay: false, // 是否显示剩余时间功能
          fullscreenToggle: true // 是否显示全屏按钮
        }
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
    handleNodeClick(data) {
      console.log(data);
    }
  }



</script>


