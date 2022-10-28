<template>
  <el-row type="flex" style="background-color: #0E2A4F" justify="end">
    <el-col :span="16" style="background-color: #1C3F65 ">
      <div  style="height:40px;">
        <el-image :src="require('@/assets/icon_title_dianwei@2x.png')" style="width: 40px;vertical-align:middle;" ></el-image>
        <span  class="span" style="color: #c2e6fe" >点位详情</span>
      </div>

      <div>
        <div class="aside2">
          <div class='video'>
            <video-player class="video-player vjs-custom-skin"
                          ref="videoPlayer"
                          :playsinline="true"
                          :options="playerOptions">
            </video-player>
          </div>
        </div>
      </div>



    </el-col>


    <el-col :span="8" style="background-color: #1C3F65 ;" >
      <div style="height: 40px">
        <el-button type="text" style="vertical-align:80%; color: #FFFFFF; border-style: none;border-bottom: 5px #58C2D0;" >实时监控</el-button>
        <el-button type="text" style="vertical-align:80%; color: #FFFFFF; border-style: none;border-bottom: 5px #58C2D0;">录像回放</el-button>
        <el-button type="text" style="vertical-align:80%; color: #FFFFFF; border-style: none;border-bottom: 5px #58C2D0;">预警事件</el-button>
        <el-image :src="require('@/assets/youshangjiao.png')" style="width: 40px;height: 40px" justify="end"></el-image>
      </div>
      <div>
        <div class="aside1">
          <div style="margin-left: 20px;margin-top: 20px">
            <el-image style="vertical-align:middle;color: #FFFFFF;" :src="require('@/assets/icon_jiankong.png')"></el-image>
            <span class="span6">宁波松岙大阜1</span>
          </div>


          <!--<div  class="clearfix" :style="background">
                      //style="border: none" align="center"
            <el-image style="width: 30px; height: 27px" :src="require('@/assets/6.png')" fit="fill" class="tempimg"></el-image>
            <span class="span">  事件趋势日历</span>
          </div>
          -->
          <div class="home">
            <Calendar
              :date="new Date()"
              @enter="mouseenter"
              @leave="mouseleave"
              @changeMonth="changeMonth"
              style="width:500px;height:400px"
            >
              <!-- 可使用动态插槽名设置，v-slot:[slotName] -->
              <template v-slot:2022-5-21>
                <div style="position:absolute;bottom:-10px">今天</div>
              </template>
            </Calendar>
          </div>

        </div>
      </div>


    </el-col>


  </el-row>


</template>

<style lang="scss" scoped>

.head{
  background-color: #1C3F65
}

.aside1 {
  height: 700px;
  width: 450px;
  background-color: #102A4F;
  margin-top: 10px;
  overflow: hidden;
}

.aside2 {
  height: 700px;
  width: 1000px;
  background-color: #102A4F;
  margin-top: 10px;
  overflow: hidden;
}

.span{
  color:#FFFFFF;
  white-space: pre;
  font-weight:bold;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}


.cal_con[data-v-12cb4c6e] {
  width: 100%;
  height: 100%;
  color: #FFFFFF;
  border:none;
  -webkit-box-shadow: none;
  box-shadow: none;
  background: transparent;
  border-radius: 4px;
}

.cal_con .cal_month[data-v-12cb4c6e] {
  text-align: center;
  height: calc(100% - 34px);
}

.video{
  display: inline-block;
  width: 900px;
  height: 600px;
  text-align: center;
  line-height: 100px;
  border: 1px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  background: #090708;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
  margin-top: 20px;
  margin-right: 20px;
  margin-left: 20px;
}

.video:hover{
  display: block;
}

</style>


<script>

import Calendar from '@/components/Calendar.vue'

export default {
  name: 'Home',
  components: {
    Calendar
  },

  methods: {
    mouseenter (event, dateInfo) {
      console.log("悬浮进入", event, dateInfo)
    },
    mouseleave (event, dateInfo) {
      console.log("悬浮离开", event, dateInfo)
    },
    changeMonth (start, end) {
      console.log("开始:", start)
      console.log("结束:", end)
    }
  },

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
          src: 'https://cloud.video.taobao.com/play/u/2835558751/p/2/e/6/t/1/293619015431.mp4'
        }],
        //你的封面地址
        poster: "https://cbu01.alicdn.com/img/ibank/O1CN011V7mCG2EW0ch1fZul_!!2835558751-0-cib.jpg", //（覆盖在视频上面的图片）
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

