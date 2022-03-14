<template>
  <div class="profile">
      <h1 class="heading">Profile</h1>

 <div  class="student" v-for="student in students" :key="student._id">
    <h3 class="name">Name : {{student.name}}</h3>
    <p>Email : {{student.email}}</p>
    <p>Number : {{student.contact}}</p>
    <p>Qualification : {{student.subject}}</p>
  </div>
  </div>
</template>

<script>
export default {
data(){
return{
  students:null
}
},

 mounted(){
      if (!localStorage.getItem("jwt")) {
        alert("Student not logged in");
        return this.$router.push({ name: "Login" });
      }
      fetch("https://mymentor-server.herokuapp.com/students", {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          this.students = json
          console.log(this.students)
        })
        .catch((err) => {
          alert(err);
        });
    }
}
</script>

<style scoped>
.profile{
    padding-top: 7%;
}
h3,p{
  color:white;
}
.student{
  border: 2px solid black;
  margin: 100px;
}
</style>