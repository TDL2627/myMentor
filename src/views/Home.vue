<template>
  <div class="home">

<h1 class="huge-head">myMentor</h1>

<div class="container">
  <div class="row">
<div class="col-lg-6">
<router-link class="home-but" to="/login">LOGIN</router-link>
</div>
<div class="col-lg-6">
  <router-link class="home-but" to="/register">REGISTER</router-link>
</div>

  </div>
</div>


  </div>
</template>

<script>


export default {

  
}
</script>
<style scoped>
.home{
  padding-top:10%;
}
.huge-head{
  font-size: 150px;
  color: rgb(52, 152, 235);
}
.home-but{
  border: solid 5px rgb(52, 152, 235);
  text-decoration: none;
  padding: 10px;
  padding-left: 100px;
  padding-right: 100px;
  border-radius: 25px;
}
.container{
  padding-top: 10%;
}
</style>
