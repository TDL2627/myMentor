<template>
  <div class="home">

<h1 class="huge-head">myMentor</h1>
<router-link to="/login">LOGIN</router-link>
<router-link to="/register">REGISTER</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from '@/components/Intro.vue'

export default {

  components: {
    Intro
  }
}
</script>
<style scoped>
.home{
  padding-top:10%;
}
.huge-head{
  font-size: 150px;
}
</style>
