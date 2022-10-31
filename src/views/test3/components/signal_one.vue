<template>
  <div>
    <h1>{{ msg }}</h1>
    <button class="first" @click="isActive=0">方式一</button>
    <button class="second" @click="isActive=1">方式二</button>
    <button class="third" @click="isActive=2">方式三</button>
    <button class="fourth" @click="isActive=3">方式四</button>

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
        <button>
          <a href="#"  v-on:click="prePage">
            <</a>
        </button>
        <button v-for="(item, index) in pageNum">
          <a href="#" v-on:click="toPage(index)" :class="{active: currentPage==index}">{{ index+1 }}</a>
        </button>
        <button>
          <a href="#" v-on:click="nextPage">></a>
        </button>
      </div>




    </div>
    <!--    第二种方式   还需要布一下局-->
    <div class="second2" v-else-if="isActive==1">
      <div>


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
      <div class="page1">
        <button>
          <a href="#"  v-on:click="prePage">
            <</a>
        </button>
        <button v-for="(item, index) in pageNum1">
          <a href="#" v-on:click="toPage(index)" :class="{active: currentPage==index}">{{ index+1 }}</a>
        </button>
        <button>
          <a href="#" v-on:click="nextPage">></a>
        </button>
      </div>

    </div>
    <div class="third3" v-else-if="isActive==2">

    </div>
    <div class="fourth4" v-else-if="isActive==3">

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
          'videoUrl':require("../../../assets/video/1.1(Av817112138,P1).mp4")
        },
        {

          'school':'河南工业大学',
          'videoUrl':require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school':'河南农业大学',
          'videoUrl':require("../../../assets/video/1.1(Av817112138,P1).mp4")
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
    };
  },
  mounted() {
    this.initVideo();  //初始化视频播放器
    this.initVideo1();
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
        width: "800px",
        //设置视频播放器的显示高度（以像素为单位）
        height: "400px"
      });
    },
    initVideo1() {
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
        width: "100px",
        //设置视频播放器的显示高度（以像素为单位）
        height: "100px"
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
  font-size: 14px
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
  position: absolute;
  bottom: 10px;
  left: 400px;

}
.video_text{
  width:500px;
  height:500px;
  margin: 0 auto;
}
.video_text1{
  width:100px;
  height:100px;
  margin: 20px;
}
video:focus{
  outline: 0;
}
.video-js{

  width: 1100px;
  height: 500px;

}
.video-js1{


  width:500px;
  height:500px;

}
/*.video-js .vjs-big-play-button{*/
/*  !*对播放按钮的样式进行设置*!*/
/*  top: 50%;*/
/*  left: 50%;*/
/*  transform: translate3d(-50%,-50%,0);*/
/*}*/
.fenye_2{
  position: absolute;
  bottom: 10px;
  left:400px;
}
.fenye_1{
  position: absolute;
  bottom: 10px;
  left:450px;

}
h1{
  font-family:"宋体"
}
.first{
  top:22px;
  right: 440px;
  position: absolute;

  background-color: rgb(141, 228, 250);
  width:120px;
  line-height:30px;
}
.second{
  top:22px;
  right: 310px;
  position: absolute;
  background-color: pink;
  width:120px;
  line-height:30px;
}
.third{
  top:22px;
  right: 180px;
  position: absolute;
  background-color: rgb(197, 248, 184);
  width:120px;
  line-height:30px;
}
.fourth{
  top:22px;
  right: 50px;
  position: absolute;
  background-color: rgb(241, 241, 188);
  width:120px;
  line-height:30px;
}
.first1{
  position: absolute;
  /*background-color: rgb(141, 228, 250);*/
  background: transparent;
  height:630px;
  width:1170px;
  top:65px;
  margin-right: 100px;
  line-height:30px;

}
.second2{

  background: transparent;
  position: absolute;
  top:65px;
  /*background-color: pink;*/
  height:630px;
  width:1170px;
  margin-right: -20px;
  line-height:30px;

}
.third3{
  position: absolute;
  top:65px;
  background: transparent;
  /*background-color: rgb(197, 248, 184);*/
  height:630px;
  width:1170px;
  margin-right: -20px;
  line-height:30px;

}
.fourth4{
  background: transparent;
  position: absolute;
  top:65px;
  /*background-color: rgb(241, 241, 188);*/
  height:630px;
  width:1170px;
  margin-right: -20px;
  line-height:30px;

}
</style>
