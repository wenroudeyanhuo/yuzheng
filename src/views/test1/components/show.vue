<template>
  <div style="position: absolute">
    <!-- width: 1380px; -->
    <!-- top=350px -->
    <div
      style="
        position: absolute;
        width: 71.875vw;
        height:  3.7037037037037033vh;
        top: -32.407407407407405vh;
        background: #003377;
      "
    >
      <span
        style="
          color: white;
          position: absolute;
          left: 5.208333333333334vw;
          top:  0.9259259259259258vh;
          font-size: calc(0.4rem + 1.5vmin);
        "
      >
        点位详情</span
      >
      <el-image
        style="
          position: absolute;
          left: -0.5208333333333334vw;
          top: -0.9259259259259258vh;
          height: 5.555555555555555vh;
          width: 3.125vw;
          background: transparent;
        "
        :src="require('@/assets/icon_title_dianwei@2x.png')"
        fit="fill"
      ></el-image>
      <div style="position: absolute; left: 7.8125vw">
        <el-button
          class="first"
          :plain="isPlainDefault"
          @click="
            isActive = 0;
            btnGroup(null);
          "
          >实时监控</el-button
        >
        <el-button
          class="second"
          :plain="isPlain[0]"
          @click="
            isActive = 1;
            btnGroup(1);
          "
          >录像回放</el-button
        >
        <el-button
          class="third"
          :plain="isPlain[1]"
          @click="
            isActive = 2;
            btnGroup(2);
          "
          >预警事件</el-button
        >
        <!--      <el-icon class="el-icon-setting"></el-icon>-->
      </div>
    </div>

    <div class="first1" v-if="isActive == 0">
      <!-- 实时监控 -->
      <el-col :span="15">
        <div style="position: relative; top: 0.9259259259259258vh; left: -5.729166666666667vw">
          <el-image
            style="vertical-align: middle"
            :src="require('@/assets/icon_jiankong.png')"
          ></el-image>
          <span><font color="#f0f8ff"
                      style="font-size: calc(0.4rem + 1.5vmin);"
            >宁波松岙大阜1</font></span>
        </div>

        <div>
          <video
            style="position: relative; top: 2.314814814814815vh; left: -5.729166666666667vw; width: 44.270833333333336vw"
          >
            <source
              :src="
                require('@/assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4')
              "
            />
          </video>
        </div>
      </el-col>

      <el-col :span="1">
        <div class="mo1">
          <!--
            <el-divider direction="vertical"></el-divider>
          -->
          <div class="line1" />
          <span style="line-height: 2.7777777777777777vh; margin-left: 1.0416666666666667vw">
            <font color="#f0f8ff"  style="font-size: calc(0.4rem + 1.5vmin);">云台控制</font>
          </span>
        </div>

        <div class="mo2">
          <el-image
            style="width: 15.625vw; height: 27.777777777777775vh; vertical-align: middle"
            :src="require('@/assets/bg_bottom(1).png')"
          ></el-image>
        </div>

        <el-row>
          <el-col :span="5">
            <div class="mo3">
              <el-image
                style="width: 110px; height: 4.166666666666666vh; vertical-align: middle"
                :src="require('@/assets/ssjk1.png')"
              ></el-image>
              <el-image
                style="
                  width: 5.729166666666667vw;
                  height:  4.166666666666666vh;
                  vertical-align: middle;
                  margin-left:0.15625vw;
                "
                :src="require('@/assets/ssjk1.png')"
              ></el-image>
              <!--<el-image style="width: 160px;height: 82px;vertical-align: middle;" :src="require('@/assets/ssjk1.png')"></el-image>-->
              <div>
                <el-image
                  style="
                    width: 5.729166666666667vw;
                    height: 4.166666666666666vh;
                    vertical-align: middle;
                    margin-top:0.9259259259259258vh;
                  "
                  :src="require('@/assets/ssjk1.png')"
                ></el-image>
                <el-image
                  style="
                    width: 5.729166666666667vw;
                    height: 4.166666666666666vh;
                    vertical-align: middle;
                    margin-top: 0.9259259259259258vh;
                    margin-left: 0.15625vw;
                  "
                  :src="require('@/assets/ssjk1.png')"
                ></el-image>
              </div>
            </div>
          </el-col>
          <el-col :span="19">
            <div>
              <el-image
                style="
                  position: relative;
                  left:10.416666666666668vw;
                  top: 18.51851851851852vh;
                  width: 10.416666666666668vw;
                  height:9.25925925925926vh;
                  vertical-align: middle;
                "
                :src="require('@/assets/ssjk1.png')"
              ></el-image>
            </div>
          </el-col>
        </el-row>
      </el-col>

      <el-col :span="7">
        <div class="mo4">
          <el-image
            style="width: 3.6458333333333335vw; height:6.481481481481481vh; vertical-align: middle"
            :src="require('@/assets/icon_up.png')"
          ></el-image>
        </div>

        <div class="mo5">
          <el-image
            style="width: 3.6458333333333335vw; height:6.481481481481481vh; vertical-align: middle"
            :src="require('@/assets/icon_left.png')"
          ></el-image>
          <el-image
            style="
              width: 3.6458333333333335vw;
              height:6.481481481481481vh;
              vertical-align: middle;
              margin-left: 5.208333333333334vw;
            "
            :src="require('@/assets/icon_right.png')"
          ></el-image>
        </div>

        <div class="mo6">
          <el-image
            style="width: 3.6458333333333335vw; height: 6.481481481481481vh; vertical-align: middle"
            :src="require('@/assets/icon_down.png')"
          ></el-image>
        </div>

        <el-row>
          <el-col>
            <div class="mo7">
              <el-button type="text" style="color: #ffffff;">变倍 +</el-button>
              <el-button type="text" style="color: #ffffff; margin-left: 3.125vw"
                >变倍 -</el-button
              >
            </div>

            <div class="mo8">
              <el-button type="text" style="color: #ffffff">变焦 +</el-button>
              <el-button type="text" style="color: #ffffff; margin-left: 3.125vw"
                >变焦 -</el-button>
            </div>
          </el-col>
          <el-col>
            <div>
              <el-image
                style="
                  position: relative;
                  top: -64.35185185185185vh;
                  left: 10.416666666666668vw;
                  width: 2.604166666666667vw;
                  height:  4.62962962962963vh;
                  vertical-align: middle;
                "
                :src="require('@/assets/ssjk.png')"
              ></el-image>
              <el-button
                type="text"
                style="
                  position: relative;
                  top: -64.35185185185185vh;
                  left: 10.416666666666668vw;
                  color: #ffffff;
                "
                >开启激光</el-button>

              <!--    <el-image style="width: 50px;height: 50px;vertical-align: middle" :src="require('@/assets/ssjk.png')"></el-image>
                  <el-button type="text" style="color: #FFFFFF;">开启激光</el-button>-->
            </div>
          </el-col>
        </el-row>
      </el-col>
    </div>
    <div class="second2" v-else-if="isActive == 1">
      <!-- 录像回放 -->

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
                    require('@/assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4')
                  "
                  :autoplay="videolist.autoplay"
                  :controls="videolist.controls"
                  :controlslist="videolist.controlslist"
                  :webkit-playsinline="webkitplaysinline"
                  style="height:55.55555555555555vh; width: 52.083333333333336vw"
                ></video>
              </template>
            </div>
          </div>
        </div>
      </div>

      <div class="click_page">
        <div class="center_img" style="left: 0vw">
          <div class="page_info">
            <a href="javascript:;">
              <video
                :src="
                  require('@/assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4')
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
                :src="require('@/assets/《1024程序员公约》(嘴硬版).png')"
              />
            </a>
          </div>
          <div class="page_info">
            <a href="javascript:;">
              <img
                class="pic"
                :src="require('@/assets/《1024程序员公约》(嘴硬版).png')"
              />
            </a>
          </div>
          <div class="page_info">
            <a href="javascript:;">
              <img
                class="pic"
                :src="require('@/assets/《1024程序员公约》(嘴硬版).png')"
              />
            </a>
          </div>
          <div class="page_info">
            <a href="javascript:;">
              <video
                :src="
                  require('@/assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4')
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
                :src="require('@/assets/《1024程序员公约》(嘴硬版).png')"
              />
            </a>
          </div>
        </div>
      </div>
      <div>
        <!--        右边-->
        <div class="aside1">
          <div style="margin-left: 1.0416666666666667vw; margin-top: 1.8518518518518516vh">
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
          <div style="position: relative; left: 0.15625vw">
            <Calendar
              :date="new Date()"
              @enter="mouseenter"
              @leave="mouseleave"
              @changeMonth="changeMonth"
              style="width: 20.833333333333336vw; height: 37.03703703703704vh"
            >
              <!-- 可使用动态插槽名设置，v-slot:[slotName] -->
              <template v-slot:2022-5-21>
                <div style="position: absolute; bottom: -0.9259259259259258vh">今天</div>
              </template>
            </Calendar>
          </div>
        </div>
      </div>
    </div>

    <div class="third3" v-else-if="isActive == 2">
      <div style="position: absolute; top: -34.25925925925926vh; left: 0.5208333333333334vw">
        <div style="margin: 2.314814814814815vh 0 2.314814814814815vh 2.447916666666667vw">
          <div
            :style="background1"
            style="height: 8.796296296296296vh; width: 10.9375vw; display: inline-block"
          >
            <span class="span2">累计预警</span>
            <!-- 后台数据交互     -->
            <span class="span3">12</span>
          </div>
          <div
            :style="background1"
            style="
              height:8.796296296296296vh;
              width: 10.9375vw;
              display: inline-block;
              margin: 0vh 0.78125vw 0vh 0.78125vw;
            "
          >
            <span class="span2">已处理预警</span>
            <!-- 后台数据交互     -->
            <span class="span4">4</span>
          </div>
          <div
            :style="background1"
            style="height: 8.796296296296296vh; width:10.9375vw; display: inline-block"
          >
            <span class="span2">未处理预警</span>
            <!-- 后台数据交互     -->
            <span class="span5">8</span>
          </div>
        </div>
        <!-- main设计 -->
        <div class="outer-container">
          <div class="inner-container">
            <ul class="imgList">
              <li>
                <div>
                  <el-image
                    class="images"
                    style="
                      display: block;
                      width: 18.75vw;
                      height:  16.666666666666664vh;
                      margin-bottom: 0.7407407407407407vh;
                    "
                    :src="require('@/assets/warning.jpg')"
                  ></el-image>
                  <span class="span8"
                    >疑似船只
                    <span style="font-size:calc(0.5rem + 1vmin )">(类型)</span>
                  </span>
                  <span class="span9">已处理</span>
                </div>
              </li>
              <li>
                <div>
                  <el-image
                    class="images"
                    style="
                      display: block;
                      width: 18.75vw;
                      height:  16.666666666666664vh;
                      margin-bottom:0.7407407407407407vh;
                    "
                    :src="require('@/assets/warning.jpg')"
                  ></el-image>
                  <span class="span8"
                    >疑似船只
                    <span style="font-size:calc(0.5rem + 1vmin )">(类型)</span>
                  </span>
                  <span class="span9">已处理</span>
                </div>
              </li>
              <li>
                <div>
                  <el-image
                    class="images"
                    style="
                      display: block;
                      width: 18.75vw;
                      height: 16.666666666666664vh;
                      margin-bottom: 1.3888888888888888vh;
                    "
                    :src="require('@/assets/warning.jpg')"
                  ></el-image>
                  <span class="span8"
                    >疑似船只
                    <span style="font-size: calc(0.5rem + 1vmin )">(类型)</span>
                  </span>
                  <span class="span9">已处理</span>
                </div>
              </li>
              <li>
                <div>
                  <el-image
                    class="images"
                    style="
                      display: block;
                      width: 18.75vw;
                      height: 16.666666666666664vh;
                      margin-bottom:0.7407407407407407vh;
                    "
                    :src="require('@/assets/warning.jpg')"
                  ></el-image>
                  <span class="span8"
                    >疑似船只
                    <span style="font-size: calc(0.5rem + 1vmin )">(类型)</span>
                  </span>
                  <span class="span9">已处理</span>
                </div>
              </li>
              -->

              <li>
                <div>
                  <el-image
                    class="images"
                    style="
                      display: block;
                      width:18.75vw;
                      height: 16.666666666666664vh;
                      margin-bottom: 0.7407407407407407vh;
                    "
                    :src="require('@/assets/warning.jpg')"
                  ></el-image>
                  <span class="span8"
                    >疑似船只
                    <span style="font-size:calc(0.5rem + 1vmin )">(类型)</span>
                  </span>
                  <span class="span9">已处理</span>
                </div>
              </li>
              <li>
                <div>
                  <el-image
                    class="images"
                    style="
                      display: block;
                      width:  18.75vw;
                      height: 16.666666666666664vh;
                      margin-bottom:0.7407407407407407vh;
                    "
                    :src="require('@/assets/warning.jpg')"
                  ></el-image>
                  <span class="span8"
                    >疑似船只
                    <span style="font-size: calc(0.5rem + 1vmin )">(类型)</span>
                  </span>
                  <span class="span9">已处理</span>
                </div>
              </li>
              <li>
                <div>
                  <el-image
                    class="images"
                    style="
                      display: block;
                      width:18.75vw;
                      height:16.666666666666664vh;
                      margin-bottom: 0.7407407407407407vh;
                    "
                    :src="require('@/assets/warning.jpg')"
                  ></el-image>
                  <span class="span8"
                    >疑似船只
                    <span style="font-size: calc(0.5rem + 1vmin )">(类型)</span>
                  </span>
                  <span class="span9">已处理</span>
                </div>
              </li>
              <li>
                <div>
                  <el-image
                    class="images"
                    style="
                      display: block;
                      width: 18.75vw;
                      height: 16.666666666666664vh;
                      margin-bottom:0.7407407407407407vh;
                    "
                    :src="require('@/assets/warning.jpg')"
                  ></el-image>
                  <span class="span8"
                    >疑似船只
                    <span style="font-size:calc(0.5rem + 1vmin )">(类型)</span>
                  </span>
                  <span class="span9">已处理</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="aside"
          style="position: absolute; top: 13.888888888888888vh; display: inline; float: right"
        >
          <div style="margin-left: 1.0416666666666667vw">
            <el-image
              style="vertical-align: middle"
              :src="require('@/assets/icon_jiankong.png')"
            ></el-image>
            <span class="span6">宁波松岙大阜1</span>
          </div>

          <div
            :style="background2"
            style="height: 3.7037037037037033vh; width: 23.4375vw; margin-left: 1.0416666666666667vw"
          >
            <!--         vertical-align:middle;图片和文字居中 -->
            <el-image
              style="
                width: 1.5625vw;
                height:2.5vh;
                margin-left:0.4166666666666667vw;
                vertical-align: middle;
              "
              :src="require('@/assets/6.png')"
              fit="fill"
            ></el-image>
            <span class="span7">处理详情</span>
          </div>
          <!--       封装 手写时间条-->
          <div style="position: relative; top: -0.6481481481481481vh">
            <div class="line" />
            <!--        圆形图标-->
            <span style="position: relative; top:3.7037037037037033vh; left: -1.6666666666666667vw"
              ><span class="login-cycle"></span
            ></span>
            <span style="position: relative; top: 21.296296296296294vh; left: -2.447916666666667vw"
              ><span class="login-cycle"></span
            ></span>
          </div>

          <!-- 描述列表       -->
          <!-- 这里的所有数据，后台交互改变数据       -->
          <!--      direction="vertical" 是指文字的排列方式  -->
          <div style="position: relative; top: -14.814814814814813vh">
            <el-descriptions :column="1" :span="2">
              <el-descriptions-item
                label="预警类型"
                label-class-name="my-label"
                content-class-name="my-content"
                >疑似船只</el-descriptions-item
              >
              <el-descriptions-item
                label="预警方位"
                label-class-name="my-label"
                content-class-name="my-content"
              >
                A5</el-descriptions-item
              >
              <el-descriptions-item
                label="预警时间"
                label-class-name="my-label"
                content-class-name="my-content"
                >2022-08-06 13:40:02</el-descriptions-item
              >
              <el-descriptions-item
                label="预警状态"
                label-class-name="my-label1"
                ><el-tag size="small">待处理</el-tag>
              </el-descriptions-item>
              <el-descriptions-item
                label="推送时间"
                label-class-name="my-label"
                content-class-name="my-content"
                >2022-08-06 13:40:02</el-descriptions-item
              >
              <el-descriptions-item
                label="负责人"
                label-class-name="my-label"
                content-class-name="my-content"
                >田七</el-descriptions-item
              >
              <el-descriptions-item
                label="联系方式"
                label-class-name="my-label"
                content-class-name="my-content"
                >12345678909</el-descriptions-item
              >
              <el-descriptions-item
                label="推送内容"
                label-class-name="my-label"
                content-class-name="my-content"
                >有疑似报警</el-descriptions-item
              >
              <el-descriptions-item
                label="反馈信息"
                label-class-name="my-label"
                content-class-name="my-content"
                >-</el-descriptions-item
              >
            </el-descriptions>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- 引入jquery -->
<!--<script src="https://ajax.aspnetcdn.com/ajax/jquery/jquery-3.5.1.min.js"></script>-->

<script>
import Calendar from "@/components/Calendar.vue";
export default {
  name: "Show",
  components: {
    Calendar,
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

      isPlain: [], // 控制按钮组是否为朴素按钮
      isPlainDefault: false, // 默认为非朴素按钮

      activities: [
        {
          content: "_",
          color: "#33FFFF",
        },
        {
          content: "_",
          color: "#33FFFF",
        },
      ],
      isActive: -1,
      background1: {
        // 背景图片地址
        backgroundImage: "url(" + require("@/assets/cccc.png") + ")",
        // 背景图片是否重复
        // 背景图片大小
        backgroundSize: "cover",
        // 背景颜色
        // 背景图片位置
        // backgroundPosition: 'center top'
      },
      background2: {
        // 背景图片地址
        backgroundImage: "url(" + require("@/assets/bg_title@2x.png") + ")",
        // 背景图片是否重复
        backgroundRepeat: "no-repeat",
        // 背景图片大小
        backgroundSize: "60%",
        // 背景颜色
        // 背景图片位置
        // backgroundPosition: 'center top'
      },
    };
  },
  props: {
    msg: String,
  },
  mounted() {
    this.btnGroup();
    this.querylist();
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
          // sessionStorage.setItem("currentTime", this.videoPlayer.currentTime);
          // sessionStorage.setItem("duration", this.videoPlayer.duration);
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
          // console.log(this.videoPlayer.currentTime, "ended 播放完成");
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
      // let stat = sessionStorage.getItem("currentTime");
      // let end = sessionStorage.getItem("duration");
      // if (stat > 0) {
      //   this.ifopen();
      // } else {
      //   // this.videoPlayer.currentTime = 0;
      // }
    },
    ifopen() {
      this.$confirm("是否从上次的记录开始播放?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          // let stat = sessionStorage.getItem("currentTime");
          // this.videoPlayer.currentTime = stat;
          this.videoPlayer.play();
        })
        .catch(() => {
          // this.videoPlayer.currentTime = 0;
          this.videoPlayer.pause();
        });
    },

    open(it, id) {
      // sessionStorage.setItem('arrylistId',id)
      // sessionStorage.setItem("currentTime", 0);
      sessionStorage.setItem("duration", 0);
      this.activeIndex = id;
    },
    // 按钮组
    btnGroup(index) {
      this.isPlainDefault = false; // 每次点击按钮调用方法的时候给默认按钮重新赋予默认值
      this.isPlain = [true, true, true]; // 设置按钮组默认为true（默认为朴素按钮）（有几个按钮写几个）
      if (index != null) {
        // 如果传入的值不是null 那么代表是其他按钮触发的
        this.isPlain[index - 1] = this.isPlainDefault; // 将点击的按钮设置为非朴素按钮（plain的值为false）
        this.isPlainDefault = !this.isPlainDefault; // 将默认的按钮赋值为true（变成朴素按钮）
      }
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
    //注意！！！这里
    center_img.style.left = newLeft + "px";
    left_number = newLeft;
    console.log(newLeft);
  }
  // 向左按钮
  // btn_page[0].onclick = function () {
  //   if (left_number == 0) {
  //     btn_page[0].style.disabled = true;
  //   } else {
  //     animate(433);
  //   }
  // };
  // 向右按钮
  // btn_page[1].onclick = function () {
  //   if (left_number <= -1299) {
  //     btn_page[1].style.disabled = true;
  //   } else {
  //     animate(-433);
  //   }
  // };
};

/*图片点击出现边框样式（一图出现边框，其他图取消边框*/
$(function () {
  var imgs = $(".images");
  for (var i = 0; i < imgs.length; i++) {
    $(imgs[i]).on("click", function () {
      imgs.each(function () {
        $(this).removeClass("border");
      });
      // closeborder();
      $(this).addClass("border");
    });
  }
});
</script>

<style  lang="scss" scoped>
.head {
  background-color: #1c3f65;
}

.aside1 {
  position: absolute;
  top: -27.777777777777775vh;
  left:15.625vw;
  height:60.18518518518518vh;
  width:20.833333333333336vw;
  overflow: hidden;
}

.aside2 {
  height: 64.81481481481481vh;
  width: 52.083333333333336vw;
  background-color: #102a4f;
  margin-top: 0.9259259259259258vh;
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
  //border-radius: 4px;
}

.cal_con .cal_month[data-v-12cb4c6e] {
  text-align: center;
  //height: calc(100% - 34px);
  height: calc(100% - 3.148148148148148vh);
}

.video_box {
  position: absolute;
  top: -28.703703703703702vh;
  left: -36.458333333333336vw;
  width: 72.91666666666667vw;
  height: 1.8518518518518516vh;
  background-color: black;
}
.video_center {
  position: absolute;
  left: 0.5208333333333334vw;
  //background-color: black;
  width: 416.6666666666667vw;
  height: 46.29629629629629vh;
  justify-content: space-between;
}
.video-title {
  font-size: calc(0.4rem + 1.5vmin);
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
  height:27.777777777777775vh;
  width: 27.777777777777775vh;
}

.click_page {
  width: 52.083333333333336vw;
  height:46.29629629629629vh;
  position: absolute;
  left: -35.9375vw;
  top:25.925925925925924vh;
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
  margin-left: 0vw;
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
//圆
.login-cycle {
  width: 0.5208333333333334vw;
  height: 0.9259259259259258vh;
  display: inline-block;
  background-color: #33ffff;
  border-radius: 50%;
}
/* 竖线 */
.line {
  z-index: 99999;
  position: relative;
  top: 4.62962962962963vh;
  left: -0.5208333333333334vw;
  float: left;
  width: 0.1em;
  height: 12em;
  margin-right: 1em;
  margin-left: 3.5em;
  background: #33ffff;
}

::v-deep .el-timeline-item__node {
  //margin: 50px;
  margin: 4.62962962962963vh 2.604166666666667vw 4.62962962962963vh 2.604166666666667vw;
}
.J_block {
  z-index: 9999;
  position: relative;
  top: 11.11111111111111vh;
}

.mo1 {
  position: relative;
  background-color: #203f5e;
  height: 2.7777777777777777vh;
  width: 23.4375vw;
  top: 4.814814814814815vh;
  left: -2.34375vw;
}

.line1 {
  position: relative;
  float: left;
  width:  0.10416666666666667vw;
  height: 2.314814814814815vh;
  background: #ffffff;
  margin-top: 0.277777777777777vh;
}

.mo2 {
  position: relative;
  height: 27.777777777777775vh;
  width: 15.625vw;
  top: 13.888888888888888vh;
  left: 2.0833333333333335vw;
}

.mo3 {
  position: relative;
  height:23.148148148148145vh;
  width: 20.833333333333336vw;
  top:18.51851851851852vh;
  left: -2.34375vw;
}

.mo4 {
  position: relative;
  height: 23.148148148148145vh;
  width: 20.833333333333336vw;
  top: 18.51851851851852vh;
  left: 5.208333333333334vw;
}

.mo5 {
  position: relative;
  height: 23.148148148148145vh;
  width: 20.833333333333336vw;
  top: 4.62962962962963vh;
  left: 1.0416666666666667vw;
}

.mo6 {
  position: relative;
  height: 23.148148148148145vh;
  width: 20.833333333333336vw;
  top: -9.25925925925926vh;
  left: 5.208333333333334vw;
}

.mo7 {
  position: relative;
  height: 23.148148148148145vh;
  width: 20.833333333333336vw;
  top: -20.37037037037037vh;
  left: -3.6458333333333335vw;
}
.mo8 {
  position: relative;
  height: 23.148148148148145vh;
  width: 20.833333333333336vw;
  top: -38.425925925925924vh;
  left: -3.6458333333333335vw;
}

.first {
  top: -0.9259259259259258vh;
  font-size: calc(0.4rem + 1.5vmin);
  position: relative;
  color: #d9effe;
  background: transparent;
  border: none;
  margin-left:41.66666666666667vw;
  cursor: pointer;
}

.second {
  top: -0.9259259259259258vh;
  font-size: calc(0.4rem + 1.5vmin);
  position: relative;
  color: #d9effe;
  background: transparent;
  border: none;
}
.third {
  top: -0.9259259259259258vh;
  font-size: calc(0.4rem + 1.5vmin);
  position: relative;
  color: #d9effe;
  background: transparent;
  border: none;
}
.first:focus {
  color: #27c7ca;
}
.second:focus {
  color: #27c7ca;
}
.third:focus {
  color: #27c7ca;
}
//css伪类
#underline:after {
  content: "";
  width: 0vw;
  height:0.27777777777777773vh;
  background-color: #27c7ca;
  position: absolute;
  top: 100%;
  left: 50%;
  right: 50%;
  margin-top: 0.9259259259259258vh;
  // transition: all .8s;
}

#underline:focus:after {
  left: 10%;
  right: 25%;
  width: 80%;
}
// .first:hover{
//   text-decoration:underline;
// }
.first1 {
  position: absolute;
  top: -27.777777777777775vh;
  left: -28.125vw;
  width: 67.70833333333334vw;
  height:64.81481481481481vh;
}




.third3 {
  position: absolute;
  margin-top: 72.68518518518518vh;
  margin-right:10.416666666666668vw;
  width: 67.70833333333334vw;
  height:64.81481481481481vh;
  // overflow: hidden;
}
.span2 {
  color: #438fc5;
  font-size: calc(0.5rem + 1vmin);
  line-height:5.092592592592593vh;
  margin-left:4.6875vw;
  display: block;
}
.span3 {
  color: #dfcd63;
  font-size:calc(0.4rem + 1.5vmin);
  font-weight: bold;
  margin-left: 4.947916666666667vw;
}
.span4 {
  color: #45e77e;
  font-size: calc(0.4rem + 1.5vmin);
  font-weight: bold;
  margin-left: 5.104166666666667vw;
}
.span5 {
  color: #c44c59;
  font-size:calc(0.4rem + 1.5vmin);
  font-weight: bold;
  margin-left: 5.208333333333334vw;
}
.span6 {
  font-size: calc(0.5rem + 1.5vmin);
  color: #dce7e7;
  /*解决父子元素margin叠加问题*/
  display: inline-block;
  margin: 2.7777777777777777vh 0vw 2.7777777777777777vh 0.5208333333333334vw;
}
.span7 {
  /*  !*解决父子元素margin叠加问题*!
  display:inline-block;*/
  margin-left: 2.0833333333333335vw;
  /*  margin-bottom: 30px;*/
  line-height: 3.7037037037037033vh;
  color: #dce7e7;
  font-size: calc(0.5rem + 1.5vmin);
}
.span8 {
  font-size: calc(0.4rem + 1vmin);
  color: #dce7e7;
  margin: 0vh 7.291666666666667vw 0vh 1.0416666666666667vw;
}
.span9 {
  /*  height: 10px;
  width: 20px;*/
  font-size: calc(0.4rem + 1vmin);
  color: #dce7e7;
  background-color: #2dc86a;
  //  border: 4px solid #2dc86a;

  border: 0.37037037037037035vh solid #2dc86a;
}
.el-icon-setting {
  margin-left: 0.3125vw;
  color: #3192a4;
}
/*main设置*/
//滚轮设置

.outer-container {
  width: 43.22916666666667vw;
  height: 48.148148148148145vh;
  display: inline;
  overflow: hidden;
  position: relative;
  float: left;
}

.inner-container {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: -1.3020833333333335vw;
  overflow-y: scroll;
}
/*精确测量宽高*/
ul {
  list-style: none;
}
ul.imgList {
  /*  margin: 0 auto;*/
  /*精确*/
  width: 41.66666666666667vw;
  overflow: hidden;
}
ul.imgList li {
  float: left;
  padding: 0.37037037037037035vh 0.4166666666666667vw;
  /*精确*/
  width: 19.270833333333336vw;
}
ul .imgList li div {
  color: black;
}
/* ul .imgList li div .image{
  margin-right: 10px;
} */
ul .imgList li span {
  font-size: calc(0.3rem + 1vmin);
  display: block;
  width: 100%;
  height: 3.7037037037037033vh;
  line-height: 3.7037037037037033vh;
}
.border {

  //border: 1px solid #d7ce91;
  border: 0.052083333333333336vw solid #d7ce91;
}
.aside {
  width: 23.4375vw;
  height: 49.07407407407407vh;
  background-color: rgb(12, 37, 67, 0.7);
}
::v-deep .el-descriptions__body {
  background: transparent;
  margin-left: 3.125vw;
  margin-top: 2.7777777777777777vh;
  /*  color:#dce7e7;*/
}
::v-deep .my-label {
  font-size: calc(0.4rem + 1vmin);
  margin-bottom: 0.4629629629629629vh;
  color: #3fd9d5;
}
::v-deep .my-label1 {
  font-size: calc(0.4rem + 1vmin);
  margin-bottom: 2.7777777777777777vh;
  color: #3fd9d5;
}
::v-deep .my-content {
  font-size: calc(0.4rem + 1vmin);
  margin-bottom:  0.4629629629629629vh;
  color: #dce7e7;
}
</style>
