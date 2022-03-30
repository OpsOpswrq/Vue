<template>
  <div>
    <BanNer/>
    <div>
      <router-link replace active-class="active" to="/home">Home</router-link>
      <br/>
      <router-link active-class="active" :to="{name:'about'}">About</router-link>
    </div>
    <keep-alive include="NeWs">
        <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import BanNer from "@/components/BanNer";
export default {
  name:'App',
  components: {BanNer},
}
</script>
<style>
/*类选择器*/
a{
  text-decoration: none;
}
.active{
color: red;
font-size: 17px;
}
</style>