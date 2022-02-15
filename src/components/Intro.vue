<template>
  <div id="nav">
<div class="nav-piece">
   <router-link to="/mentors">Mentors</router-link>
</div>
<div class="nav-piece">
   <router-link to="/mentors">Time Table</router-link>
</div>
<div class="nav-piece">
   <router-link to="/mentors">Shuttle Times</router-link>
</div>
<div class="nav-piece">
   <router-link to="/mentors">Advice</router-link>
</div>


    </div>



    
</template>

<script>
export default {

 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-piece{
  width: 100%;
  height: 50px;
  padding: 15px;
  margin-top: 30px;
  border-radius: 25px;
  background-color: azure;
 box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
}

a{
  width: 200px;
  text-decoration: none;
}
#nav {
color: #2c3e50;
padding-top: 60%;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

