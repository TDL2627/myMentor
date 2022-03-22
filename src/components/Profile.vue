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

      <button v-on:click="deleteMail()" class="btn  btn-danger" ><img class="ico" src="https://img.icons8.com/external-kosonicon-solid-kosonicon/48/000000/external-bin-cleaning-kosonicon-solid-kosonicon.png"/></button>
  <br> <br>
  <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-primary"><img class="ico" src="https://img.icons8.com/ios-glyphs/30/000000/edit--v1.png"/></button> 

</div>
<!-- Modal for edit profile -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit Profile</h5>
        
        <button type="button" class="btn-close btn-danger" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div class="modal-body">
       <form >
        <ul>
          <li>NAME</li>
          <li> <input v-model="name"  type="text"></li>
          <li>NUMBER</li>
          <li><input v-model="contact"  type="number"></li>
          <li>EMAIL</li>
          <li><input v-model="email"  type="email"></li>
          <li>PASSWORD</li>
          <li><input v-model="password"  type="password"></li>
          <li>SUBJECT</li>
          <li><select required v-model="subject" name="subject" id="subject">
  <option value="Nautical Science">Nautical Science</option>
  <option value="Engineering">Engineering</option>
</select></li>
       </ul>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" v-on:click="editMail()"  class="btn btn-success">Save</button>
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
  components:{ Nav},
data(){
return{

  students:null,
  loading:false,
  name: localStorage.getItem("name"),
  id: localStorage.getItem("id"),
  email:  localStorage.getItem("email"),
  subject:  localStorage.getItem("subject"),
   contact:  localStorage.getItem("contact"),
   password: "",
}
},
 mounted(){
      if (!localStorage.getItem("jwt")) {
        alert("User not logged in");
        return this.$router.push({ name: "Login" });
      }
      },
  methods:{
    //  when student edits profile
  async  editMail(){
    this.loading = true
    try{
 fetch('https://mymentor-server.herokuapp.com/contact/edit', {
  method: 'POST',
  body: JSON.stringify({
    name: this.name,
    email:this.email,
    contact:this.contact,
    subject:this.subject
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})


  .then((json) => {
     this.loading = false
    fetch("https://mymentor-server.herokuapp.com/students/" + this.id, {
        method: "PUT",
        body: JSON.stringify({
          name: this.name,
    email:this.email,
    contact:this.contact,
    subject:this.subject,
    password:this.password
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          this.$router.go()
                alert("Profile Updated");
         
         this.$router.push({ name: "Home" });
      
          localStorage.clear()
        })
        .catch((err) => {
          alert(err);
        });
  });
    }
  catch(err)  {
          alert(err);
          this.loading = false
        }
  },
  // when student deletes account
   async  deleteMail(){
    this.loading = true
    try{
 fetch('https://mymentor-server.herokuapp.com/contact/delete', {
  method: 'POST',
  body: JSON.stringify({
    name: this.name,
    email:this.email
    
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})


  .then((json) => {
     this.loading = false
          //  delete profile
        fetch('https://mymentor-server.herokuapp.com/students/'+ this.id ,{
          method: 'DELETE',
          headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
        })
        
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
   
        .then(response => console.log('Success:', response));
        alert("Account Deleted")
        localStorage.clear()
         this.$router.push({ name: "Home" });
        
   
  });
    }
  catch(err)  {
          alert(err);
          this.loading = false
        }
  },

   // edit
     editProfile(){
      if (!localStorage.getItem("jwt")) {
        alert("User not logged in");
        return this.$router.push({ name: "Login" });
      }
      fetch("https://mymentor-server.herokuapp.com/students/" + this.id, {
        method: "PUT",
        body: JSON.stringify({
          name: this.name,
    email:this.email,
    contact:this.contact,
    subject:this.subject,
    password:this.password
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          this.$router.go()
                alert("Profile Updated");
         
         this.$router.push({ name: "Home" });
      
          localStorage.clear()
        })
        .catch((err) => {
          alert(err);
        });
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
.person{
  border: 5px groove white;
  width: 80%;
  padding: 5%;
  align-self: center;
  margin-left:10%;
}
.student{
  border: 2px solid black;
  margin: 100px;
}

ul{
  list-style: none;
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