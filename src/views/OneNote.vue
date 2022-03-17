<template>
<div class="oneNote">
    <Nav/>
  <div v-if="note">
    <div class="note">
      <div class="note-details">
        <h2>{{ note.title }}</h2>
        <p>{{ note.body }}</p>
      </div>
      <button v-on:click="deleteNote(note._id)" class="btn  btn-danger" ><img class="ico" src="https://img.icons8.com/external-kosonicon-solid-kosonicon/48/000000/external-bin-cleaning-kosonicon-solid-kosonicon.png"/></button>
<button class="btn btn-primary"><img class="ico" src="https://img.icons8.com/ios-glyphs/30/000000/edit--v1.png"/></button>

    </div>
  </div>


<a class="addie" style="cursor:pointer;" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Edit a note
</a>

<!-- Modal for edit note -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Note</h5>
        
        <button type="button" class="btn-close btn-danger" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div class="modal-body">
       <form >
        <ul>
          <li>TITLE</li>
          <li> <input v-model="title" required type="text"></li>
          <li>BODY</li>
          <li><textarea v-model="body" required type="text" cols="30" rows="10"></textarea></li>
       </ul>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" v-on:click="editNote(note._id)" class="btn btn-success">Save changes</button>
        </div>
       </form>
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
  props: ["id"],
  data() {
    return {
      note: null,
      title:"",
      body:""
    };
  },
  mounted() {
      if(this.id, localStorage.getItem("jwt")){
  fetch("https://mymentor-server.herokuapp.com/note/" + this.id, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((response) => response.json())
      .then( (json) => {
        this.note = json;
      });
      }
  
  },
  methods:{
      
    // delete
 deleteNote: function (id) {
      if (localStorage.getItem("jwt")){
        fetch('https://mymentor-server.herokuapp.com/note/'+ id ,{
          method: 'DELETE',
          headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
        })
        
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
   
        .then(response => console.log('Success:', response));
        alert("Note Deleted")
         this.$router.push({ name: "Notepad" });
        
          }
    }
  },
  // edit
  editNote(id){
      if (!localStorage.getItem("jwt")) {
        alert("User not logged in");
        return this.$router.push({ name: "Login" });
      }
      fetch("https://mymentor-server.herokuapp.com/note/" + id, {
        method: "PUT",
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
          alert("Note Updated");
          this.$router.push({ name: "Notepad" });
        })
        .catch((err) => {
          alert(err);
        });
  }
};
</script>

<style scoped>
.oneNote{
    padding-top:7%;
}
.note{
    border: 2px solid black;
    background: white;
    width: 80%;
    margin:10%;
}
h2{
    text-decoration: underline;
}
ul{
  list-style: none;
}
</style>