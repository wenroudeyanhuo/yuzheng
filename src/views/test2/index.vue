<template>
  <el-row :style="background2">
    <el-col :span="6">
      <el-card class="box-card">
        <div
          style="
            margin: 20px;
            width: 300px;
            height: 40px;
            position: relative;
            top: -10px;
            left: -20px;
          "
          class="clearfix"
          :style="background"
        >
          <!--          style="border: none" align="center"-->
          <el-image
            style="
              width: 30px;
              height: 30px;
              position: relative;
              left: 10px;
              top: 3px;
            "
            :src="require('@/assets/6.png')"
            fit="fill"
          ></el-image>
          <span style="position: absolute; color: white; left: 120px; top: 10px"
            >预警事件</span
          >
          <div style="position: relative; top: -50px">
            <div class="block" style="position: relative; top: 80px">
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
                <span style="float: right; font-size: 13px">{{
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
                <span style="float: right; font-size: 13px">{{
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
                      <span class="span">文字 文字1</span>
                      <el-image
                        style="width: 310px; height: 235px"
                        :src="require('@/assets/yujing.jpg')"
                        fit="fill"
                      ></el-image>
                    </div>
                  </li>
                  <li class="li1">
                    <div>
                      <span class="span">文字 文字1</span>
                      <el-image
                        style="width: 310px; height: 235px"
                        :src="require('@/assets/yujing.jpg')"
                        fit="fill"
                      ></el-image>
                    </div>
                  </li>
                  <li class="li1">
                    <div>
                      <span class="span">文字 文字1</span>
                      <el-image
                        style="width: 310px; height: 235px"
                        :src="require('@/assets/yujing.jpg')"
                        fit="fill"
                      ></el-image>
                    </div>
                  </li>
                  <li class="li1">
                    <div>
                      <span class="span">文字 文字1</span>
                      <el-image
                        style="width: 310px; height: 235px"
                        :src="require('@/assets/yujing.jpg')"
                        fit="fill"
                      ></el-image>
                    </div>
                  </li>
                  <li class="li1">
                    <div>
                      <span class="span">文字 文字1</span>
                      <el-image
                        style="width: 310px; height: 235px"
                        :src="require('@/assets/yujing.jpg')"
                        fit="fill"
                      ></el-image>
                    </div>
                  </li>
                  <li>
                    <div>
                      <span class="span">文字 文字1</span>
                      <el-image
                        style="width: 310px; height: 235px"
                        :src="require('@/assets/yujing.jpg')"
                        fit="fill"
                      ></el-image>
                    </div>
                  </li>
                  <li class="li1">
                    <div>
                      <span class="span">文字 文字1</span>
                      <el-image
                        style="width: 310px; height: 235px"
                        :src="require('@/assets/yujing.jpg')"
                        fit="fill"
                      ></el-image>
                    </div>
                  </li>
                  <li class="li1">
                    <div>
                      <span class="span">文字 文字1</span>
                      <el-image
                        style="width: 310px; height: 235px"
                        :src="require('@/assets/yujing.jpg')"
                        fit="fill"
                      ></el-image>
                    </div>
                  </li>
                  <li class="li1">
                    <div>
                      <span class="span">文字 文字1</span>
                      <el-image
                        style="width: 310px; height: 235px"
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
            top: 10px;
            width: 1127px;
            height: 40px;
            margin-left: -19px;
          "
        >
          <el-image
            style="
              width: 60px;
              height: 60px;
              position: relative;
              top: 100px;
              left: -15px;
            "
            :src="require('@/assets/icon_title_dianwei@2x.png')"
            fit="fill"
          ></el-image>
          <div style="height: 800px; width: 1400px">
            <!-- 背景色有问题 -->
            <Show msg="" />
          </div>
          <el-image
            style="
              position: relative;
              top: 10px;
              right: -10px;
              width: 30px;
              height: 30px;
            "
            id="Closehide"
            @click="Closehide_onclick"
            :src="require('@/assets/chahao.png')"
            fit="fill"
          ></el-image>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
<style  lang="scss"  scoped>
::v-deep .el-input__inner {
  width: 100px;
}

//识别空格
.span {
  color: #ffffff;
  white-space: pre;
  font-weight: bold;
}
.ul1 {
  position: relative;
  width: 400px;
  height: 500px;
  margin-left: 0px;
  overflow: scroll;
}
.li1 {
  color: #ffffff;

  width: 230px;
  //line-height: 50px;
}
::v-deep .box-card3 {
  z-index: 100;
  position: relative;
  top: 50px;
  left: -40px;

  height: 900px;
  width: 400px;

  border: 3px;
  border-color: #ffffff;
  background-color: #000088;
  padding: 1px 1px;
}
.box-card3 ::v-deep .el-card__body {
  padding: 0px 0px;
}
::v-deep
//下拉框面板
.el-select-dropdown {
  font-size: 30px;
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
  width: 90px;
  position: relative;
  right: -210px;
  top: 40px;
  //right: 0px;
}

.select_shebei {
  background: transparent;
  width: 90px;
  position: relative;
  top: 40px;
  right: -10px;
}
.box-card {
  //margin-bottom: 20px;
  margin-top: 15%;
  background-color: #000088;
  opacity: 0.7;
  height: 700px;
  width: 340px;
  padding: 0px 0px;
  border: none;
  z-index: 100;
}
.box-card1 {
  z-index: 100;
  margin-top: 5%;
  margin-bottom: 20px;
  background-color: #000088;
  opacity: 0.7;
  height: 700px;
  width: 1130px;

  padding: 0px 0px;
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
