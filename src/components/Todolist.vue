<template>
  <ul>
    <li v-for="todo in todos" v-bind:key="todo.id">
      <Todo :todo="todo" @delete="onDelete" @change="onChange"></Todo>
    </li>
  </ul>
</template>

<script>
import Todo from './Todo';
export default {
  name: 'Todo-list',
  props: ['todos'],
  components: {
    Todo,
  },
  methods: {
    onDelete(todo) {
      this.$emit('delete', todo);
    },
    onChange(todo) {
      this.$emit('todo-change', todo);
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20px;
}

li {
  width: 33%;
  margin-bottom: 20px;
}
</style>
