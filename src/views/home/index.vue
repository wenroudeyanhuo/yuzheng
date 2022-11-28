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

}
.el-header{
  z-index: 101;

  position: absolute;
  top:0px;
  left: 0px;
  padding: 0px !important;

}
.el-footer {
  padding: 0px !important;
  background-color: #b3c0d1;
  color: #333;
  text-align: center;

}

.el-aside {
  padding: 0px !important;
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 18.51851851851852vh;
}

.el-main {
  z-index: 100;
  height: 100%;
  width: 100%;
  position: absolute;
  padding: 0px !important;
}

</style>
