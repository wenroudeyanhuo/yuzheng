<template>
  <el-row :style="background2">
    <el-col :span="5">
      <el-card class="box-card">
        <div
          style="
            margin: 1.8518518518518516vh 1.0416666666666667vw 1.8518518518518516vh 1.0416666666666667vw;
            width: 15.5vw;
            height: 3.7vh;
            position: relative;
            top: -1vh;
            left: -1vw;
          "
          class="clearfix"
          :style="background"
        >
          <!--          style="border: none" align="center"-->
          <span style="position: absolute; color: white; left: 6.2vw; top: 1vh"
            >监控点位</span
          >
        </div>

        <div>
          <el-image
            style="width: 2.6vw; height: 4.6vh"
            :src="require('@/assets/icon_number@2x.png')"
            fit="fill"
          ></el-image>
          <span
            class="span1"
            style="position: relative; top: -2vh; font-size: calc(0.5rem + 1.5vmin)"
            >7</span
          >
          <span
            class="span2"
            style="position: relative; left: -1vw; color: #1a70ff"
            >点位数量</span
          >
          <el-image
            style="left: -1vw; width: 2.6vw; height: 4.6vh"
            :src="require('@/assets/icon_area@2x.png')"
            fit="fill"
          ></el-image>
          <span
            class="span1"
            style="left: -1vw; position: relative; top: -2vh; font-size: calc(0.5rem + 1.5vmin)"
            >4</span
          >
          <span
            class="span2"
            style="left: 9vw; position: relative; top: -2.5vh; color: #1a70ff"
            >涉及区域</span
          >
        </div>
        <span style="position: relative; color: #0e2a4f">————————————————</span>

        <div>
          <input
            style="margin-bottom: 1.8518518518518516vh"
            type="text"
            maxlength="11"
            placeholder="请输入合适的点位"
          />
        </div>

        <template>
          <el-tree
            style="background: transparent; color: white"
            :data="data"
            :props="defaultProps"
            @node-click="handleNodeClick"
          ></el-tree>
        </template>
      </el-card>
    </el-col>
    <el-col :span="19">
      <el-card class="box-card1">
        <!--        头-->
        <div
          style="
            background-color: #409eff;
            top: 1vh;
            width: 75.5vw;
            height: 4.2vh;
            margin-left: -0.5208333333333334vw;
          "
        >
          <el-image
            style="
              width: 3.1vw;
              height: 5.5vh;
              position: relative;
              top: -1.5vh;
              left: -1.3vw;
            "
            :src="require('@/assets/icon_title_dianwei@2x.png')"
            fit="fill"
          ></el-image>
          <span
            class="span"
            style="
              font-size: calc(0.2rem + 2vmin);
              color: white;
              position: relative;
              top: -3vh;
            "
            >视频广场</span
          >
          <div class="TabsShow" style="position: relative">
            <TabsShow msg="" />
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
<style  lang="scss"  scoped>
::v-deep .el-tree-node:focus > .el-tree-node__content {
  background-color: #3b91b6;

  color: red; //节点的字体颜色
  font-weight: bold;
}
//失去焦点之后呢

//头
//.TabsShow{
//  position: absolute;
//  top:1px;
//  right:-600px;
//
//}
//#test3 {
//  text-align: center;
//  margin-top: 60px;
//}
//视频播放器
.video_text {
  width: 70%;
  margin: 0 auto;
}
video:focus {
  outline: 0; //去掉选中蓝框
}
.video-js .vjs-big-play-button {
  /*对播放按钮的样式进行设置*/
  width: 5.2vw;
  height: 5.5vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
}
.demo {
  height: 41.6vh;
  width: 23.4vw;
}
//分页
.fenye_1 {
  position: absolute;
  left: 5.2vw;
}
//输入框
input {
  border: 0; // 去除未选中状态边框
  outline: none; // 去除选中状态边框
}
input[type="text"],
input[type="password"],
input[type="email"] {
  -web-kit-appearance: none;
  -moz-appearance: none;
  outline: 0;
  background-color: #0e2a4f;

  box-sizing: border-box;
  text-align: left;
  font-size: calc(0.5rem + 1vmin);
  height: 2.1em;
  border-radius: 5px;
  color: white;
  display: block;
  text-decoration: none;
  width: 100%;
}
input::-webkit-input-placeholder {
  color: white;
}
::v-deep .el-input__inner {
  padding: 0;
  background: transparent;
  color: #fff;
  //border: none;
  font-size: calc(0.5rem + 1vmin);
}
::v-deep
  //下拉框面板
.el-select-dropdown {
  font-size: calc(0.5rem + 1vmin);
  color: black;
  //background-color:transparent;
}
::v-deep .el-popper {
  color: black;
}
::v-deep .el-select-dropdown__item {
  color: black;
}
//选中时的样式
::v-deep .el-select-dropdown__item.hover {
  background: transparent;
}
::v-deep .el-scrollbar {
  color: black;
}

.span {
  color: #ffffff;
  white-space: pre;
  font-weight: bold;
}
.span1 {
  color: #ffffff;
  display: inline-block;
  overflow: hidden;
}
.span2 {
  margin-top: 0.4629629629629629vh;
  font-size: calc(0.5rem + 1vmin);
  color: #ffffff;
  display: inline-block;
  overflow: hidden;
}
.box-card {
  //margin-bottom: 20px;
  margin-top: 18%;
  background-color: #000088;
  opacity: 0.7;
  height: 92.5vh;
  width: 15.5vw;

  padding: 0px 0px;
  border: none;
  z-index: 100;
}
.box-card1 {
  z-index: 100;
  margin-top: 5%;
  margin-bottom: 1.8518518518518516vh;
  background-color: #000088;
  opacity: 0.7;
  height: 90.5vh;
  width: 75.9vw;

  padding: 0px 0px;
  border: none;
}
</style>
<script>
import TabsShow from "./components/signal_one";

export default {
  name: "test3",
  components: {
    TabsShow,
  },
  mounted() {},
  data() {
    return {
      background: {
        // 背景图片地址
        backgroundImage:
          "url(" + require("../../../public/bg_title@2x.png") + ")",
        // 背景图片是否重复
        // 背景图片大小
        backgroundSize: "cover",
        // 背景颜色
        // 背景图片位置
        backgroundPosition: "center top",
      },

      background2: {
        // 背景图片地址
        backgroundImage:
          "url(" + require("../../../public/bg_bottom@2x.png") + ")",
        // 背景图片是否重复
        // 背景图片大小
        backgroundSize: "cover",
        // 背景颜色
        // 背景图片位置
        backgroundPosition: "center top",
      },

      data: [
        {
          label: "鄞州区",
          children: [
            {
              label: "宁波-松岙大埠",
              children: [
                {
                  label: "宁波-松岙大埠1",
                },
                {
                  label: "宁波-松岙大埠2",
                },
                {
                  label: "宁波-松岙大埠3",
                },
                {
                  label: "宁波-松岙大埠4",
                },
                {
                  label: "宁波-松岙大埠5",
                },
              ],
            },
            {
              label: "宁波-动迁",
              children: [
                {
                  label: "宁波-动迁1",
                },
                {
                  label: "宁波-动迁2",
                },
                {
                  label: "宁波-动迁3",
                },
                {
                  label: "宁波-动迁4",
                },
                {
                  label: "宁波-动迁5",
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  methods: {
    handleNodeClick()
    {
    //  树形结点的点击方法
    }
  },
};
</script>


