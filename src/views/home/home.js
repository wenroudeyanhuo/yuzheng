
import Header from './components/header'
export default {
  name: 'home',
  components: {
    Header
  },
  data(){
    return{
      background: {
        // 背景图片地址
        backgroundImage: 'url(' + require('../../../public/bg_title@2x.png') + ')',
        // 背景图片是否重复
        // 背景图片大小
        backgroundSize: 'cover',
        // 背景颜色
        // 背景图片位置
        backgroundPosition: 'center top'
      }

    };
  }
};



