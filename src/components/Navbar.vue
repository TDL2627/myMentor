<template>
 
   <div class="navi">
    <div class="navg d-flex">

   <router-link to="/main"><img class="nav-logo" src="@/assets/mentlogo.png" alt="logo"></router-link> 
     <router-link class="nav-link" to="/main">HOME</router-link>
    <router-link class="nav-link" to="/mentors">MENTORS</router-link>
    <router-link class="nav-link" to="/notepad">NOTE PAD</router-link>
    <router-link class="nav-link" to="/shuttle">SHUTTLE</router-link>
    <router-link class="nav-link" to="/times">TIME TABLE</router-link>
    <router-link class="nav-link" to="/feedback">FEED BACK</router-link>
     <router-link class="nav-link" to="/advice">INFORMATION</router-link>
 <div class="dropdown">    
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><router-link class="dropdown-item" to="/advice/exam">EXAM PREPERATION</router-link></li>
    <li><router-link class="dropdown-item" to="/advice/study">STUDY GUIDE</router-link></li>
    <li><router-link class="dropdown-item" to="/advice/mental">MENTAL HELP</router-link></li>
    <li><router-link class="dropdown-item" to="/advice/time">TIME MANAGEMENT</router-link></li>

  </ul>
</div>
    <router-link class="nav-link"  to="/profile">PROFILE</router-link>
    </div>
    

  
      <button class="outtie" @click="logout()">LOG OUT</button>

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
.nav-link{
  color: white;
}
.navg{
  padding-left: 20%;
}
.nav-link:hover{
  color: white;
text-decoration: underline;
}
a.router-link-exact-active {
    font-size:20px;
color: cadetblue;
font-weight: bold;
text-decoration: underline ;
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
.nav-logo{
   position: fixed;
    top: 0px;
    left: 5px;
  height: 40px;
  background: white;
  border-radius: 50%;
  margin: 5px;
}


</style>