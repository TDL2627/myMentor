<template>
<div class="oneNote">
    <Nav/>
       <div v-if="loading" >
 <div class="half-circle-spinner">
  <div class="circle circle-1"></div>
  <div class="circle circle-2"></div>
</div>
</div>
<router-link to="/notepad" class="backie"><svg  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="50" height="50"
viewBox="0 0 172 172"
style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#3498db"><path d="M68.8,40.28813v-28.82147c-0.00069,-2.37313 -1.46335,-4.50056 -3.67889,-5.35093c-2.21554,-0.85037 -4.72599,-0.2479 -6.31431,1.51533l-51.6,57.33333c-1.88701,2.10152 -1.96243,5.26426 -0.17773,7.45333l51.6,63.06667c1.533,1.87394 4.0779,2.58292 6.359,1.77155c2.2811,-0.81137 3.80665,-2.96819 3.81194,-5.38928v-28.5692c45.29333,1.47347 73.55867,20.83493 86.29813,59.05333c0.78146,2.33804 2.97001,3.91482 5.4352,3.91587c0.30922,0.00083 0.61798,-0.0241 0.92307,-0.07453c2.77359,-0.45245 4.81039,-2.84855 4.81027,-5.6588c0,-67.51573 -40.6436,-117.1148 -97.46667,-120.2452zM63.06667,91.73333c-3.16643,0 -5.73333,2.5669 -5.73333,5.73333v18.34667l-38.31587,-46.8356l38.31587,-42.57v19.45893c0,3.16643 2.5669,5.73333 5.73333,5.73333c45.064,0 78.78747,31.1836 88.72907,78.76453c-18.4556,-25.6624 -48.17147,-38.6312 -88.72907,-38.6312z"></path></g></g></svg> </router-link>
  <div v-if="note">
    <div class="note">
      <div class="note-details">
        <h2 class="noteHead">{{ note.title }}</h2>
        <p class="noteBody">{{ note.body }}</p>
        <p>{{note.date}}</p>
      </div>
      <div class="butz">
 <button v-on:click="deleteNote(note._id)" class="btn  btn-danger but" ><img class="ico" src="https://img.icons8.com/external-kosonicon-solid-kosonicon/48/000000/external-bin-cleaning-kosonicon-solid-kosonicon.png"/></button>
<button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-primary but"> <img class="ico" src="https://img.icons8.com/ios-glyphs/30/000000/edit--v1.png"/>
 </button>
      </div>
     

    </div>
  </div>




<!-- Modal for edit note -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit Note</h5>
        
        <button type="button" class="btn-close btn-danger" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div class="modal-body">
       <form @submit.prevent="editNote(note._id)">
        <ul>
          <li>TITLE</li>
          <li> <input v-model="title"  type="text"></li>
          <li>BODY</li>
          <li><textarea v-model="body"  type="text" cols="30" rows="10"></textarea></li>
       </ul>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit"  class="btn btn-success">Save changes</button>
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
      body:"",
      date:"",
      loading:false
    };
  },
  mounted() {
    this.loading = true
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
        this.loading = false
      })
        .catch((err) => {
          alert("Not logged in");
          this.$router.push({ name: "Login" })
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
    },
    // edit
     editNote(id){
           this.loading = true
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
          this.loading = false
        this.$router.go()
        })
        .catch((err) => {
          alert(err);
          this.loading = false
        });
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
    margin-left:10%;
    padding: 2%;
}
h2{
  color:black;
    text-decoration: underline;
}
ul{
  list-style: none;
}
.backie{
  position: fixed;
  top:10%;
  right: 5%;
}
.ico{
  height: 50px;
}
.but{
  margin:20px;
}
.noteBody{
  height:200px;
  overflow-y: scroll;
}
.modal{
  z-index: 999999999999999999999999999999999999999999999999999999999999999;
}
/* loader */

.half-circle-spinner, .half-circle-spinner * {
      box-sizing: border-box;
    }

    .half-circle-spinner {
      z-index: 2627;
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