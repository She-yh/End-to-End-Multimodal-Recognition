<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
          :router="true">
          <el-menu-item>
            <a href="http://sheyh.cn"> <i class="el-icon-s-home"></i></a></el-menu-item>
          <el-menu-item index="/home">Intro </el-menu-item>
          <el-submenu index="/singleSound">
            <template slot="title">Single</template>
            <el-menu-item index="/singleSound"> Audio </el-menu-item>
            <el-submenu index="/singleVideo">
              <template slot="title">Video</template>
              <el-menu-item index="/singleCamera"> Camera </el-menu-item>
              <el-menu-item index="/singleVideo"> Video </el-menu-item>
            </el-submenu>
            <el-menu-item index="/singleText"> Text </el-menu-item>
          </el-submenu>
          <el-menu-item index="/multiModal"> Multi </el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      activeIndex: "/home",
    };
  },
  methods: {
    handleSelect() { },
  },
};
</script>

<style>
html,
body {
  padding: 0;
  border: 0;
  margin: 0;
}

.el-container {
  height: 100vh;
}

.el-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

a {
  text-decoration: none;
  color: #409eff;
}
</style>
