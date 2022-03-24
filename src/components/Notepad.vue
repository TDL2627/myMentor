<template>
<div class="notepad">
  <Nav/>
<h1 class="heading animate__animated animate__fadeInDown">Note Pad</h1>
   <div v-if="loading" >
 <div class="half-circle-spinner">
  <div class="circle circle-1"></div>
  <div class="circle circle-2"></div>
</div>
</div>


<a class="addie" style="cursor:pointer;" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add a note
</a>

<div class="filterz ">

   <label>
Sort by title :
</label>
          <select v-model="title" @change="sortTitle(title)">
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>

        <!-- search -->
        <label>Search :</label>
        <input v-model="search" id="searchie" placeholder="Type the title here ...">
</div>

          

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

<!-- notes -->
<div class="container allNotes">
  <div class="row">
    <div v-if="notes && notes.length">
<!-- <div class="notez col-lg-12 col-sm-12" v-for="note of filterNotes" :key="note.title"> -->
  <div class="notez col-lg-12 col-sm-12" v-for="note in notes" :key="note.title">
  <div class="buts d-flex">
    <router-link class="notie" :to="{name: 'Note', params: { id: note._id }}"><h3 class="note-head">{{note.title}}</h3></router-link>
</div>
 </div>
 </div> 
<div v-else><h2> You havent created any notes</h2></div>





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
    notes:[],
    title:"",
    body:"",
    date:"",
    loading:false,
    search: null
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
     computed: {
  
    filterNotes: function () {
      if (this.notes != '' && this.notes){
 return this.notes.filter((note) => {
        return note.title.toLowerCase().match(this.search.toLowerCase());
      });
      }
     
    },
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
    },
   
    sortTitle(title) {
      this.notes = this.notes.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return -1;
        }
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
          return 1;
        }
        return 0;
      });
      if (title == "desc") this.notes.reverse();
    },
   }
  
}
</script>

<style scoped>

.notepad{
  padding-top: 7%;
  padding-bottom: 7%;
   height: max-content !important;
    overflow-y: hidden !important;
  background:linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), rgb(17, 20, 64);
}

.ico{
  height: 20px;
}
.notie{
width:100%;
}
.note-head{
  width:100%;
  overflow: hidden;
}
.notez{
  border: 2px solid black;
  margin-top:20px;
 margin-bottom:20px;
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
#searchie{
  width: 40%;
}
label{
  color:white;
  margin-right:1%;
}
h2{
  color:white;
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
.addie:hover{
  border: 2px solid royalblue;
 background: royalblue;
 color: white;
}
.filterz{
  margin-bottom:2%;
   margin-top:2%;
}
select{
  margin-right:10%;
}
h3{
  color: black;
  text-decoration: underline black;
}
/* drop down*/
.dropbtn {
  background-color: royalblue;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content button {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content button:hover {background-color: #f1f1f1}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: royalblue;
}
/* media query */
@media only screen and (max-width: 600px) {
.notepad{
  padding-top:20% ;
   padding-bottom:25% ;
}
.notez{
  width: 100% !important;
}
.note-body{
  overflow-y: scroll;
  height: 100px;
}
.ico{
  height: 20px;
}


select{
  width:80%;
  margin-right:0;
}
#searchie{
  width:80%;
}
label{
  width:100%;
}
.filterz{
  margin-top:10%;
  margin-bottom:10%;
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