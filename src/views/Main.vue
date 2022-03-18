<template>
<div class="main-ou">
<Nav/>
<h1 class="heading">HOME</h1>


<!-- desktop -->
<div class="container desktop">
    <div class="row">
       <div class="col-lg-4">
                <router-link class="tabby" to="/mentors">MENTORS</router-link>
       </div>
        <div class="col-lg-4">
                <router-link class="tabby" to="/notepad">NOTE PAD</router-link>
       </div>
        <div class="col-lg-4">
               <router-link class="tabby" to="/times">TIME TABLE</router-link>
       </div>
    </div>

    <div class="row">
         <div class="col-lg-4">
                <router-link class="tabby" to="/shuttle">SHUTTLE</router-link>
       </div>
        <div class="col-lg-4">
                <router-link class="tabby" to="/advice">INFORMATION</router-link>
       </div>
        <div class="col-lg-4">
                <router-link class="tabby" to="/feedback">FEED BACK</router-link>
       </div>
    </div>
</div>

<!-- for mobile -->
<div class="container mobile">
 <div class="row">
       <div class="col-sm-12">
                <router-link class="tabby" to="/mentors">MENTORS</router-link>
                <router-link class="tabby" to="/notepad">NOTE PAD</router-link>
       </div>
</div>

<div class="row">
        <div class="col-sm-12">
        <router-link class="tabby" to="/times">TIME TABLE</router-link>
         <router-link class="tabby" to="/shuttle">SHUTTLE</router-link>
       </div>
</div>

<div class="row">
        <div class="col-sm-12">
         <router-link class="tabby" to="/advice">INFORMATION</router-link>
         <router-link class="tabby" to="/feedback">FEED BACK</router-link>
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
         console.log(localStorage.getItem("jwt"))
        if (!localStorage.getItem("jwt")) {
            alert("User not logged in");
            return this.$router.push({ name: "Login" });
        }
      },
 methods: {
      logout() {
        localStorage.removeItem('jwtToken')
        this.$router.push({
          name: 'Home'
        })
      }
    }
}
</script>

<style scoped>
.main-ou{
    padding-top: 7%;
        height: max-content !important;
    overflow-y: hidden !important;
    background: rgb(17, 20, 64);
    width: 100%;
}
.tabby{
    text-decoration: none;
    border-radius: 25px;
    color: rgb(52, 152, 235);
    padding: 50px;
    border: solid 5px  rgb(52, 152, 235);
}
.row{
    margin: 150px;
}
.mobile{
    display: none;
}




/* media query */
@media only screen and (max-width: 600px) {
.main-ou{
    padding-top: 20%;
}
.desktop{
    display: none;
}
.mobile{
    display: initial;
}
.tabby{
    padding: 10px;
    margin: 20px;
    border: solid 5px  rgb(52, 152, 235);
}
.row{
    margin: 0px;
}
.col-sm-12{
    margin-bottom: 100px;
}
.heading{
    margin-bottom: 15%;
}
.account{
    position: fixed;
    left: 20px;
    right: none;
  top:5px;
  background: white;
  border-radius: 25px;
  padding: 5px;
  border: solid 1px rgb(63, 72, 204);
  width: 100px;
}
.nav-logo{
    display: none;
}
.outtie{
     width: 100px;
}
}
</style>