<template>
  <div style="position: absolute;top:0px;left: 0px">
<!--    <img src="../../../src/assets/flag.png">-->

  <div style="width:1590px; height: 790px;">
    <el-button style="z-index:101;position: absolute;top:200px;left: 100px" @click="show_position()">点位显示</el-button>
    <div  style="z-index:100;width: 100%; height: 100%" id="map" class="map"></div>
  </div>
  </div>
</template>

<script>
export default {
  name:'mao',
  data(){
    return{
      map:{},
      test_flag:[[121.820428,29.684074],[121.438685,29.470983],[121.898617,29.742795],[122.15043,29.892702],[121.690498,29.524298],[121.856648,29.986717],[121.746839,29.976706],[121.655284,29.555344],[121.655284,29.555344],[121.546769,29.519647],[122.033003,29.834571],[121.525353,29.510972]],
      data:[],
      img:{},
      positionLayer:{}


    }
  },
  methods:{
   initMap(){
     this.map=new BMap.Map("map");
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
   },
    show_position()
    {
      var randomCount=this.test_flag.length;
      //二维数组储存点位信息
      this.img.src=require("@/assets/flag.png");
      this.img.onload = function() {
        // console.log(img)
        // 构造数据
        for (var i in this.test_flag){
          this.data.push({
            geometry: {
              type: 'Point',
              //这肯定是一个坐标
              coordinates:[this.test_flag[i][0] ,this.test_flag[i][1] ]
            },
            deg: 360 * Math.random(),
            // 支持image对象和url两种方式
            icon: [this.img,this.img,this.img][randomCount % 3],
            width: 20,
            height: randomCount % 3 === 1 ? 30 : 20
          });
        }

        var dataSet = new mapv.DataSet(this.data);
        var options = {
          draw: 'icon',
          methods: {
            click: function (item) {
              console.log(item);
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
        this.positionLayer = new mapv.baiduMapLayer(this.map,dataSet, options);
        this.positionLayer.show(); // 显示图层
      }
    }
  },
  mounted(){
    this.initMap();
  }
}
</script>
