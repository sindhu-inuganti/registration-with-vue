import Vue from 'vue'
import VueRouter from 'vue-router';
//import App from './App.vue'
import App from './App.vue'
import Register from "./components/Register.vue";
//import Preview from "./components/Preview.vue";
import ListComponent from "./components/ListComponent.vue";


Vue.config.productionTip = false

Vue.use(VueRouter);
 
const routes = [
  { path: '/Register', component: Register, name: 'Register',props:true},
  
  { path: '/ListComponent', component: ListComponent, name:'ListComponent',props:true },

  { path: '/', component: ListComponent},


];

const router = new VueRouter({
  routes
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

