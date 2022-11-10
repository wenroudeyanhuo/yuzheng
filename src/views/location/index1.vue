<template>
  <el-row type="flex" style="background-color: #0e2a4f" justify="end">
    <!--左侧-->
    <el-col :span="16" style="background-color: #1c3f65">
      <div style="height: 40px">
        <el-image
          :src="require('@/assets/icon_title_dianwei@2x.png')"
          style="width: 40px; vertical-align: middle"
        ></el-image>
        <span class="span" style="color: #c2e6fe">点位详情</span>
      </div>

      <div>
        <div class="video_box">
          <div class="video_center">
            <div
              class="resource-container"
              style="width: 100%; position: relative"
            >
              <div class="video-title">石浦东门岛</div>
              <template>
                <video
                  :ref="video"
                  :id="video"
                  :src="
                    require('../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4')
                  "
                  :autoplay="videolist.autoplay"
                  :controls="videolist.controls"
                  :controlslist="videolist.controlslist"
                  :webkit-playsinline="webkitplaysinline"
                  style="height: 600px; width: 1000px"
                ></video>
              </template>
            </div>
            <!-- 右侧选集
              <div style="width: 30%" class="video_right">
              <p style="padding: 1rem">选集</p>
              <ul>
                <li
                  v-for="(item, index) in 3"
                  :key="index"
                  style="cursor: pointer; padding: 10px"
                  :class="activeIndex == index + '' ? 'video-active' : ''"
                  @click="open(item, index)"
                >
                  {{ index + 1 }}. 中华人民...
                </li>
              </ul>
            </div>
            -->
          </div>
        </div>
      </div>

      <div class="click_page">
        <div class="center_img" style="left: 0px">
          <div class="page_info">
            <a href="javascript:;">
              <video
                :src="
                  require('../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4')
                "
                muted="muted"
                onMouseOver="this.play()"
                onMouseOut="this.pause()"
                class="video"
              ></video>
            </a>
          </div>
          <div class="page_info">
            <a href="javascript:;">
              <img
                class="pic"
                :src="require('../../assets/《1024程序员公约》(嘴硬版).png')"
              />
            </a>
          </div>
          <div class="page_info">
            <a href="javascript:;">
              <img
                class="pic"
                :src="require('../../assets/《1024程序员公约》(嘴硬版).png')"
              />
            </a>
          </div>
          <div class="page_info">
            <a href="javascript:;">
              <img
                class="pic"
                :src="require('../../assets/《1024程序员公约》(嘴硬版).png')"
              />
            </a>
          </div>
          <div class="page_info">
            <a href="javascript:;">
              <video
                :src="
                  require('../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4')
                "
                muted="muted"
                onMouseOver="this.play()"
                onMouseOut="this.pause()"
                class="video"
              ></video>
            </a>
          </div>
          <div class="page_info">
            <a href="javascript:;">
              <img
                class="pic"
                :src="require('../../assets/《1024程序员公约》(嘴硬版).png')"
              />
            </a>
          </div>
        </div>
      </div>
    </el-col>

    <!--右侧-->
    <el-col :span="8" style="background-color: #1c3f65">
      <div style="height: 40px">
        <el-button
          type="text"
          style="
            vertical-align: 80%;
            color: #ffffff;
            border-style: none;
            border-bottom: 5px #58c2d0;
          "
          >实时监控</el-button
        >
        <el-button
          type="text"
          style="
            vertical-align: 80%;
            color: #ffffff;
            border-style: none;
            border-bottom: 5px #58c2d0;
          "
          >录像回放</el-button
        >
        <el-button
          type="text"
          style="
            vertical-align: 80%;
            color: #ffffff;
            border-style: none;
            border-bottom: 5px #58c2d0;
          "
          >预警事件</el-button
        >
        <el-image
          :src="require('@/assets/youshangjiao.png')"
          style="width: 40px; height: 40px"
          justify="end"
        ></el-image>
      </div>
      <div>
        <div class="aside1">
          <div style="margin-left: 20px; margin-top: 20px">
            <el-image
              style="vertical-align: middle; color: #ffffff"
              :src="require('@/assets/icon_jiankong.png')"
            ></el-image>
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
              style="width: 500px; height: 400px"
            >
              <!-- 可使用动态插槽名设置，v-slot:[slotName] -->
              <template v-slot:2022-5-21>
                <div style="position: absolute; bottom: -10px">今天</div>
              </template>
            </Calendar>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
.head {
  background-color: #1c3f65;
}

.aside1 {
  height: 700px;
  width: 450px;
  background-color: #102a4f;
  margin-top: 10px;
  overflow: hidden;
}

.aside2 {
  height: 700px;
  width: 1000px;
  background-color: #102a4f;
  margin-top: 10px;
  overflow: hidden;
}

.span {
  color: #ffffff;
  white-space: pre;
  font-weight: bold;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.cal_con[data-v-12cb4c6e] {
  width: 100%;
  height: 100%;
  color: #ffffff;
  border: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  background: transparent;
  border-radius: 4px;
}

.cal_con .cal_month[data-v-12cb4c6e] {
  text-align: center;
  height: calc(100% - 34px);
}

.video_box {
  margin: 0 auto;
  width: 1000px;
  height: 640px;
  background: #000;
}
.video_center {
  //margin: 20px auto;
  width: 1000px;
  height: 600px;
  //background: #3f3f3f;
  display: flex;
  justify-content: space-between;
}
.video-title {
  width: 100%;
  display: none;
  padding: 1rem;
  position: absolute;
  top: 0;
  color: #fff;
  //background-color: rgb(6, 6, 6, 0.3);
  z-index: 2;
}
.resource-container:hover .video-title {
  display: block;
}
/*.video_right > p{
   background-color: rgb(6, 6, 6,0.3);
  color: #fff;
}
*/

.video-active {
  background-color: rgb(6, 6, 6, 0.3);
  color: aqua;
}

/* 全屏按钮 */
/* video::-webkit-media-controls-fullscreen-button {
        display: none;
    } */
/* 播放按钮 */
/* video::-webkit-media-controls-play-button {
        display: none;
    } */
/* 进度条 */
/*video::-webkit-media-controls-timeline {
  display:flex;
}*/
/* 观看的当前时间 */
/* video::-webkit-media-controls-current-time-display{
        display: none;            
    } */
/* 剩余时间 */
/* video::-webkit-media-controls-time-remaining-display {
        display: none;            
    } */
/* 音量按钮 */
/* video::-webkit-media-controls-mute-button {
        display: none;            
    } */
/* video::-webkit-media-controls-toggle-closed-captions-button {
        display: none;            
    } */
/* 音量的控制条 */
/* video::-webkit-media-controls-volume-slider {
        display: none;            
    } */
/* 所有控件 */
/* video::-webkit-media-controls-enclosure{ 
        display: none;
    } */

.pic {
  height: 300px;
  width: 300px;
}

.click_page {
  width: 1000px;
  height: 500px;
  position: absolute;
  left: 3.75rem;
  overflow: hidden;
}
.click_page .center_img {
  flex-direction: row;
  float: left;
  width: 33.625rem;
  height: 4.8rem;
}
.click_page .center_img .page_info {
  float: left;
  height: 4.5rem;
  margin: 0.125rem;
  margin-left: 0px;
}
.click_page .center_img .page_info a {
  color: black;
}
.click_page .center_img .page_info a div {
  clear: both;
}
.click_page .center_img .page_info a img {
  width: 100%;
  height: 100%;
}
.click_page .center_img .page_info a video {
  width: 100%;
  height: 100%;
}
</style>


<script>
import Calendar from "@/components/Calendar.vue";

export default {
  name: "Home",
  components: {
    Calendar,
  },

  methods: {
    mouseenter(event, dateInfo) {
      console.log("悬浮进入", event, dateInfo);
    },
    mouseleave(event, dateInfo) {
      console.log("悬浮离开", event, dateInfo);
    },
    changeMonth(start, end) {
      console.log("开始:", start);
      console.log("结束:", end);
    },
  },

  data() {
    return {
      videolist: {
        autoplay: false, // 自动播放
        controls: "controls", //操作
        controlslist: "nodownload   noplaybackrate",
        /*
        1、nodownload: 不要下载按钮
        2、nofullscreen: 不要全屏按钮
        3、noremoteplayback: 不要远程回放
        4、disablePictureInPicture 不要画中画按钮
        5、noplaybackrate 不要播放速度按钮
        */
      }, //video配置
      webkitplaysinline: "true",
      playHistory: {
        resourceIndex: -1,
        currentFileIndex: -1,
        currenTime: 0,
      }, //初始化时定位到的历史播放记录
      videoPlayer: null,
      activeIndex: "0", //右侧课程选择切换背景色
      currentResource: {}, //当前的资源
    };
  },
  mounted() {
    this.querylist();
  },
  methods: {
    querylist() {
      this.$nextTick(() => {
        this.initVideoplayer();
        this.fileTimelengthRecord();
      });
    },
    initVideoplayer() {
      if (!this.videoPlayer && this.$refs.video) {
        this.videoPlayer = this.$refs.video;

        // 视频进度改变 -- 播放即触发
        this.videoPlayer.addEventListener("timeupdate", (e) => {
          // console.log(this.videoPlayer.currentTime,'currentTime') //当前播放进度
          // console.log(this.videoPlayer.duration,'duration') //当前播放进度
          sessionStorage.setItem("currentTime", this.videoPlayer.currentTime);
          sessionStorage.setItem("duration", this.videoPlayer.duration);
        });

        //视频暂停 --  点击暂停（退出也会触发并记录时间）
        this.videoPlayer.addEventListener("pause", (e) => {
          // this.fileTimelengthRecord(this.videoPlayer.currentTime,this.videoPlayer.duration)
        });

        // // 进度拖动
        // this.videoPlayer.addEventListener('seeking',(e) => {
        //   console.log(this.videoPlayer.currentTime,'seeking进行拖动')
        // })

        // // 进度拖动（进度条拖动会先 pause --> seeked--->play）
        // this.videoPlayer.addEventListener('seeked',(e) => {
        //   console.log(this.videoPlayer.currentTime,'seeked进行拖动')
        // })

        // 视频播放 -- 点击播放
        this.videoPlayer.addEventListener("play", (e) => {});

        // 视频播放 -- 播放结束
        this.videoPlayer.addEventListener("ended", (e) => {
          console.log(this.videoPlayer.currentTime, "ended 播放完成");
        });

        //   // 禁止快进
        // let sym
        // setInterval(() => {
        //     let time = this.videoPlayer.currentTime
        //     if(time-sym>1){
        //         this.videoPlayer.currentTime=sym
        //     }
        //     sym=this.videoPlayer.currentTime
        // },500)
      }
    },
    // 进度记录更新 - 记录当前播放附件的时长
    fileTimelengthRecord() {
      let stat = sessionStorage.getItem("currentTime");
      let end = sessionStorage.getItem("duration");
      if (stat > 0) {
        this.ifopen();
      } else {
        this.videoPlayer.currentTime = 0;
      }
    },
    ifopen() {
      this.$confirm("是否从上次的记录开始播放?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          let stat = sessionStorage.getItem("currentTime");
          this.videoPlayer.currentTime = stat;
          this.videoPlayer.play();
        })
        .catch(() => {
          this.videoPlayer.currentTime = 0;
          this.videoPlayer.pause();
        });
    },

    open(it, id) {
      // sessionStorage.setItem('arrylistId',id)
      sessionStorage.setItem("currentTime", 0);
      sessionStorage.setItem("duration", 0);
      this.activeIndex = id;
    },
  },
};


window.onload = function () {
  // 图片左右滑动
  var center_img = document.querySelector(".center_img");
  var btn_page = document.querySelectorAll(".btn_page");
  var left_number = 0;
  function animate(offset) {
    //获取的是style.left，是相对左边获取距离，所以第一张图后style.left都为负值，
    //且style.left获取的是字符串，需要用parseInt()取整转化为数字。
    //center_img.style.left需要在center_img节点中添加style的left属性,不然无法获取
    var newLeft = parseInt(center_img.style.left) + offset;
    center_img.style.left = newLeft + "px";
    left_number = newLeft;
    console.log(newLeft);
  }
  // 向左按钮
  btn_page[0].onclick = function () {
    if (left_number == 0) {
      btn_page[0].style.disabled = true;
    } else {
      animate(433);
    }
  };
  // 向右按钮
  btn_page[1].onclick = function () {
    if (left_number <= -1299) {
      btn_page[1].style.disabled = true;
    } else {
      animate(-433);
    }
  };

};
</script>

