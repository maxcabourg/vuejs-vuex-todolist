import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './styles.css';
import actions from './state/actions';
import mutations from './state/mutations';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: [
      { id: 1, content: 'Todo 1', completed: true },
      { id: 2, content: 'Todo 2', completed: false },
      { id: 3, content: 'Todo 3', completed: false },
      { id: 4, content: 'Todo 4', completed: false },
    ],
  },
  actions,
  mutations,
});

new Vue({
  render: (h) => h(App),
  store,
}).$mount('#app');
