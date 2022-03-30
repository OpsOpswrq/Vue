import App from "@/App";
import Vue from "vue";
import {plugin} from "./plugin";
Vue.config.productionTip = false
Vue.use(plugin)
new Vue({
    el:"#app",
    render:h=>h(App)
})