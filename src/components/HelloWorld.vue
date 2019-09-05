<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  props: {
    msg: String
  },

  data() {
    return {
      description: 'A short description'
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
