<template>
  <el-menu class="navbar" mode="horizontal">
    <!--<hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>-->
    <!--<levelbar></levelbar>-->
    <el-dropdown class="avatar-container">
      <div class="avatar-wrapper">
        <img class="user-avatar" :src="userAvatar">
        <i class="el-icon-caret-bottom"></i>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <router-link class="a-link" to="/Dashboard">Home</router-link>


        </el-dropdown-item>
        <el-dropdown-item divided>
          <!--<span @click="logout" style="display:block;">LogOut</span>-->
          <span style="display:block;">退出</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-menu>
</template>

<script>
  import userAvatar from '@/assets/images/logo.png'
  export default {
    name: 'Navbar',
    data() {
      return {
        userAvatar
      }
    }
  }
</script>

<style>
  .navbar {
    height: 50px;
    line-height: 50px;
    border-radius: 0px !important;
  }
  .avatar-container {
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 35px;
  }
  .avatar-wrapper {
    cursor: pointer;
    margin-top: 5px;
    position: relative;
  }
  .user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }
  .a-link{
    text-decoration: none;
    color: #000;
  }
</style>
