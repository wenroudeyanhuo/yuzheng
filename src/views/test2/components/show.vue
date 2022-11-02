<template>

  <div  style="background:transparent;position: relative;top:-50px;">
    <button class="first" style="position: relative;top:1px;right: -40px" @click="isActive = 0">事情详情</button>
    <button class="second" style="position: relative;top:1px;right: -180px" @click="isActive = 1">实时监控</button>

    <div class="first1" v-if="isActive == 0">
      <span style="position:relative;left:44px;top:-23px;color: white">事情详情</span>

<!--打算调用一个整体来写-->
<!--      视频播放器-->
<!--      <table>-->
<!--        <tr v-for="(item, index) in listArray">-->
<!--          &lt;!&ndash;        视频播放器&ndash;&gt;-->
<!--          &lt;!&ndash;        但是每次还是要刷新一下才行&ndash;&gt;-->
<!--          <div class="video_text">-->
<!--            <video-->
<!--              id="myVideo"-->
<!--              class="video-js"-->
<!--            >-->
<!--              <source-->
<!--                :src=item.videoUrl-->
<!--                type="video/mp4"-->
<!--              >-->
<!--            </video>-->
<!--          </div>-->
<!--          &lt;!&ndash;        <td>{{ item.school }}</td>&ndash;&gt;-->
<!--        </tr>-->
<!--      </table>-->


<!--      下面图片列表，横向展示-->
      <template>



        <div style="width: 770px;height: 200px">
      <el-scrollbar>
        <div class="scrollbar-flex-content">
<!--          让其遍历图片-->
          <p v-for="(item,index) in img_scro" :key="index" class="scrollbar-demo-item">
            <el-image style="width: 300px;height: 300px" :src="item.img" alt=""></el-image>
          </p>
        </div>
      </el-scrollbar>
        </div>
      </template>














      <div style="position: relative;right: 220px;top:-12px">

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
      </div>

    </div>
    <div class="second2" v-else-if="isActive == 1">


      <span style="position:relative;left:44px;top:-23px;color: white">实时监控</span>
    </div>


  </div>
</template>


<script>

export default {
  name: 'Show',
  data()
  {
    return{
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
      img_scro:[
        {img:require('@/assets/yujing.jpg')},
        {img:require('@/assets/yujing.jpg')},
        {img:require('@/assets/yujing.jpg')},
        {img:require('@/assets/yujing.jpg')},
        {img:require('@/assets/yujing.jpg')},
        {img:require('@/assets/yujing.jpg')},
        {img:require('@/assets/yujing.jpg')},
        {img:require('@/assets/yujing.jpg')},
      ],
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
  }

}


</script>

<style  lang="scss" scoped>
.video_text{
  z-index: 100;
  width:1200px;
  height:600px;
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
  background-color: rgb(12, 37, 67,0.7);
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
