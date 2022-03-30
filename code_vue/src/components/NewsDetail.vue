<template>
<div>
<ul>
  <li>消息的id:{{id}}</li>
  <li>消息的name:{{name}}</li>
</ul>
</div>
</template>

<script>
export default {
  name: "NewsDetail",
  props:['id','name']
}
</script>

<style scoped>

</style>