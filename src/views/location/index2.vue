<template>
  <el-row type="flex"style="background-color: #0f2c4e;">
    <el-col :span="24">
      <div style="background-color: #203f5e;height: 40px;">
        <el-image style="width: 40px;height: 40px;vertical-align:middle;" :src="require('@/assets/icon_title_dianwei.png')"></el-image>
        <span><font color="#f0f8ff">点位详情</font></span>
      </div>

      <div style="background-color: #0f2c4e;height: 30px;"></div>

      <div style="margin-left: 30px">
        <el-image style="vertical-align:middle;" :src="require('@/assets/icon_jiankong.png')"></el-image>
        <span><font color="#f0f8ff">宁波松岙大阜1</font></span>
      </div>

      <div class="mo1">
        <span style="line-height: 30px;margin-left: 20px"><font color="#f0f8ff">云台控制</font></span>
      </div>
      <div class="mo2">
        <el-image style="width: 250px;height: 250px;vertical-align:middle;" :src="require('@/assets/bg_bottom(1).png')"></el-image>
      </div>

      <div class="mo3">
        <el-image style="width: 110px;height: 40px;vertical-align: top;" :src="require('@/assets/ssjk1.png')"></el-image>
        <el-image style="width: 110px;height: 40px;vertical-align: top;" :src="require('@/assets/ssjk1.png')"></el-image>
        <el-image style="width: 160px;height: 82px;vertical-align: baseline;" :src="require('@/assets/ssjk1.png')"></el-image>
        <el-image style="width: 110px;height: 40px;vertical-align: middle;" :src="require('@/assets/ssjk1.png')"></el-image>
        <el-image style="width: 110px;height: 40px;vertical-align: middle;" :src="require('@/assets/ssjk1.png')"></el-image>

      </div>

    </el-col>
  </el-row>

</template>

<style>
.mo1{
  background-color: #203f5e;
  height: 30px;
  width: 400px;
  margin-left: 800px;
}
.mo2{
  height: 250px;
  width: 250px;
  margin-left: 880px;
  margin-top: 50px;
}
.mo3{
  height: 250px;
  width: 400px;
  margin-left: 800px;
  margin-top: 50px;
}
</style>

<script>
export default {
  name: 'songpan3'
}
</script>
