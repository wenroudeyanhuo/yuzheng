<template >
  <el-container class="app-wrapper" direction="vertical">
    <el-header >
      <Header />
    </el-header>
    <el-main>
      <router-view>
      </router-view>
    </el-main>


  </el-container>

</template>
<script src="./home.js"></script>
<style  lang="scss"  scoped>
.app-wrapper {
  //background-image: url("~@/../public/位图.png");
  background-color: black;
  height:100vh;
  width: 100%;
  position:fixed;
  background-size:100% 100%;
}
.el-header{
}
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
}

</style>
