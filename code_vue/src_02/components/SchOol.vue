<template>
  <div id="demo">
    <h1>{{msg}}</h1>
    <h1>{{name}}</h1>
    <h1>{{myAge+1}}</h1>
    <button @click="addAge">点我岁数加一</button>
  </div>
</template>

<script>
// import {mixin} from "../mixin"
export default {
  name: "SchOol",
  data(){
    return {
      msg:"HelloWorld",
      myAge:this.age
    }
  },
  // mixins:[mixin],
  props:{
    name:{
      type:String,
      required:true,
    },
    age:{
      type:Number,
      default:18,
    }
  }
}
</script>

<style scoped>
#demo{
  background: red;
}
</style>