export default {
  addTodo(state, todoContent) {
    state.todos = [
      ...state.todos,
      {
        id: state.todos.length + 1,
        content: todoContent,
        completed: false,
      },
    ];
  },

  deleteTodo(state, todo) {
    state.todos = state.todos.filter((_todo) => todo.id !== _todo.id);
  },

  updateTodo(state, todo) {
    const index = this.state.todos.map((_todo) => _todo.id).indexOf(todo.id);
    this.state[index] = todo;
  },
};
