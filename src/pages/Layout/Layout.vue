<template>
  <div class="layout">
    <el-container>
      <el-aside width="200px">
        <el-menu class="el-menu-vertical-demo">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">导航一</span>
            </template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
            <el-submenu index="1-4">
              <span slot="title">选项4</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-submenu>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <layout-header></layout-header>
        </el-header>
        <div class="main">
          <el-main>
            <router-view />
          </el-main>
        </div>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import LayoutHeader from "./LayoutHeader";
export default {
  name: "Layout",
  components: { LayoutHeader },
  data() {
    return {};
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
.layout {
  .main {
    min-height: calc(100vh - 120px);
    background-color: #e9eef3;
  }
}
</style>
<style lang="css">
.el-header,
.el-footer {
  background-color: #b3c0d1;
  text-align: center;
}

.el-aside,
.el-menu {
  background-color: #d3dce6;
}
</style>