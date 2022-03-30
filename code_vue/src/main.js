import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Router from "@/router";
import {Button,Row} from 'element-ui'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.component(Button.name,Button)
Vue.component(Row.name,Row)
new Vue({
  el:'#app',
  render:h=>h(App),
  router:Router,
})
