<template>
  <div class="layout-aside">
    <el-aside :width="isCollapse?'64px':'200px'">
      <el-menu class="el-menu-vertical-demo" :collapse="isCollapse" default-active="1-1">
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
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
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
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "LayoutAside",
  computed: {
    ...mapState("Layout", ["isCollapse"])
  },
  data() {
    return {};
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
.layout-aside {
  background-color: #d3dce6;
  /deep/.el-aside{
    overflow: hidden;
  }
}
</style>