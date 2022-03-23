<template>
  <div class="admin">
      <h1 class="heading animate__animated animate__fadeInDown">Welcome Admin</h1>
        <div v-if="loading" >
 <div class="half-circle-spinner">
  <div class="circle circle-1"></div>
  <div class="circle circle-2"></div>
</div>
</div>
  <h1 class="heading">LOGIN</h1>
  <form @submit.prevent="adminLogin">
      <h3>EMAIL</h3>
<input class="putting"  v-model="email"  required placeholder="Type here email..." type="email">
 <h3>PASSWORD</h3>
<input class="putting"    v-model="password" required placeholder="Type here  password..." type="password">
<br><br>
      <button class="butt" type="submit">SUBMIT</button>
  </form>

  </div>
</template>

<script>
export default {
  data() {
    return {
      name:"",
      email: "",
      password: "",
      loading:false
      
    };
},
 methods: {

 async adminLogin() {
this.loading = true
try{
 fetch("https://mymentor-server.herokuapp.com/students/admin", {
        method: "PATCH",
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((user) => {
          if(user.jwt){
               localStorage.setItem("jwt", user.jwt);
               localStorage.setItem("id", user.student._id);
               localStorage.setItem("name", user.student.name);
               localStorage.setItem("email", user.student.email);
                localStorage.setItem("contact", user.student.contact);
               localStorage.setItem("subject", user.student.subject);
            localStorage.setItem("password", user.student.password);
            localStorage.setItem("role", user.student.role);
                         this.loading = false

          }
      
          if(localStorage.getItem("jwt")){
            this.$router.push({ name: "Dashboard" });
                      this.loading = false

          }
          else{
             this.$router.push({ name: "Admin" });
            alert("Incorrect Details");
                      this.loading = false

            
          }
        })
}
     
        catch(err)  {
           this.$router.push({ name: "Login" });
        
          alert(err);
          this.loading = false
        }
    }
  }
};
</script>

<style scoped>
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
      bottom:20%;
      left: 46%;
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