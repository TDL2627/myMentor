<template>
  <div class="navi">
   <router-link to="/main"><img class="nav-logo" src="@/assets/mentlogo.png" alt="logo"></router-link> 
      <router-link  to="/profile">PROFILE</router-link>
      <router-link class="outtie" to="/">LOG OUT</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
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