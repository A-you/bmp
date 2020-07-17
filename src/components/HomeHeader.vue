<!--
 * @Author: ymy
 * @Date: 2020-07-17 10:15:15
 * @LastEditors: ymy
 * @LastEditTime: 2020-07-17 14:54:02
-->
<template>
  <div class="head-container">
    <div class="left">
      <div class="logo-box">
        <el-image :src="logo"></el-image>
      </div>
      <span class="sys-name">后台管理系统</span>
    </div>
    <div class="right">
      <el-dropdown>
        <span class="el-dropdown-link">
          张某人<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>编辑</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
          <el-dropdown-item>切换账号</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { logo } from './logoData'
export default {
  data () {
    return {
      logo
    }
  }
}
</script>

<style lang="scss" scoped>
.head-container {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #666666;
  height: 59px;
  .right {
    margin-right: 30px;
    .el-dropdown-link {
      margin-top: 20px;
      display: inline-block;
    }
  }
  .left {
    margin-left: 30px;
    display: flex;
    align-items: center;
    .logo-box {
      display: flex;
      align-items: center;
      &:after {
        content: '';
        margin-left: 15px;
        padding-left: 15px;
        border-left: 1px solid #c0c4cc;
        height: 35px;
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
}
</style>
