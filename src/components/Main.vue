<template>
<div class="main-ou">
<Nav/>
<h1 class="heading animate__animated  animate__tada  animate__delay-1s">HOME</h1>
 <h2 class="welcome animate__animated  animate__fadeInDown animate__delay-2s">Welcome {{name}}</h2>

<!-- desktop -->
<div class="container desktop animate__animated animate__zoomInDown">
    <div class="row">
       <div class="col-lg-4">
                <router-link  to="/mentors"> <p class="tabby">MENTORS</p></router-link>
       </div>
        <div class="col-lg-4">
                <router-link  to="/notepad"><p class="tabby">NOTE PAD</p></router-link>
       </div>
        <div class="col-lg-4">
               <router-link  to="/about"><p class="tabby">ABOUT</p> </router-link>
       </div>
    </div>

    <div class="row">
         <div class="col-lg-4">
                <router-link  to="/shuttle"><p class="tabby">SHUTTLE</p></router-link>
       </div>
        <div class="col-lg-4">
                <router-link  to="/advice"><p class="tabby">INFORMATION</p></router-link>
       </div>
        <div class="col-lg-4">
                <router-link  to="/feedback"><p class="tabby">FEED BACK</p></router-link>
       </div>
    </div>
</div>

<!-- for mobile -->
<div class="container mobile ">
 <div class="row d-flex">
       <div class="col-sm-12 animate__animated animate__lightSpeedInRight">
                <router-link  to="/mentors"> <p class="tabby">MENTORS</p></router-link>
                <router-link  to="/notepad"> <p class="tabby">NOTEPAD</p></router-link>
       </div>  

        <div class="col-sm-12 animate__animated animate__lightSpeedInLeft">
                <router-link  to="/about"> <p class="tabby">ABOUT</p></router-link>
                <router-link  to="/shuttle"> <p class="tabby">SHUTTLE</p></router-link>
       </div>

        <div class="col-sm-12 animate__animated animate__lightSpeedInRight">
                <router-link  to="/advice"> <p class="tabby">INFORMATION</p></router-link>
                <router-link  to="/feedback"> <p class="tabby">FEED BACK</p></router-link>
       </div>
</div>
    
</div>


</div>
</template>

<script>
import Nav from "../components/Navbar.vue"
export default {
    data(){
  return{
 name: localStorage.getItem("name")
  }
    },
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
    overflow: hidden !important;
  background:linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), rgb(17, 20, 64);
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
    margin: 50px;
}
.mobile{
    display: none;
}
a{
    text-decoration:none;
}
.welcome{
    color: white;
}



/* media query */
@media only screen and (max-width: 600px) {
.main-ou{
    padding-top: 20%;
    padding-bottom:20%;
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
/* .col-sm-12{
    margin-bottom: 100px;
} */
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