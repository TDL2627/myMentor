<template>
<div class="login">
  <h1 class="heading">LOGIN</h1>
  <form @submit.prevent="login">
      <h3>EMAIL</h3>
<input class="putting"  v-model="email"  placeholder="Type here..." type="text">
 <h3>PASSWORD</h3>
<input class="putting"    v-model="password" placeholder="Type here..." type="password">
<br><br>
      <button class="butt" type="submit">SUBMIT</button>
  </form>
  <p>Not registered? <router-link to="/register"> Click here</router-link></p>
</div>

</template>

<script>
export default {
  data() {
    return {
      name:"",
      email: "",
      password: "",
      msg:""
      
    };
},
 methods: {
    login() {
      fetch("https://mymentor-server.herokuapp.com/students", {
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
        .then((json) => {
          localStorage.setItem("jwt", json.jwt);
          alert("Logging in...");
          this.$router.push({ name: "Main" });
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
};
</script>

<style scoped>
.login{
    padding-top: 7%;
}
h3{
    color: white;
    margin: 20px;
}
p{
    color: white;
}
.putting{
    border-radius: 25px;
    height: 50px;
    width: 50%;
     color: rgb(52, 152, 235);
     border: solid 1px rgb(52, 152, 235);
}
.butt{
    background: transparent;
    border: 2px solid rgb(52, 152, 235);
    color: rgb(52, 152, 235);
    border-radius: 25px;
    padding-left: 20px;
    margin: 10px;
    padding-right: 20px;
}
</style>