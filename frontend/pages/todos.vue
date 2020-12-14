<template>
  <v-layout justify-left>
    <todo-list />
  </v-layout>
</template>

<script>
import todoList from '~/components/todo-list.vue'

export default {
  components: {
    todoList
  },
  data () {
    return {}
  }
}
</script>

<style>
</style>
