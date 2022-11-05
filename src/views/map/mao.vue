<template>
  <div>
  <div>
    <!-- XX架构布局 -->
    <ul class="domtree" style="font-size: 16px">
      <li style="text-align: left">
        <span @click="setNewCenter(0)">{{ company[0].name }}</span>
        <ul>
          <div :key="item.cid" v-for="(item, i) in company">
            <li v-if="i > 0" @click="setNewCenter(i)">

              {{ item.name }}
            </li>
          </div>
        </ul>
      </li>
    </ul>
  </div>

  <div>
    <!-- 使用百度地图API -->
    <div id="bdMap"></div>
  </div>
  </div>

</template>

<script>
export default {
  name: "demo",
  data() {
    return {
      map: false,


    lng: 103.549, //初始化经度
      lat: 30.7921, //初始化纬度
      company: [
      {
        cid: "0",
        name: "四川省电力总公司",
        address: "成都市XX街XX号",
        lng: 103.92,
        lat: 30.79,
      },
      {
        cid: "1",
        name: "成都市电力公司",
        address: "成都市XX街XX号",
        lng: 103.92,
        lat: 30.69,
      },
      {
        cid: "2",
        name: "绵阳市电力公司",
        address: "绵阳市XX街XX号",
        lng: 103.82,
        lat: 30.59,
      },
      {
        cid: "3",
        name: "自贡市电力公司",
        address: "自贡市XX街XX号",
        lng: 103.72,
        lat: 30.49,
      },
      {
        cid: "4",
        name: "攀枝花市电力公司",
        address: "攀枝花市XX街XX号",
        lng: 103.62,
        lat: 30.39,
      },
    ],

  };
  },
  methods: {
    myMap() {
      this.map = new BMapGL.Map("bdMap"); // 创建Map实例
      this.map.centerAndZoom(new BMapGL.Point(this.lng, this.lat), 12); // 初始化地图,设置中心点坐标和地图级别
      this.map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放

      //直接forEach循环遍历目标数组的每一个item 然后提前就把点位画好
      this.company.forEach((v, i) => {
        //把5个点位提前画出来
        this.marker.push(new BMapGL.Marker(new BMapGL.Point(v.lng, v.lat)));
        this.map.addOverlay(this.marker[i]);//百度地图API  画出mark点位
        BMapLib.EventWrapper.addListener(this.marker[i], "click", (e) => {
          console.log("click");
          this.map.openInfoWindow(//百度地图API  实现打开信息窗口  有两个参数 第一个是InfoWindow配置项，
            //第二个是点位new BMapGL.Point(v.lng, v.lat)
            new BMapGL.InfoWindow("地址 :" + this.company[i].address, {
              width: 100,
              height: 50,
              title: this.company[i].name,
            }),
            new BMapGL.Point(v.lng, v.lat)
          ); // 开启信息窗口1
        });
      });
    },

    setNewCenter(i) {
      this.lng = this.company[i].lng;
      this.lat = this.company[i].lat;
      var point = new BMapGL.Point(this.lng, this.lat);

      this.map.setCenter(point); // 设置地图中心点

      BMapLib.EventWrapper.trigger(this.marker[i], "click");

    },

  },

}
</script>

<style scoped>
.map {
  width: 100%;
  height: 600px;
}
</style>
