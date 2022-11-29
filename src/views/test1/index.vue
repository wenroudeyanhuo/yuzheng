<template>


  <div>
<!--    地图-->
    <div style="position: absolute;top:0vh;left: 0vw">

      <div style="width:80.5vw; height: 73vh;">
        <div  style="width: 100%; height: 100%" id="map" class="map">
        </div>
      </div>
    </div>



    <div>
<!--      整个界面的块-->


    <!--    ：span分开这里了-->
    <div class="el-col-cock1">
      <el-card class="box-card">
        <div  style="height: 5vh" :style="background">
          <!--          style="border: none" align="center"-->
          <el-image style="width: 1.5vw; height: 3vh;position: relative;left: 0.6vw;top:1vh" :src="require('@/assets/2.png')" fit="fill"></el-image>
          <span  style="position: relative;top:-2.5vh;left: -1vw" class="span">                 监控/预警/巡检</span>
        </div>



        <!--        统筹整个块-->
        <div style="margin: 3vh">
<!--          弹窗-->
          <!--        第一个图片点击事件-->
          <div class="main" style="width:1.5vw; height: 3vh;">
            <el-button id="hide" @click="hide_onclick" style="width: 1.5vw; height: 3vh;"></el-button>
          </div>

          <!-- background的不透明度有问题 -->
          <div class="cover" id="box">
             <div>
              <!-- 700,1400 -->
             <div style=" height: 37vw;width: 73vw;">
              <!-- 背景色有问题 -->
                <div style="position:absolute;">
                  <div class=Show>
                    <Show />
                  </div>
                  <el-image  style="position:absolute;top:-32.5vh;left:34vw;width: 1.5vw;height: 3vh" id="Closehide" @click="Closehide_onclick" :src="require('@/assets/chahao.png')" fit="fill"></el-image>
                </div>
             </div>
             </div>
          </div>

<!--          事件弹窗-->
          <div style="z-index:105;position: relative;left: 5vw;top:50vh">
            <div class = "cov">
              <div class = "con">
<!--                内容-->
                <div style="position:relative;left:5vw;top:5vh;width: 70vw;height: 70vh;background-color: blue">
                  <div style="width:70vw;background-color:#2D93CA;height: 4vh">
                    <el-image
                      style="
                      width: 3vw;
                      height: 6vh;
                      position: relative;
                      top: -1vh;
                      left: -9.5vw;
                      "
                      :src="require('@/assets/icon_title_dianwei@2x.png')"
                      fit="fill"
                    ></el-image>
                    <button class="first" style="position: relative;top:-3vh" @click="isActive = 0">事情详情</button>
                    <button class="second" style="position: relative;top:-3vh;left: 8vw" @click="isActive = 1">实时监控</button>
                  </div>

                  <div  v-if="isActive == 0">

                    <span style="position:relative;top:-3vh;left:-29.5vw;color: white">事情详情</span>


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
<!--                    控制按钮-->





                    <div style="position: absolute;right: 10.5vw;top:4vh">

                      <div class="aside" style="display:inline;float: right;">
                        <div style="margin-left: 1vw;margin-top: 2vh;">
                          <el-image style="vertical-align:middle;" :src="require('@/assets/icon_jiankong.png')"></el-image>
                          <span class="span6">nb市</span>
                        </div>


                        <div :style="background2" style="position:relative;left:150px;height:4vh;width: 23.5vw;margin-left: 1vw">
                          <!--         vertical-align:middle;图片和文字居中 -->
                          <el-image style="width: 1.5vw; height: 3vh;margin-left:-300.5vw;vertical-align:middle;" :src="require('@/assets/6.png')" fit="fill" ></el-image>
                          <span class="span7">处理详情</span>
                        </div>
                        <!-- 描述列表       -->
                        <!-- 这里的所有数据，后台交互改变数据       -->
                        <!--      direction="vertical" 是指文字的排列方式  -->
                        <div style="position: relative;left: 230px;top:30px">


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


                      <el-button style="color:deepskyblue;background-color:transparent;position:relative;right:-15.6vw;bottom: -55vh">处理</el-button>
                    </div>
                  </div>



                  <div class="second2" v-else-if="isActive == 1">
                    <el-col :span="15">
                      <span style="position: relative;color: white;top: -20px;left: -360px">实时监控</span>


                      <div>
                        <video style="position:relative;top:25px;left:5px;width: 700px;height: 500px">
                          <source style="height: 700px;width: 700px;" :src="require('@/assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4')">
                        </video>
                      </div>
                    </el-col>
<!--                    <span style="position:relative;left:-500px;top:-20px;color: white">实时监控</span>-->
                    <el-col :span="1">
                      <div class="mo1">
                        <span style="line-height: 30px;margin-left: -480px"><font color="#f0f8ff">云台控制</font></span>
                      </div>
                      <div style="position:relative;top:70px;left: -62px;width: 170px">
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
                            <el-image style="position:relative;left:150px;top:190px;width: 170px;height: 90px;vertical-align: middle;" :src="require('@/assets/ssjk1.png')"></el-image>
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
                        <el-image style="width: 60px;height: 60px;vertical-align: middle;margin-left: 125px" :src="require('@/assets/icon_right.png')"></el-image>
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
                          <div style="position: relative;top:50px;left: -190px">
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


                <button  @click= "closeCon();" class = "dbt">确定</button >
              </div>
            </div>
          </div>







          <!--第二个图片点击事件 -->
          <!--        修改el-buton-group   调整位置 -->
          <div  class="position-button-group">
            <el-button-group>
              <el-tooltip
                v-if="cardType"
                class="item"
                effect="dark"
                placement="top-start"

              >
                <el-button  style="width: 1.5vh; height: 3vh;margin:3vh" @click="toggle" class="change"/>
              </el-tooltip>
              <el-tooltip
                v-else
                class="item"
                effect="dark"
                placement="top-start"
              >
                <el-button

                  @click="toggle"
                  class="change"
                  style="width: 1.5vw; height: 3vh;margin:3vh"
                />
              </el-tooltip>
            </el-button-group>
          </div>


          <!--          <el-image class="tupian2" style="width: 29px; height: 29px;margin:25px" :src="require('@/assets/icon_type@3x.png')" fit="fill"></el-image>-->
          <!--        第三个图片点击事件 未完成-->
          <div style="
          position: relative;
          left: -2.5vw;
          top: -14vh;
          z-index: 103;">

            <el-image id="add_overlay_zuo"  class="tupian3" style="width: 1.5vw; height: 3vh;margin:3vh" :src="require('@/assets/9.png')" fit="fill" ></el-image>
          </div>
<!--          点击图片显示定位-->



        </div>


        <!-- 如果cardType为true,则显示卡片风格 -->
        <el-row v-if="cardType">
          <el-card class="box-card2">
            <div>
              <el-image style="width: 2vw; height: 4.5vh;" :src="require('@/assets/icon_number@2x.png')" fit="fill" ></el-image>
              <div style="display:inline-block;height:2vh;width:3vw;margin-right:2vw">
              <span  class="span1">7</span>
              <span  class="span2">点位数量</span>
              </div>
              <el-image style="width: 2vw; height: 4.5vh;" :src="require('@/assets/icon_area@2x.png')" fit="fill" ></el-image>
            <div style="display:inline-block;height:2vh;width:3vw;">
              <span  class="span1">4</span>
              <span  class="span2">涉及区域</span>
            </div>
            </div>

<!--            检索-->

<!--            <div>-->
<!--              <input style="background:transparent;margin-bottom: 20px;margin-top: 20px;width:265px;height:35px;" type="text"  maxlength="11"  placeholder="输入点位关键词"></input>-->
<!--            </div>-->

<!--            <template>-->
<!--              <el-tree style="background:transparent;color: white" :data="data" :props="defaultProps"-->
<!--                       @node-click="handleNodeClick">-->
<!--              </el-tree>-->
<!--            </template>-->
            <div style="z-index:102;position:relative" class="about">
              <!--      // select框绑定的值是selectVal，也就是treeData里的value-->

              <el-select

                :popper-append-to-body="false"
                v-model="selectVal"
                placeholder="请选择..."
                size="mini"
                clearable
                ref="select"
                style="width: 14vw"
              >
                <!--        // 设置一个input框用作模糊搜索选项功能-->
                <el-input
                  class="input"
                  placeholder="请输入要查询的点位"
                  prefix-icon="el-icon-search"
                  v-model="treeFilter"
                  size="mini"
                  clearable
                ></el-input>
                <!--        // 设置一个隐藏的下拉选项，选项显示的是汉字label，值是value-->
                <!--        // 如果不设置一个下拉选项，下面的树形组件将无法正常使用-->
                <el-option hidden key="id" :value="selectVal" :label="selectName">
                </el-option>
                <!--        // 设置树形控件-->
                <el-tree
                  :data="treeData"
                  :props="defaultProps"
                  @node-click="handleNodeClick"
                  :expand-on-click-node="false"
                  :check-on-click-node="true"
                  ref="tree"
                  node-key="id"
                  :default-expand-all="true"
                  :filter-node-method="filterNode"
                >
                  <!--          // @node-click：树形控件选项点击事件-->
                  <!--          // :expand-on-click-node：使树形控件只有点箭头图标的时候才会展开或者收缩节点，为false则点文字直接选中该项-->
                  <!--          // :check-on-click-node：是否在点击节点的时候选中节点，当选项为复选框时有用，这个属性可以删除-->
                  <!--          // :default-expand-all：默认展开所有节点-->
                  <!--          // :filter-node-method：实现搜索功能的筛选方法-->

                  <span slot-scope="{ data }">
<!--        //选项用插槽来显示，匹配搜索功能，并方便增加tag标签需求-->
          <span>{{ data.label }}</span>
          <el-tag
            size="mini"
            style="margin: 0 1vh"
            v-show="filterorgType(data.tag)"
          >{{ filterorgType(data.tag) }}</el-tag
          >
        </span>
                </el-tree>
              </el-select>
            </div>
            <div style="z-index: 101">
                          <el-tree style="background:transparent;color: white" :data="treeData" :props="defaultProps"
                                   @node-click="handleNodeClick">
                          </el-tree>
            </div>



          </el-card>


        </el-row>

        <!-- 如果cardType为false则显示列表风格 -->
        <el-row
          v-else
          ref="ruleForm"
          style="width: 100%; font-size: calc(0.7rem + 0.1vmin) ;position:relative;top: -5vh"
          :model="ruleForm"
        >
          <el-select   v-model="ruleForm.cities" :popper-append-to-body="false"  clearable prop-class="select-down" placeholder="事件类型"  class="select_shijian" >
            <el-option
              v-for="item in cities"
              :key="item.value"
              :label="item.label"
              :value="item"
            >
              <span style="color:white;float: left">{{ item.label }}</span>
              <span style="color:white;float: right;font-size: calc(0.65rem + 0.1vmin);">{{ item.value }}</span>
            </el-option>
          </el-select>




          <el-select v-model="ruleForm.shebei"  :popper-append-to-body="false"  clearable prop-class="select-down" placeholder="设备"  class="select_shebei">
            <el-option
              v-for="item in shebei"
              :key="item.value"
              :label="item.label"
              :value="item">
              <span style="color:white;float: left">{{ item.label }}</span>
              <span style="color:white;float: right;font-size: calc(0.65rem + 0.1vmin)">{{ item.value }}</span>
            </el-option>
          </el-select>

          <!--          日期范围选择-->
          <div class="block1">
            <el-date-picker v-model="startDate" type="daterange" range-separator=" 至 " start-placeholder="开始日期" end-placeholder="结束日期"
                            style="background: transparent;position: absolute;top: 4.5vh;width:14vw;color: #FFFFFF" value-format="yyyy-MM-dd" @change="handleStartDateChange">
            </el-date-picker>
          </div>





          <el-select v-model="ruleForm.chulizhuangtai"  :popper-append-to-body="false"  clearable prop-class="select-down" placeholder="处理状态"  class="select_chulizhuangtai">
            <el-option
              v-for="item in chulizhuangtai"
              :key="item.value"
              :label="item.label"
              :value="item">
              <span style="color:white;float: left">{{ item.label }}</span>
              <span style="color:white;float: right;font-size: calc(0.65rem + 0.1vmin)">{{ item.value }}</span>
            </el-option>
          </el-select>


          <!--          <div class="for_brach" v-for="(contents,index) in for_brach" :key="index">-->
          <!--            <div>-->
          <!--              <el-image :src="contents.src"/>-->
          <!--              <p v-html="contents.title"></p>-->
          <!--            </div>-->

          <!--          </div>-->

          <!--懒加载-->
          <!--          <template>-->
          <!--            <div class="demo-image__lazy">-->
          <!--              <el-image v-for="url in urls" :key="url" :src="url" label="图片git pull --rebase origin master"></el-image>-->
          <!--            </div>-->
          <!--          </template>-->
          <!--          这里我打算继续用卡片-->
          <el-card class="box-card3">
            <div>
<!--              遍历事件中的数据-->
<!--     points_shuju:[
        //宁海互通点
        {"lng":121.459519,"lat":29.476439,"count":50,"start":"2022-09-22","time":"08:00:57","zhuangtai":"待处理","leixing":"疑似船只"},
        {"lng":121.451902,"lat":29.463075,"count":51,"start":"2022-09-23","time":"09:00:57","zhuangtai":"待处理","leixing":"疑似船只"},
        {"lng":121.442272,"lat":29.463326,"count":15,"start":"2022-09-24","time":"10:00:57","zhuangtai":"待处理","leixing":"疑似船只"},
        {"lng":121.450608,"lat":29.469081,"count":40,"start":"2022-09-25","time":"11:00:57","zhuangtai":"待处理","leixing":"疑似船只"},
        {"lng":121.449314,"lat":29.476501,"count":100,"start":"2022-09-26","time":"12:00:57","zhuangtai":"待处理","leixing":"疑似船只"},
        {"lng":121.4611,"lat":29.468578,"count":6,"start":"2022-09-27","time":"13:00:57","zhuangtai":"待处理","leixing":"疑似船只"},
        {"lng":121.463112,"lat":29.472225,"count":18,"start":"2022-09-28","time":"14:00:57","zhuangtai":"待处理","leixing":"疑似船只"},
        {"lng":121.459663,"lat":29.462414,"count":80,"start":"2022-09-29","time":"15:00:57","zhuangtai":"待处理","leixing":"疑似船只"},
        //望台山左121.519867,29.512371-->
              <div>
                <ul class="ul1">

                <li v-model="shijian_weizhi" v-for="lan in points_shuju">
<!--                  给图片添加一个点击事件-->
                  <el-image @click="shijian_click(lan)"  style="width:14vw; height: 18vh;" :src="require('@/assets/yujing.jpg')" fit="fill" ></el-image>

                  <div style="font-size:calc(0.9rem + 0.1vmin);position:relative;top:0.5vh;color:white;">
                    {{lan.leixing}}
                   </div>
                  <div style="width:2vw;height:1.5vh;background-color:red;position:relative;top:-1vh;left:12vw;color:white;">
                  {{lan.zhuangtai}}
                  </div>

                </li>
                </ul>
              </div>


            </div>
          </el-card>





        </el-row>

      </el-card>
    </div>


<!--    ：span分开这里了-->
    <div style="z-index: 101">
      <div class="el-col-cock2" style="position:absolute;">
      <el-card class="box-card4">
<!--        多选框-->
          <el-checkbox-group style="width: 2.5vw;height: 10vh" v-model="checkList" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="layer in showlayers" :label="layer" :key="layer">{{layer}}</el-checkbox>
          </el-checkbox-group>
      </el-card>

      </div>

    <!--    ：span分开这里了-->

      <div class="el-col-cock3" style="position: absolute">

      <el-card class="box-card1">
        <div style="height: 4vh" :style="background">
          <!--          style="border: none" align="center"-->
          <el-image style="position:relative;left:0.5vw;top:0.5vh;width: 1.5vw; height: 3vh" :src="require('@/assets/6.png')" fit="fill" class="tempimg"></el-image>
          <span style="font-size: calc(1rem + 0.1vmin)" class="span">            预警数统计</span>
        </div>
        <div style="position: relative;">
          <el-image style="width: 6vw; height: 8vh" :src="require('@/assets/1.png')" fit="fill" ></el-image>
          <div style="position: relative;top:-15vh">
          <div class="wenzi_1">
            <span style="font-size:calc(0.65rem + 0.1vmin);color: white;" class="span">今日预警数  </span>
            <span style="font-size:calc(1rem + 0.1vmin);color: yellow;">6</span>
          </div>
          <div class="wenzi_2">
            <span style="font-size:calc(0.65rem + 0.1vmin);color: white;" class="span">本月预警数  </span>
            <span style="font-size:calc(1rem + 0.1vmin);color: yellow;">89</span>
          </div>
          <div class="wenzi_3">
            <span style="font-size:calc(0.65rem + 0.1vmin);color: white;" class="span">累计预警数  </span>
            <span style="font-size:calc(1rem + 0.1vmin);color: yellow;">976</span>
          </div>
          </div>
        </div>


          <div  style="height: 4vh" :style="background">
            <!--          style="border: none" align="center"-->
            <el-image style="position:relative;left:10px;top:0.5vh;width: 30px; height: 3vh" :src="require('@/assets/6.png')" fit="fill" ></el-image>
            <span  style="font-size: calc(1rem + 0.1vmin)" class="span">           处理数统计</span>
          </div>
          <div style="position:relative;">
            <el-image style="width: 6vw; height: 11vh;display: inline-block;" :src="require('@/assets/4.png')" fit="fill" class="tempimg"></el-image>
            <div style="position: relative;left:-1vw;top:-12vh">
            <div class="wenzi_4">
              <span style="font-size:calc(0.65rem + 0.1vmin);color: white;" class="span">今日处理数  </span>
              <span style="font-size:calc(1rem + 0.1vmin);color: yellow;">0</span>
            </div>
            <div class="wenzi_5">
              <span style="font-size:calc(0.65rem + 0.1vmin);color: white;" class="span">本月处理数  </span>
              <span style="font-size:calc(1rem + 0.1vmin);color: yellow;">2</span>
            </div>
            <div class="wenzi_6">
              <span style="font-size:calc(0.65rem + 0.1vmin);color: white;" class="span">累计处理数  </span>
              <span style="font-size:calc(1rem + 0.1vmin);color: yellow;">53</span>
            </div>
            </div>
          </div>
        <!-- </div> -->





      <div style="position: relative;top:-1.5vh">
        <div  style="height: 4vh" :style="background">
          <!--          style="border: none" align="center"-->
          <el-image style="position:relative;left:0.5vw;top:0.5vh;width: 1.5vw; height: 3vh" :src="require('@/assets/6.png')" fit="fill" class="tempimg"></el-image>
          <span style="font-size: calc(1rem + 0.1vmin)" class="span">            事件趋势日历</span>
        </div>
        <div>
          <Calendar
            :date="new Date()"
            @enter="mouseenter"
            @leave="mouseleave"
            @changeMonth="changeMonth"
            style="width:14vw;height:40vh"
          >
            <!-- 可使用动态插槽名设置，v-slot:[slotName] -->
            <template v-slot:2022-5-21>
              <div style="position:absolute;bottom:-2vh">今天</div>
            </template>
          </Calendar>
        </div>
</div>
        <!--        <div>-->
        <!--          <el-calendar v-model="valueData">-->
        <!--            <template-->
        <!--              slot="dateCell"-->
        <!--              slot-scope="{data}">-->
        <!--              &lt;!&ndash;自定义内容&ndash;&gt;-->
        <!--              <div>-->
        <!--                <div class="calendar-day" >{{ data.day.split('-').slice(2).join('-') }}</div>-->
        <!--              </div>-->
        <!--            </template>-->
        <!--          </el-calendar>-->
        <!--        </div>-->

      </el-card>

        </div>
      </div>
    </div>
  </div>
</template>
<style  lang="scss"  scoped>
//事件弹窗
.mo1{
  position:relative;
  background-color: #203f5e;
  height: 30px;
  width: 570px;
  top:22px;
  left:-65px;
}

.mo2{
  position:relative;
  height: 250px;
  width: 250px;
  top:130px;
  left:30px;
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
  left:-50px;
}

.mo5{
  position:relative;

  height: 250px;
  width: 420px;
  top:110px;
  left:-110px;
}

.mo6{
  position:relative;
  height: 250px;
  width: 400px;
  top:-50px;
  left:-100px;
}

.mo7{
  position:relative;
  height: 250px;
  width: 400px;
  top:-145px;
  left:-200px;
}
.mo8{
  position:relative;
  height: 250px;
  width: 400px;
  top:-345px;
  left:-200px;
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
.scrollbar-flex-content {
  display: flex;
  height: 19vh;
  width: 10vw;
}
.scrollbar-demo-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10vw;
  height: 19vh;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-danger-light-9);
  color: var(--el-color-danger);
}
.aside{
  height: 80vh;
  width: 21vw;
  position: relative;
  left: -100px;
  background-color: transparent;
}
.span6{
  color:#dce7e7;
  /*解决父子元素margin叠加问题*/
  display:inline-block;
  margin: 3vh 0 3vh 0.5vw;
}
.span7{
  /*  !*解决父子元素margin叠加问题*!
    display:inline-block;*/
  margin-left:2vw;
  /*  margin-bottom: 30px;*/
  line-height: 4vh;
  color:#dce7e7;
  font-size: calc(1rem + 0.1vmin);
}
.video-js{

  width: 41vw;
  height: 40vh;

}
.video_text{
  z-index: 100;
  width:41.5vw;
  height:40vh;
}
.first{
  position: relative;
  color:#d9effe;
  background: transparent;
  border: none;
  margin-left: 41.5vw;
  top:-1vh;

}
.second{
  top:-1vh;
  position: relative;
  color:#d9effe;
  background: transparent;
  border: none;
}
.cov{
  background-color:rgba(0, 0, 0, 0.5);
  z-index:99999;
  display:none;
  text-align:center;
  font-size: calc(1rem + 0.1vmin);
}
.con{
  z-index:99999;
  width:80.5vw;
  height:80vh;
  background-color:black;
  position:fixed;
  right:0%;
  top:0%;
}
.ptitle{
  width:100%;
  height:3.5vh;
  background-color:#3daae9;
  color:white;
  line-height:3.5vh;
}
.dbt{
  border-radius: 5px;
  width: 3.5vw;
  height:3vh;
  background-color:#3daae9;
  right:1vw;
  bottom:2vh;
  position:absolute;
  line-height:3vh;
  color:white;
}
::v-deep .el-range-separator{
  font-size: calc(1rem + 0.1vmin);
  position: relative;
  top:0.3vh;
  right: 0.15vw;
}
//input 字体大小
::v-deep input::-webkit-input-placeholder {
  /* placeholder颜色  */
  color: white;
  /* placeholder字体大小  */
  font-size: calc(1rem + 0.1vmin);
}
.test{
  width: 26vw;
  height: 30vh;
  background-color: #eee;
}
//地图
/* 隐藏四个边角 */
.BMap_pop div:nth-child(1) {
  display:none;
}
.BMap_pop div:nth-child(3) {
  display:none;
}
.BMap_pop div:nth-child(5) {
  display:none;
}
.BMap_pop div:nth-child(7) {
  display:none;
}

//弹出框内容
::v-deep .BMap_pop img{
  top:2vh !important;
  left: 13vw !important;
  width: 0.8vw !important;
  height: 1.5vh  !important;
;
}
::v-deep .BMap_top,
::v-deep .BMap_center,
::v-deep .BMap_bottom,
::v-deep .BMap_pop > div {
  &:not(:nth-child(9)) {
    display: none;
  }
}

::v-deep .BMap_pop div:nth-child(9) {
  //top: 30px !important;
}
::v-deep .BMap_bubble_content {
  background-image: url("~@/assets/8.png");
  //border-top: 3px solid #377abd;
  border-radius: 8px;
  background-color:#000088 ;
  opacity: 0.8;
  overflow: hidden;
  padding: 8px 5px;
  width: 13vw !important;
  height: 20.5vh !important;
}

//去掉版权
::v-deep .BMap_cpyCtrl {
  display: none;
}
::v-deep .anchorBL {
  display: none;
}

input::-webkit-input-placeholder {
  /* placeholder颜色 */
  color: #aab2bd;
  /* placeholder字体大小 */
  font-size: calc(0.75rem + 0.1vmin);
}
::v-deep .el-tree{
  background-color:transparent;
}

::v-deep .el-tree-node > .el-tree-node__content {
  font-size: calc(1.25rem + 0.1vmin);
  background-color: transparent;
  color: white; //节点的字体颜色
  margin-top: 1vh;
}
//选中的时候
::v-deep .el-tree-node:hover > .el-tree-node__content {
  //background-color: transparent;
  font-size: calc(1.25rem + 0.1vmin);
  color: white; //节点的字体颜色
  background-color: #1a578b;
  font-weight: bold;
}
//选中的时候
::v-deep .el-tree-node.is-current:focus > .el-tree-node__content {
  //background-color: transparent;
  font-size: calc(1.25rem + 0.1vmin);
  color: white; //节点的字体颜色
  background-color: #1a578b;
  font-weight: bold;
}

.tab_title {
  position: relative;
}
//
.position-button-group {
  height: 3vh;
  width: 1.5vw;
  position: relative;
  top: -7vh;
  left: 5vw;
  z-index: 101;
}

//切换表格
::v-deep .change {
  background-image: url("/../../assets/icon_type@3x.png");
}
//.card-toggle-table{
//  position: fixed;
//}
//el-col  z-index问题

::v-deep .el-col-cock1 {
  position: absolute;
  top: 9vh;
  left: 1vw;
  z-index: 102;
}
::v-deep.el-col-cock2 {
  top: -2vh;
  left:62.5vw;
  right:10.5vw;
  //330px
  top: -5.5vh;

  right: 17vw;
  z-index: 101;
}
::v-deep.el-col-cock3 {
  top: 9vh;
  left: 62.5;
  right:0.5vw;

  z-index: 101;
}
//手写弹窗1
.main {
  background-image: url("~@/assets/icon_jiankong.png");
  position: relative;
  left: 0.5vw;
  top: -1vh;
  z-index: 102;
}

.main span {
  font-size: calc(1rem + 0.1vmin);
  color: #fff;
}
.main2 {
  background-color: transparent;
  position: relative;
  left: 0.5vw;
  top: 20vh;
  z-index: 99999;
}

.main2 span {
  font-size: calc(1rem + 0.1vmin);
  color: #fff;
}


.cover {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  z-index: 99999;
  //opacity: 1.5;
}

.cover > div {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
}

.cover div div {
  // width: 90%;
  // height: 70%;
  //background: #000088 ;

  background: rgba($color: #000088, $alpha: 70%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
}

.cover div div span {
  color: white;
  font-size: calc(1rem + 0.1vmin);
  z-index: 99999;
}

#box {
  display: none;
}

::v-deep .el-descriptions__body {
  background: transparent;
}
//::v-deep .el-descriptions-item{
//  background: transparent;
//}

.btn {
  /* background-color: #fff; */
  border-radius: 4px;
  border: 1px solid blue;
  padding: 4px 12px;
}
//点击前的样式
::v-deep .el-radio__inner {
  border-radius: 0;
  width: 1vw;
  height: 2vh;
  color: #ffffff;
}
.el-radio__inner::after {
  width: 1vw;
  height: 2vh;
  //让圆框变成方框
  border-radius: 0;
  color: #ffffff;
}
//点击后的字体颜色
.el-radio__input.is-checked + .el-radio__label {
  color: #ffffff;
}
//::v-deep .el-card__body{
//  //padding: 0px 0px;
//
//}
.ul1 {
  position: relative;
  width: 21vw;
  height: 50vh;
  margin-left: 0;
  overflow: scroll;
}
.li1 {
  color: #ffffff;

  width: 12vw;
  //line-height: 50px;
}
/* 滚动条 */
body *::-webkit-scrollbar {
  width: 0.25vw;
  height: 0.5vh;
}
body *::-webkit-scrollbar-track {
  background: #fff;
  border-radius: 2px;
}
body *::-webkit-scrollbar-thumb {
  background: rgb(205, 206, 206);

  border-radius: 10px;
}
body *::-webkit-scrollbar-thumb:hover {
  background: #333;
}
body *::-webkit-scrollbar-corner {
  background: #fff;
}
.table {
  color: #ffffff;
  height: 70vh;
  overflow: hidden;
}
.table:hover {
  height: 70vh;
  overflow-y: auto;
}
.el-tab-pane {
  height: 50vh;
  overflow-y: auto;
}
//懒加载
img[lazy="loading"] {
  display: block;
  width: 8vw !important;
  height: 15vh !important;
  margin: 0 auto;
}

//for_brach
.demo-image__lazy {
  font-size: 15px;
  color: #ffffff;
  position: relative;
  top: 13vh;
  height: 50vh;
  overflow-y: auto;
}
.demo-image__lazy .el-image {
  display: block;
  min-height: 20vh;
  margin-bottom: 0.5vh;
}
.demo-image__lazy .el-image:last-child {
  margin-bottom: 0;
}
.for_brach {
  top: 30vh;
  color: #ffffff;
}
.block1 {
  padding: 10px 0px;
  background: transparent;
  color: #ffffff;
}
::v-deep .el-range-input {
  color: #ffffff;
  background: transparent;
}
::v-deep .el-range-separator {
  background: transparent;
  color: #ffffff;
}

//输入框

::v-deep .el-input__inner {
  padding: 0;
  background-color: transparent;
  color: white;
  //border: none;
  font-size: 18px;
}
::v-deep
  //下拉框面板
.el-select-dropdown {
  background-color:#000088;
  font-size: 30px;
  color: black;
  //background-color:transparent;
}
::v-deep .el-popper {
  color: black;
}
::v-deep .el-select-dropdown__item {
  background-color: transparent;
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
  font-size: 10px;
  background: transparent;
  width: 11vw;
  position: absolute;
  top: -1vh;
  left: 0;
}

.select_shebei {
  background: transparent;
  width: 6.5vw;
  position: absolute;
  top: 10vh;
}
.select_chulizhuangtai {
  background: transparent;
  width: 6.5vw;
  position: absolute;
  top: 10vh;
  left: 130px;
}

* {
  padding: 0; //去掉默认内边距，也就是ul标签左边的内边距40px；
  margin: 0; //去掉li的外边距。
}
ul {
  list-style: none; //去掉标签默认的左边符号
  flex-wrap: wrap;
}
li {
  list-style-type: none; //去掉标签默认的左边符号
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
::v-deep .el-calendar__header {
  padding: 0px;
}

::v-deep .el-calendar__button-group {
  width: 100%;
}

::v-deep .el-button-group {
  display: flex;
  //justify-content: space-around;
  align-items: center;
}

//::v-deep .el-button-group > .el-button:first-child span,
//::v-deep .el-button-group > .el-button:last-child span {
//  display: none;
//}

::v-deep .el-button {
  border: 0;
  background: transparent;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 0.5vh;
}

::v-deep .el-calendar-table thead > th {
  color: #00928c;
  border-bottom: 1px solid #00928c;
}

::v-deep .el-calendar-table td.is-selected {
  // background: transparent;
  color: #00928c;
  font-weight: 500;
}

::v-deep .el-calendar-table td.is-today {
  font-weight: 500;
}

::v-deep .el-calendar__body {
  padding: 0px 6px 0px;
}

::v-deep .el-calendar-table .el-calendar-day {
  width: 1.5vw;
  height: 3vh;
}
::v-deep .el-calendar__title {
  display: none;
}
// 日历内容部分
.cell-container {
  height: 100%;
  width: 100%;

  position: relative;
}
.word-container {
  height: 100%;
  font-size: 12px;
  .date {
    font-size: 16px;
    z-index: 100;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 2vh;
  }
  .solar-terms {
    z-index: 100;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 2vh;
  }
  .festival {
    position: absolute;
    font-weight: bold;
    margin: 1vh 0 0 0.5vw;
    z-index: 100;
  }
  .red-word {
    color: #ff4949;
    position: absolute;
    z-index: 100;
  }
}

>>> .el-calendar-day {
  margin: 0.4vh;
  padding: 0;
  border-radius: 8px;
  background: rgba(202, 249, 240, 0.4);
}

// 日历样式
>>> .el-calendar__header .el-calendar__title {
  position: absolute;
}

>>> .el-calendar__button-group {
  width: 100%;
}

>>> .el-button-group {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

//第二张图片作用在点击上
>>> .el-button-group > .el-button:first-child:before {
  content: url("~@/assets/icon_type@3x.png");
}

>>> .el-button-group > .el-button:last-child:before {
  content: url("~@/assets/icon_type@3x.png");
}

>>> .el-button-group > .el-button:first-child span,
>>> .el-button-group > .el-button:last-child span {
  display: none;
}

>>> .el-button {
  border: 0;
  background: transparent;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 0.5vh;
}

>>> .el-calendar-table td {
  border: 0;
}
>>> .el-calendar-table tr td:first-child {
  border: 0;
}
>>> .el-calendar-table tr:first-child td {
  border: 0;
}
>>> .el-calendar-table td.is-selected {
  background: transparent;
}
>>> .el-calendar-table td.is-today {
  font-weight: bold;
}
// 不能预约的遮罩层
.wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(253, 227, 228, 0.8);
  border-radius: 8px;
}
.tupian {
  z-index: 100;
  position: absolute;
  left: 71vw; //只是假定的值，具体需测量
  top: 8vh;
}
//点击事件中的图片
.tupian2 {
  z-index: 100;
  position: absolute;
  left: 6vw; //只是假定的值，具体需测量
  top: 4.5vh;
}
.tupian3 {
  z-index: 100;
  position: absolute;
  left: 10.5vw; //只是假定的值，具体需测量
  top: 4vh;
}
.wenzi_1 {
  position: absolute;
  left: 7vw; //只是假定的值，具体需测量
  top: 7vh;
  z-index: 101;
}
.wenzi_2 {
  position: absolute;
  left: 7vw; //只是假定的值，具体需测量
  top: 10vh;
  z-index: 101;
}
.wenzi_3 {
  position: absolute;
  left: 7vw; //只是假定的值，具体需测量
  top: 13vh;
  z-index: 101;
}
//第二个区块
.wenzi_4 {
  position: absolute;
  right: 1vw;
  top: 2vh;
  z-index: 101;
}
.wenzi_5 {
  position: absolute;
  right: 1vw;
  top: 5vh;
  z-index: 101;
}
.wenzi_6 {
  position: absolute;
  right: 0.5vw;
  top: 8vh;
  z-index: 101;

}
.index_backcol {
  background-color: #000088;
  color: #ffffff;
}

::v-deep .collapse-title {
  color: #ffffff;
  background-color: #000088;
  flex: 1 0 90%;
  order: 1;
  .el-collapse-item__header {
    //background-color:#000088 ;
    flex: 1 0 auto;
    //order: 0;
    background: transparent;
  }
}
.el-collapse-item__arrow {
  display: none;
}
.el-icon-arrow-right:before {
  content: "" !important;
}

input[type="text"],
input[type="password"],
input[type="email"] {
  -web-kit-appearance: none;
  -moz-appearance: none;
  outline: 0;

  box-sizing: border-box;
  text-align: left;
  font-size: 1.2em;
  height: 2.1em;
  border-radius: 5px;
  border: 1px solid #c8cccf;
  color: white;
  display: block;
  padding: 0 1em;
  text-decoration: none;
  width: 100%;
}
input::-webkit-input-placeholder {
  color: white;
}

.text {
  font-size: calc(0.8rem + 0.3vmin);
}
.span {
  font-size:calc(0.8rem + 0.3vmin);
  color: #ffffff;
  white-space: pre;
  font-weight: bold;
}
.span1 {
  color: #ffffff;
  display: inline-block;
  overflow: hidden;
  font-size: calc(1rem + 0.1vmin);
}
.span2 {
  color: #ffffff;
  display: inline-block;
  overflow: hidden;
  color: #71a3db;
  font-size:calc(0.8rem + 0.1vmin);
}
::v-deep .item {
  background-image: url("/../../assets/icon_type@3x.png");
  margin-bottom: 2vh;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.box-card {
  background-color: #000088;
  opacity: 0.9;
  height: 80vh;
  width: 15.5vw;

  padding: 0 0;
  border: none;
  z-index: 101;
}
.box-card1 {
  background-color: #000088;
  height: 80vh;
  width: 15.5vw;

  padding: 0 0;
  border: none;
  z-index: 100;
}
.box-card2 {
  z-index: 100;
  margin-top: -7vh;

  margin-bottom: 2vh;
  background-color: #000088;
  opacity: 0.7;
  height: 70vh;
  width: 15.5vw;

  padding: 0 0;
  border: none;
}
.box-card2 ::v-deep .el-card__body {
  padding-top: 2vh;
  padding-right: 0;
  padding-bottom: 0.5vh;
  padding-left: 0;
}
.box-card3 {
  z-index: 100;
  position: relative;
  margin-top: 13vh;
  height: 70vh;
  width: 16.5vw;

  border: 3px;
  border-color: #ffffff;
  background-color: #000088;
  padding: 1px 1px;
}
.box-card3 ::v-deep .el-card__body {
  padding: 0 0;
}

.box-card4 {
  //display: flex;
  position: absolute;
  top: 61vh;

  left: -10.5vw;
  right: 5vw;
  height: 20vh;
  width: 8vw;
  padding: 0 0;
  border: none;
  background-color: #000000;
  opacity: 0.7;
}
.card_bottom {
  line-height: 4vh;
}
// // radio选中改为勾勾
// .el-radio__input.is-checked .el-radio__inner::after {
//   content: "";
//   width: 10px;
//   height: 5px;
//   border: 2px solid white;
//   border-top: transparent;
//   border-right: transparent;
//   text-align: center;
//   display: inline-block;
//   position: absolute;
//   top:600px;
//   left: -200px;
//   vertical-align: middle;
//   transform: rotate(-45deg);
//   border-radius: 0px;
//   background: none;
// }

.app-wrapper {
  background-image: url("~@/../public/位图.png");
  height: 100vh;
  width: 100%;
  position: fixed;
  background-size: 100% 100%;
}
.el-header {
}
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 6vh;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 20vh;
}

.el-main {
}

body > .el-container {
  margin-bottom: 3vh;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 26vh;
}

.el-container:nth-child(7) .el-aside {
  line-height: 32vh;
}
//.el-icon-1{
//
//  border: none;
//  background-image: url('~@/../public/2.png');
//  width:5px;
//  height: 2px;
//
//}
.el-icon-2 {
  border: none;
  opacity: 0.3;
}

.el-icon-monan {
  background: url("~@/../public/icon_jiankong.png");
  width: 1vw;
  height: 3vh;
  /*border: 2px dashed;*/
  border-radius: 20px;
}
.el-icon-monan2 {
  background: url("~@/../public/icon_type@3x.png");
  width: 1vw;
  height: 2vh;
  /*border: 2px dashed;*/
  border-radius: 20px;
}
.el-icon-liuyanban {
  background: url("~@/../public/9.png");
  width: 1vw;
  height: 2vh;
  /*border: 2px dashed;*/
  border-radius: 20px;
}

.box {
  box-sizing: border-box;
  width: 8vw;
  height: 10vh;
  padding: 10px;
  border: 2px solid green;
  background: blue;
  overflow: auto;
}

.el-checkbox__input.is-disabled + span.el-checkbox__label {
  color: hsl(0, 100%, 100%);
  cursor: not-allowed;
}

</style>

<script>
import Header from "../home/components/header";
import { getOrderDate, updateWorkdate } from "@/api/calendar";
import Calendar from "@/components/Calendar.vue";
import Show from "@/views/test1/components/show";
import moment from "moment";
import CAlert from "./components/CAlert";
import Item from "../../layout/components/Sidebar/Item";
const layersOptions = ['点位显示', '覆盖范围','事件显示','热力图'];
export default {
  name: "home",
  props: [""],
  components: {
    Header,
    Calendar,
    Show,
    CAlert
  },
  data() {
    return {
      // 时间弹窗
      pageSize: 1,
      currentPage: 0,
      listArray: [
        {
          'school': '河南农业大学',
          'img':require('@/assets/yujing.jpg'),
          'videoUrl': require("../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school': '郑州大学',
          'img':require('@/assets/yujing.jpg'),
          'videoUrl': require("../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school': '河南工业大学',
          'img':require('@/assets/yujing.jpg'),
          'videoUrl': require("../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school': '河南农业大学',
          'img':require('@/assets/yujing.jpg'),
          'videoUrl': require("../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school': '河南理工大学',
          'img':require('@/assets/yujing.jpg'),
          'videoUrl': require("../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school': '河南理工大学',
          'img':require('@/assets/yujing.jpg'),
          'videoUrl': require("../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school': '河南理工大学',
          'img':require('@/assets/yujing.jpg'),
          'videoUrl': require("../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school': '河南理工大学',
          'img':require('@/assets/yujing.jpg'),
          'videoUrl': require("../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school': '河南理工大学',
          'img':require('@/assets/yujing.jpg'),
          'videoUrl': require("../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school': '河南理工大学',
          'img':require('@/assets/yujing.jpg'),
          'videoUrl': require("../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school': '河南理工大学',
          'img':require('@/assets/yujing.jpg'),
          'videoUrl': require("../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school': '河南理工大学',
          'img':require('@/assets/yujing.jpg'),
          'videoUrl': require("../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school': '河南理工大学',
          'img':require('@/assets/yujing.jpg'),
          'videoUrl': require("../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school': '河南理工大学',
          'img':require('@/assets/yujing.jpg'),
          'videoUrl': require("../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school': '河南理工大学',
          'img':require('@/assets/yujing.jpg'),
          'videoUrl': require("../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school': '河南理工大学',
          'img':require('@/assets/yujing.jpg'),
          'videoUrl': require("../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school': '河南理工大学',
          'img':require('@/assets/yujing.jpg'),
          'videoUrl': require("../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school': '河南理工大学',
          'img':require('@/assets/yujing.jpg'),
          'videoUrl': require("../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
        },
        {

          'school': '河南理工大学',
          'img':require('@/assets/yujing.jpg'),
          'videoUrl': require("../../assets/video/《1024程序员公约》(嘴硬版)(Av901827024,P1).mp4")
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
      isActive:0,//默认开启第一个
      //检索
      markers:[],
      selectVal: "", // select框的绑定值
      selectName: "", // select框显示的name
      treeFilter: "", // 搜索框绑定值，用作过滤
      //value 与data相对应
      tree_value_label:[{"1":"宁海湾横山岛区"},{"1-1":"宁海互通"},{"1-2":"望台山"},{"1-3":"悬山左"},{"2":"沿海中线"},{"2-1":"乌沙山右"},{"2-2":"乌沙山"},{"3":"滨海经济开发区"},{"3-1":"咸祥公园"},{"3-2":"梅山大桥"}],
      treeData: [
        {
          value: "1",
          label: "宁海湾横山岛区",
          children: [
            {
              value: "1-1",
              label: "宁海北互通",
            },
            {
              value: "1-2",
              label: "望台山",
            },
            {
              value: "1-3",
              label: "悬山左",
            },
          ],
        },
        {
          label: "沿海中线",
          value: "2",
          children: [
            {
              value: "2-1",
              label: "胆山",
            },
            {
              value: "2-2",
              label: "乌沙山",
            },
          ],
        },
        {
          value: "3",
          label: "滨海经济开发区",
          children: [
            {
              value: "3-1",
              label: "咸祥渔业公园",
            },
            {
              value: "3-2",
              label: "梅山湾",
            },
          ],
        },
      ],
      // defaultProps: {
      //   children: "children",
      //   label: "name",
      // },
      // 标签数组
      tagList: [
        // { value: "wife", label: "老婆" },
        // { value: "princess", label: "小公主" },
        // { value: "yyds", label: "天下第一" },
      ],
      isShow:false,
      //多选
      showlayers: layersOptions,
      checkList: [],
      //地图
      heatmapOverlay: new BMapLib.HeatmapOverlay({ radius: 20 }),

      innerVisible: false,
      tab: 0, //默认选中第一个tab
      //手写弹窗的数据
      box: document.getElementById("box"),
      hide: document.getElementById("hide"),

      CloseHide: document.getElementById("Closehide"),

      //
      radio: "1",
      //for_barch
      for_brach: [
        { title: "1", src: require("@/assets/for_brach/1.jpg"), key: 0 },
        { title: "2", src: require("@/assets/for_brach/2.jpg"), key: 1 },
        { title: "3", src: require("@/assets/for_brach/3.jpg"), key: 2 },
      ],
      urls: [
        "",
        "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
        "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
        "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
        "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
        "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
        "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
      ],
      urls_test: [
        {
          title: "1",
          url: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
        },
        {
          title: "2",
          url: "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
        },
      ],
      //日期范围选择
      startDate: "",

      // selectedArray: [],
      aString: ["宁波松岙大埠1", "宁波松岙大埠1", "宁波松岙大埠3"],
      aString1: ["海曙大埠1", "海曙大埠2", "海曙大埠3"],
      aString2: ["镇海大埠1", "镇海大埠2", "镇海大埠3"],
      cardType: true,
      /*测试弹框添加的新内容*/
      currentDay: new Date(),
      currentDateList: [],
      value: new Date(),
      ruleForm: {
        shebei: {},
        cities: {},
        chulizhuangtai: {},
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
        backgroundImage: 'url(' + require('@/assets/bg_title@2x.png') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '60%',
      },
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
      chulizhuangtai: [
        { value: "待处理", label: "1" },
        { value: "已处理", label: "2" },
      ],
      data: [
        {
          label: "宁海湾横山岛区",
          children: [
            {
              label: "宁海北互通",
            },
            {
              label: "望台山",
            },
            {
              label: "悬山左",
            },
          ],
        },
        {
          label: "沿海中线",
          children: [
            {
              label: "胆山",
            },
            {
              label: "乌沙山",
            }
          ],
        },
        {
          label: "滨海经济开发区",
          children: [
            {
              label: "咸祥渔业公园",
            },
            {
              label: "梅山湾",
            },

          ],
        },
      ],
      //地图全局
      fanweiflag:null,
      circles:[],
      map:null,
      mapvLayer:null,
      dianwei:false,
      shijian:false,

      shijian_mapvLayer:null,
      shijian_weizhi:null,
      points_shuju:[
        //宁海互通点
        {"lng":121.459519,"lat":29.476439,"count":50,"start":"2022-09-22","time":"08:00:57","zhuangtai":"待处理","leixing":"疑似船只"},
        {"lng":121.451902,"lat":29.463075,"count":51,"start":"2022-09-23","time":"09:00:57","zhuangtai":"待处理","leixing":"疑似船只"},
        {"lng":121.442272,"lat":29.463326,"count":15,"start":"2022-09-24","time":"10:00:57","zhuangtai":"待处理","leixing":"疑似船只"},
        {"lng":121.450608,"lat":29.469081,"count":40,"start":"2022-09-25","time":"11:00:57","zhuangtai":"待处理","leixing":"疑似船只"},
        {"lng":121.449314,"lat":29.476501,"count":100,"start":"2022-09-26","time":"12:00:57","zhuangtai":"待处理","leixing":"疑似船只"},
        {"lng":121.4611,"lat":29.468578,"count":6,"start":"2022-09-27","time":"13:00:57","zhuangtai":"待处理","leixing":"疑似船只"},
        {"lng":121.463112,"lat":29.472225,"count":18,"start":"2022-09-28","time":"14:00:57","zhuangtai":"待处理","leixing":"疑似船只"},
        {"lng":121.459663,"lat":29.462414,"count":80,"start":"2022-09-29","time":"15:00:57","zhuangtai":"待处理","leixing":"疑似船只"},
        //望台山左121.519867,29.512371
        {"lng":121.527754,"lat":29.506336,"count":11,"start":"2022-11-30","time":"08:00:57","zhuangtai":"待处理","leixing":"疑似船只"},
        {"lng":121.527754,"lat":29.517149,"count":7,"start":"2022-11-22","time":"09:00:57","zhuangtai":"待处理","leixing":"疑似船只"},
        {"lng":121.52143,"lat":29.509102,"count":42,"start":"2022-11-22","time":"10:00:57","zhuangtai":"待处理","leixing":"疑似船只"},
        {"lng":121.525563,"lat":29.510139,"count":4,"start":"2022-11-22","time":"11:00:57","zhuangtai":"待处理","leixing":"疑似船只"},
        {"lng":121.525868,"lat":29.512245,"count":27,"start":"2022-11-21","time":"12:00:57","zhuangtai":"待处理","leixing":"疑似船只"},
        {"lng":121.52373,"lat":29.510941,"count":23,"start":"2022-11-12","time":"13:00:57","zhuangtai":"待处理","leixing":"疑似船只"},
        {"lng":121.523227,"lat":29.511774,"count":60,"start":"2022-10-2","time":"14:00:57","zhuangtai":"待处理","leixing":"疑似船只"},
        {"lng":121.52603,"lat":29.509401,"count":8,"start":"2022-10-1","time":"15:00:57","zhuangtai":"待处理","leixing":"疑似船只"},
        {"lng":121.519867,"lat":29.512371,"count":15,"start":"2022-10-23","time":"16:00:57","zhuangtai":"待处理","leixing":"疑似船只"},
        //悬山左121.564531,29.529924
        {"lng":121.560471,"lat":29.532281,"count":25,"start":"2022-10-22","time":"10:00:57","zhuangtai":"待处理","leixing":"疑似船只"},
        {"lng":121.565825,"lat":29.531464,"count":21,"start":"2022-10-22","time":"10:00:58","zhuangtai":"待处理","leixing":"疑似船只"},
        {"lng":121.563309,"lat":29.530584,"count":1,"start":"2022-10-22","time":"10:00:59","zhuangtai":"待处理","leixing":"疑似船只"},
        {"lng":121.563777,"lat":29.53093,"count":51,"start":"2022-10-22","time":"10:01:00","zhuangtai":"待处理","leixing":"疑似船只"},
        {"lng":121.564387,"lat":29.532407,"count":7,"start":"2022-10-22","time":"10:02:57","zhuangtai":"待处理","leixing":"疑似船只"},
        {"lng":121.565789,"lat":29.534512,"count":11,"start":"2022-10-22","time":"10:03:57","zhuangtai":"待处理","leixing":"疑似船只"},
        {"lng":121.567945,"lat":29.534449,"count":35,"start":"2022-10-22","time":"10:40:57","zhuangtai":"待处理","leixing":"疑似船只"},
        {"lng":121.565573,"lat":29.530804,"count":22,"start":"2022-10-22","time":"10:04:57","zhuangtai":"待处理","leixing":"疑似船只"},
        {"lng":121.564531,"lat":29.529924,"count":4,"start":"2022-10-22","time":"09:05:57","zhuangtai":"待处理","leixing":"疑似船只"},
        //东升岛 121.657137,29.549909


        {"lng":121.654748,"lat":29.551499,"count":25,"start":"2021-10-22","time":"08:00:57","zhuangtai":"待处理","leixing":"疑似船只"},
        {"lng":121.654353,"lat":29.549457,"count":3,"start":"2021-10-22","time":"09:00:57","zhuangtai":"待处理","leixing":"疑似船只"},
        {"lng":121.654999,"lat":29.550086,"count":100,"start":"2021-10-22","time":"09:00:57","zhuangtai":"待处理","leixing":"疑似船只"},
        {"lng":121.654353,"lat":29.549457,"count":87,"start":"2021-10-22","time":"09:00:57","zhuangtai":"待处理","leixing":"疑似船只"},
        {"lng":121.655556,"lat":29.550337,"count":32,"start":"2021-10-22","time":"09:00:57","zhuangtai":"待处理","leixing":"疑似船只"},
        {"lng":121.657137,"lat":29.549909,"count":44,"start":"2021-10-22","time":"09:00:57","zhuangtai":"待处理","leixing":"疑似船只"},
        //乌沙山右前 121.690498,29.524298  摄像头左标
        // 121.681751,29.535235
        {"lng":121.685542,"lat":29.523246,"count":21,"start":"2002-09-22","time":"08:00:57","zhuangtai":"待处理","leixing":"疑似船只"},
        {"lng":121.679092,"lat":29.527001,"count":80,"start":"2002-09-22","time":"08:00:57","zhuangtai":"待处理","leixing":"疑似船只"},
        {"lng":121.681392,"lat":29.522853,"count":32,"start":"2002-09-22","time":"08:00:57","zhuangtai":"待处理","leixing":"疑似船只"},
        {"lng":121.695333,"lat":29.533852,"count":26,"start":"2002-09-22","time":"08:00:57","zhuangtai":"待处理","leixing":"疑似船只"},
        {"lng":121.68865,"lat":29.528384,"count":17,"start":"2002-09-22","time":"08:00:57","zhuangtai":"待处理","leixing":"疑似船只"},
        {"lng":121.681751,"lat":29.535235,"count":17,"start":"2002-09-22","time":"08:00:57","zhuangtai":"待处理","leixing":"疑似船只"},

        //咸祥公园附近 121.829001,29.679995
        //121.822677,29.655517
        {"lng":121.82972,"lat":29.680372,"count":25,"start":"2012-09-22","time":"08:00:45","zhuangtai":"待处理","leixing":"疑似船只"},
        {"lng":121.839925,"lat":29.667192,"count":100,"start":"202-09-22","time":"08:00:35","zhuangtai":"待处理","leixing":"疑似船只"},
        {"lng":121.821815,"lat":29.6751,"count":39,"start":"2012-09-22","time":"08:00:25","zhuangtai":"待处理","leixing":"疑似船只"},
        {"lng":121.846967,"lat":29.681878,"count":11,"start":"2012-09-22","time":"08:00:5","zhuangtai":"待处理","leixing":"疑似船只"},
        {"lng":121.832882,"lat":29.676481,"count":9,"start":"2012-09-22","time":"08:00:15","zhuangtai":"待处理","leixing":"疑似船只"},
        {"lng":121.822677,"lat":29.655517,"count":47,"start":"2012-09-22","time":"08:00:15","zhuangtai":"待处理","leixing":"疑似船只"},

        //梅山大桥那边 121.933061,29.756154
        //121.929468,29.75352  121.937229,29.753896  121.932917,29.760042 121.93378,29.749757

        {"lng":121.929468,"lat":29.75352,"count":52,"start":"2022-1-22","time":"08:00:57","zhuangtai":"待处理","leixing":"疑似船只"},
        {"lng":121.937229,"lat":29.753896,"count":100,"start":"2022-1-22","time":"08:00:58","zhuangtai":"待处理","leixing":"疑似船只"},
        {"lng":121.932917,"lat":29.760042,"count":46,"start":"2022-1-22","time":"08:00:59","zhuangtai":"待处理","leixing":"疑似船只"},
        {"lng":121.93378,"lat":29.749757,"count":9,"start":"2022-1-22","time":"08:00:5","zhuangtai":"待处理","leixing":"疑似船只"},
      ],
      //摄像头
      shexiangtou:[
        {"lng":121.829001,"lat":29.679995,"name":"咸祥公园","zhuangtai":"停用","quyu":"片区1","people":"ces1/17777232"},
        {"lng":121.438685,"lat":29.470983,"name":"宁海互通","zhuangtai":"开启","quyu":"片区2","people":"ces2/17777232"},
        {"lng":121.933061,"lat":29.756154,"name":"梅山大桥","zhuangtai":"停用","quyu":"片区3","people":"ces3/17777232"},
        {"lng":121.690498,"lat":29.524298,"name":"乌沙山右","zhuangtai":"停用","quyu":"片区4","people":"ces4/17777232"},
        {"lng":121.654586,"lat":29.550258,"name":"东升岛","zhuangtai":"开启","quyu":"片区5","people":"ces5/17777232"},
        {"lng":121.564926,"lat":29.531904,"name":"悬山左","zhuangtai":"停用","quyu":"片区6","people":"ces6/17777232"},
        {"lng":121.526053,"lat":29.510957,"name":"望台山","zhuangtai":"开启","quyu":"片区7","people":"ces7/17777232"}
        //  望台山左121.519867,29.512371v  悬山左121.564531,29.529924 东升岛 121.657137,29.549909 乌沙山右前 121.690498,29.524298  摄像头左标
      ],
      test_flag:[[121.829001,29.679995],[121.438685,29.470983],[121.933061,29.756154],[121.690498,29.524298],[121.654586,29.550258],[121.564926,29.531904],[121.526053,29.510957]],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  watch: {
    //    tree_value_label:[{"1":"宁海湾横山岛区"},{"1-1":"宁海互通"},{"1-2":"望台山"},{"1-3":"悬山左"},{"2":"沿海中线"},{"2-1":"乌沙山右"},{"2-2":"乌沙山"},{"3":"滨海经济开发区"},{"3-1":"咸祥公园"},{"3-2":"梅山大桥"}],
    // shexiangtou:[
    //   {"lng":121.829001,"lat":29.679995,"name":"咸祥公园","zhuangtai":"停用","quyu":"片区1","people":"ces1/17777232"},
    //   {"lng":121.438685,"lat":29.470983,"name":"宁海互通","zhuangtai":"开启","quyu":"片区2","people":"ces2/17777232"},
    //   {"lng":121.933061,"lat":29.756154,"name":"梅山大桥","zhuangtai":"停用","quyu":"片区3","people":"ces3/17777232"},
    //   {"lng":121.690498,"lat":29.524298,"name":"乌沙山右","zhuangtai":"停用","quyu":"片区4","people":"ces4/17777232"},
    //   {"lng":121.654586,"lat":29.550258,"name":"东升岛","zhuangtai":"开启","quyu":"片区5","people":"ces5/17777232"},
    //   {"lng":121.564926,"lat":29.531904,"name":"悬山左","zhuangtai":"停用","quyu":"片区6","people":"ces6/17777232"},
    //   {"lng":121.526053,"lat":29.510957,"name":"望台山","zhuangtai":"开启","quyu":"片区7","people":"ces7/17777232"}
    //   //  望台山左121.519867,29.512371v  悬山左121.564531,29.529924 东升岛 121.657137,29.549909 乌沙山右前 121.690498,29.524298  摄像头左标
    // ],
    selectVal(val){
      //检查点位是否开启
      if(this.dianwei)
      {
        if(val.toString().length<=1)
        {
          //  啥也不做

        }
        else{
          var str_value=null;
          var lat;
          var lng;
          for(let i of this.tree_value_label)
          {
            if(i[val]){
              str_value=i[val]
              //将经纬度赋值下去
              for(let y of this.shexiangtou)
              {
                if(y["name"]==str_value){
                  lng=y["lng"];
                  lat=y["lat"];
                  //拿到
                }
              }

            }
          }

          //转移视野
          this.map.centerAndZoom(new BMap.Point(lng,lat), 16);

        }
      }
      else{
        console.log("点位选项没有开启")
      }



    },
    // 搜索过滤，监听input搜索框绑定的treeFilter
    treeFilter(val) {
      this.$refs.tree.filter(val);
      // 当搜索框键入值改变时，将该值作为入参执行树形控件的过滤事件filterNode
    },
  },
  mounted() {
    // 创建Map实例

    this.map = new BMap.Map("map");

    // 初始化地图,设置中心点坐标和地图级别
    this.map.centerAndZoom(new BMap.Point(121.573215,29.507074), 12);
    this.map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    // map.centerAndZoom：第一个参数可以是根据之前创建好的一个点为中心，创建出地图，也可以根据城市地区的中文名称创建地图。第二个参数是地图缩放级别，最大为19，最小为0
    // map.addControl(//添加地图类型控件
    //   new BMap.MapTypeControl({
    //     mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP],
    //   })
    // );
    //BMAP_EARTH_MAP
    this.map.setMapType(BMAP_HYBRID_MAP);
    this.map.setCurrentCity("宁波"); // 设置地图显示的城市 此项是必须设置的
    this.map.enableScrollWheelZoom(true);

    // map.addEventListener('click', function (e) {
    //   alert('点击位置经纬度：' + e.latlng.lng + ',' + e.latlng.lat);
    // });
    //这些热力图点位数据  解释  lng lat  为坐标    count为权重
    //121.459663,29.462414


    var data = [];
    //二维数组储存点位信息
    //摄像头数据
    // var test_flag=[[121.829001,29.679995],[121.438685,29.470983],[121.933061,29.756154],[121.690498,29.524298],[121.654586,29.550258],[121.564926,29.531904],[121.526053,29.510957]];
    // var shexiangtou=[
    //   {"lng":121.829001,"lat":29.679995,"name":"咸祥公园","zhuangtai":"停用","quyu":"片区1","people":"ces1/17777232"},
    //   {"lng":121.438685,"lat":29.470983,"name":"宁海互通","zhuangtai":"开启","quyu":"片区2","people":"ces2/17777232"},
    //   {"lng":121.933061,"lat":29.756154,"name":"梅山大桥","zhuangtai":"停用","quyu":"片区3","people":"ces3/17777232"},
    //   {"lng":121.690498,"lat":29.524298,"name":"乌沙山右","zhuangtai":"停用","quyu":"片区4","people":"ces4/17777232"},
    //   {"lng":121.654586,"lat":29.550258,"name":"东升岛","zhuangtai":"开启","quyu":"片区5","people":"ces5/17777232"},
    //   {"lng":121.564926,"lat":29.531904,"name":"悬山左","zhuangtai":"停用","quyu":"片区6","people":"ces6/17777232"},
    //   {"lng":121.526053,"lat":29.510957,"name":"望台山","zhuangtai":"开启","quyu":"片区7","people":"ces7/17777232"}
    //   //  望台山左121.519867,29.512371v  悬山左121.564531,29.529924 东升岛 121.657137,29.549909 乌沙山右前 121.690498,29.524298  摄像头左标
    // ];
    // var markers=[];
    for (var i=0;i<7;i++){
      // console.log(i)
      var marker=new BMap.Marker(new BMap.Point(this.test_flag[i][0], this.test_flag[i][1]));//创建点
      // console.log(marker);
      this.markers.push(marker);
    }


    //覆盖物的点击事件
    var clickEvts = ['click', 'dblclick', 'rightclick'];
    for (let k = 0; k< clickEvts.length; k++) {
      const event = clickEvts[k];
      for (let jl = 0; jl < this.markers.length; jl++) {
        const overlay = this.markers[jl];
        overlay.addEventListener(event, e => {
          switch (event) {
            case 'click':
              //获取点位经纬度
              var tou_lng=overlay.point["lng"];
              var tou_lat=overlay.point["lat"];
              //拿到储存的数据
              var name;
              var zhuangtai;
              var quyu;
              var peole;
              //遍寻找
              for(var J_te=0;J_te<this.shexiangtou.length;J_te++){
                if(tou_lng==this.shexiangtou[J_te]["lng"] && tou_lat==this.shexiangtou[J_te]["lat"] ){
                  //  找到
                  name=this.shexiangtou[J_te]["name"];
                  zhuangtai=this.shexiangtou[J_te]["zhuangtai"];
                  quyu=this.shexiangtou[J_te]["quyu"];
                  peole=this.shexiangtou[J_te]["people"];
                }
              }

              var opts = {
                width : 255,     // 信息窗口宽度
                height: 205,     // 信息窗口高度
              }
              //摄像头信息
              this.map.closeInfoWindow();//窗口关闭
              var infoWindow = new BMap.InfoWindow(
                '<div style="color: white;line-height: 40px;">' +
                `<span style='padding: 10Px 20Px;line-height:18Px;width:80px;color: #1a70ff'>点位名称：</span>`+name+
                "<br/>" +
                `<span style='padding: 10Px 20Px;line-height:18Px;width:80px;color: #1a70ff'>点位状态：</span>` +zhuangtai +
                "<br/>" +
                `<span style='padding: 10Px 20Px;line-height:18Px;width:80px;color: #1a70ff '>所属区域：</span>` + quyu+
                "<br/>" +
                `<span style='padding: 10Px 20Px;line-height:18Px;width:80px;color: #1a70ff'>负责人：</span>`+ peole+
                "<br/>" +
                `<div style='padding: 10Px 20Px;line-height:18Px;width:80px;color: #1a70ff'>`+"点位详情"+":"+
                `<div id="btn_test" style="position: relative;top:-20px;left: 100px;">查看详情</div>`+
                `</div>`+
                '</div>',
                opts



              );  // 创建信息窗口对象
              console.log(infoWindow.isOpen())
              this.map.openInfoWindow(infoWindow, this.map.getCenter());      // 打开信息窗口
              // setTimeout(()=>{
              //   document.getElementById('btn_test').onclick=function(){
              //     box.style.display = "block";
              //   }
              // },100);
              var that=this;
              if(!infoWindow.isOpen())
              {
                infoWindow.addEventListener("open",function (e){
                  document.getElementById("btn_test").onclick=function ()
                  {

                    box.style.display = "block";
                  }

                });
              }
              else{
                var btn=document.getElementById("btn_test");
                btn.onclick=function (){
                  box.style.display = "block";
                }
              }
              break;
            case 'dbclick':
              var res = overlay.toString() + '被双击!';
              break;
            case 'rightclick':
              var res = overlay.toString() + '被右击!';
          }
        });
      }
    }

    //创建圆心坐标点
      var pois = [
        new BMap.Point(121.829001, 29.679995),
        new BMap.Point(121.438685, 29.470983),
        new BMap.Point(121.933061, 29.756154),
        new BMap.Point(121.690498, 29.524298),
        new BMap.Point(121.654586, 29.550258),
        new BMap.Point(121.564926, 29.531904),
        new BMap.Point(121.526053, 29.510957)
      ];
      for(var j=0;j<pois.length;j++){
        var circle = new BMap.Circle(pois[j],1000,
            {
              strokeColor:'#8bc46d',
              strokeWeight:2,
              strokeOpacity:0.5,
              fillColor:'#8bc46d',
              setTop:true
            });
        this.circles.push(circle);
      }
    //添加范围(写到外面去)
    // document.getElementById("ad_overlay").onclick=function(){
    //   for(var j=0;j<circles.length;j++){
    //     this.map.addOverlay(circles[j]);
    //   }
    // }

    //清除范围(写到外面去)
    // document.getElementById("move_overlay").onclick=function(){
    //
    //
    //   this.map.clearOverlays();
    // }





    // document.getElementById('btn_test').onclick=function btn_test(){
    //   alert("触发了")
    // }





    //添加事件（写到外面去）
    // document.getElementById("add_shijian").onclick=function (){
    //     // console.log(this.mapvLayer)
    //     var img = new Image();
    //     var data=[];
    //     var randomCount =this.points_shuju.length ;
    //     // console.log(randomCount)
    //     // console.log(points)
    //     // console.log(points[1])
    //   img.src=require("@/assets/实时点位.png");
    //   //加载进去
    //   img.onload = function() {
    //
    //     // 构造数据
    //     for (var i=0;i< this.points_shuju.length;i++){
    //       data.push({
    //         geometry: {
    //           type: 'Point',
    //           //这肯定是一个坐标
    //           coordinates:[this.points_shuju[i]["lng"] ,this.points_shuju[i]["lat"] ]
    //         },
    //         deg: 360 * Math.random(),
    //         // 支持image对象和url两种方式
    //         icon: [img,img,img][randomCount % 3],
    //         width: 30,
    //         height: 30
    //       });
    //     }
    //
    //     var dataSet = new mapv.DataSet(data);
    //     // console.log(dataSet)
    //     var options = {
    //       draw: 'icon',
    //       methods: {
    //         click: function (item) {
    //           console.log("确实被点击了");
    //           // 点击图标的函数
    //           // 这里有问题
    //           console.log(item["geometry"]["coordinates"][0])
    //           console.log(item["geometry"]["coordinates"][1])
    //           var X=item["geometry"]["coordinates"][0];
    //           var Y=item["geometry"]["coordinates"][1];
    //           // console.log(X);
    //           // console.log(Y);
    //           // 某些点位有问题
    //           var start;
    //           var time1;
    //           var zhuangtai;
    //           var leixing;
    //           for (var J_test=0;J_test<this.points_shuju.length;J_test++)
    //           {
    //             if(X==this.points[J_test]["lng"] && Y==this.points[J_test]["lat"] )
    //             {
    //               //  找到
    //               start=this.points_shuju[J_test]["start"];
    //               time1=this.points_shuju[J_test]["time"];
    //               zhuangtai=this.points_shuju[J_test]["zhuangtai"];
    //               leixing=this.points_shuju[J_test]["leixing"];
    //             }
    //           }
    //            // 拿到维度
    //            // 生成信息窗口
    //           var opts = {
    //             width : 255,     // 信息窗口宽度
    //             height: 205,     // 信息窗口高度
    //           }
    //           var infoWindow = new BMap.InfoWindow(
    //             '<div style="color:white;line-height: 40px;">' +
    //             `<span style='padding: 10Px 20Px;line-height:18Px;width:80px;color: #1a70ff'>发生日期：</span>`+start+
    //             "<br/>" +
    //             `<span style='padding: 10Px 20Px;line-height:18Px;width:80px;color: #1a70ff'>发生时间：</span>` +time1+
    //             "<br/>" +
    //             `<span style='padding: 10Px 20Px;line-height:18Px;width:80px;color: #1a70ff '>处理状态：</span>` +zhuangtai+
    //             "<br/>" +
    //             `<span style='padding: 10Px 20Px;line-height:18Px;width:80px;color: #1a70ff'>事件类型：</span>`+leixing+
    //             "<br/>" +
    //             `<div style='padding: 10Px 20Px;line-height:18Px;width:80px;color: #1a70ff'>`+"事件详情："+
    //             `<div id="shijian" style="position:relative;left:100px;top:-20px;color: white">事件详情</div>`+
    //             `</div>`+
    //             '</div>',
    //             opts
    //
    //
    //
    //           );  // 创建信息窗口对象
    //           this.map.openInfoWindow(infoWindow, this.map.getCenter());      // 打开信息窗口
    //           setTimeout(()=>{
    //             document.getElementById("shijian").onclick=function (){
    //
    //               alert("事件");
    //             }
    //           })
    //
    //         }
    //       },
    //         size: 30,//点击事件的范围
    //         width: 5,
    //         height: 5,
    //         // sx: 10,
    //         // sy: 10,
    //         // swidth: 50,
    //         // sheight: 50,
    //       }
    //       this.mapvLayer = new mapv.baiduMapLayer(this.map, dataSet, options);
    //     //事件图标的点击事件
    //     // console.log(markers);
    //     // console.log(mapvLayer);
    //     // var clickEvts_test = ['click', 'dblclick', 'rightclick'];
    //     // for (let k = 0; k< clickEvts.length; k++) {
    //     //   const event = clickEvts[k];
    //     //   // console.log(mapvLayer["dataSet"])
    //     //   for (let jl = 0; jl < mapvLayer["dataSet"]["_data"].length; jl++) {
    //     //     const overlay = mapvLayer["dataSet"]["_data"][jl];
    //     //     console.log(overlay)
    //     //     overlay.addEventListener(event, e => {
    //     //       switch (event) {
    //     //         case 'click':
    //     //           //获取坐标
    //     //           console.log(overlay["dataSet"])
    //     //           break;
    //     //       }
    //     //     });
    //     //
    //     //
    //     //   }
    //     // }
    //
    //     this.mapvLayer.show(); // 显示图层
    //
    //       // var options = {
    //       //     draw: 'simple'
    //       // }
    //       // var mapvLayer = new mapv.baiduMapLayer(map, dataSet, options);
    //     }
    //
    //
    //
    //
    // }
    //清除事件（写到外面去）
    // document.getElementById("remove_shijian").onclick=function(){
    //
    //
    //   this.mapvLayer.hide();
    // }


    //添加定位（写到外边去）
    // document.getElementById("add_overlay").onclick=function (){
    //   // console.log(markers);
    //   // map.addOverlay(marker);            //增加点
    //
    //
    //   //  取出储存的点
    //   //   console.log(markers[0])
    //   //   console.log(markers.length);
    //   for(var j=0;j<this.markers.length;j++){
    //     // console.log(markers[j]);
    //     this.map.addOverlay(this.markers[j]);
    //   }
    // }
   //   人机联防左边地图按钮设置
   //  add_overlay_zuo
   //  document.getElementById("add_overlay_zuo").onclick=function add_overlay_zuo(){
   //    // console.log(markers);
   //    // map.addOverlay(marker);            //增加点
   //
   //
   //    //  取出储存的点
   //    //   console.log(markers[0])
   //    //   console.log(markers.length);
   //    for(var j=0;j<markers.length;j++){
   //      // console.log(markers[j]);
   //      map.addOverlay(markers[j]);
   //    }
   //  }





   //清除覆盖物（写到外面去了）
   //  document.getElementById("remove_overlay").onclick=function (){
   //    this.map.clearOverlays();
   //  }
      // var options = {
      //     draw: 'simple'
      // }
      // var mapvLayer = new mapv.baiduMapLayer(map, dataSet, options);
    // },
    	// //创建圆心坐标点
      // var pois = [
      //   new BMap.Point(121.829001, 29.679995),
      //   new BMap.Point(121.438685, 29.470983),
      //   new BMap.Point(121.933061, 29.756154),
      //   new BMap.Point(121.690498, 29.524298),
      //   new BMap.Point(121.654586, 29.550258),
      //   new BMap.Point(121.564926, 29.531904),
      //   new BMap.Point(121.526053, 29.510957)
      // ];
      // function fn1(point1){
      //     map.addOverlay( new BMap.Circle(point1,1000,{strokeColor:"blue", strokeWeight:2, strokeOpacity:0.5,fillColor:'red'}));
      // }
      //   //循环圆心
      // for (var i = 0; i < pois.length; i ++) {
      //     fn1(pois[i])
      // }


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
  },
  beforeMount() {},
  beforeDestroy() {},
  created() {},
  methods: {
    showCon(){
      $(".cov").show();
    },
    closeCon(){
      $(".cov").hide();
    },
    //移除范围
    move_overlay(){
      if(this.fanweiflag==null){
        console.log("还没加呢")
      }
      else{
        this.map.removeOverlay(this.circles)
        this.fanweiflag=null;
      }

    },
    ad_overlay(){
      this.fanweiflag=1;
      for(var j=0;j<this.circles.length;j++){
        this.map.addOverlay(this.circles[j]);
      }
    },
    //事件列表点击定位到位置
    shijian_click(lan)
    {
      // 看一下这个的值
      if(this.shijian)
      {
        //  移动到指定的地点
        var lng=lan.lng;
        var lat=lan.lat;
        //转移视野
        this.map.centerAndZoom(new BMap.Point(lng,lat), 16);
      }
      else{
        console.log("事件选项没有开启")
      }



    },
    test_addshijina(map){
      var shuju=Array.from(this.points_shuju)
      // console.log(shuju)
      var img = new Image();
      img.src=require("@/assets/实时点位.png");
      var data=[];
      var randomCount =shuju.length ;
      // 构造数据
      for (var i=0;i<randomCount;i++){
        // console.log(this.points_shuju)
        data.push({
          geometry: {
            type: 'Point',
            //这肯定是一个坐标
            coordinates:[shuju[i]["lng"] ,shuju[i]["lat"] ]
          },
          deg: 360 * Math.random(),
          // 支持image对象和url两种方式
          icon: [img,img,img][randomCount % 3],
          width: 30,
          height: 30
        });
      }

      var dataSet = new mapv.DataSet(data);
      // console.log(dataSet)
      var options = {
        draw: 'icon',
        methods: {
          click: function (item) {
            map.closeInfoWindow();//窗口关闭
            // console.log("确实被点击了");
            // 点击图标的函数
            // 这里有问题
            if(item==null)
            {
              //空的不做事
            }
            else{
              //有数据那么做事情
              var X=item["geometry"]["coordinates"][0];
              var Y=item["geometry"]["coordinates"][1];
              console.log(X);
              console.log(Y);
              // 某些点位有问题
              //明明有数据但是显示不出来窗口
              var start;
              var time1;
              var zhuangtai;
              var leixing;
              for (var J_test=0;J_test<randomCount;J_test++)
              {
                if(X==shuju[J_test]["lng"] && Y==shuju[J_test]["lat"] )
                {
                  //  找到
                  start=shuju[J_test]["start"];
                  time1=shuju[J_test]["time"];
                  zhuangtai=shuju[J_test]["zhuangtai"];
                  leixing=shuju[J_test]["leixing"];
                }
              }
              // 拿到维度
              // 生成信息窗口
              var opts = {
                width : 255,     // 信息窗口宽度
                height: 205,     // 信息窗口高度
              }
              var infoWindow = new BMap.InfoWindow(
                '<div style="color:white;line-height: 40px;">' +
                `<span style='padding: 10Px 20Px;line-height:18Px;width:80px;color: #1a70ff'>发生日期：</span>`+start+
                "<br/>" +
                `<span style='padding: 10Px 20Px;line-height:18Px;width:80px;color: #1a70ff'>发生时间：</span>` +time1+
                "<br/>" +
                `<span style='padding: 10Px 20Px;line-height:18Px;width:80px;color: #1a70ff '>处理状态：</span>` +zhuangtai+
                "<br/>" +
                `<span style='padding: 10Px 20Px;line-height:18Px;width:80px;color: #1a70ff'>事件类型：</span>`+leixing+
                "<br/>" +
                `<div style='padding: 10Px 20Px;line-height:18Px;width:80px;color: #1a70ff'>`+"事件详情："+
                `<div id="shijian" onclick="detailMsg" style="position:relative;left:100px;top:-20px;color: white">事件详情</div>`+
                `</div>`+
                '</div>',
                opts



              );  // 创建信息窗口对象
              console.log(infoWindow.isOpen())


              map.openInfoWindow(infoWindow,map.getCenter());      // 打开信息窗口
              setTimeout(()=>{
                document.getElementById("shijian").onclick=function (){
                  //这里放一个方法控制事件页面的展示
                  // this.showCon();
                  $(".cov").show();
                  // alert("事件");
                }
              },100)
              // var that=this;
              // console.log(infoWindow.isOpen())
              // if(!infoWindow.isOpen())
              // {
              //   infoWindow.addEventListener("open",function (e){
              //     document.getElementById("shijian").onclick=function ()
              //     {
              //
              //       $(".cov").show();
              //     }
              //
              //   });
              // }
              // else{
              //   var btn=document.getElementById("shijian");
              //   btn.onclick=function (){
              //     $(".cov").show();
              //   }
              // }

            }

            // console.log(item["geometry"]["coordinates"][1])


          }
        },
        size: 40,//点击事件的范围
        width: 1,
        height: 1,
        // sx: 10,
        // sy: 10,
        // swidth: 50,
        // sheight: 50,
      }



      this.shijian_mapvLayer= new mapv.baiduMapLayer(map, dataSet, options);
    },
    add_shijian(map){
      //把数据拿过来拷贝
      var img = new Image();
      img.src=require("@/assets/实时点位.png");
      //加载进去
      img.onload = this.test_addshijina(map);
      // this.shijian_mapvLayer=shijian_Layer;
    },
    remove_shijian()
    {

      if(this.shijian_mapvLayer==null)
      {
        console.log("还未初始化")
      }
      else{
        this.shijian_mapvLayer.hide()
      }

    },
    remove_overlay()
    {
      this.map.clearOverlays();
    },
    add_overlay(){
  // console.log(markers);
  // map.addOverlay(marker);            //增加点


  //  取出储存的点
  //   console.log(markers[0])
  //   console.log(this.markers.length);
      for(var j=0;j<this.markers.length;j++){
          // console.log(markers[j]);
          this.map.addOverlay(this.markers[j]);
      }
    },
    //热力图
    openHeatmap() {
      // alert("打开");
      this.map.addOverlay(this.heatmapOverlay);
      this.heatmapOverlay.setDataSet({data:this.points_shuju,max:100});
      this.heatmapOverlay.show();
    },
    closeHeatmap() {
      // alert("关闭");
      this.heatmapOverlay.hide();
    },

    //      checkList: ["点位显示","覆盖范围","事件显示","热力图"],
    handleCheckedCitiesChange(value) {
      if(value.length > 0){
        //全部不显示
        this.dianwei=false;
        this.shijian=false;

        this.move_overlay();//移除范围
        this.closeHeatmap();//移除热力图
        this.remove_shijian();//移除事件
        this.remove_overlay();//移除点位
        //检查是否有点位
        value.forEach(item=>{
          switch(item){
            case '点位显示':
              this.dianwei=true;//说明点位在的
              break;
            case '事件显示':
              this.shijian=true;//说明事件在的
              break;
          }
        })
        if(this.dianwei)
        {
          value.forEach(item =>{
            // debugger
            switch(item){
              case '点位显示':
                this.add_overlay();
                // console.log("点位显示")

                break;
              case '覆盖范围':
                this.ad_overlay();

                // console.log("覆盖范围")
                break;
              case '事件显示':
                this.add_shijian(this.map);
                // console.log("事件显示")
                break;
              case '热力图':
                this.openHeatmap();
                // console.log("热力图")
                break;
            }
          });
        }
      else {
          this.checkList=[];
        }

      }
    },

    //检索
    // 结构树点击事件
    handleNodeClick(data) {
      this.selectVal = data.value; // select绑定值为点击的选项的value
      this.selectName = data.label; // input中显示值为label
      this.treeFilter = ""; // 点击后搜索框清空
      this.$refs.select.blur(); // 点击后关闭下拉框，因为点击树形控件后select不会自动折叠
    },
    // 模糊查询（搜索过滤），实质为筛选出树形控件中符合输入条件的选项，过滤掉其他选项
    filterNode(value, data) {
      if (!value) return true;
      let filterRes = data.label.indexOf(value) !== -1;
      return filterRes;
    },
    // 选项卡标签（可忽略，增值迭代需求）
    filterorgType(val) {
      let arr = this.tagList.filter((item) => {
        return item.value == val;
      });
      return arr.length ? arr[0].label : "";
    },
    Open () {
      this.isShow = true;

    },
    Commit () {
      this.isShow = false;

    },
    Cancel () {
      this.isShow = false;

    },
    setGradient() {
      /*格式如下所示:
    {
      0:'rgb(102, 255, 0)',
        .5:'rgb(255, 170, 0)',
       1:'rgb(255, 0, 0)'
      }*/
      var gradient = {};
      var colors = document.querySelectorAll("input[type='color']");
      colors = [].slice.call(colors, 0);
      colors.forEach(function (ele) {
        gradient[ele.getAttribute("data-key")] = ele.value;
      });
      this.heatmapOverlay.setOptions({ gradient: gradient });
    },
    //判断浏览区是否支持canvas
    isSupportCanvas() {
      var elem = document.createElement("canvas");
      return !!(elem.getContext && elem.getContext("2d"));
    },
    //树形控件点击事件
    // handleNodeClick() {},

    //地图

    hide_onclick() {
      box.style.display = "block";
    },
    Closehide_onclick() {
      box.style.display = "none";
    },


    handleStartDateChange() {
      if (this.startDate && this.startDate.length > 0) {
        const timestampBegin = +new Date(this.startDate[0]);
        const timestampEnd = +new Date(this.startDate[1]);
        if (timestampEnd > timestampBegin + 3600 * 1000 * 24 * 10) {
          this.$alert("规定为日期的起止时间跨度不能超过10天", "提示", {
            confirmButtonText: "确定",
            type: "warning",
          })
            .then(() => (this.startDate = null))
            .catch(() => (this.startDate = null));
        }
      }
    },

    mouseenter(event, dateInfo) {
      // console.log("悬浮进入", event, dateInfo);
    },
    mouseleave(event, dateInfo) {
      // console.log("悬浮离开", event, dateInfo);
    },
    changeMonth(start, end) {
      // console.log("开始:", start);
      // console.log("结束:", end);
    },

    getMethod() {
      //点击事件的时候去寻找相应的方法，在底层做转换直接写方法名，大括号里面写相应的业务逻辑
      // console.log("11");
    },
    handleCommand(command) {
      this.$message("click on item " + command);
    },
    toggle() {
      this.cardType = !this.cardType;
    },
    // 获取数据的方法
    init() {
      getOrderDate().then((res) => {
        this.currentDateList = res.content;
      });
    },
    // 过滤出背景色为粉色的数据方法
    dealMyDate(value) {
      if (this.currentDateList.length > 0) {
        let flag;
        let disabledArr = [];

        this.currentDateList.map((item) => {
          if (item.isDeleted === "1" && item.modalType === "1") {
            disabledArr.push({
              date: item.workDate,
              hasRecord: true,
            });
          }
        });

        for (let i = 0; i < disabledArr.length; i++) {
          if (disabledArr[i].date === value) {
            flag = disabledArr[i].hasRecord;
            break;
          }
        }

        return flag;
      }
    },
    // 点击日历格子的方法
    chooseDay(data) {
      // 如果点击的格子为当月的话我们就进行数据转换，如果不是当月就让它去那个
      // 月
      if (data.type === "current-month") {
        updateWorkdate({
          workDate: data.day,
          modalType: "1",
        })
          .then((res) => {
            if (res.data.code === 200 && res.data.success) {
              this.$message.success("操作成功");
              this.init();
            } else {
              this.$message(res.data.message);
            }
          })
          .catch((err) => {
            console.error(err);
          });
      }
    },
    // 公立转农历
    // 这个方法原本是网上抄来的，不过我的需求不大一样，所以做了一点小小的改动
    solarToLunar(slotDate, slotData) {
      let solarDayArr = slotData.day.split("-");
      let lunarDay = calendar.solar2lunar(
        solarDayArr[0],
        solarDayArr[1],
        solarDayArr[2]
      );
      // 这个lunarDay里有很多东西，后面会贴图

      // 农历日期
      let lunarMD = lunarDay.IMonthCn + lunarDay.IDayCn;

      // 公历节日\农历节日\农历节气
      let festAndTerm = [];
      festAndTerm.push(
        lunarDay.festival == null ? "" : " " + lunarDay.festival
      );
      festAndTerm.push(
        lunarDay.lunarFestival == null ? "" : "" + lunarDay.lunarFestival
      );
      festAndTerm.push(lunarDay.Term == null ? "" : "" + lunarDay.Term);
      festAndTerm = festAndTerm.join("");

      return festAndTerm == "" ? lunarMD : festAndTerm;
    },
    isFestival(slotDate, slotData) {
      // slotDate是标准时间
      // slotData是对象
      let solarDayArr = slotData.day.split("-");
      let lunarDay = calendar.solar2lunar(
        solarDayArr[0],
        solarDayArr[1],
        solarDayArr[2]
      );

      // 公历节日\农历节日\农历节气
      let festAndTerm = [];
      festAndTerm.push(
        lunarDay.festival == null ? "" : " " + lunarDay.festival
      );
      festAndTerm.push(
        lunarDay.lunarFestival == null ? "" : "" + lunarDay.lunarFestival
      );
      festAndTerm.push(lunarDay.Term == null ? "" : "" + lunarDay.Term);
      festAndTerm = festAndTerm.join("");
      // 原本的方法，return出的是一个Boolean
      // 更改过后返回Object：公立日期、农历日期
      return {
        solarDate: lunarDay.date,
        lunarDate: lunarDay.lunarDate,
      };
    },
    // 这个方法是我自己后面添加的，判断是否是公休日。在calendar的文件中也做了
    // 一丢丢改动
    // 元旦1天、春假3天、清明节1天、端午节1天、五一劳动节1天、中秋节1天、国
    // 庆节3天
    isVacation(date, data) {
      let obj = this.isFestival(date, data);

      let valSolar = obj.solarDate.slice(5);
      let valLunar = obj.lunarDate.slice(5);

      let solar = calendar.isSolarPublicHoliday(valSolar);
      let lunar = calendar.isLunarPublicHoliday(valLunar);

      if (solar || lunar) return true;
      return false;
    },
    /*新添加的东西*/
    /*    leftClick(event,object,value,element){
                   if(value.level == 1){
                      this.menuVisible = true;
                      let menu = document.querySelector("#menu");
                     /!* 菜单定位基于鼠标点击位置 *!/
                      menu.style.left = event.clientX + 20 + "px" ;
                      menu.style.top = event.clientY -10 + "px"
                   }
        },*/
    /*   contextmenu(e,data,node,comp){

         if(node.isLeaf){
           let menu = document.querySelector('.visible')
           menu.style.display='block'
         }
       },*/
  },
};
</script>
