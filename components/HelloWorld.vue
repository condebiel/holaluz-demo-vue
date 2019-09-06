<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ma-text
      label="Some label"
      placeholder="Another placeholder"
      v-model="task"
    />
    <ma-button @click="onClick">Add</ma-button>
    <ol>
      <li v-for="(item, index) in list" :key="item">
        <span v-if="index % 2 === 0">{{ item }}</span>
      </li>
    </ol>
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
