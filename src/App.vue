<template>
  <div>
    <Header></Header>
    <div class="d-flex justify-content-center mb-2">
      <AddTodo @submit="addTodo"></AddTodo>
    </div>

    <Todolist
      :todos="todos"
      @delete="deleteTodo"
      @todo-change="updateTodo"
    ></Todolist>
  </div>
</template>

<script>
import Header from './components/Header';
import Todolist from './components/Todolist';
import AddTodo from './components/AddTodo';
import { mapState } from 'vuex';
import { mapActions } from 'vuex';
export default {
  name: 'App',
  components: {
    Header,
    Todolist,
    AddTodo,
  },
  computed: mapState({
    todos: (state) => state.todos,
  }),
  methods: {
    ...mapActions(['addTodo', 'deleteTodo', 'updateTodo']),
  },
};
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
