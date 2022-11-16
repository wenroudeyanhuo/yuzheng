<template>
  <div style="position: absolute">
    <div style="position:absolute;width:1380px;height:40px;top:-350px;background: #003377 ">
      <span style="color: white;position: absolute;left: 100px;top:10px;font-size: 18px">   点位详情</span>
      <el-image style="position:absolute;left:-10px;top:-10px;height: 60px;width:60px;background: transparent" :src="require('@/assets/icon_title_dianwei@2x.png')" fit="fill"></el-image>
      <div style="position: absolute;left: 150px">
      <el-button class="first" :plain="isPlainDefault"  @click="isActive = 0;btnGroup(null)">实时监控</el-button>
      <el-button class="second" :plain="isPlain[0]"  @click="isActive = 1;btnGroup(1)">录像回放</el-button>
      <el-button class="third" :plain="isPlain[1]"  @click="isActive = 2;btnGroup(2)">预警事件</el-button>
<!--      <el-icon class="el-icon-setting"></el-icon>-->
      </div>
    </div>
    <div class="first1" v-if="isActive == 0">
      <!-- 实时监控 -->
      <el-col :span="15">
        <div style="position:relative;top:10px;left:-110px;">
          <el-image style="vertical-align:middle;" :src="require('@/assets/icon_jiankong.png')"></el-image>
          <span><font color="#f0f8ff">宁波松岙大阜1</font></span>
        </div>

        <div>
          <video style="position:relative;top:25px;left:-110px;width: 850px;">
            <source :src="require('@/assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4')">
          </video>
        </div>
      </el-col>

      <el-col :span="1">
        <div class="mo1">
          <span style="line-height: 30px;margin-left: 20px"><font color="#f0f8ff">云台控制</font></span>
        </div>

        <div class="mo2">
          <el-image style="width: 300px;height: 300px;vertical-align:middle;" :src="require('@/assets/bg_bottom(1).png')"></el-image>
        </div>

        <el-row>
          <el-col :span="5">
            <div class="mo3">
              <el-image style="width: 110px;height: 45px;vertical-align: middle" :src="require('@/assets/ssjk1.png')"></el-image>
              <el-image style="width: 110px;height: 45px;vertical-align: middle;margin-left: 3px" :src="require('@/assets/ssjk1.png')"></el-image>
              <!--<el-image style="width: 160px;height: 82px;vertical-align: middle;" :src="require('@/assets/ssjk1.png')"></el-image>-->
              <div>
                <el-image style="width: 110px;height: 45px;vertical-align: middle;margin-top: 10px" :src="require('@/assets/ssjk1.png')"></el-image>
                <el-image style="width: 110px;height: 45px;vertical-align: middle;margin-top: 10px;margin-left: 3px" :src="require('@/assets/ssjk1.png')"></el-image>
              </div>
            </div>
          </el-col>
          <el-col :span="19">
            <div>
              <el-image style="position:relative;left:200px;top:200px;width: 200px;height: 100px;vertical-align: middle;" :src="require('@/assets/ssjk1.png')"></el-image>
            </div>
          </el-col>
        </el-row>
      </el-col>

      <el-col :span="7">
        <div class="mo4">
          <el-image style="width: 70px;height: 70px;vertical-align: middle;" :src="require('@/assets/icon_up.png')"></el-image>
        </div>

        <div class="mo5">
          <el-image style="width: 70px;height: 70px;vertical-align: middle;" :src="require('@/assets/icon_left.png')"></el-image>
          <el-image style="width: 70px;height: 70px;vertical-align: middle;margin-left: 100px" :src="require('@/assets/icon_right.png')"></el-image>
        </div>

        <div class="mo6">
          <el-image style="width: 70px;height: 70px;vertical-align: middle;" :src="require('@/assets/icon_down.png')"></el-image>
        </div>

        <el-row>
          <el-col>
            <div class="mo7">
              <el-button type="text" style="color: #FFFFFF">变倍 +</el-button>
              <el-button type="text" style="color: #FFFFFF;margin-left: 60px">变倍 -</el-button>
            </div>

            <div class="mo8">
              <el-button type="text" style="color: #FFFFFF">变焦 +</el-button>
              <el-button type="text" style="color: #FFFFFF;margin-left: 60px">变焦 -</el-button>
            </div>
          </el-col>
          <el-col>
            <div>
              <el-image style="position:relative;top:-695px;left: 200px;width: 50px;height: 50px;vertical-align: middle" :src="require('@/assets/ssjk.png')"></el-image>
              <el-button type="text" style="position:relative;top:-695px;left: 200px;color: #FFFFFF;">开启激光</el-button>

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
                      style="height: 600px; width: 1000px"
                    ></video>
                  </template>
                </div>
              </div>
            </div>

          </div>

          <div class="click_page">
            <div class="center_img" style="left: 0px">
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
          <div style="position:relative;left: 3px">
            <Calendar
              :date="new Date()"
              @enter="mouseenter"
              @leave="mouseleave"
              @changeMonth="changeMonth"
              style="width: 400px; height: 400px"
            >
              <!-- 可使用动态插槽名设置，v-slot:[slotName] -->
              <template v-slot:2022-5-21>
                <div style="position: absolute; bottom: -10px">今天</div>
              </template>
            </Calendar>
          </div>
        </div>
      </div>

    </div>


    <div class="third3" v-else-if="isActive == 2">
      <div style="position: absolute;top:-370px;left: 10px">
      <div style="margin:25px 0 25px 47px;">
        <div :style="background1" style="height: 95px;width: 210px;display: inline-block;">
          <span class="span2">累计预警</span>
          <!-- 后台数据交互     -->
          <span class="span3">12</span>
        </div>
        <div :style="background1" style="height: 95px;width: 210px;display: inline-block;margin:0px 15px 0px 15px;">
          <span class="span2">已处理预警</span>
          <!-- 后台数据交互     -->
          <span class="span4">4</span>
        </div>
        <div :style="background1" style="height: 95px;width: 210px;display: inline-block;">
          <span class="span2">未处理预警</span>
          <!-- 后台数据交互     -->
          <span class="span5">8</span>
        </div>

      </div>
       <!-- main设计 -->
     <div  class="outer-container" >
      <div class="inner-container">
        <ul class="imgList">
          <li>
            <div>
              <el-image class="images"
                        style="  display: block ;width: 360px;height:180px;margin-bottom: 8px;"
                        :src="require('@/assets/warning.jpg')"
              ></el-image>
              <span class="span8">疑似船只
                <span style="font-size: 15px">(类型)</span>
              </span>
              <span class="span9">已处理</span>
            </div>
          </li>
          <li>
            <div>
              <el-image   class="images"
                          style="  display: block ;width: 360px;height:180px;margin-bottom: 8px;"
                          :src="require('@/assets/warning.jpg')"
              ></el-image>
              <span class="span8">疑似船只
                <span style="font-size: 15px">(类型)</span>
              </span>
              <span class="span9">已处理</span>
            </div>
          </li>
           <li>
            <div>
              <el-image  class="images"
                         style="  display: block ;width: 360px;height:180px;margin-bottom: 8px;"
                        :src="require('@/assets/warning.jpg')"
              ></el-image>
              <span class="span8">疑似船只
                <span style="font-size: 15px">(类型)</span>
              </span>
              <span class="span9">已处理</span>
            </div>
          </li>
          <li>
            <div>
              <el-image  class="images"
                         style="  display: block ;width: 360px;height:180px;margin-bottom: 8px;"
                        :src="require('@/assets/warning.jpg')"
              ></el-image>
              <span class="span8">疑似船只
                <span style="font-size: 15px">(类型)</span>
              </span>
              <span class="span9">已处理</span>
            </div>
          </li> -->

          <li>
            <div>
              <el-image  class="images"
                         style="  display: block ;width: 360px;height:180px;margin-bottom: 8px;"
                        :src="require('@/assets/warning.jpg')"
              ></el-image>
              <span class="span8">疑似船只
                <span style="font-size: 15px">(类型)</span>
              </span>
              <span class="span9">已处理</span>
            </div>
          </li>
          <li>
            <div>
              <el-image  class="images"
                         style="  display: block ;width: 360px;height:180px;margin-bottom: 8px;"
                        :src="require('@/assets/warning.jpg')"
              ></el-image>
              <span class="span8">疑似船只
                <span style="font-size: 15px">(类型)</span>
              </span>
              <span class="span9">已处理</span>
            </div>
          </li>
          <li>
            <div>
              <el-image  class="images"
                         style="  display: block ;width: 360px;height:180px;margin-bottom: 8px;"
                        :src="require('@/assets/warning.jpg')"
              ></el-image>              <span class="span8">疑似船只
                <span style="font-size: 15px">(类型)</span>
              </span>
              <span class="span9">已处理</span>
            </div>
          </li>
          <li>
            <div>
              <el-image  class="images"
                         style="  display: block ;width: 360px;height:180px;margin-bottom: 8px;"
                        :src="require('@/assets/warning.jpg')"
              ></el-image>              <span class="span8">疑似船只
                <span style="font-size: 15px">(类型)</span>
              </span>
              <span class="span9">已处理</span>
            </div>
          </li>
        </ul>
        </div>
      </div>
      <div class="aside" style="position:absolute;top:150px;display:inline;float: right;">
        <div style="margin-left: 20px;">
          <el-image style="vertical-align:middle;" :src="require('@/assets/icon_jiankong.png')"></el-image>
          <span class="span6">宁波松岙大阜1</span>
        </div>

        <div :style="background2" style="height:40px;width: 450px;margin-left: 20px">
          <!--         vertical-align:middle;图片和文字居中 -->
          <el-image style="width: 30px; height: 27px;margin-left:8px;vertical-align:middle;" :src="require('@/assets/6.png')" fit="fill" ></el-image>
          <span class="span7">处理详情</span>
        </div>
<!--       封装 手写时间条-->
        <div style="position: relative;top:-7px">
        <div class="line" />
<!--        圆形图标-->
        <span style="position:relative;top:40px;left: -32px"><span class="login-cycle"></span></span>
        <span style="position:relative;top:230px;left: -47px"><span class="login-cycle"></span></span>
        </div>




        <!-- 描述列表       -->
          <!-- 这里的所有数据，后台交互改变数据       -->
          <!--      direction="vertical" 是指文字的排列方式  -->
        <div style="position: relative;top:-160px">
          <el-descriptions  :column="1" :span="2">
            <el-descriptions-item label="预警类型"
                                  label-class-name="my-label"
                                  content-class-name="my-content"
            >疑似船只</el-descriptions-item>
            <el-descriptions-item label="预警方位"
                                  label-class-name="my-label"
                                  content-class-name="my-content"
            > A5</el-descriptions-item>
            <el-descriptions-item label="预警时间"
                                  label-class-name="my-label"
                                  content-class-name="my-content"
            >2022-08-06 13:40:02</el-descriptions-item>
            <el-descriptions-item label="预警状态"
                                  label-class-name="my-label1"
            ><el-tag size="small">待处理</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="推送时间"
                                  label-class-name="my-label"
                                  content-class-name="my-content"
            >2022-08-06 13:40:02</el-descriptions-item>
            <el-descriptions-item label="负责人"
                                  label-class-name="my-label"
                                  content-class-name="my-content"
            >田七</el-descriptions-item>
            <el-descriptions-item label="联系方式"
                                  label-class-name="my-label"
                                  content-class-name="my-content"
            >12345678909</el-descriptions-item>
            <el-descriptions-item label="推送内容"
                                  label-class-name="my-label"
                                  content-class-name="my-content"
            >有疑似报警</el-descriptions-item>
            <el-descriptions-item label="反馈信息"
                                  label-class-name="my-label"
                                  content-class-name="my-content"
            >-</el-descriptions-item>
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
  name: 'Show',
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

      activities: [{
        content: '_',
        color: '#33FFFF'
      }, {
        content: '_',
        color: '#33FFFF'
      }],
      isActive: -1,
      background1: {
        // 背景图片地址
        backgroundImage: 'url(' + require('@/assets/cccc.png') + ')',
        // 背景图片是否重复
        // 背景图片大小
        backgroundSize: 'cover',
        // 背景颜色
        // 背景图片位置
       // backgroundPosition: 'center top'
      },
      background2: {
        // 背景图片地址
        backgroundImage: 'url(' + require('@/assets/bg_title@2x.png') + ')',
        // 背景图片是否重复
        backgroundRepeat:'no-repeat',
        // 背景图片大小
        backgroundSize: '60%',
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
    this.btnGroup()
    this.querylist();
  },
  methods:{
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
    btnGroup (index) {
      this.isPlainDefault = false // 每次点击按钮调用方法的时候给默认按钮重新赋予默认值
      this.isPlain = [true, true, true] // 设置按钮组默认为true（默认为朴素按钮）（有几个按钮写几个）
      if (index != null) { // 如果传入的值不是null 那么代表是其他按钮触发的
        this.isPlain[index - 1] = this.isPlainDefault // 将点击的按钮设置为非朴素按钮（plain的值为false）
        this.isPlainDefault = !this.isPlainDefault // 将默认的按钮赋值为true（变成朴素按钮）
      }
    },
  }
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
  $(imgs[i]).on('click', function () {
    imgs.each(function () {
      $(this).removeClass('border');
    });
    // closeborder();
    $(this).addClass('border');
  })
}

})

</script>

<style  lang="scss" scoped>
.head {
  background-color: #1c3f65;
}

.aside1 {
  position: absolute;
  top:-300px;
  left: 300px;
  height: 650px;
  width: 400px;
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
  position: absolute;
  top:-310px;
  left: -700px;
  width: 1400px;
  height: 20px;
  background-color:black;

}
.video_center {
  position: absolute;
  left: 10px;
  //background-color: black;
  width: 8000px;
  height: 500px;
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
  left: -690px;
  top:280px;
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
//圆
.login-cycle{
  width: 10px;
  height: 10px;
  display: inline-block;
  background-color: #33FFFF;
  border-radius: 50%;
}
/* 竖线 */
.line{
  z-index: 99999;
  position: relative;
  top:50px;
  left: -10px;
  float: left;
  width: 0.1em;
  height: 12em;
  margin-right: 1em;
  margin-left: 3.5em;
  background:#33FFFF;
}

::v-deep .el-timeline-item__node{
  margin: 50px;
}
.J_block{
  z-index: 9999;
  position: relative;
  top:120px;

}

.mo1{
  position:relative;
  background-color: #203f5e;
  height: 30px;
  width: 450px;
  top:52px;
  left:-45px;
}

.mo2{
  position:relative;
  height: 300px;
  width: 300px;
  top:150px;
  left:40px;
}

.mo3{
  position:relative;
  height: 250px;
  width: 400px;
  top:200px;
  left:-45px;
}


.mo4{
  position:relative;
  height: 250px;
  width: 400px;
  top:200px;
  left:100px;
}

.mo5{
  position:relative;
  height: 250px;
  width: 400px;
  top:50px;
  left:20px;
}

.mo6{
  position:relative;
  height: 250px;
  width: 400px;
  top:-100px;
  left:100px;
}

.mo7{
  position:relative;
  height: 250px;
  width: 400px;
  top:-220px;
  left:-70px;
}
.mo8{
  position:relative;
  height: 250px;
  width: 400px;
  top:-415px;
  left:-70px;
}

.first{
  top:-10px;
  position: relative;
  color:#d9effe;
  background: transparent;
  border: none;
  margin-left: 800px;
  cursor:pointer;

}

.second{
  top:-10px;
  position: relative;
  color:#d9effe;
  background: transparent;
  border: none;
}
.third{
  top:-10px;
  position: relative;
  color:#d9effe;
  background: transparent;
  border: none;
}
.first:focus{
  color: #27c7ca;
}
.second:focus{
  color: #27c7ca;
}
.third:focus{
  color: #27c7ca;
}
//css伪类
#underline:after{
  content: "";
  width: 0px;
  height: 3px;
  background-color: #27c7ca;
  position: absolute;
  top:100%;
  left: 50%;
  right: 50%;
  margin-top: 10px;
  // transition: all .8s;
}

#underline:focus:after{
  left: 10%;
  right: 25%;
  width: 80%;
}
// .first:hover{
//   text-decoration:underline;
// }
.first1 {
  position: absolute;
  top: -300px;
  left: -540px;
  width: 1300px;
  height: 700px;
}

.third3 {
  position: absolute;
  margin-top: 785px;
  margin-right: 200px;
  width: 1300px;
  height: 700px;
  // overflow: hidden;
}
.span2{
  color:#438fc5;
  font-size: 16px;
  line-height: 55px;
  margin-left:90px;
  display: block;

}
.span3{
  color:#dfcd63;
  font-size: 20px;
  font-weight:bold;
  margin-left: 95px;
}
.span4{
  color:#45e77e ;
  font-size: 20px;
  font-weight:bold;
  margin-left: 98px;
}
.span5{
  color:#c44c59;
  font-size: 20px;
  font-weight:bold;
  margin-left: 100px;
}
.span6{
  color:#dce7e7;
  /*解决父子元素margin叠加问题*/
  display:inline-block;
  margin: 30px 0px 30px 10px;
}
.span7{
/*  !*解决父子元素margin叠加问题*!
  display:inline-block;*/
  margin-left:40px;
/*  margin-bottom: 30px;*/
  line-height: 40px;
  color:#dce7e7;
  font-size: 18px;
}
.span8{
  color:#dce7e7;
  margin:0 140px 0 20px;
}
.span9{
/*  height: 10px;
  width: 20px;*/
  color:#dce7e7;
  background-color:#2dc86a;
  border: 4px solid #2dc86a;
}
.el-icon-setting{
  margin-left: 6px;
  color: #3192a4;
}
/*main设置*/
//滚轮设置

.outer-container {
  width: 830px;
  height: 520px;
  display:inline;
  overflow: hidden;
  position: relative;
  float: left;
}

.inner-container {
  position: absolute;
  top:0;
  left: 0;
  bottom: 0;
  right: -25px;
  overflow-y: scroll;
}
/*精确测量宽高*/
ul{
  list-style: none;
}
ul.imgList{
/*  margin: 0 auto;*/
  /*精确*/
  width: 800px;
  overflow: hidden;
}
ul.imgList li{
  float: left;
  padding: 4px 8px;
  /*精确*/
  width: 370px;
}
ul .imgList li div{
  color: black;
}
/* ul .imgList li div .image{
  margin-right: 10px;
} */
ul .imgList li span{
  font-size: 6px;
  display: block;
  width: 100%;
  height: 40px;
  line-height: 40px;
}
.border{
  border:1px solid #d7ce91;
}
.aside{
  width: 450px;
  height: 530px;
  background-color: rgb(12, 37, 67,0.7);
}
::v-deep .el-descriptions__body {
  background: transparent;
  margin-left: 60px;
  margin-top: 30px;
/*  color:#dce7e7;*/
}
::v-deep .my-label{
  margin-bottom: 5px;
  color: #3fd9d5;

}
::v-deep .my-label1{
  margin-bottom: 30px;
  color: #3fd9d5;
}
::v-deep .my-content{
  margin-bottom: 5px;
  color:#dce7e7;
}
</style>
