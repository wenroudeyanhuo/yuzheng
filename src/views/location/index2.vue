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

      <div class="aside2">
        <div class='video'>
          <video-player class="video-player vjs-custom-skin"
                        ref="videoPlayer"
                        :playsinline="true"
                        :options="playerOptions">
          </video-player>
        </div>
      </div>
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

      <div style="height: 40px;background-color: #203f5e;width: 460px;">
        <div style="margin-left: 100px">
          <el-button type="text" style="vertical-align:80%; color: #FFFFFF; border-style: none;border-bottom: 5px #58C2D0;margin-left: 100px" >实时监控</el-button>
          <el-button type="text" style="vertical-align:80%; color: #FFFFFF; border-style: none;border-bottom: 5px #58C2D0;">录像回放</el-button>
          <el-button type="text" style="vertical-align:80%; color: #FFFFFF; border-style: none;border-bottom: 5px #58C2D0;">预警事件</el-button>
          <el-image :src="require('@/assets/youshangjiao.png')" style="width: 40px;height: 40px;" justify="end"></el-image>
        </div>
      </div>

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
            <el-image style="width: 50px;height: 50px;vertical-align: middle" :src="require('@/assets/ssjk.png')"></el-image>
            <el-button type="text" style="color: #FFFFFF;">开启激光</el-button>
          </div>
        </el-col>
      </el-row>
    </el-col>

  </el-row>

</template>

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

