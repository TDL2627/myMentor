<template>
<div class="login">
  <h1 class="heading">Login</h1>
  <form>
      <h3>EMAIL</h3>
<input class="putting" placeholder="Type here..." type="text">
 <h3>PASSWORD</h3>
<input class="putting" placeholder="Type here..." type="password">
<br><br>
      <button class="butt" type="submit">SUBMIT</button>
  </form>
  <p>Not registered? <router-link to="/register"> Click here</router-link></p>
</div>

</template>

<script>
export default {

}
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