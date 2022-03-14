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
<a class="nav-link" style="cursor:pointer;" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add a product
</a>

<!-- Modal for add  product -->
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
          <li> <input v-model="body" required type="text"></li>
       </ul>

       
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-success">Save changes</button>
        </div>
       </form>
      </div>
     
    </div>
  </div>
</div>
<div class="container">
  <div class="row">
<div class="notez col-lg-6" v-for="note in notes" :key="note.title">
<h3>{{note.title}}</h3>
<p>{{note.body}}</p>
<button class="btn btn-danger">DELETE</button>
<button class="btn btn-primary">EDIT</button>
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
          this.loading = false
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
    
  },
   methods: {
    //  create
    createNote() {
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
          alert("Note added  (REFRESH TO SEE ITEM)");
          this.$router.push({ name: "Notepad" });
        })
        .catch((err) => {
          alert(err);
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
button{
  margin:5%;
}
.notez{
  border: 2px solid black;
  width: 40%;
  margin: 5%;
  background: #d2e951;
  height: 200px;
}
ul{
  list-style: none;
}
p{
  color: #000;
    overflow-y: scroll;
  text-align: start !important;

}
h3{
  color: black;
  text-decoration: underline black;
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