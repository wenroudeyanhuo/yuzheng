<template>
<!--  class="bgBackground"  :style="background"-->
  <div  >



  </div>
</template>
<script>
export default {

  name: 'Test2',
  data()
  {
    return {
      imgList:['public/bg_top_title.png'],
      background: {
        // 背景图片地址
        backgroundImage: 'url(' + require('../../../public/位图.png') + ')',
        // 背景图片是否重复
        backgroundRepeat: 'no-repeat',
        // 背景图片大小
        backgroundSize: 'cover',
        // 背景颜色
        backgroundColor: '#000',
        // 背景图片位置
        backgroundPosition: 'center top'
      }
    }
  },

}
</script>

<style>
.box {
  box-sizing: border-box;
  width: 155px;
  height: 100px;
  padding: 10px;
  border:  2px solid green;
  background: blue;
  overflow: auto;
}
.index_background{ background: url('~@/../public/bg_bottom@2x.png') }
.bgBackground{
  width:100%;
  height:100%;
}
</style>
