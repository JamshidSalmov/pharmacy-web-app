<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>
<script>
import MainLayout from './layout/MianLayout.vue'
import LoginLayout from './layout/LoginLayout.vue'
import DenamecLayout from './layout/DenamecLayout.vue'
import SaleLayout from "./layout/SaleLayout.vue"
export default {
  components:{
    MainLayout,
    LoginLayout,
    DenamecLayout,
    SaleLayout,
  },
  computed:{
    layout(){
      return (this.$route.meta.layout || "login") + '-layout'
    }
  }

}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
