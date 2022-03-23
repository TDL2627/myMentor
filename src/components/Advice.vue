<template>
<div class="advice">
<Nav/>
<h1 class="heading animate__animated animate__fadeInDown">GENERAL INFORMATION</h1>

<div class="container desktop">
  <div class="row">
 <div class="col-lg-6">
   <router-link class="tabby tm" to="/advice/time">TIME MANAGEMENT</router-link>
 </div>
 <div class="col-lg-6">
   <router-link class="tabby" to="/advice/mental">MENTAL HELP</router-link>
 </div>
  </div>
  <div class="row">
    <div class="col-lg-6">
   <router-link class="tabby" to="/advice/study">STUDY GUIDE</router-link>
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
},
  mounted(){
      if (!localStorage.getItem("jwt")) {
        alert("User not logged in");
        return this.$router.push({ name: "Login" });
      }
      },
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
    margin: 0px;
    margin-bottom: 0px;
  }
  .tabby{
    padding: 10px;
    border-radius:25px ;
  }
  .col-lg-6{
    width: 100%;
    margin-bottom: 70px;
  }
  .desktop{
    padding-top: 20%;
  }
  
}
</style>