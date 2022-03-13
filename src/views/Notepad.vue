<template>
<div class="notepad">
  <Nav/>
<h1 class="heading">Note Pad</h1>
   <div v-if="loading" >
 <div class="half-circle-spinner">
  <div class="circle circle-1"></div>
  <div class="circle circle-2"></div>
</div>
</div>
<div class="notez" v-for="note in notes" :key="note.title">
<h3>{{note.title}}</h3>
<p>{{note.body}}</p>
</div>

</div>
</template>

<script>
import Nav from "../components/Navbar.vue"
export default {
components:{
  Nav
},
data(){
  return{
    notes:null,
    loading:false
  }
},
 mounted() {
    this.loading = true
    if (localStorage.getItem("jwt")) {
      fetch("https://mymentor-server.herokuapp.com/note", {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
      
        .then((response) => response.json())
        .then((json) => {
          this.notes = json;
          this.notes.forEach(async (note) => {
            await fetch(
              "https://mymentor-server.herokuapp.com/note" + note.author,
              {
                method: "GET",
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                  Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                },
              }
            )
              .then((response) => response.json())
              
              .then((json) => {
                note.author = json._id;
              });
          });
        })
        .catch((err) => {
          alert("Not logged in");
          this.$router.push({ name: "Login" })
        });
    } else {
      alert("Login failed");
      this.$router.push({ name: "Login" });
    }
    
  }
}
</script>

<style scoped>
.notepad{
  padding-top: 7%;
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
      left: 50%;
    }

    .half-circle-spinner .circle {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 100%;
      border: calc(60px / 10) solid transparent;
    }

    .half-circle-spinner .circle.circle-1 {
      border-top-color: white;
      animation: half-circle-spinner-animation 1s infinite;
    }

    .half-circle-spinner .circle.circle-2 {
      border-bottom-color: #1d92ff;
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