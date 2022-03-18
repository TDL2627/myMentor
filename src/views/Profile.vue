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

 <div  class="student" v-if="student">
    <h3 class="name">Name : {{student.name}}</h3>
    <p>Email : {{student.email}}</p>
    <p>Number : {{student.contact}}</p>
    <p>Qualification : {{student.subject}}</p>
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
  student:null,
  loading:false
}
},
 mounted(){
      if (!localStorage.getItem("jwt")) {
        alert("User not logged in");
        return this.$router.push({ name: "Login" });
      }
      fetch("https://mymentor-server.herokuapp.com/students/", {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          this.student = json
        })
        .catch((err) => {
          alert(err);
        });
    },

    // mounted(){
    //   this.loading=true
    //   if (!localStorage.getItem("jwt")) {
    //     alert("User not logged in");
    //     return this.$router.push({ name: "Login" });
    //   }
    //   fetch("https://mymentor-server.herokuapp.com/students/1", {
    //     method: "GET",
    //     headers: {
    //       "Content-type": "application/json; charset=UTF-8",
    //       Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    //     },
    //   })
    //     .then((response) => response.json())
    //     .then((json) => {
    //       this.students = json
    //       this.loading = false
    //     })
    //     .catch((err) => {
    //       alert(err);
    //     });
    //    },
    //   //  axois attempt
    //    created() {
    //     let apiURL = `https://mymentor-server.herokuapp.com/students/${this.$route.params.id}`;

    //     axios.get(apiURL).then((res) => {
    //         this.student = res.data;
    //     })
    // }
//  mounted(){
//    this.loading = true
//       if (!localStorage.getItem("jwt")) {
//         alert("Student not logged in");
//         return this.$router.push({ name: "Login" });
//       }
//       fetch("https://mymentor-server.herokuapp.com/students", {
//         method: "GET",
//         headers: {
//           "Content-type": "application/json; charset=UTF-8",
//           Authorization: `Bearer ${localStorage.getItem("jwt")}`,
//         },
//       })
//         .then((response) => response.json())
//         .then((json) => {
//           this.students = json
//           this.loading = false
//         })
//         .catch((err) => {
//           alert(err);
//         });
//     }
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