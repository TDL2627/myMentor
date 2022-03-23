<template>
<div class="navigation">


 <!-- pc nav -->
   <div class="navi pc">
      <router-link to="/main"><img class="nav-logo" src="@/assets/mentlogo.png" alt="logo"></router-link> 
    <div class="navg d-flex">
  
     <router-link class="nav-link" to="/main">HOME</router-link>
    <router-link class="nav-link" to="/mentors">MENTORS</router-link>
    <router-link class="nav-link" to="/notepad">NOTE PAD</router-link>
    <router-link class="nav-link" to="/feedback">FEED BACK</router-link>
    <router-link class="nav-link" to="/about">ABOUT</router-link>
   <router-link class="nav-link"  to="/profile">PROFILE</router-link>
 <div class="dropdown">    
  <button class="btn droppie btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
MORE
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
       <li><router-link class="dropdown-item" to="/shuttle">SHUTTLE</router-link></li> 
   <li><router-link class="dropdown-item" to="/times">TIME TABLE</router-link></li> 
         <hr>
              <router-link class="dropdown-item" to="/advice"><p style="text-align:center;">INFO</p></router-link>
    
    <li><router-link class="dropdown-item" to="/advice/exam">EXAM PREPERATION</router-link></li>
    <li><router-link class="dropdown-item" to="/advice/study">STUDY GUIDE</router-link></li>
    <li><router-link class="dropdown-item" to="/advice/mental">MENTAL HELP</router-link></li>
    <li><router-link class="dropdown-item" to="/advice/time">TIME MANAGEMENT</router-link></li>


  </ul>
</div>
 
    </div>
      <button class="outtie" @click="logout()">LOG OUT</button>
  </div>
<!-- mobi -->
<div class="mobility">
  <div class="navie">
   <router-link to="/main"><img class="nav-logo" src="@/assets/mentlogo.png" alt="logo"></router-link> 
<button class="btn menu  btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
  <img id="menu" src="@/assets/menu.png" alt="menu">
</button>
  </div>
<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
     <router-link to="/main"><img class="nav-logo" src="@/assets/mentlogo.png" alt="logo"></router-link> 
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
       <div class="navg">
  
     <router-link class="nav-link" to="/main">HOME</router-link>
    <router-link class="nav-link" to="/mentors">MENTORS</router-link>
    <router-link class="nav-link" to="/notepad">NOTE PAD</router-link>
    <router-link class="nav-link" to="/feedback">FEED BACK</router-link>
    <router-link class="nav-link" to="/about">ABOUT</router-link>
       <router-link class="nav-link"  to="/profile">PROFILE</router-link>
 <div class="dropdown">    
  <button class="btn droppie btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
MORE
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
       <li><router-link class="dropdown-item" to="/shuttle">SHUTTLE</router-link></li> 
   <li><router-link class="dropdown-item" to="/times">TIME TABLE</router-link></li> 
         <hr>
              <router-link class="dropdown-item" to="/advice"><p style="text-align:center;">INFO</p></router-link>
    <li><router-link class="dropdown-item" to="/advice/exam">EXAM PREPERATION</router-link></li>
    <li><router-link class="dropdown-item" to="/advice/study">STUDY GUIDE</router-link></li>
    <li><router-link class="dropdown-item" to="/advice/mental">MENTAL HELP</router-link></li>
    <li><router-link class="dropdown-item" to="/advice/time">TIME MANAGEMENT</router-link></li>
  </ul>
</div>
    <br>
    <br>
    <button class="out" @click="logout()">LOG OUT</button>
    </div>
   
  </div>
</div>

</div>

  </div>
</template>

<script>
export default {
 methods: {
      logout() {
        localStorage.clear()
        this.$router.push({
          name: 'Home'
        })
      }
    }
}
</script>

<style scoped>
/* mobile */

.mobility{
  display: none;
}
.navie{
  position: fixed;
  top: 0;
  left: 0;
  height: 50px;
  width: 100%;
 background: rgb(17, 20, 64);

}
#menu{
  height: 20px;
}
.menu{
  position: fixed;
  top: 0;
  right: 0;
  margin: 5px;
  height: 40px;
}
.offcanvas{
  width: 70% !important;
  background: rgb(17, 20, 64);


}
h5{
  color: white;
}
.nav-link{
  color: white;
}
.navg{
  padding-left: 30%;
}
.nav-link:hover,.dropdown-item:hover{
  color: rgb(52, 152, 235);
text-decoration: underline;
}
a.router-link-exact-active {
    font-size:20px;
 color: rgb(52, 152, 235);
font-weight: bold;
text-decoration: underline ;
}

.droppie{
  margin: 0;
  padding: 2px;
}
.navi{
      position: fixed;
    top: 0;
    left: 0;
    z-index: 99999;
    height: 50px;
    width: 100%;
      background: rgb(17, 20, 64);

}
.droppie{
  margin-top: 5px;
}
.out{
   text-decoration: none;
    color: red;
    background: white;
    border: solid red 2px;
    border-radius: 25px;
    padding: 5px;
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
.nav-logo{
   position: fixed;
    top: 0px;
    left: 5px;
  height: 40px;
  background: white;
  border-radius: 50%;
  margin: 5px;
}

@media  only screen and (max-width:700px) {
  .pc{
    display: none;
  }
  .mobility{
    display: initial;
  }
}
</style>