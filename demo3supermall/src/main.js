import Vue from 'vue'
import App from '@/App'
import router from 'router/index'
Vue.prototype.$bus = new Vue({});


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
let a = function (){
  console.log(this);
}