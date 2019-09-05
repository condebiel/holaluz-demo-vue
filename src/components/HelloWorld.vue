<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="task" />
    <button @click="onClick">Add</button>
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
      task: 'A short description',
      list: []
    }
  },

  methods: {
    onClick() {
      this.list.push(this.task)
      this.task = ''
      console.log(this.list)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
