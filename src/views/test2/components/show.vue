<template>

  <div  style="background:transparent;position: relative;top:-50px;">
    <button class="first" style="position: relative;top:1px;right: -40px" @click="isActive = 0">事情详情</button>
    <button class="second" style="position: relative;top:1px;right: -120px" @click="isActive = 1">实时监控</button>

    <div class="first1" v-if="isActive == 0">
      <span style="position:relative;left:44px;top:-23px;color: white">事情详情</span>

<!--打算调用一个整体来写-->
<!--      视频播放器-->
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
        <button class="button_J1">
          <a href="#"  v-on:click="prePage">
            <</a>
        </button >

                <div style="position:relative;left:-190px;top:-160px;width: 750px;height: 200px">
              <el-scrollbar>
                <div class="scrollbar-flex-content">
                  <p v-for="(item,index) in img_scro" :key="index" class="scrollbar-demo-item">
                    <el-image style="width: 300px;height: 300px" :src="item.img" alt=""></el-image>
                  </p>
                </div>
              </el-scrollbar>
                </div>


<!--        <div style="width: 770px;height: 200px">-->
<!--          <el-scrollbar>-->
<!--            <div class="scrollbar-flex-content">-->

<!--              <p v-for="(item,index) in img_scro" :key="index" class="scrollbar-demo-item">-->
<!--                <el-image style="width: 300px;height: 300px" :src="item.img" alt=""></el-image>-->
<!--              </p>-->

<!--            </div>-->
<!--          </el-scrollbar>-->
<!--        </div>-->
<!--        <el-scrollbar>-->
<!--          <div class="scrollbar-flex-content">-->
<!--            <button class="scrollbar-demo-item" style="margin-left:5px;" v-for="(item, index) in pageNum">-->
<!--              <a href="#" v-on:click="toPage(index)" :class="{active: currentPage==index}">{{ index+1 }}</a>-->
<!--            </button>-->

<!--          </div>-->
<!--        </el-scrollbar>-->


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














      <div style="position: absolute;right: 200px;top:40px">

      <div class="aside" style="display:inline;float: right;">
        <div style="margin-left: 20px;margin-top: 20px;">
          <el-image style="vertical-align:middle;" :src="require('@/assets/icon_jiankong.png')"></el-image>
          <span class="span6">nb市</span>
        </div>


        <div :style="background2" style="height:40px;width: 450px;margin-left: 20px">
          <!--         vertical-align:middle;图片和文字居中 -->
          <el-image style="width: 30px; height: 27px;margin-left:8px;vertical-align:middle;" :src="require('@/assets/6.png')" fit="fill" ></el-image>
          <span class="span7">处理详情</span>
        </div>
        <!-- 描述列表       -->
        <!-- 这里的所有数据，后台交互改变数据       -->
        <!--      direction="vertical" 是指文字的排列方式  -->
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


        <el-button style="color:deepskyblue;background-color:transparent;position:relative;right:-300px;bottom: -550px">处理</el-button>
      </div>

    </div>

<!--    实时监控-->
    <div class="second2" v-else-if="isActive == 1">
      <el-col :span="15">
        <span style="position: relative;color: white;top: -20px;left: 40px">实时监控</span>


        <div>
          <video style="position:relative;top:25px;left:5px;width: 700px;height: 500px">
            <source style="height: 700px;width: 700px;" :src="require('@/assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4')">
          </video>
        </div>
      </el-col>

      <el-col :span="1">
        <div class="mo1">
          <span style="line-height: 30px;margin-left: 10px"><font color="#f0f8ff">云台控制</font></span>
        </div>
        <div style="position:relative;top:70px;left: -142px;width: 170px">
          <el-image style="vertical-align:middle;" :src="require('@/assets/icon_jiankong.png')"></el-image>
          <span style="color: white">宁波松岙大阜1</span>
        </div>

        <div class="mo2">
          <el-image style="width: 200px;height: 200px;vertical-align:middle;" :src="require('@/assets/bg_bottom(1).png')"></el-image>
        </div>

        <el-row>
          <el-col :span="5">
            <div class="mo3">
              <el-image style="width: 100px;height: 40px;vertical-align: middle" :src="require('@/assets/ssjk1.png')"></el-image>
              <el-image style="width: 100px;height: 40px;vertical-align: middle;margin-left: 3px" :src="require('@/assets/ssjk1.png')"></el-image>
              <!--<el-image style="width: 160px;height: 82px;vertical-align: middle;" :src="require('@/assets/ssjk1.png')"></el-image>-->
              <div>
                <el-image style="width: 100px;height: 40px;vertical-align: middle;margin-top: 10px" :src="require('@/assets/ssjk1.png')"></el-image>
                <el-image style="width: 100px;height: 40px;vertical-align: middle;margin-top: 10px;margin-left: 3px" :src="require('@/assets/ssjk1.png')"></el-image>
              </div>
            </div>
          </el-col>
          <el-col :span="19">
            <div>
              <el-image style="position:relative;left:50px;top:190px;width: 170px;height: 90px;vertical-align: middle;" :src="require('@/assets/ssjk1.png')"></el-image>
            </div>
          </el-col>
        </el-row>
      </el-col>

      <el-col :span="7">
        <div class="mo4">
          <el-image style="width: 60px;height: 60px;vertical-align: middle;" :src="require('@/assets/icon_up.png')"></el-image>
        </div>

        <div class="mo5">
          <el-image style="width: 60px;height: 60px;vertical-align: middle;" :src="require('@/assets/icon_left.png')"></el-image>
          <el-image style="width: 60px;height: 60px;vertical-align: middle;margin-left: 100px" :src="require('@/assets/icon_right.png')"></el-image>
        </div>

        <div class="mo6">
          <el-image style="width: 60px;height: 60px;vertical-align: middle;" :src="require('@/assets/icon_down.png')"></el-image>
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
            <div style="position: relative;top:50px;left: -150px">
              <el-image style="position:relative;top:-695px;left: 200px;width: 50px;height: 50px;vertical-align: middle" :src="require('@/assets/ssjk.png')"></el-image>
              <el-button type="text" style="position:relative;top:-695px;left: 200px;color: #FFFFFF;">开启激光</el-button>

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
  name: 'Show',
  data() {
    return {
      pageSize: 1,
      currentPage: 0,
      listArray: [
        {
          'school': '河南农业大学',
          'img':require('@/assets/yujing.jpg'),
          'videoUrl': require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school': '郑州大学',
          'img':require('@/assets/yujing.jpg'),
          'videoUrl': require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school': '河南工业大学',
          'img':require('@/assets/yujing.jpg'),
          'videoUrl': require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school': '河南农业大学',
          'img':require('@/assets/yujing.jpg'),
          'videoUrl': require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school': '河南理工大学',
          'img':require('@/assets/yujing.jpg'),
          'videoUrl': require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school': '河南理工大学',
          'img':require('@/assets/yujing.jpg'),
          'videoUrl': require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school': '河南理工大学',
          'img':require('@/assets/yujing.jpg'),
          'videoUrl': require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school': '河南理工大学',
          'img':require('@/assets/yujing.jpg'),
          'videoUrl': require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school': '河南理工大学',
          'img':require('@/assets/yujing.jpg'),
          'videoUrl': require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school': '河南理工大学',
          'img':require('@/assets/yujing.jpg'),
          'videoUrl': require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school': '河南理工大学',
          'img':require('@/assets/yujing.jpg'),
          'videoUrl': require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school': '河南理工大学',
          'img':require('@/assets/yujing.jpg'),
          'videoUrl': require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school': '河南理工大学',
          'img':require('@/assets/yujing.jpg'),
          'videoUrl': require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school': '河南理工大学',
          'img':require('@/assets/yujing.jpg'),
          'videoUrl': require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school': '河南理工大学',
          'img':require('@/assets/yujing.jpg'),
          'videoUrl': require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school': '河南理工大学',
          'img':require('@/assets/yujing.jpg'),
          'videoUrl': require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school': '河南理工大学',
          'img':require('@/assets/yujing.jpg'),
          'videoUrl': require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school': '河南理工大学',
          'img':require('@/assets/yujing.jpg'),
          'videoUrl': require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school': '河南理工大学',
          'img':require('@/assets/yujing.jpg'),
          'videoUrl': require("../../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        }

      ],
      img_scro: [
        {img: require('@/assets/yujing.jpg')},
        {img: require('@/assets/yujing.jpg')},
        {img: require('@/assets/yujing.jpg')},
        {img: require('@/assets/yujing.jpg')},
        {img: require('@/assets/yujing.jpg')},
        {img: require('@/assets/yujing.jpg')},
        {img: require('@/assets/yujing.jpg')},
        {img: require('@/assets/yujing.jpg')},
      ],
      background2: {
        backgroundImage: 'url(' + require('@/assets/bg_title@2x.png') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '60%',
      },
      isActive: -1,
    }
  },
  mounted() {
    this.initVideo();  //初始化视频播放器
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
  },

  computed: {
    dataShow: function () {
      let start = this.currentPage * this.pageSize;
      let end = Math.min((this.currentPage + 1) * this.pageSize, this.listArray.length)
      return this.listArray.slice(start, end)
    },
    pageNum: function () {
      return Math.ceil(this.listArray.length / this.pageSize) || 1;
    }

  }
}


</script>

<style  lang="scss" scoped>

.mo1{
  position:relative;
  background-color: #203f5e;
  height: 30px;
  width: 450px;
  top:22px;
  left:-155px;
}

.mo2{
  position:relative;
  height: 250px;
  width: 250px;
  top:130px;
  left:-80px;
}

.mo3{
  position:relative;
  height: 250px;
  width: 400px;
  top:190px;
  left:-155px;
}


.mo4{
  position:relative;
  height: 150px;
  width: 300px;
  top:170px;
  left:-70px;
}

.mo5{
  position:relative;

  height: 250px;
  width: 420px;
  top:110px;
  left:-150px;
}

.mo6{
  position:relative;
  height: 250px;
  width: 400px;
  top:-50px;
  left:-70px;
}

.mo7{
  position:relative;
  height: 250px;
  width: 400px;
  top:-150px;
  left:-190px;
}
.mo8{
  position:relative;
  height: 250px;
  width: 400px;
  top:-355px;
  left:-190px;
}

.button_J1{
  top:32px;
  left: -230px;
  height: 192px;
  position: relative;

}
.button_J{
  left: 560px;
  position: relative;
  top:-360px;
  height: 192px;



}
.page1{
  position:relative;
  bottom: 10px;
  left: 220px;


}
video:focus{
  outline: 0;
}
.video-js{

  width: 790px;
  height: 400px;

}
.video_text{
  z-index: 100;
  width:800px;
  height:400px;
}
.scrollbar-flex-content {
  display: flex;
  height: 190px;
  width: 190px;
}
.scrollbar-demo-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 190px;
  height: 190px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-danger-light-9);
  color: var(--el-color-danger);
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
.aside{
  height: 800px;
  width: 400px;
  background-color: transparent;
}
.first{
  position: relative;
  color:#d9effe;
  background: transparent;
  border: none;
  margin-left: 800px;
  top:-10px;

}
.second{
  top:-10px;
  position: relative;
  color:#d9effe;
  background: transparent;
  border: none;
}




</style>
