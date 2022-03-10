<template>
  <div class="profile">
      <h1 class="heading">Profile</h1>
<!-- <p>{{students.name}}</p> -->
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
      fetch("http://localhost:2627/students", {
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
</style>