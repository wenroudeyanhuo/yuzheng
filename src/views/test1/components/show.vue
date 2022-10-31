<template>
  <div>
    <h1>{{ msg }}</h1>
    <button class="first" @click="isActive=0">用户管理</button>
    <button class="second" @click="isActive=1">配置管理</button>
    <button class="third" @click="isActive=2">角色管理</button>

    <div class="first1" v-if="isActive==0">用户管理</div>
    <div class="second2" v-else-if="isActive==1">配置管理</div>
    <div class="third3" v-else-if="isActive==2">角色管理</div>
  </div>
</template>

<script>
export default{
  name:'Show',
  data() {
    return {
      isActive: -1,
    };
  },
  props: {
    msg: String,
  },
};
</script>

<style scoped>

</style>
