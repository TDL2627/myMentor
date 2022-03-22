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
<a class="addie" style="cursor:pointer;" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add a note
</a>

<!-- Modal for add  note -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Note</h5>
        
        <button type="button" class="btn-close btn-danger" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div class="modal-body">
       <form @submit.prevent="createNote">
        <ul>
          <li>TITLE</li>
          <li> <input v-model="title" required type="text"></li>
          <li>BODY</li>
          <li><textarea v-model="body" required type="text" cols="30" rows="10"></textarea></li>
       </ul>

          <div v-if="loading" >
 <div class="half-circle-spinner">
  <div class="circle circle-1"></div>
  <div class="circle circle-2"></div>
</div>
</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-success">Save changes</button>
        </div>
       </form>
      </div>
     
    </div>
  </div>
</div>
<!-- note -->
<div class="container">
  <div class="row">
<div class="notez col-lg-12 col-sm-12" v-for="note in notes" :key="note.title">
  <div class="buts d-flex">
    <router-link class="notie" :to="{name: 'Note', params: { id: note._id }}"><h3 class="note-head">{{note.title}}</h3></router-link>
</div>





</div>
  </div>
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
    title:"",
    body:"",
    date:"",
    loading:false
  }
},
// fetching all
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
          this.loading = false
         
        })
        .catch((err) => {
          alert("Not logged in");
          this.$router.push({ name: "Login" })
        });
    } else {
      alert("Login failed");
      this.$router.push({ name: "Login" });
    }
    
  },
   methods: {
     createNote() {
         this.loading = true
      if (!localStorage.getItem("jwt")) {
        alert("User not logged in");
        return this.$router.push({ name: "Login" });
      }
      fetch("https://mymentor-server.herokuapp.com/note", {
        method: "POST",
        body: JSON.stringify({
          title: this.title,
          body: this.body
    
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
        .then((response) => response.json())
    
        .then((json) => {
          this.loading = false;
          this.title="";
          this.body="";
          alert("Note added");
          this.$router.go()
        })
        .catch((err) => {
          console.log(err)
          alert("It failed.Try again please");
          this.loading = false;
        });
    }
   }
  
}
</script>

<style scoped>
.notepad{
  padding-top: 7%;
  padding-bottom: 7%;
   height: max-content !important;
    overflow-y: hidden !important;
    background: rgb(17, 20, 64);
}

.ico{
  height: 20px;
}
.notie{
  padding-left: 160px;
  padding-right: 140px;
}
.note-head{
  width:150px;
  overflow: hidden;
}
.notez{
  border: 2px solid black;
  width: 40%;
  margin: 5%;
  background: white;
  padding: 1%;
  height: 50px;
}
ul{
  list-style: none;
}
p{
  color: #000;
  text-align: start !important;

}
.addie{
  position: fixed;
  right:20px;
  top:10%;
  border: 2px solid royalblue;
  text-decoration: none;
  border-radius: 25px;
 background: black;
  padding:10px;
}
h3{
  color: black;
  text-decoration: underline black;
}

/* media query */
@media only screen and (max-width: 600px) {
.notepad{
  padding-top:20% ;
   padding-bottom:25% ;
}
.notez{
  width: 90% !important;
}
.note-body{
  overflow-y: scroll;
  height: 100px;
}
.ico{
  height: 20px;
}
.notie{
  padding-left: 50px;
  padding-right: 50px;
}
.note-head{
  width:150px;
  overflow: hidden;
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