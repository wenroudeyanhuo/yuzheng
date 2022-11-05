<template>
  <div>
    <el-form>
      <el-row>
        <el-col :span="24">
          <baidu-map
            class="bm-viewmap"
            ak="FS9gYWCr1iPh9nGbCUA2F4B0x4Pc20Ya"
            :zoom="zoom"
            :scroll-wheel-zoom="true"
            center="宁波"
            @ready="createMap"
          >
            <el-input
              placeholder="请输入工程名称"
              v-model="inputValue"
              clearable
              class="seach-view"
            >
              <template slot="append">
                <el-button
                  type="primary"
                  icon="el-icon-search"
                  class="search-button"
                  @click="search"
                ></el-button>
              </template>
            </el-input>
            <bm-map-type
              :map-types="mapType"
              anchor="BMAP_ANCHOR_TOP_RIGHT"
            ></bm-map-type>
            <!--地图搜索功能，绑定上面的input，-->
            <!--display: none样式很关键，因为下面默认会有地址提示信息很长，很烦，这样搜索会很舒服，-->
            <!--zoom是搜索结果的视图比例，个人觉得12.8很舒服显示-->
            <bm-local-search
              :keyword="keyword"
              :auto-viewport="true"
              :location="location"
              zoom="12.8"
              style="display: none"
            ></bm-local-search>
          </baidu-map>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
import BaiduMap from "vue-baidu-map/components/map/Map.vue";
import {
  BmScale,
  BmNavigation,
  BmMarkerClusterer,
  BmMarker,
  BmInfoWindow,
  BmMapType,
  BmLocalSearch,
  BmView,
} from "vue-baidu-map";
export default {
  name: "",
  props: [""],
  components: {
    BmLocalSearch,
    BmMapType,
    BaiduMap,
    BmScale,
    BmNavigation,
    BmMarkerClusterer,
    BmMarker,
    BmInfoWindow,
    BmView,
  },
  data() {
    return {
      mapType:['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP'],
      location: "",
      keyword: "",
      inputValue:"",
      markers: [],
      center: { lng: 0, lat: 0 },
      zoom: 10,
      model: {
        lng: "",
        lat: "",
        address: "",
      },
      formLabelWidth: "100px",
      dialogFormVisible: false,
      belongsList: "",
      item: null,
      innerVisible: false,
    };
  },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    createMap({ BMap, map }) {
      map.setMapType(BMAP_HYBRID_MAP);
      map.enableScrollWheelZoom(true);
      this.zoom = this.zoom;
      listproject().then((res) => {
        var that = this;
        that.markerArr = res.data.data;
        for (var i = 0; i < this.markerArr.length; i++) {
          var myIcon = new BMap.Icon(
            "http://api.map.baidu.com/img/markers.png",
            new BMap.Size(23, 25),
            {
              offset: new BMap.Size(10, 25), // 指定定位位置
              imageOffset: new BMap.Size(0, 0 - i * 25), // 设置图片偏移
            }
          );
          var p0 = this.markerArr[i].longitude;
          var p1 = this.markerArr[i].latitude;
          var point = new Array(); //存放标注点经纬信息的数组
          var marker = new Array(); //存放标注点对象的数组
          point[i] = new BMap.Point(p0, p1);
          marker[i] = new BMap.Marker(point[i], { icon: myIcon });
          map.addOverlay(marker[i]);
          var markerData = this.markerArr[i];
          var maker = marker[i];
          addClickHandler(maker, markerData); //开启信息窗口
        }
      });
      // 放到循环外面，解决窗口只显示最后一个位置的bug
      function addClickHandler(maker, markerData) {
        maker.addEventListener("mouseover", function () {
          showInfo(this, markerData);
        });
      }
      function showInfo(thisMaker, markerData) {
        var sContent =
          '<ul style="margin:0 0 5px 0;padding:0.2em 0">' +
          '<li style="line-height: 26px;font-size: 15px;">' +
          '<span style="width: 50px;display: inline-block;">名称：</span>' +
          markerData.name +
          "</li>" +
          '<li style="line-height: 26px;font-size: 15px;">' +
          '<span style="width: 50px;display: inline-block;">经度：</span>' +
          markerData.longitude +
          "</li>" +
          '<li style="line-height: 26px;font-size: 15px;">' +
          '<span style="width: 50px;display: inline-block;">纬度：</span>' +
          markerData.latitude +
          "</li>";
        ("</ul>");
        var infoWindow = new BMap.InfoWindow(sContent); // 创建信息窗口对象
        thisMaker.openInfoWindow(infoWindow); //图片加载完毕重绘infowindow
      }
    },
    search(){
      this.keyword=this.inputValue
    }
  },
  watch: {},
};
</script>
<style>
.bm-viewmap {
  z-index: 101;
  background-size: 100% 100%;
  width: 100%;
  height: 100vh;
  position: fixed;
}
.seach-view {
  width: 220px;
  position: absolute;
  top: 50px;
  left: 350px;
}
.search-button{
  background-color: #033C76;
}
.anchorBL {
  display: none;
}
.el-button search-button el-button--primary{
  color: #033C76;
}
</style>
