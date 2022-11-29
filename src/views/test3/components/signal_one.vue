<template>
  <div class="top_show">
    <div style="position: relative;top:2.8vh">


    <button class="first" @click="isActive=0">方式一</button>
    <button class="second" @click="isActive=1">方式二</button>
    <button class="third" @click="isActive=2">方式三</button>
    <button class="fourth" @click="isActive=3">方式四</button>
    </div>
    <div class="first1" v-if="isActive==0">
      <table>
        <tr v-for="(item, index) in dataShow" :class="{ 'alt': index%2==1 }">
          <!--        视频播放器-->
          <!--        但是每次还是要刷新一下才行-->
          <div class="video_text">
            <video
              id="myVideo"
              class="video-js"
            >
              <source
                :src=item.videoUrl
                type="video/mp4"
              >
            </video>
          </div>
          <!--        <td>{{ item.school }}</td>-->
        </tr>
      </table>



      <div class="page1">
        <button class="button_J">
          <a href="#"  v-on:click="prePage">
            <
            </a>
        </button >
        <button class="button_J" style="margin-left:0.2604166666666667vw;" v-for="(item, index) in pageNum">
          <a href="#" v-on:click="toPage(index)" :class="{active: currentPage==index}">{{ index+1 }}</a>
        </button>
        <button class="button_J">
          <a href="#" v-on:click="nextPage">></a>
        </button>
      </div>




    </div>
    <!--    第二种方式   还需要布一下局-->
    <div class="second2" v-else-if="isActive==1">
      <div class="test_div">
        <tr v-for="(item, index) in dataShow1" :class="{ 'alt': index%2==1 }">
          <!--        视频播放器-->
          <!--        但是每次还是要刷新一下才行-->
          <div class="video_text1">
            <video
              id="myVideo1"
              class="video-js1"
            >
              <source
                :src=item.videoUrl
                type="video/mp4"
              >
            </video>
          </div>
          <!--        <td>{{ item.school }}</td>-->
        </tr>
      </div>
      <div class="page2">
        <button class="button_J">
          <a href="#"  v-on:click="prePage"><
            </a>
        </button>
        <button class="button_J" v-for="(item, index) in pageNum1">
          <a href="#" v-on:click="toPage(index)" :class="{active: currentPage==index}">{{ index+1 }}</a>
        </button>
        <button class="button_J">
          <a href="#" v-on:click="nextPage">></a>
        </button>
      </div>

    </div>
<!--    第三种-->
    <div class="third3" v-else-if="isActive==2">
      <div class="test_div">


        <tr v-for="(item, index) in dataShow2" :class="{ 'alt': index%2==1 }">
          <!--        视频播放器-->
          <!--        但是每次还是要刷新一下才行-->
          <div class="video_text2">
            <video
              id="myVideo2"
              class="video-js2"
            >
              <source
                :src=item.videoUrl
                type="video/mp4"
              >
            </video>
          </div>
          <!--        <td>{{ item.school }}</td>-->
        </tr>
      </div>
      <div class="page3">
        <button class="button_J">
          <a href="#"  v-on:click="prePage">
            <
            </a>
        </button>
        <button class="button_J" v-for="(item, index) in pageNum2">
          <a href="#" v-on:click="toPage(index)" :class="{active: currentPage==index}">{{ index+1 }}</a>
        </button>
        <button class="button_J">
          <a href="#" v-on:click="nextPage">></a>
        </button>
      </div>

    </div>
<!--    第四种-->
    <div class="fourth4" v-else-if="isActive==3">
      <div class="test_div">


        <tr v-for="(item, index) in dataShow3" :class="{ 'alt': index%2==1 }">
          <!--        视频播放器-->
          <!--        但是每次还是要刷新一下才行-->
          <div class="video_text3">
            <video
              id="myVideo3"
              class="video-js3"
            >
              <source
                :src=item.videoUrl
                type="video/mp4"
              >
            </video>
          </div>
          <!--        <td>{{ item.school }}</td>-->
        </tr>
      </div>
      <div class="page4">
        <button class="button_J">
          <a href="#"  v-on:click="prePage">
            <
            </a>
        </button>
        <button v-for="(item, index) in pageNum3" class="button_J">
          <a href="#" v-on:click="toPage(index)" :class="{active: currentPage==index}">{{ index+1 }}</a>
        </button>
        <button class="button_J">
          <a href="#" v-on:click="nextPage">></a>
        </button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'TabsShow',
  components:{
  },
  data() {
    return {
      playerOptions:[],
      //视频存放地址
      listArray:[
        {
          'school':'河南农业大学',
          'videoUrl':require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school':'郑州大学',
          'videoUrl':require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school':'河南工业大学',
          'videoUrl':require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school':'河南农业大学',
          'videoUrl':require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school':'河南理工大学',
          'videoUrl':require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school':'河南理工大学',
          'videoUrl':require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school':'河南理工大学',
          'videoUrl':require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school':'河南理工大学',
          'videoUrl':require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school':'河南理工大学',
          'videoUrl':require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school':'河南理工大学',
          'videoUrl':require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school':'河南理工大学',
          'videoUrl':require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school':'河南理工大学',
          'videoUrl':require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school':'河南理工大学',
          'videoUrl':require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school':'河南理工大学',
          'videoUrl':require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school':'河南理工大学',
          'videoUrl':require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school':'河南理工大学',
          'videoUrl':require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school':'河南理工大学',
          'videoUrl':require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school':'河南理工大学',
          'videoUrl':require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school':'河南理工大学',
          'videoUrl':require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        }

      ],
      pageSize:1,
      currentPage:0,
      isActive:-1,


      pageSize1:4,
      currentPage1:0,
      isActive1:-1,


      pageSize2:9,
      currentPage2:0,
      isActive2:-1,

      pageSize3:16,
      currentPage3:0,
      isActive3:-1,
    };
  },
  mounted() {
    this.initVideo();  //初始化视频播放器
  },
  computed:{
    dataShow: function(){
      let start = this.currentPage*this.pageSize;
      let end = Math.min((this.currentPage+1)*this.pageSize, this.listArray.length)
      return this.listArray.slice(start, end)
    },
    pageNum: function(){
      return Math.ceil(this.listArray.length / this.pageSize) || 1 ;
    },



    dataShow1: function(){
      let start = this.currentPage1*this.pageSize1;
      let end = Math.min((this.currentPage1+1)*this.pageSize1, this.listArray.length)
      return this.listArray.slice(start, end)
    },
    pageNum1: function(){
      return Math.ceil(this.listArray.length / this.pageSize1) || 1 ;
    },
    dataShow2: function(){
      let start = this.currentPage2*this.pageSize2;
      let end = Math.min((this.currentPage2+1)*this.pageSize2, this.listArray.length)
      return this.listArray.slice(start, end)
    },
    pageNum2: function(){
      return Math.ceil(this.listArray.length / this.pageSize2) || 1 ;
    },
    dataShow3: function(){
      let start = this.currentPage3*this.pageSize3;
      let end = Math.min((this.currentPage3+1)*this.pageSize3, this.listArray.length)
      return this.listArray.slice(start, end)
    },
    pageNum3: function(){
      return Math.ceil(this.listArray.length / this.pageSize3) || 1 ;
    }
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
        width: "41.66666666666667vw",
        //设置视频播放器的显示高度（以像素为单位）
        height: "37.03703703703704vh"
      });
    },

    nextPage: function(){
      var vm = this;
      if (vm.currentPage == vm.pageNum - 1) return;
      vm.currentPage++;

    },
    prePage: function(){
      var vm = this;
      if (vm.currentPage == 0) return;
      vm.currentPage--;

    },
    toPage: function(page){
      var vm = this;
      vm.currentPage = page
    }
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button:hover{
  ccolor: aliceblue;
  background-color:#1e6abc;
}
button:focus{
  ccolor: aliceblue;
  background-color:#1e6abc;
}


.top_show{
  z-index: 99999;
}
.test_div{
  z-index: 100;
  display: flex;

  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: flex-start;
}
.vjs-custom-skin > .video-js {
  width: 100%;
  font-family: "PingFang SC","Helvetica Neue","Hiragino Sans GB","Segoe UI","Microsoft YaHei","微软雅黑",sans-serif;
}

.vjs-custom-skin > .video-js .vjs-menu-button-inline.vjs-slider-active,.vjs-custom-skin > .video-js .vjs-menu-button-inline:focus,.vjs-custom-skin > .video-js .vjs-menu-button-inline:hover,.video-js.vjs-no-flex .vjs-menu-button-inline {
  width: 10em
}

.vjs-custom-skin > .video-js .vjs-controls-disabled .vjs-big-play-button {
  display: none!important
}

.vjs-custom-skin > .video-js .vjs-control {
  width: 3em
}

.vjs-custom-skin > .video-js .vjs-control.vjs-live-control{
  width: auto;
  padding-left: .5em;
  letter-spacing: .1em;
}

.vjs-custom-skin > .video-js .vjs-menu-button-inline:before {
  width: 1.5em
}

.vjs-menu-button-inline .vjs-menu {
  left: 3em
}

.vjs-paused.vjs-has-started.vjs-custom-skin > .video-js .vjs-big-play-button,.video-js.vjs-ended .vjs-big-play-button,.video-js.vjs-paused .vjs-big-play-button {
  display: block
}

.vjs-custom-skin > .video-js .vjs-load-progress div,.vjs-seeking .vjs-big-play-button,.vjs-waiting .vjs-big-play-button {
  display: none!important
}

.vjs-custom-skin > .video-js .vjs-mouse-display:after,.vjs-custom-skin > .video-js .vjs-play-progress:after {
  padding: 0 .4em .3em
}

.video-js.vjs-ended .vjs-loading-spinner {
  display: none;
}

.video-js.vjs-ended .vjs-big-play-button {
  display: block !important;
}

.video-js.vjs-ended .vjs-big-play-button,.video-js.vjs-paused .vjs-big-play-button,.vjs-paused.vjs-has-started.vjs-custom-skin > .video-js .vjs-big-play-button {
  display: block
}

.vjs-custom-skin > .video-js .vjs-big-play-button {
  top: 50%;
  left: 50%;
  margin-left: -1.5em;
}

.vjs-custom-skin > .video-js .vjs-big-play-button {
  background-color: rgba(0,0,0,0.45);
  font-size: 3.5em;
  /*border-radius: 50%;*/
  height: 1.5em !important;
  line-height: 1.5em !important;
  margin-top: -0.75em !important
}

.video-js:hover .vjs-big-play-button,.vjs-custom-skin > .video-js .vjs-big-play-button:focus,.vjs-custom-skin > .video-js .vjs-big-play-button:active {
  background-color: rgba(36,131,213,0.9)
}

.vjs-custom-skin > .video-js .vjs-loading-spinner {
  border-color: rgba(36,131,213,0.8)
}

.vjs-custom-skin > .video-js .vjs-control-bar2 {
  background-color: #000000
}

.vjs-custom-skin > .video-js .vjs-control-bar {
  /*background-color: rgba(0,0,0,0.3) !important;*/
  color: #ffffff;
  font-size:  1.2962962962962963vh;
}

.vjs-custom-skin > .video-js .vjs-play-progress,.vjs-custom-skin > .video-js  .vjs-volume-level {
  background-color: #2483d5
}

.vjs-custom-skin > .video-js .vjs-play-progress:before {
  top: -0.3em;
}

.vjs-custom-skin > .video-js .vjs-progress-control:hover .vjs-progress-holder {
  font-size: 1.3em;
}

.vjs-menu-button-popup.vjs-volume-menu-button-vertical .vjs-menu {
  left: 0em;
}

.vjs-custom-skin > .video-js .vjs-menu li {
  padding: 0;
  line-height: 2em;
  font-size: 1.1em;
  font-family: "PingFang SC","Helvetica Neue","Hiragino Sans GB","Segoe UI","Microsoft YaHei","微软雅黑",sans-serif;
}

.vjs-custom-skin > .video-js .vjs-time-tooltip,
.vjs-custom-skin > .video-js .vjs-mouse-display:after,
.vjs-custom-skin > .video-js .vjs-play-progress:after {
  border-radius: 0;
  font-size: 1em;
  padding: 0;
  width: 3em;
  height: 1.5em;
  line-height: 1.5em;
  top: -3em;
}

.vjs-custom-skin > .video-js .vjs-menu-button-popup .vjs-menu {
  width: 5em;
  left: -1em;
}

.vjs-custom-skin > .video-js .vjs-menu-button-popup.vjs-volume-menu-button-vertical .vjs-menu {
  left: 0;
}

.vjs-custom-skin > .video-js .vjs-control-bar .vjs-resolution-button .vjs-menu {
  /*order: 4;*/
}

/*排序顺序*/
.vjs-custom-skin > .video-js .vjs-control-bar .vjs-play-control {
  order: 0;
}

.vjs-custom-skin > .video-js .vjs-control-bar .vjs-time-control {
  min-width: 1em;
  padding: 0;
  margin: 0 .1em;
  text-align: center;
  display: block;
  order: 1;
}

.vjs-custom-skin > .video-js .vjs-control-bar .vjs-playback-rate .vjs-playback-rate-value{
  font-size: 1.2em;
  line-height: 2.4;
}

.vjs-custom-skin > .video-js .vjs-progress-control.vjs-control {
  order: 2;
}

.vjs-custom-skin > .video-js .vjs-control-bar .vjs-volume-menu-button {
  order: 3;
}

.vjs-custom-skin > .video-js .vjs-control-bar .vjs-resolution-button {
  order: 4;
}

.vjs-custom-skin > .video-js .vjs-control-bar .vjs-resolution-button .vjs-resolution-button-label {
  display: block;
  line-height: 3em;
}

.vjs-custom-skin > .video-js .vjs-control-bar .vjs-playback-rate {
  order: 5;
}

.vjs-custom-skin > .video-js .vjs-control-bar .vjs-fullscreen-control {
  order: 6;
}


.page1{
  position:relative;
  bottom:-24.9259259259259258vh;
  left: 11.458333333333334vw;


}
.page2{
  position:relative;
  bottom: -5.8333333333333333vh;
  left: 26.041666666666668vw;


}
.page3{
  position:relative;
  bottom: -1.4629629629629629vh;
  left:27.083333333333336vw;


}
.page4{
  position:relative;
  bottom:0.91259259259259259vh;
  left:27.083333333333336vw;


}
.video_text{
  z-index: 100;
  width:62.5vw;
  height:55.55555555555555vh;
}
.video_text1{
  z-index: 100;
  position: relative;
  margin-left:1.0416666666666667vw;


  width:32vw;
  height:36vh;


}
.video_text2{
  z-index: 100;
  position: relative;
  margin-left:  1.0416666666666667vw;
  /*margin-top: -50px;*/

  width:22.670833333333336vw;
  height:25.51851851851852vh;


}
.video_text3{
  z-index: 100;
  position: relative;
  margin-left: 1.0416666666666667vw;
  /*margin-top: -10px;*/

  width:16.020833333333334vw;
  height:20.888888888888888vh;


}
video:focus{
  outline: 0;
}
.video-js{

  width: 78vw;
  height: 78vh;

}
.video-js1{
  width:32vw;
  height:35vh;

}
.video-js2{
  width:22.670833333333336vw;
  height:25.51851851851852vh;

}
.video-js3{
  width:16.020833333333334vw;
  height:20.888888888888888vh;

}
/*.video-js .vjs-big-play-button{*/
/*  !*对播放按钮的样式进行设置*!*/
/*  top: 50%;*/
/*  left: 50%;*/
/*  transform: translate3d(-50%,-50%,0);*/
/*}*/
.fenye_2{
  position: absolute;
  bottom:0.9259259259259258vh;
  left:20.833333333333336vw;
}
.fenye_1{
  position: absolute;
  bottom: 0.9259259259259258vh;
  left:23.4375vw;

}
h1{
  font-family:"宋体"
}
.first{
  top:-8.842105263157896vh;
  right:22.916666666666668vw;
  position: absolute;

  background-color: rgb(141, 228, 250);
  width:6.25vw;
  height: 4vh;
  line-height:3.1578947368421053vh;
}
.second{
  top:-8.842105263157896vh;
  right: 16.145833333333336vw;
  position: absolute;
  background-color: pink;
  width:6.25vw;
  height: 4vh;
  line-height:3.1578947368421053vh;
}
.third{
  top:-8.842105263157896vh;
  right: 9.375vw;
  position: absolute;
  background-color: rgb(197, 248, 184);
  width:6.25vw;
  height: 4vh;
  line-height:3.1578947368421053vh;
}
.fourth{
  top:-8.842105263157896vh;
  right:2.604vw;
  position: absolute;
  background-color: rgb(241, 241, 188);
  width:6.25vw;
  height: 4vh;
  line-height:3.1578947368421053vh;
}
.first1{
  position: absolute;
  /*background-color: rgb(141, 228, 250);*/
  background: transparent;
  height:78vh;
  width:68.9375vw;
  top:-1.2407407407407405vh;
  margin-right: 5.208333333333334vw;
  line-height:2.7777777777777777vh;
  z-index: 100;

}
.second2{
  z-index: 100;

  background: transparent;
  position: absolute;
  top:-1.2407407407407405vh;
  /*background-color: pink;*/
  height:78vh;
  width:68vw;
  margin-right: -1.0416666666666667vw;
  line-height:2.7777777777777777vh;
  left: 4vw;

}
.third3{
  z-index: 100;
  position: absolute;
  top:-1.2407407407407405vh;
  background: transparent;
  /*background-color: rgb(197, 248, 184);*/
  height:78vh;
  width:72vw;
  margin-right: -1.0416666666666667vw;
  line-height:2.7777777777777777vh;

}
.fourth4{
  z-index: 100;
  background: transparent;
  position: absolute;
  top:-3.2407407407407405vh;
  /*background-color: rgb(241, 241, 188);*/
  height:78vh;
  width:72vw;
  left: 2vw;
  margin-right:-1.0416666666666667vw;
  line-height:2.7777777777777777vh;

}
</style>
