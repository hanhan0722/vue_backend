<template>
  <div class="header">
    <i class="el-icon-s-unfold" v-show="!isCollapse" @click="CHANGE_ISCOLLAPSE({isCollapse:true})"></i>
    <i class="el-icon-s-fold" v-show="isCollapse" @click="CHANGE_ISCOLLAPSE({isCollapse:false})"></i>
    <div class="user">
      <el-badge :value="2" class="item user-message">
        <i class="el-icon-bell"></i>
      </el-badge>
        <img src="@/assets/img/layout/avatar_default.png" alt="" class="avatar">
        <span>超级管理员</span>
    </div>
  </div>
</template>

<script>
import { mapState,mapActions } from "vuex";
export default {
  name: "LayoutHeader",
  computed:{
    ...mapState('Layout',['isCollapse'])
  },
  data() {
    return {};
  },
  mounted() {
  },
  methods:{
    ...mapActions('Layout',['CHANGE_ISCOLLAPSE'])
  }
};
</script>
<style lang="less" scoped>
.header{
  height:100%;
  display: flex;
  align-items: center;
  position: relative;
  .user{
    position: absolute;
    right: 0;
    .avatar{
      width: 24px;
      border-radius: 50%;
      vertical-align: middle;
      margin-left:10px;
    }
    span{
      vertical-align: middle;
    }
  }
}
</style>