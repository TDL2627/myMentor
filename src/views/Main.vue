<template>

<div class="main-ou">
<div class="navi">
       <router-link to="/main"><img class="nav-logo" src="@/assets/mentlogo.png" alt="logo"></router-link> 
      <router-link class="account"  to="/profile">PROFILE</router-link>
      <button class="outtie" @click="logout()">LOG OUT</button>
  </div>
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
export default {
     mounted(){
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
/* nav */
.nav-logo{
   position: fixed;
    top: 0px;
    left: 5px;
  height: 40px;
  background: white;
  border-radius: 50%;
  margin: 5px;
  display: initial;
}
.navi{
      position: fixed;
    top: 0;
    left: 0;
    height: 50px;
    width: 100%;
    background-color: rgb(63, 72, 204);
}
.outtie{
    position: fixed;
    top: 5px;
    right: 10px;
    text-decoration: none;
    color: red;
    background: white;
    border: solid red 2px;
    border-radius: 25px;
    padding: 5px;
}

.account{
  position: fixed;
  top:5px;
  background: white;
  border-radius: 25px;
  padding: 5px;
  border: solid 1px rgb(63, 72, 204);
  right:  120px;
  left: none;
  text-decoration: none;
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