<template>
  <el-row style="height: 100vh" :style="background2">
    <el-col :span="6">
      <el-card class="box-card">
        <div
          style="
            margin: 1vw;
            width: 15.6vw;
            height: 4vh;
            position: relative;
            top: -1vh;
            left: -1vw;
          "
          class="clearfix"
          :style="background"
        >
          <!--          style="border: none" align="center"-->
          <el-image
            style="
              width: 1.6vw;
              height: 3vh;
              position: relative;
              left: 0.5vw;
              top: 0.3vh;
            "
            :src="require('@/assets/6.png')"
            fit="fill"
          ></el-image>
          <span style="position: absolute; color: white; left: 6.25vw; top: 1vh"
            >预警事件</span
          >
          <span
            style="
              font-size: calc(0.5rem + 1.5vmin);
              color: yellow;
              position: relative;
              left: 12.5vw;
            "
            >5</span
          >
          <div style="position: relative; top: -4.6vh;">
            <div class="block" style="position: relative; top: 7.4vh;width: 4.7vw">
              <el-date-picker v-model="value1" type="date" placeholder="日期">
              </el-date-picker>
            </div>

            <el-select
              v-model="ruleForm.cities"
              :popper-append-to-body="false"
              clearable
              prop-class="select-down"
              placeholder="类型"
              class="select_shijian"
            >
              <el-option
                v-for="item in cities"
                :key="item.value"
                :label="item.label"
                :value="item"
              >
                <span style="float: left">{{ item.label }}</span>
                <span style="float: right; font-size: calc(0.5rem + 1vmin)">{{
                  item.value
                }}</span>
              </el-option>
            </el-select>

            <el-select
              v-model="ruleForm.shebei"
              :popper-append-to-body="false"
              clearable
              prop-class="select-down"
              placeholder="设备"
              class="select_shebei"
            >
              <el-option
                v-for="item in shebei"
                :key="item.value"
                :label="item.label"
                :value="item"
              >
                <span style="float: left">{{ item.label }}</span>
                <span style="float: right; font-size: calc(0.5rem + 1vmin)">{{
                  item.value
                }}</span>
              </el-option>
            </el-select>

            <!--          列表-->
            <el-card class="box-card3">
              <div>
                <ul class="ul1">
                  <li class="li1">
                    <div>
                      <span class="monan_wenzi">文字 文字1</span>
                      <el-image
                        style="width: 20vw; height: 21.8vh"
                        :src="require('@/assets/yujing.jpg')"
                        fit="fill"
                      ></el-image>
                    </div>
                  </li>
                  <li class="li1">
                    <div>
                      <span class="monan_wenzi">文字 文字1</span>
                      <el-image
                        style="width: 20vw; height: 21.8vh"
                        :src="require('@/assets/yujing.jpg')"
                        fit="fill"
                      ></el-image>
                    </div>
                  </li>
                  <li class="li1">
                    <div>
                      <span class="monan_wenzi">文字 文字1</span>
                      <el-image
                        style="width: 20vw; height: 21.8vh"
                        :src="require('@/assets/yujing.jpg')"
                        fit="fill"
                      ></el-image>
                    </div>
                  </li>
                  <li class="li1">
                    <div>
                      <span class="monan_wenzi">文字 文字1</span>
                      <el-image
                        style="width: 20vw; height: 21.8vh"
                        :src="require('@/assets/yujing.jpg')"
                        fit="fill"
                      ></el-image>
                    </div>
                  </li>
                  <li class="li1">
                    <div>
                      <span class="monan_wenzi">文字 文字1</span>
                      <el-image
                        style="width: 20vw; height: 21.8vh"
                        :src="require('@/assets/yujing.jpg')"
                        fit="fill"
                      ></el-image>
                    </div>
                  </li>
                  <li>
                    <div>
                      <span class="monan_wenzi">文字 文字1</span>
                      <el-image
                        style="width: 20vw; height: 21.8vh"
                        :src="require('@/assets/yujing.jpg')"
                        fit="fill"
                      ></el-image>
                    </div>
                  </li>
                  <li class="li1">
                    <div>
                      <span class="monan_wenzi">文字 文字1</span>
                      <el-image
                        style="width: 20vw; height: 21.8vh"
                        :src="require('@/assets/yujing.jpg')"
                        fit="fill"
                      ></el-image>
                    </div>
                  </li>
                  <li class="li1">
                    <div>
                      <span class="monan_wenzi">文字 文字1</span>
                      <el-image
                        style="width: 20vw; height: 21.8vh"
                        :src="require('@/assets/yujing.jpg')"
                        fit="fill"
                      ></el-image>
                    </div>
                  </li>
                  <li class="li1">
                    <div>
                      <span class="monan_wenzi">文字 文字1</span>
                      <el-image
                        style="width: 20vw; height: 21.8vh"
                        :src="require('@/assets/yujing.jpg')"
                        fit="fill"
                      ></el-image>
                    </div>
                  </li>
                </ul>
              </div>
            </el-card>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="18">
      <el-card class="box-card1">
        <!--        头-->
        <div
          style="
            background-color: #003377;
            top: 1vh;
            width: 78.7vw;
            height: 3.7vh;
            margin-left: -1vw;
          "
        >
          <el-image
            style="
              width: 3vw;
              height: 5.5vh;
              position: relative;
              top: -1vh;
              left: -0.8vw;
            "
            :src="require('@/assets/icon_title_dianwei@2x.png')"
            fit="fill"
          ></el-image>
          <div style="height: 74vh; width: 73vw">
            <!-- 背景色有问题 -->
            <Show />
          </div>
          <el-image
            style="
              position: relative;
              top: -79vh;
              right: -70.5vw;
              width: 1.6vw;
              height: 2.7vh;
            "
            id="Closehide"
            :src="require('@/assets/chahao.png')"
            fit="fill"
          ></el-image>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
<style  lang="scss"  scoped>
.monan_wenzi
{
  position: relative;
  top:4vh;
  left: 4vw;
}

::v-deep .el-input__inner {
  width: 6vw;
  background-color: transparent !important;
}

//识别空格
.span {
  color: #ffffff;
  white-space: pre;
  font-weight: bold;
}
.ul1 {
  position: relative;
  width: 21.3vw;
  height: 76.3vh;
  margin-left: 0vw;
  overflow: scroll;
}
.li1 {
  color: #ffffff;
  position: relative;
  left: -5vw;
  //width: 16vw; height: 21.8vh;

  width: 21.3vw;
  line-height: 10vh;
}
::v-deep .box-card3 {
  z-index: 100;
  position: relative;
  top: 2.6vh;
  left: -0.7vw;

  height: 76.9vh;
  width: 37vw;

  border: 0.3vw;
  border-color: #ffffff;
  background-color: #000088;
  padding: 0.1vw 0.1vw;
}
.box-card3 ::v-deep .el-card__body {
  padding: 0vw 0vw;
}
::v-deep
//下拉框面板
.el-select-dropdown {
  font-size: calc(0.5rem + 1.5vmin);
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
.select_shijian {
  //color: #FFFFFF;

  background: transparent;
  width: 4.7vw;
  position: relative;
  right: -15vw;
  top: 2.1vh;
  //right: 0px;
}

.select_shebei {
  background: transparent;
  width: 4.7vw;
  position: relative;
  top: 2.1vh;
  right: -2.5vw;
}
.box-card {
  //margin-bottom: 20px;
  margin-top: 15%;
  background-color: #000088;
  opacity: 0.7;
  height: 90vh;
  width: 22.7vw;
  padding: 0vw 0vw;
  border: none;
  z-index: 100;
}
.box-card1 {
  z-index: 100;
  margin-top: 5%;
  margin-bottom: 1.9vh;
  background-color: #000088;
  opacity: 0.7;
  height: 90vh;
  width: 72.9vw;

  padding: 0vw 0vw;
  border: none;
}
</style>


<script>
import Show from "@/views/test2/components/show";
export default {
  name: "test2",
  components: {
    Show,
  },
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            },
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            },
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            },
          },
        ],
      },
      value1: "",
      value2: "",
      cities: [
        { value: "疑似船只", label: "事件类型" },
        { value: "测试船只", label: "事件类型" },
        { value: "确认船只", label: "事件类型" },
      ],
      shebei: [
        { value: "设备1", label: "1" },
        { value: "设备2", label: "2" },
        { value: "设备3", label: "3" },
      ],
      ruleForm: {
        shebei: {},
        cities: {},
      },
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
    };
  },
};
</script>
