<template>
  <div class="login-box">
    <div class="login-page-container">
      <el-form
        :model="ruleForm2"
        :rules="rules2"
        ref="ruleForm2"
        label-position="left"
        label-width="0px"
        class="demo-ruleForm login-container"
      >
        <h3 class="title">后台登录</h3>
        <el-form-item prop="account">
          <el-input
            type="text"
            v-model="ruleForm2.username"
            placeholder="请输入账号"
          ></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm2.userPassword"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-checkbox
          click="remberuser"
          v-model="checked"
          checked
          class="remember"
        >记住密码</el-checkbox>
        <el-form-item style="width:100%;">
          <el-button
            type="primary"
            style="width:100%;"
            @click="login"
            :loading="logining"
          >登录</el-button>
          <!-- <input v-on:keyup.page-down="login"> -->
          <!-- <el-button type="primary" style="width:100%;" @keyup.enter.native="login" :loading="logining">登录</el-button> -->
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// import { pwdLogin } from './../api/index';
export default {
  name: 'Login',
  props: {},
  data () {
    return {
      logining: false,
      ruleForm2: {
        username: '',
        userPassword: ''
      },
      rules2: {
        username: [
          {
            required: true,
            message: '请输入登录账号',
            trigger: 'blur'
          }
        ],
        userPassword: [
          {
            required: true,
            message: '请输入登录密码',
            trigger: 'blur'
          }
        ]
      },
      checked: true
    }
  },
  created () {
    this.ruleForm2.checkPass = ''
    if (localStorage.getItem('userName')) { // 记住密码操作
      this.ruleForm2.username = localStorage.getItem('userName')
      this.ruleForm2.userPassword = localStorage.getItem('password')
    }
  },
  methods: {
    login () {
      this.$refs.ruleForm2.validate(valid => {
        if (valid) {
          this.logining = true
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
.login-box {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #040122;
}
.login-container {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px;
  background: #fff;
  text-align: center;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 5px #cac6c6;
}

label.el-checkbox.remember {
  margin: 0px 0px 35px 0px;
}
</style>
