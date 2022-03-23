<template>
  <div class="about">
      <Nav/>
<h1 class="heading animate__animated animate__fadeInDown">ABOUT</h1>
<h3>WHAT IS THIS APP ABOUT?</h3>
<p>This is a first year university student assistance application which a PWA so it can be installed on mobile devices since students are are mostly on their phones than pc/laptop.This app helps the students transition easier into the university environment.</p>
 <br><br>
 <h3>THE FEATURES</h3>
 <br>
 <h5>NOTEPAD</h5>
 <p>A personal and private notepad that can be accessed on any device any where.</p>
 <br>
 <h5>MENTOR LIST</h5>
 <p>A list of mentors with their contact details, description and direct whatsapp links.</p>
 <br>
 <h5>FEED BACK</h5>
 <p>A series of questions to check up on students.The responses is then sent to the mentors who can help.</p>
<br>
<h5>PROFILE SECTION</h5>
<p>Where students can edit their account or delete it.Once they do the student will be notified via email.</p>
<br>
<h5>SHUTTLE TIMES</h5>
<p>An easily accessable  university shuttle time schedule which is constantly updated .</p>
<br>
<h5>TIME TABLE</h5>
<p>An easily accessable class time table which is exactly in the same familiar layout students are used to.</p>
<br>
<h5>GENERAL INFORMATION</h5>
<p>A section where students can read relevant and useful information such as study guides, mental health tips and more.</p>
<br><br>
<h5>DEVELOPED BY</h5>
<p>Ashley Kannemeyer</p>
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
     height: max-content !important;
    overflow-y: hidden !important;
  background:linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), rgb(17, 20, 64);
    width: 100%;
    padding-top: 7%;
    padding-bottom: 5%;
}
h3,h5,p{
  color: whitesmoke;
}
</style>