<template>
  <div>
    <ul>
      <li v-for="(item,index) in MessageList" :key="index"><router-link :to="`/home/messages/detail/${item.id}/${item.name}`" active-class="active">{{item.name}}</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "MessAge",
  data(){
    return {
      MessageList:[
        {id:1,name:"你好"},
        {id:2,name:"吃了吗"},
        {id:3,name:"再见"},
      ]
    }
  },
  beforeDestroy() {
    console.log("我要被销毁了")
  }
}
</script>

<style scoped>
a{
  text-decoration: none;
}
.active{
  color: red;
  font-size: 17px;
}
</style>