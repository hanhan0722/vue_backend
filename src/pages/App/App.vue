<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          Main
          <router-view />
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  mounted() {}
};
</script>

<style lang="css">
body {
  width: 100%;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  color: #333333;
  font-family: PingFang-SC-Medium, PingFangSC, "Microsoft Yahei", Helvetica,
    Tahoma, Arial, "Hiragino Sans GB", "Hiragino Sans GB W3", STXihei, STHeiti,
    Heiti, SimSun, sans-serif !important;
  font-size: 12px;
}
::-webkit-scrollbar {
  display: none;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type="number"] {
  -moz-appearance: textfield;
}
*,
p {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}
input {
  outline: none;
}
button {
  display: block;
  border: none;
  outline: 0;
  background: #fff;
}
a:link,
a:visited,
a:hover,
a:active {
  color: #0099ff;
}
.lf {
  float: left;
}
.rt {
  float: right;
}
.clear:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.clear {
  zoom: 1;
}
.textarea:focus {
  outline-color: rgba(190, 184, 149, 1);
}
</style>
