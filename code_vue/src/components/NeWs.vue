<template>
  <div>
    <ul>
      <li v-for="(item,index) in NewsList" :key="index"><router-link :to="{
        name:'newsDetail',
        params:{
          id:item.id,
          name:item.name
        }
      }" active-class="active">
        {{item.name}}
      </router-link>
        <button @click="pushShow(item)">push查看</button>
        <button @click="replaceShow(item)">replace查看</button>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "NeWs",
  data(){
    return {
      NewsList:[
        {id:1,name:'1'},
        {id:2,name:'2'},
        {id:3,name:'3'},
      ]
    }
  },
  methods:{
    pushShow(item){
      setTimeout(()=>{
        this.$router.push({
          name:'newsDetail',
          params:{
            id:item.id,
            name:item.name
          }
        })
      },500)
    },
    replaceShow(item){
      this.$router.replace({
        name:'newsDetail',
        params:{
          id:item.id,
          name:item.name
        }
      })
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