import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import {Container,Main,Header} from 'element-ui'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import ECharts from 'vue-echarts/components/ECharts.vue'
import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'
// import i18n from './lang' // Internationalization
import '@/icons' // icon
import '@/permission' // permission control
//视频播放器
import Video from 'video.js'
import 'video.js/dist/video-js.css'
import 'videojs-contrib-hls'
Vue.prototype.$video = Video

/**
 * 全局引用自定义公共组件
 */
// import DictSelect from './components/DictSelect'
// Vue.component('dict-select',DictSelect)
/**
 * 全局引用第三方组件
 */
import Treeselect from "@riophae/vue-treeselect";
import "@riophae/vue-treeselect/dist/vue-treeselect.css";
Vue.component('treeselect', Treeselect)
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  ak: 'FS9gYWCr1iPh9nGbCUA2F4B0x4Pc20Ya'
})
import layer from 'vue-layer'
import 'vue-layer/lib/vue-layer.css';
import $ from 'jquery'
window.$ = $
window.jQuery = $
Vue.prototype.$layer = layer(Vue);
Vue.prototype.$layer = layer(Vue, {
  msgtime: 3,//目前只有一项，即msg方法的默认消失时间，单位：秒
});
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */
//v3-scroll
// import { createApp } from "vue";
// import V3Scroll from "v3-scroll";
// import "v3-scroll/dist/library.mjs.css";
//懒加载
import VueLazyLoad from 'vue-lazyload'
// set ElementUI lang to EN
// Vue.use(ElementUI, { i18n: (key, value) => i18n.t(key, value) })
Vue.use(ElementUI)
Vue.use(Container)
Vue.use(Main)
Vue.use(Header)
Vue.component('v-chart', ECharts)
Vue.config.productionTip = false
Vue.use(VueLazyLoad)
Vue.use(VueLazyLoad, {
  preLoad: 1,
  attempt: 2,
})



new Vue({
  el: '#app',
  router,
  store,
  // i18n,
  render: h => h(App)
})
