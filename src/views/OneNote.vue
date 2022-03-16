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
    };
  },
  mounted() {
      if(this.id, localStorage.getItem("jwt")){
  fetch("http://localhost:2627/note/" + this.id, {
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
</style>