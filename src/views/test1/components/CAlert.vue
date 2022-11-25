<template>
  <div class="CAlert-box">
    <transition name="CAlert">
      <div class="CAlert" v-show="isShow">
        <div class="alert-box">
          <div class="box-head">
            <strong class="title">{{title}}</strong>
            <span @click="Cancel" class="close">X</span>
          </div>
          <div class="box-content">
            <slot name="content"></slot> <!-- 要发生变化的内容用slot插槽占位 -->
            <div class="box-btn">
              <button @click="Commit" class="ok">提交</button>
              <button @click="Cancel" class="no">取消</button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  props: ['title', 'content', 'isShow', 'commit'],
  data () {
    return {
    }
  },
  methods: {
    // 关闭 -- 弹窗盒子
    Cancel () {
      this.$emit('Cancel')
    },
    // 提交 -- 弹窗盒子
    Commit () {
      this.$emit('Commit')
    },
  }
}
</script>
<style lang="scss">
.CAlert-box{
  .CAlert-enter{
    opacity: 0;
    height: 0;
  }
  .CAlert-enter-to{
    opacity: 1;
    height: 100%;
  }
  .CAlert-enter-active{
    transition: all 0.3s;
  }
  .CAlert-leave{
    opacity: 1;
    height: 100%;
  }
  .CAlert-leave-to{
    opacity: 0;
    height: 0;
  }
  .CAlert-leave-active{
    transition: all 0.3s;
  }

  .CAlert{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.2);
    .alert-box{
      min-width: 300px;
      min-height: 200px;
      background: #fff;
      border-radius: 10px;
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 999;
      transform: translate(-50%, -50%);
      overflow: hidden;
      .box-head{
        height: 42px;
        background: #F4F4F4;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        line-height: 42px;
        color: #666666;
        .title{
          padding: 0 20px;
          box-sizing: border-box;
        }
        .close{
          padding: 0 20px;
          box-sizing: border-box;
          text-align: center;
          cursor: pointer;
        }
      }
      .box-content{
        .box-btn{
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 220px;
          display: flex;
          justify-content: space-between;
          button{
            width: 100px;
            height: 34px;
            line-height: 34px;
            border-radius: 6px;
            font-size: 14px;
            border: 1px solid #0066FF;
            box-sizing: border-box;
            outline: 0;
            cursor: pointer;
          }
          .ok{
            background: #0066FF;
            color: #FFFFFF;
          }
          .no{
            background: #E7F5FF;
            color: #0066FF;
          }
        }
      }
    }
  }
}
</style>

