<template>
  <div class="login-container">
    <el-form autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left"
             label-width="0px" class="card-box login-form llll">
      <h3 class="title">系统登录</h3>
      <el-form-item prop="email">
        <span class="svg-container"><i class="el-icon-menu"></i></span>
        <el-input name="email" type="text" v-model="loginForm.email" autoComplete="on" placeholder="邮箱"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container"><i class="el-icon-setting"></i></span>
        <el-input name="password" type="password" @keyup.enter.native="handleLogin" v-model="loginForm.password"
                  autoComplete="on" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width:100%;" :loading="loading" @click.native.prevent="handleLogin">
          登录


        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      // 验证邮箱的规则
      const validateEmail = (rule, value, callback) => {
        if (!this.isEmail(value)) {
          callback(new Error('请输入正确的合法邮箱'))
        } else {
          callback()
        }
      }
      // 验证密码的规则
      const validatePass = (rule, value, callback) => {
        if (value.length < 6) {
          callback(new Error('密码不能小于6位'))
        } else {
          callback()
        }
      }
      return {
        loginForm: {
          email: 'admin@fusio.com.cn',
          password: '123456'
        },
        loginRules: {
          email: [
            { required: true, trigger: 'blur', validator: validateEmail }
          ],
          password: [
            { required: true, trigger: 'blur', validator: validatePass }
          ]
        },
        loading: false,
        showDialog: false
      }
    },
    methods: {
      isEmail(str) {
        const reg = /^[a-z0-9](?:[-_.+]?[a-z0-9]+)*@fusio\.com\.cn$/i
        return reg.test(str.trim())
      },
      handleLogin() {
        console.log(this.loginForm)
        // 验证表单
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            // 验证通过
            this.loading = true
            // 使用状态管理
//            this.$store.dispatch('Login', this.loginForm).then(() => {
//              this.loading = false
            this.$router.push({ path: '/' })
//            }).catch(err => {
//              this.loading = false
//              this.$message.error(err)
//            })
          } else {
            // 验证失败
//            console('error submit!!');
            return false
          }
        })
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoprd>
  .tips {
    text-align: left;
    font-size: 14px;
    color: #999;
    margin-bottom: 5px;
  }

  .login-container {
    position: relative;
    width: 100%;
    height: 100%;
    height: 100vh;
    background-color: #2d3a4b;

    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important;
      -webkit-text-fill-color: #fff !important;
    }
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: #eeeeee;
      height: 47px;
    }
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
    }
    .svg-container {
      padding: 6px 5px 6px 15px;
      color: #889aa4;
    }
    .title {
      font-size: 26px;
      font-weight: 400;
      color: #eeeeee;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    .login-form {
      position: absolute;
      left: 0;
      right: 0;
      width: 400px;
      padding: 35px 35px 15px 35px;
      margin: 120px auto;
    }
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
    .forget-pwd {
      color: #fff;
    }
  }
</style>
