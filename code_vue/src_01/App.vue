<template>
  <div>
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
import School from './components/SchOol.vue'
import Student from './components/StuDent.vue'

export default {
  name:'App',
  components:{
    School,
    Student
  }
}
</script>