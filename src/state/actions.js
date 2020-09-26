export default {
  addTodo({ commit }, todo) {
    commit('addTodo', todo);
  },

  deleteTodo({ commit }, todo) {
    commit('deleteTodo', todo);
  },
  updateTodo({ commit }, todo) {
    commit('updateTodo', todo);
  },
};
