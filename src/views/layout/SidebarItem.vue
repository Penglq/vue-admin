<template>
  <div>
    <template v-for="item in routes">
      <el-submenu v-if="item.noHidden&&!item.noDropdown&&item.children.length>0" :index="item.name">
        <template slot="title">
          <i :class="item.icon"></i>
          <span slot="title">{{ item.name }}</span>
        </template>

        <template v-for="child in item.children" v-if='child.noHidden'>
          <sidebar-item v-if='child.children&&child.children.length>0' :routes='[child]'></sidebar-item>
          <router-link v-else class="menu-indent" :to="item.path+'/'+child.path">
            <el-menu-item :index="item.path+'/'+child.path">
              {{child.name}}
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>

      <router-link v-if="item.noHidden&&item.noDropdown&&item.children.length>0" :to="item.path +  item.children[0].path">
        <el-menu-item :index="item.path+'/'+item.children[0].path">
          <template slot="title">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.name }}</span>
          </template>
        </el-menu-item>
      </router-link>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'SidebarItem',
    props: {
      routes: {
        type: Array
      }
    }
  }
</script>
