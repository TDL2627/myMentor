<template>
  <div class="profile">
    <Nav/>
      <h1 class="heading">Profile</h1>

          <div v-if="loading" >
 <div class="half-circle-spinner">
  <div class="circle circle-1"></div>
  <div class="circle circle-2"></div>
</div>
</div>

<div class="person">
<h3>Name : {{ name }}</h3>
<p>Email : {{email}}</p>
<p>Number : {{contact}}</p>
<p>Subject : {{ subject }}</p>
</div>




  </div>
</template>

<script>
import Nav from "../components/Navbar.vue"
// import axios from "axios";
export default {
  components:{ Nav},
data(){
return{

  students:null,
  loading:false,
  name: localStorage.getItem("name"),
  id: localStorage.getItem("id"),
  email:  localStorage.getItem("email"),
  subject:  localStorage.getItem("subject"),
   contact:  localStorage.getItem("contact")
}
}


}
</script>

<style scoped>
.profile{
   height: max-content !important;
    overflow-y: hidden !important;
    background: rgb(17, 20, 64);
    width: 100%;
    padding-bottom: 7%;
    padding-top: 7%;
}
.account{
  display: none;
}
h3,p{
  color:white;
}
.student{
  border: 2px solid black;
  margin: 100px;
}
/* media query */
@media only screen and (max-width: 600px) {
.profile{
  padding-top: 20%;
   padding-bottom: 20%;
}
}
/* loader */
.half-circle-spinner, .half-circle-spinner * {
      box-sizing: border-box;
    }

    .half-circle-spinner {
      width: 60px;
      height: 60px;
      border-radius: 100%;
     position: fixed;
      top:45%;
      z-index: 252687654;
      left: 50%;
    }

    .half-circle-spinner .circle {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
        z-index: 252687654;
      border-radius: 100%;
      border: calc(60px / 10) solid transparent;
    }

    .half-circle-spinner .circle.circle-1 {
      border-top-color: white;
        z-index: 252687654;
      animation: half-circle-spinner-animation 1s infinite;
    }

    .half-circle-spinner .circle.circle-2 {
      border-bottom-color: #1d92ff;
        z-index: 252687654;
      animation: half-circle-spinner-animation 1s infinite alternate;
    }

    @keyframes half-circle-spinner-animation {
      0% {
        transform: rotate(0deg);

      }
      100%{
        transform: rotate(360deg);
      }
    }
</style>