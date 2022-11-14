<template>
  <div style="position: absolute;top:0px;left: 0px">
<!--    <img src="../../../src/assets/flag.png">-->

  <div style="width:1590px; height: 790px;">
    <div  style="width: 100%; height: 100%" id="map" class="map"></div>
  </div>
  </div>
</template>
<script src="http://mapv.baidu.com/build/mapv.min.js"></script>
<script>
export default {
  name:'mao',
  mounted(){
    // 创建Map实例
    var map = new BMap.Map("map");
    // 初始化地图,设置中心点坐标和地图级别
    map.centerAndZoom(new BMap.Point(121.54375,29.869905), 20);
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
    map.addEventListener('click', function (e) {
      alert('点击位置经纬度：' + e.latlng.lng + ',' + e.latlng.lat);
    });
    var data = [];
    //二维数组储存点位信息
    var test_flag=[[121.820428,29.684074],[121.438685,29.470983],[121.898617,29.742795],[122.15043,29.892702],[121.690498,29.524298],[121.856648,29.986717],[121.746839,29.976706],[121.655284,29.555344],[121.655284,29.555344],[121.546769,29.519647]];
    var img = new Image();
    img.src=require("@/assets/flag.png")
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
               console.log(item);
            }
        },
        // size: 50,
        // width: 50,
        // height: 50,
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
