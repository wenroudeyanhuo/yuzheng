<template>
  <div style="position: absolute;top:0px;left: 0px">

  <div style="width:1590px; height: 790px;">
    <div  style="width: 100%; height: 100%" id="map" class="map"></div>
  </div>
  </div>
</template>
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
    map.setCurrentCity("成都"); // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true);
    map.addEventListener('click', function (e) {
      alert('点击位置经纬度：' + e.latlng.lng + ',' + e.latlng.lat);
    });
  }
}
</script>
