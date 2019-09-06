<template>
  <div class="container">
    <div>
      <logo />
      <hello-world msg="Welcome to Your Vue.js App" />
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import HelloWorld from "~/components/HelloWorld.vue";

export default {
  components: {
    Logo,
    HelloWorld
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
