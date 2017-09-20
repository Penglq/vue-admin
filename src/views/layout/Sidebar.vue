<template>
  <div class='menu-wrapper'>
    <el-menu class="el-menu-vertical" @open="handleOpen" @close="handleClose" :collapse="isCollapse" theme="dark">
      <sidebar-item :routes="routes"></sidebar-item>
    </el-menu>
  </div>
</template>

<script>
  import SidebarItem from './SidebarItem'

  export default {
    name: 'Sidebar',
    components: { SidebarItem },
    data() {
      return {
        isCollapse: false,
        routes: this.$router.options.routes
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style scoped>
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 180px;
    height: 100%;
  }
</style>
