<template>
  <div class="app-wrapper">
    <div class="sidebar-wrapper">
      <Sidebar class="sidebar-container"></Sidebar>
    </div>
    <div class="main-container">
      <Navbar></Navbar>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
  // 引入组件文件
  import { Navbar, Sidebar, AppMain } from '@/views/layout'

  export default {
    name: 'Layout',
    components: {
      AppMain,
      Sidebar,
      Navbar
    }
  }
</script>

<style>
  .app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
  }
  .app-wrapper .sidebar-wrapper {
    width: 180px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
    transition: all .28s ease-out;
  }
  .sidebar-container {
    transition: all .28s ease-out;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: -17px;
    overflow-y: scroll;
  }
  .main-container {
    min-height: 100%;
    transition: all .28s ease-out;
    margin-left: 180px;
  }
</style>
