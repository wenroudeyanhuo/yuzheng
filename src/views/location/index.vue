<template>
<el-row style="background-color: #0E2A4F" type="flex" justify="end">
  <el-col :span="16" style="background-color: #1C3F65 ">
      <div  style="height:40px;">
        <el-image :src="require('@/assets/icon_title_dianwei@2x.png')" style="width: 40px;vertical-align:middle;" ></el-image>
        <span  class="span" style="color: #c2e6fe" >点位详情</span>
      </div>

<!--
  <script>
      export default {
        data() {
          return {
            playerOptions: {
              //播放速度
              playbackRates: [0.5, 1.0, 1.5, 2.0],
              //如果true,浏览器准备好时开始回放。
              autoplay: false,
              // 默认情况下将会消除任何音频。
              muted: false,
              // 导致视频一结束就重新开始。
              loop: false,
              // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
              preload: 'auto',
              language: 'zh-CN',
              // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
              aspectRatio: '16:9',
              // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
              fluid: true,
              sources: [{
                //类型
                type: "video/mp4",
                //url地址
                src: '....'
              }],
              //你的封面地址
              poster: ".....", //（覆盖在视频上面的图片）
              //允许覆盖Video.js无法播放媒体源时显示的默认信息。
              notSupportedMessage: '此视频暂无法播放，请稍后再试',
              controlBar: {
                timeDivider: true,
                durationDisplay: true,
                remainingTimeDisplay: false,
                //全屏按钮
                fullscreenToggle: true
              }
            }

          }
        }
      }
    </script>
    -->
  </el-col>


  <el-col :span="8" style="background-color: #1C3F65 ;" >
    <div style="height: 40px">
      <el-button type="text" style="vertical-align:80%; color: #FFFFFF; border-style: none;border-bottom: 5px #58C2D0;" >实时监控</el-button>
      <el-button type="text" style="vertical-align:80%; color: #FFFFFF; border-style: none;border-bottom: 5px #58C2D0;">录像回放</el-button>
      <el-button type="text" style="vertical-align:80%; color: #FFFFFF; border-style: none;border-bottom: 5px #58C2D0;">预警事件</el-button>
      <el-image :src="require('@/assets/youshangjiao.png')" style="width: 40px;height: 40px" justify="end"></el-image>
    </div>
    <div>
      <el-image :src="require('@/assets/icon_jiankong.png')"></el-image>
    </div>
     </el-col>


</el-row>


</template>

<script>
export default {
  name: 'songpan1'
}

</script>

