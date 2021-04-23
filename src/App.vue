<!--
 * @Author: atdow
 * @Date: 2021-04-21 16:38:31
 * @LastEditors: null
 * @LastEditTime: 2021-04-23 17:41:26
 * @Description: file content
-->
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import axios from './utils/axios'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    console.log(9999)
    // axios
    //   .get('/users/XPoet')
    //   .then((res) => {
    //     console.log('res: ', res)
    //   })
    //   .catch((err) => {
    //     console.log('err: ', err)
    //   })
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
