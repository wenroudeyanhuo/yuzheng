<template>
  <div style="background: transparent; position: relative; top: -4.6vh">
    <button
      class="first"
      style="position: relative; top: 0.1vh; right: -2.1vw"
      @click="isActive = 0"
    >
      事情详情
    </button>
    <button
      class="second"
      style="position: relative; top: 0.1vh; right: -6.25vw"
      @click="isActive = 1"
    >
      实时监控
    </button>

    <div class="first1" v-if="isActive == 0">
      <span style="position: relative; left: 2.3vw; top: -2.1vh; color: white"
        >事情详情</span
      >

      <!--打算调用一个整体来写-->
      <!--      视频播放器-->
      <table>
        <tr
          v-for="(item, index) in dataShow"
          :key="index"
          class="{ 'alt': index%2==1 }"
        >
          <!--        视频播放器-->
          <!--        但是每次还是要刷新一下才行-->
          <div class="video_text">
            <video id="myVideo" class="video-js">
              <source :src="item.videoUrl" type="video/mp4" />
            </video>
          </div>
          <!--        <td>{{ item.school }}</td>-->
        </tr>
      </table>

      <div class="page1">
        <button class="button_J1">
          <a href="#" v-on:click="prePage"> </a>
        </button>

        <div
          style="
            position: relative;
            left: -9.9vw;
            top: -14.9vh;
            width: 39vw;
            height: 18.5vh;
          "
        >
          <el-scrollbar>
            <div class="scrollbar-flex-content">
              <p
                v-for="(item, index) in img_scro"
                :key="index"
                class="scrollbar-demo-item"
              >
                <el-image
                  style="width: 15.6vw; height: 27.8vh"
                  :src="item.img"
                  alt=""
                ></el-image>
              </p>
            </div>
          </el-scrollbar>
        </div>
        <button class="button_J">
          <a href="#" v-on:click="nextPage">></a>
        </button>
      </div>

      <!--      下面图片列表，横向展示-->
      <!--      <template>-->
      <!--        <div style="width: 770px;height: 200px">-->
      <!--      <el-scrollbar>-->
      <!--        <div class="scrollbar-flex-content">-->
      <!--          <p v-for="(item,index) in img_scro" :key="index" class="scrollbar-demo-item">-->
      <!--            <el-image style="width: 300px;height: 300px" :src="item.img" alt=""></el-image>-->
      <!--          </p>-->
      <!--        </div>-->
      <!--      </el-scrollbar>-->
      <!--        </div>-->
      <!--      </template>-->
      <div style="position: absolute; right: 10.4vw; top: 3.7vh">
        <div class="aside" style="display: inline; float: right">
          <div style="margin-left: 1vw; margin-top: 1.9vh">
            <el-image
              style="vertical-align: middle"
              :src="require('@/assets/icon_jiankong.png')"
            ></el-image>
            <span class="span6">nb市</span>
          </div>

          <div
            :style="background2"
            style="height: 3.7vh; width: 23.4vw; margin-left: 1vw"
          >
            <!--         vertical-align:middle;图片和文字居中 -->
            <el-image
              style="
                width: 1.6vw;
                height: 2.5vh;
                margin-left: 0.4vw;
                vertical-align: middle;
              "
              :src="require('@/assets/6.png')"
              fit="fill"
            ></el-image>
            <span class="span7">处理详情</span>
          </div>
          <!-- 描述列表       -->
          <!-- 这里的所有数据，后台交互改变数据       -->
          <!--      direction="vertical" 是指文字的排列方式  -->
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
            <el-descriptions-item label="预警状态" label-class-name="my-label1"
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

        <el-button
          style="
            color: deepskyblue;
            background-color: transparent;
            position: relative;
            right: -15.6vw;
            bottom: -51vh;
          "
          >处理</el-button
        >
      </div>
    </div>

    <!--    实时监控-->
    <div class="second2" v-else-if="isActive == 1">
      <el-col :span="15">
        <span style="position: relative; color: white; top: -1.9vh; left: 2.1vw"
          >实时监控</span
        >

        <div>
          <video
            style="
              position: relative;
              top: 2.3vh;
              left: 0.3vw;
              width: 36.5vw;
              height: 46.3vh;
            "
          >
            <source
              style="height: 64.8vh; width: 36.5vw"
              :src="
                require('@/assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4')
              "
            />
          </video>
        </div>
      </el-col>

      <el-col :span="1">
        <div class="mo1">
          <span style="line-height: 2.8vh; margin-left: 0.5vw"
            ><font color="#f0f8ff">云台控制</font></span
          >
        </div>
        <div style="position: relative; top: 6.5vh; left: -7.4vw; width: 8.9vw">
          <el-image
            style="vertical-align: middle"
            :src="require('@/assets/icon_jiankong.png')"
          ></el-image>
          <span style="color: white">宁波松岙大阜1</span>
        </div>

        <div class="mo2">
          <el-image
            style="width: 10.4vw; height: 18.5vh; vertical-align: middle"
            :src="require('@/assets/bg_bottom(1).png')"
          ></el-image>
        </div>

        <el-row>
          <el-col :span="5">
            <div class="mo3">
              <el-image
                style="width: 5.2vw; height: 3.7vh; vertical-align: middle"
                :src="require('@/assets/ssjk1.png')"
              ></el-image>
              <el-image
                style="
                  width: 5.2vw;
                  height: 3.7vh;
                  vertical-align: middle;
                  margin-left: 0.2vw;
                "
                :src="require('@/assets/ssjk1.png')"
              ></el-image>
              <!--<el-image style="width: 160px;height: 82px;vertical-align: middle;" :src="require('@/assets/ssjk1.png')"></el-image>-->
              <div>
                <el-image
                  style="
                    width: 5.2vw;
                    height: 3.7vh;
                    vertical-align: middle;
                    margin-top: 0.9vh;
                  "
                  :src="require('@/assets/ssjk1.png')"
                ></el-image>
                <el-image
                  style="
                    width: 5.2vw;
                    height: 3.7vh;
                    vertical-align: middle;
                    margin-top: 0.9vh;
                    margin-left: 0.2vw;
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
                  left: 2.6vw;
                  top: 17.6vh;
                  width: 8.9vw;
                  height: 8.3vh;
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
            style="width: 3.1vw; height: 5.6vh; vertical-align: middle"
            :src="require('@/assets/icon_up.png')"
          ></el-image>
        </div>

        <div class="mo5">
          <el-image
            style="width: 3.1vw; height: 5.6vh; vertical-align: middle"
            :src="require('@/assets/icon_left.png')"
          ></el-image>
          <el-image
            style="
              width: 3.1vw;
              height: 5.6vh;
              vertical-align: middle;
              margin-left: 5.2vw;
            "
            :src="require('@/assets/icon_right.png')"
          ></el-image>
        </div>

        <div class="mo6">
          <el-image
            style="width: 3.1vw; height: 5.6vh; vertical-align: middle"
            :src="require('@/assets/icon_down.png')"
          ></el-image>
        </div>

        <el-row>
          <el-col>
            <div class="mo7">
              <el-button type="text" style="color: #ffffff">变倍 +</el-button>
              <el-button type="text" style="color: #ffffff; margin-left: 3.1vw"
                >变倍 -</el-button
              >
            </div>

            <div class="mo8">
              <el-button type="text" style="color: #ffffff">变焦 +</el-button>
              <el-button type="text" style="color: #ffffff; margin-left: 3.1vw"
                >变焦 -</el-button
              >
            </div>
          </el-col>
          <el-col>
            <div style="position: relative; top: 4.6vh; left: -7.8vw">
              <el-image
                style="
                  position: relative;
                  top: -64.4vh;
                  left: 10.4vw;
                  width: 2.6vw;
                  height: 4.6vh;
                  vertical-align: middle;
                "
                :src="require('@/assets/ssjk.png')"
              ></el-image>
              <el-button
                type="text"
                style="
                  position: relative;
                  top: -64.4vh;
                  left: 10.4vw;
                  color: #ffffff;
                "
                >开启激光</el-button
              >

              <!--    <el-image style="width: 50px;height: 50px;vertical-align: middle" :src="require('@/assets/ssjk.png')"></el-image>
                  <el-button type="text" style="color: #FFFFFF;">开启激光</el-button>-->
            </div>
          </el-col>
        </el-row>
      </el-col>
    </div>
  </div>
</template>


<script>
export default {
  name: "Show",
  data() {
    return {
      pageSize: 1,
      currentPage: 0,
      listArray: [
        {
          school: "河南农业大学",
          img: require("@/assets/yujing.jpg"),
          videoUrl: require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4"),
        },
        {
          school: "郑州大学",
          img: require("@/assets/yujing.jpg"),
          videoUrl: require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4"),
        },
        {
          school: "河南工业大学",
          img: require("@/assets/yujing.jpg"),
          videoUrl: require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4"),
        },
        {
          school: "河南农业大学",
          img: require("@/assets/yujing.jpg"),
          videoUrl: require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4"),
        },
        {
          school: "河南理工大学",
          img: require("@/assets/yujing.jpg"),
          videoUrl: require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4"),
        },
        {
          school: "河南理工大学",
          img: require("@/assets/yujing.jpg"),
          videoUrl: require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4"),
        },
        {
          school: "河南理工大学",
          img: require("@/assets/yujing.jpg"),
          videoUrl: require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4"),
        },
        {
          school: "河南理工大学",
          img: require("@/assets/yujing.jpg"),
          videoUrl: require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4"),
        },
        {
          school: "河南理工大学",
          img: require("@/assets/yujing.jpg"),
          videoUrl: require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4"),
        },
        {
          school: "河南理工大学",
          img: require("@/assets/yujing.jpg"),
          videoUrl: require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4"),
        },
        {
          school: "河南理工大学",
          img: require("@/assets/yujing.jpg"),
          videoUrl: require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4"),
        },
        {
          school: "河南理工大学",
          img: require("@/assets/yujing.jpg"),
          videoUrl: require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4"),
        },
        {
          school: "河南理工大学",
          img: require("@/assets/yujing.jpg"),
          videoUrl: require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4"),
        },
        {
          school: "河南理工大学",
          img: require("@/assets/yujing.jpg"),
          videoUrl: require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4"),
        },
        {
          school: "河南理工大学",
          img: require("@/assets/yujing.jpg"),
          videoUrl: require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4"),
        },
        {
          school: "河南理工大学",
          img: require("@/assets/yujing.jpg"),
          videoUrl: require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4"),
        },
        {
          school: "河南理工大学",
          img: require("@/assets/yujing.jpg"),
          videoUrl: require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4"),
        },
        {
          school: "河南理工大学",
          img: require("@/assets/yujing.jpg"),
          videoUrl: require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4"),
        },
        {
          school: "河南理工大学",
          img: require("@/assets/yujing.jpg"),
          videoUrl: require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4"),
        },
      ],
      img_scro: [
        { img: require("@/assets/yujing.jpg") },
        { img: require("@/assets/yujing.jpg") },
        { img: require("@/assets/yujing.jpg") },
        { img: require("@/assets/yujing.jpg") },
        { img: require("@/assets/yujing.jpg") },
        { img: require("@/assets/yujing.jpg") },
        { img: require("@/assets/yujing.jpg") },
        { img: require("@/assets/yujing.jpg") },
      ],
      background2: {
        backgroundImage: "url(" + require("@/assets/bg_title@2x.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "60%",
      },
      isActive: -1,
    };
  },
  mounted() {
    this.initVideo(); //初始化视频播放器
  },
  methods: {
    initVideo() {
      //初始化视频方法
      let myPlayer = this.$video(myVideo, {
        //是否显示控制栏
        controls: true,
        //是否自动播放,muted:静音播放
        autoplay: false,
        //是否静音播放
        muted: false,
        //是否流体自适应容器宽高
        fluid: true,
        //设置视频播放器的显示宽度（以像素为单位）
        width: "41.7vw",
        //设置视频播放器的显示高度（以像素为单位）
        height: "37vh",
      });
    },
  },

  computed: {
    dataShow: function () {
      let start = this.currentPage * this.pageSize;
      let end = Math.min(
        (this.currentPage + 1) * this.pageSize,
        this.listArray.length
      );
      return this.listArray.slice(start, end);
    },
    pageNum: function () {
      return Math.ceil(this.listArray.length / this.pageSize) || 1;
    },
  },
};
</script>

<style  lang="scss" scoped>
.mo1 {
  position: relative;
  background-color: #203f5e;
  height: 2.8vh;
  width: 23.4vw;
  top: 2vh;
  left: -8.1vw;
}

.mo2 {
  position: relative;
  height: 23vh;
  width: 13vw;
  top: 12vh;
  left: -4.1vw;
}

.mo3 {
  position: relative;
  height: 23vh;
  width: 20.1vw;
  top: 17.6vh;
  left: -8.1vw;
}

.mo4 {
  position: relative;
  height: 13.9vh;
  width: 15.6vw;
  top: 15.7vh;
  left: -3.6vw;
}

.mo5 {
  position: relative;

  height: 23vh;
  width: 21.8vw;
  top: 10.2vh;
  left: -7.8vw;
}

.mo6 {
  position: relative;
  height: 23vh;
  width: 20.8vw;
  top: -4.7vh;
  left: -3.6vw;
}

.mo7 {
  position: relative;
  height: 23vh;
  width: 20.8vw;
  top: -13.9vh;
  left: -9.9vw;
}
.mo8 {
  position: relative;
  height: 23vh;
  width: 20.8vw;
  top: -31vh;
  left: -9.9vw;
}

.button_J1 {
  top: 3vh;
  left: -12vw;
  height: 17.8vh;
  position: relative;
}
.button_J {
  left: 29vw;
  position: relative;
  top: -33.3vh;
  height: 10vw;
}
.page1 {
  position: relative;
  bottom: 0.9vh;
  left: 11.5vw;
}
video:focus {
  outline: 0;
}
.video-js {
  width: 41vw;
  height: 37vh;
}
.video_text {
  z-index: 100;
  width: 41.7vw;
  height: 37vh;
}
.scrollbar-flex-content {
  display: flex;
  height: 17.6vh;
  width: 9.9vw;
}
.scrollbar-demo-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 9.9vw;
  height: 17.6vh;
  text-align: center;
  border-radius: 0.2vw;
  background: var(--el-color-danger-light-9);
  color: var(--el-color-danger);
}
::v-deep .el-descriptions__body {
  background: transparent;
  margin-left: 3.1vw;
  margin-top: 2.8vh;
  /*  color:#dce7e7;*/
}
::v-deep .my-label {
  margin-bottom: 0.3vw;
  color: #3fd9d5;
}
::v-deep .my-label1 {
  margin-bottom: 2.8vh;
  color: #3fd9d5;
}
::v-deep .my-content {
  margin-bottom: 0.5vh;
  color: #dce7e7;
}
.span6 {
  color: #dce7e7;
  /*解决父子元素margin叠加问题*/
  display: inline-block;
  margin: 2.8vh 0vw 2.8vh 0.5vw;
}
.span7 {
  /*  !*解决父子元素margin叠加问题*!
    display:inline-block;*/
  margin-left: 2.1vw;
  /*  margin-bottom: 30px;*/
  line-height: 3.7vh;
  color: #dce7e7;
  font-size: 1.7vh;
}
.aside {
  height: 74.1vh;
  width: 20.9vw;
  background-color: transparent;
}
.first {
  position: relative;
  color: #d9effe;
  background: transparent;
  border: none;
  margin-left: 41.7vw;
  top: -0.05vw;
}
.second {
  top: -0.05vw;
  position: relative;
  color: #d9effe;
  background: transparent;
  border: none;
}
</style>
