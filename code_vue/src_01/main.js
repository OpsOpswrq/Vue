import Vue from 'vue/dist/vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el:'#app',
  // render(createElement){
  //   return createElement('h1','Nihao')
  // }
  render:h=>h(App)
  // template:`
  //   <div>
  //     <App></App>
  //   </div>
  // `,
  // components:{
  //   App
  // }
})
