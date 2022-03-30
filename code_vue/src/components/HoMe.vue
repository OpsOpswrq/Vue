<template>
<div>
  <template>
    <h1>我是home</h1>
    <router-link style="text-decoration: none" active-class="active" to="/home/news">News</router-link>
    <br/>
    <router-link style="text-decoration: none" active-class="active" to="/home/messages">Message</router-link>
  </template>
  <div>
    <router-view></router-view>
  </div>
</div>
</template>

<script>
export default {
  name: "HoMe"
}
</script>

<style>
.active{
  color: red;
  font-size: 17px;
}
</style>