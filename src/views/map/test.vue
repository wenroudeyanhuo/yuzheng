<template>
  <div style="position: absolute;top:0px;left: 0px">

    <div style="width:1533px; height: 790px;">
      <div  style="z-index:100;width: 100%; height: 100%" id="map" class="map"></div>
      <div id="r-result" style="width:100%;z-index: 101;position: absolute;top:500px;left: 100px">
        <input type="button"  @click="openHeatmap();" value="显示热力图"/><input type="button"  @click="closeHeatmap();" value="关闭热力图"/>
    </div>
  </div>
  </div>

</template>
<script>
export default {
  data(){
    return{
      heatmapOverlay:new BMapLib.HeatmapOverlay({"radius":20})
    }
  },
  methods:{
    openHeatmap(){
      // alert("打开");
      this.heatmapOverlay.show();
    },
    closeHeatmap(){
      // alert("关闭");
      this.heatmapOverlay.hide();
    },
    setGradient(){
    /*格式如下所示:
  {
    0:'rgb(102, 255, 0)',
      .5:'rgb(255, 170, 0)',
     1:'rgb(255, 0, 0)'
    }*/
  var gradient = {};
  var colors = document.querySelectorAll("input[type='color']");
  colors = [].slice.call(colors,0);
  colors.forEach(function(ele){
    gradient[ele.getAttribute("data-key")] = ele.value;
  });
      this.heatmapOverlay.setOptions({"gradient":gradient});
},
//判断浏览区是否支持canvas
  isSupportCanvas(){
  var elem = document.createElement('canvas');
  return !!(elem.getContext && elem.getContext('2d'));
  }

  },
  mounted() {
    // 创建Map实例
    var map = new BMap.Map("map");
    // 初始化地图,设置中心点坐标和地图级别
    map.centerAndZoom(new BMap.Point(121.573215,29.507074), 12);
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    // map.centerAndZoom：第一个参数可以是根据之前创建好的一个点为中心，创建出地图，也可以根据城市地区的中文名称创建地图。第二个参数是地图缩放级别，最大为19，最小为0
    // map.addControl(//添加地图类型控件
    //   new BMap.MapTypeControl({
    //     mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP],
    //   })
    // );
    //BMAP_EARTH_MAP
    map.setMapType(BMAP_HYBRID_MAP);
    map.setCurrentCity("宁波"); // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true);
    // map.addEventListener('click', function (e) {
    //   alert('点击位置经纬度：' + e.latlng.lng + ',' + e.latlng.lat);
    // });
    //这些热力图点位数据  解释  lng lat  为坐标    count为权重
    //121.459663,29.462414
    var points =[
      //宁海互通点
      {"lng":121.459519,"lat":29.476439,"count":50},
      {"lng":121.451902,"lat":29.463075,"count":51},
      {"lng":121.442272,"lat":29.463326,"count":15},
      {"lng":121.450608,"lat":29.469081,"count":40},
      {"lng":121.449314,"lat":29.476501,"count":100},
      {"lng":121.4611,"lat":29.468578,"count":6},
      {"lng":121.463112,"lat":29.472225,"count":18},
      {"lng":121.459663,"lat":29.462414,"count":80},
      //望台山左121.519867,29.512371
      {"lng":121.527754,"lat":29.506336,"count":11},
      {"lng":121.527754,"lat":29.517149,"count":7},
      {"lng":121.52143,"lat":29.509102,"count":42},
      {"lng":121.525563,"lat":29.510139,"count":4},
      {"lng":121.525868,"lat":29.512245,"count":27},
      {"lng":121.52373,"lat":29.510941,"count":23},
      {"lng":121.523227,"lat":29.511774,"count":60},
      {"lng":121.52603,"lat":29.509401,"count":8},
      {"lng":121.519867,"lat":29.512371,"count":15},
      //悬山左121.564531,29.529924
      {"lng":121.560471,"lat":29.532281,"count":25},
      {"lng":121.565825,"lat":29.531464,"count":21},
      {"lng":121.563309,"lat":29.530584,"count":1},
      {"lng":121.563777,"lat":29.53093,"count":51},
      {"lng":121.564387,"lat":29.532407,"count":7},
      {"lng":121.565789,"lat":29.534512,"count":11},
      {"lng":121.567945,"lat":29.534449,"count":35},
      {"lng":121.565573,"lat":29.530804,"count":22},
      {"lng":121.564531,"lat":29.529924,"count":4},
      //东升岛 121.657137,29.549909


      {"lng":121.654748,"lat":29.551499,"count":25},
      {"lng":121.654353,"lat":29.549457,"count":3},
      {"lng":121.654999,"lat":29.550086,"count":100},
      {"lng":121.654353,"lat":29.549457,"count":87},
      {"lng":121.655556,"lat":29.550337,"count":32},
      {"lng":121.657137,"lat":29.549909,"count":44},
      //乌沙山右前 121.690498,29.524298  摄像头左标
      // 121.681751,29.535235
      {"lng":121.685542,"lat":29.523246,"count":21},
      {"lng":121.679092,"lat":29.527001,"count":80},
      {"lng":121.681392,"lat":29.522853,"count":32},
      {"lng":121.695333,"lat":29.533852,"count":26},
      {"lng":121.68865,"lat":29.528384,"count":17},
      {"lng":121.681751,"lat":29.535235,"count":17},

      //咸祥公园附近 121.829001,29.679995
      //121.822677,29.655517
      {"lng":121.82972,"lat":29.680372,"count":25},
      {"lng":121.839925,"lat":29.667192,"count":100},
      {"lng":121.821815,"lat":29.6751,"count":39},
      {"lng":121.846967,"lat":29.681878,"count":11},
      {"lng":121.832882,"lat":29.676481,"count":9},
      {"lng":121.822677,"lat":29.655517,"count":47},

      //梅山大桥那边 121.933061,29.756154
      //121.929468,29.75352  121.937229,29.753896  121.932917,29.760042 121.93378,29.749757

      {"lng":121.929468,"lat":29.75352,"count":52},
      {"lng":121.937229,"lat":29.753896,"count":100},
      {"lng":121.932917,"lat":29.760042,"count":46},
      {"lng":121.93378,"lat":29.749757,"count":9},

      //提供测试数据
      // {"lng":116.419916,"lat":39.924055,"count":8},
      // {"lng":116.42189,"lat":39.921308,"count":11},
      // {"lng":116.413765,"lat":39.929376,"count":3},
      // {"lng":116.418232,"lat":39.920348,"count":50},
      // {"lng":116.417554,"lat":39.930511,"count":15},
      // {"lng":116.418568,"lat":39.918161,"count":23},
      // {"lng":116.413461,"lat":39.926306,"count":3},
      // {"lng":116.42232,"lat":39.92161,"count":13},
      // {"lng":116.4174,"lat":39.928616,"count":6},
      // {"lng":116.424679,"lat":39.915499,"count":21},
      // {"lng":116.42171,"lat":39.915738,"count":29},
      // {"lng":116.417836,"lat":39.916998,"count":99},
      // {"lng":116.420755,"lat":39.928001,"count":10},
      // {"lng":116.414077,"lat":39.930655,"count":14},
      // {"lng":116.426092,"lat":39.922995,"count":16},
      // {"lng":116.41535,"lat":39.931054,"count":15},
      // {"lng":116.413022,"lat":39.921895,"count":13},
      // {"lng":116.415551,"lat":39.913373,"count":17},
      // {"lng":116.421191,"lat":39.926572,"count":1},
      // {"lng":116.419612,"lat":39.917119,"count":9},
      // {"lng":116.418237,"lat":39.921337,"count":54},
      // {"lng":116.423776,"lat":39.921919,"count":26},
      // {"lng":116.417694,"lat":39.92536,"count":17},
      // {"lng":116.415377,"lat":39.914137,"count":19},
      // {"lng":116.417434,"lat":39.914394,"count":43},
      // {"lng":116.42588,"lat":39.922622,"count":27},
      // {"lng":116.418345,"lat":39.919467,"count":8},
      // {"lng":116.426883,"lat":39.917171,"count":3},
      // {"lng":116.423877,"lat":39.916659,"count":34},
      // {"lng":116.415712,"lat":39.915613,"count":14},
      // {"lng":116.419869,"lat":39.931416,"count":12},
      // {"lng":116.416956,"lat":39.925377,"count":11},
      // {"lng":116.42066,"lat":39.925017,"count":38},
      // {"lng":116.416244,"lat":39.920215,"count":91},
      // {"lng":116.41929,"lat":39.915908,"count":54},
      // {"lng":116.422116,"lat":39.919658,"count":21},
      // {"lng":116.4183,"lat":39.925015,"count":15},
      // {"lng":116.421969,"lat":39.913527,"count":3},
      // {"lng":116.422936,"lat":39.921854,"count":24},
      // {"lng":116.41905,"lat":39.929217,"count":12},
      // {"lng":116.424579,"lat":39.914987,"count":57},
      // {"lng":116.42076,"lat":39.915251,"count":70},
      // {"lng":116.425867,"lat":39.918989,"count":8}
      ];
    var heatmapOverlay = new BMapLib.HeatmapOverlay({"radius":20});
    map.addOverlay(this.heatmapOverlay);
    this.heatmapOverlay.setDataSet({data:points,max:100});
    //是否显示热力图


    var data = [];
    //二维数组储存点位信息
    var test_flag=[[121.829001,29.679995],[121.438685,29.470983],[121.933061,29.756154],[121.690498,29.524298],[121.654586,29.550258],[121.564926,29.531904],[121.526053,29.510957]];
    var img = new Image();
    var randomCount =test_flag.length ;
    img.src=require("@/assets/flag.png");
    img.onload = function() {
      // console.log(img)
      // 构造数据
      for (var i in test_flag){
        data.push({
          geometry: {
            type: 'Point',
            //这肯定是一个坐标
            coordinates:[test_flag[i][0] ,test_flag[i][1] ]
          },
          deg: 360 * Math.random(),
          // 支持image对象和url两种方式
          icon: [img,img,img][randomCount % 3],
          width: 20,
          height: randomCount % 3 === 1 ? 30 : 20
        });
      }
      var dataSet = new mapv.DataSet(data);
      var options = {
        draw: 'icon',
        methods: {
          click: function (item) {
            // console.log(item);
          }
        },
        size: 10,
        width: 10,
        height: 10,
        // sx: 10,
        // sy: 10,
        // swidth: 50,
        // sheight: 50,
      }
      var mapvLayer = new mapv.baiduMapLayer(map, dataSet, options);

      // var options = {
      //     draw: 'simple'
      // }
      // var mapvLayer = new mapv.baiduMapLayer(map, dataSet, options);
    }
  }

}
</script>
