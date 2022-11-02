<template>
  <el-row type="flex"style="background-color: #0f2c4e;">
    <el-col :span="15">
      <div style="background-color: #203f5e;height: 40px">
        <el-image style="width: 40px;height: 40px;vertical-align:middle;" :src="require('@/assets/icon_title_dianwei.png')"></el-image>
        <span><font color="#f0f8ff">点位详情</font></span>
      </div>

      <div style="margin-left: 18px;margin-top: 20px">
        <el-image style="vertical-align:middle;" :src="require('@/assets/icon_jiankong.png')"></el-image>
        <span><font color="#f0f8ff">宁波松岙大阜1</font></span>
      </div>

      <div>
        <video style="width: 800px;margin-left: 18px">
          <source :src="require('@/assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4')">
        </video>
      </div>
<!--
      <div class="aside2">
        <div class='video'>
          <video-player class="video-player vjs-custom-skin"
                        ref="videoPlayer"
                        :playsinline="true"
                        :options="playerOptions">
          </video-player>
        </div>
      </div>
      -->
    </el-col>
    <!--
          <div class="mo3">
            <el-image style="width: 110px;height: 40px;vertical-align: middle" :src="require('@/assets/ssjk1.png')"></el-image>
            <el-image style="width: 110px;height: 40px;vertical-align: middle;margin-left: 3px" :src="require('@/assets/ssjk1.png')"></el-image>
          // <el-image style="width: 160px;height: 82px;vertical-align: middle;" :src="require('@/assets/ssjk1.png')"></el-image>
            <div>
              <el-image style="width: 110px;height: 40px;vertical-align: middle;margin-top: 10px" :src="require('@/assets/ssjk1.png')"></el-image>
              <el-image style="width: 110px;height: 40px;vertical-align: middle;margin-top: 10px;margin-left: 3px" :src="require('@/assets/ssjk1.png')"></el-image>
            </div>

          </div>
          -->


    <el-col :span="1">
<!--
      <div style="height: 40px;background-color: #203f5e;width: 460px;">
        <div style="margin-left: 100px">
          <el-button type="text" style="vertical-align:80%; color: #FFFFFF; border-style: none;border-bottom: 5px #58C2D0;margin-left: 100px" >实时监控</el-button>
          <el-button type="text" style="vertical-align:80%; color: #FFFFFF; border-style: none;border-bottom: 5px #58C2D0;">录像回放</el-button>
          <el-button type="text" style="vertical-align:80%; color: #FFFFFF; border-style: none;border-bottom: 5px #58C2D0;">预警事件</el-button>
          <el-image :src="require('@/assets/youshangjiao.png')" style="width: 40px;height: 40px;" justify="end"></el-image>
        </div>
      </div>
-->
      <div class="mo1">
        <span style="line-height: 30px;margin-left: 20px"><font color="#f0f8ff">云台控制</font></span>
      </div>

      <div class="mo2">
        <el-image style="width: 250px;height: 250px;vertical-align:middle;" :src="require('@/assets/bg_bottom(1).png')"></el-image>
      </div>

      <el-row>
        <el-col :span="5">
          <div class="mo3">
            <el-image style="width: 110px;height: 40px;vertical-align: middle" :src="require('@/assets/ssjk1.png')"></el-image>
            <el-image style="width: 110px;height: 40px;vertical-align: middle;margin-left: 3px" :src="require('@/assets/ssjk1.png')"></el-image>
            <!--<el-image style="width: 160px;height: 82px;vertical-align: middle;" :src="require('@/assets/ssjk1.png')"></el-image>-->
            <div>
              <el-image style="width: 110px;height: 40px;vertical-align: middle;margin-top: 10px" :src="require('@/assets/ssjk1.png')"></el-image>
              <el-image style="width: 110px;height: 40px;vertical-align: middle;margin-top: 10px;margin-left: 3px" :src="require('@/assets/ssjk1.png')"></el-image>
            </div>
          </div>
        </el-col>
        <el-col :span="19">
          <div>
            <el-image style="width: 150px;height: 90px;vertical-align: middle;margin-left: 293px;margin-top: 50px" :src="require('@/assets/ssjk1.png')"></el-image>
          </div>
        </el-col>
      </el-row>

      <!--
                  <div class="mo4">
                    <el-image style="width: 56px;height: 56px;vertical-align: middle;" :src="require('@/assets/icon_up.png')"></el-image>
                  </div>

                  <div class="mo5">
                    <el-image style="width: 56px;height: 56px;vertical-align: middle;" :src="require('@/assets/icon_left.png')"></el-image>
                    <el-image style="width: 56px;height: 56px;vertical-align: middle;margin-left: 100px" :src="require('@/assets/icon_right.png')"></el-image>
                  </div>

                  <div class="mo6">
                    <el-image style="width: 56px;height: 56px;vertical-align: middle;" :src="require('@/assets/icon_down.png')"></el-image>
                  </div>

                        <div class="mo7">
                          <span><font color="#f0f8ff">变倍 +</font></span>
                          <span style="margin-left: 75px"><font color="#f0f8ff">变倍 -</font></span>
                        </div>

                        <div class="mo8">
                          <span><font color="#f0f8ff">变焦 +</font></span>
                          <span style="margin-left: 75px"><font color="#f0f8ff">变焦 -</font></span>
                        </div>
             -->
    </el-col>

    <el-col :span="7">
      <div class="mo4">
        <el-image style="width: 56px;height: 56px;vertical-align: middle;" :src="require('@/assets/icon_up.png')"></el-image>
      </div>

      <div class="mo5">
        <el-image style="width: 56px;height: 56px;vertical-align: middle;" :src="require('@/assets/icon_left.png')"></el-image>
        <el-image style="width: 56px;height: 56px;vertical-align: middle;margin-left: 100px" :src="require('@/assets/icon_right.png')"></el-image>
      </div>

      <div class="mo6">
        <el-image style="width: 56px;height: 56px;vertical-align: middle;" :src="require('@/assets/icon_down.png')"></el-image>
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
            <el-image style="position:relative;top:-70px;right:-270px;width: 50px;height: 50px;vertical-align: middle" :src="require('@/assets/ssjk.png')"></el-image>
            <el-button type="text" style="position:relative;top:-70px;right:-270px;color: #FFFFFF;">开启激光</el-button>

        <!--    <el-image style="width: 50px;height: 50px;vertical-align: middle" :src="require('@/assets/ssjk.png')"></el-image>
            <el-button type="text" style="color: #FFFFFF;">开启激光</el-button>-->
          </div>
        </el-col>
      </el-row>
    </el-col>

  </el-row>

</template>
<!--
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
</script>-->

<style>
.aside2 {
  height: 700px;
  width: 1000px;
  background-color: #102A4F;
  margin-top: 10px;
  overflow: hidden;
}

.video{
  display: inline-block;
  width: 800px;
  height: 400px;
  text-align: center;
  line-height: 100px;
  border: 1px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  background: #090708;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
  margin-top: 20px;
  margin-right: 20px;
  margin-left: 18px;
}


.mo1{
  background-color: #203f5e;
  height: 30px;
  width: 370px;
  margin-top: 50px;
  margin-left: 70px;
}

.mo2{
  height: 250px;
  width: 250px;
  margin-left: 130px;
  margin-top: 50px;
}

.mo3{
  height: 250px;
  width: 400px;
  margin-left: 70px;
  margin-top: 50px;
}



.mo4{
  margin-top: 180px;
  margin-left: 180px;
}

.mo5{
  margin-top: 30px;
  margin-left: 100px;
}

.mo6{
  margin-top: 30px;
  margin-left: 180px;
}

.mo7{
  margin-top: 60px;
  margin-left: 58px;
}
.mo8{
  margin-top: 10px;
  margin-left: 58px;
}


</style>

<script>
export default {
  name: 'songpan3'
}
</script>

