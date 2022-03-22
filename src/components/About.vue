<template>
  <div class="about">
      <Nav/>
<h1 class="heading">ABOUT</h1>
<h3>WHAT IS THIS APP ABOUT?</h3>
<p>A web based assistance application that is a PWA so it can be installed on mobile devices since students are are mostly on their phones than pc/laptop. This application targets first year university students to help them transition easier into the university environment.</p>
  </div>
</template>
<script>
import Nav from "../components/Navbar.vue"

export default {
  components:{ Nav},

 mounted(){
        if (!localStorage.getItem("jwt")) {
            alert("User not logged in");
            return this.$router.push({ name: "Login" });
        }
      }
}
</script>

<style scoped>
.about{
    padding-top: 7%;
}
</style>