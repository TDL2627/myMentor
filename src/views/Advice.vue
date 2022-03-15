<template>
<div class="advice">
<Nav/>
<h1 class="heading">GENERAL INFORMATION</h1>

<div class="container desktop">
  <div class="row">
 <div class="col-lg-6">
   <router-link class="tabby" to="/advice/time">TIME MANAGEMENT</router-link>
 </div>
 <div class="col-lg-6">
   <router-link class="tabby" to="/advice/study">STUDY GUIDE</router-link>
 </div>
  </div>
  <div class="row">
    <div class="col-lg-6">
   <router-link class="tabby" to="/advice/mental">MENTAL HELP</router-link>
 </div>
 <div class="col-lg-6">
   <router-link class="tabby" to="/advice/exam">EXAM PREP</router-link>
 </div>

  </div>
</div>

</div>
</template>

<script>
import Nav from "../components/Navbar.vue"
export default {
components:{
  Nav
}
}
</script>

<style scoped>
.advice{
  padding-top: 7%;
}
.row{
    margin: 150px;
}
.tabby{
    text-decoration: none;
    color: rgb(52, 152, 235);
    padding: 50px;
    border: solid 5px  rgb(52, 152, 235);
}
/* media query */
@media only screen and (max-width: 600px){
  .advice{
    padding-top: 20%;
  }
  .row{
    margin: 20px;
    margin-bottom: 100px;
  }
  .tabby{
    padding: 10px;
    border-radius:25px ;
  }
  .col-lg-6{
    width: 50%;
    margin-bottom: 20px;
  }
  .desktop{
    padding-top: 20%;
  }
}
</style>