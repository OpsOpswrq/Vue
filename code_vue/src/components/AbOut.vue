<template>
<div>
  <h1>我是about</h1>
</div>
</template>

<script>
export default {
  name: "AbOut",
  beforeRouteEnter(to,from,next){
    if(localStorage.getItem('name')==='feng'){
      next()
    }else{
      alert("没有权限")
    }
  },
  beforeRouteLeave(to,from,next){
    console.log("再见")
    next()
  }
}
</script>

<style scoped>

</style>