<template>
  <section class="app-main">
    <div class="app-container">
      <transition name="fade" mode="out-in">
        <router-view :key="key"></router-view>
      </transition>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'AppMain',
    computed: {
      key() {
        return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
      }
    }
  }
</script>
