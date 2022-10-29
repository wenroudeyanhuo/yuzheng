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
      <table>
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
      </table>
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
  data() {
    return {
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
