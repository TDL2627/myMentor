<template>
  <div class="home">

<h1 class="huge-head">myMentor</h1>

<div class="container desktop">
  <div class="row">
<div class="col-lg-6 col-md-6">
<router-link class="home-but" to="/login">LOGIN</router-link>
</div>
<div class="col-lg-6 col-md-6">
  <router-link class="home-but" to="/register">REGISTER</router-link>
</div>

  </div>
</div>
<!-- mobile -->
<div class="mobile">
  <router-link class="mobi-link" to="/login">LOGIN</router-link>
  <router-link class="mobi-link" to="/register">REGISTER</router-link>
</div>

  </div>
</template>

<script>


export default {

  
}
</script>
<style scoped>
.home{
  background:white;
  padding-top:10%;
  height: 100vh;
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
.mobile{
  display: none;
}
.mobi-link{
   border-radius: 25px;
   border: solid 5px rgb(52, 152, 235);
  text-decoration: none;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
 padding-right: 20px;
  margin: 30px;
}
@media only screen and (max-width: 600px) {
  .home{
  padding-top:30%;
}
.huge-head{
  font-size: 50px;
}
.desktop{
  display: none;
}
.mobile{
  display: initial;
  position: fixed;
  bottom: 30%;
  left: 2%;
}
}
</style>
