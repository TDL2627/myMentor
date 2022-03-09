<template>
<div class="register">
  <h1 class="heading">REGISTER</h1>
  <form  @submit.prevent="register">
      <div class="container">
    <div class="row">
<div class="col-lg-4">
<label for="subject">Choose a your field: </label>
<select required v-model="subject" name="subject" id="subject">
  <option value="Nautical Science">Nautical Science</option>
  <option value="Engineering">Engineering</option>
</select>
</div>
<div class="col-lg-4">
   <label for="type">Choose a your position:</label>
<select v-model="type" name="type" id="type">
  <option value="Mentee">Mentee</option>
  <option value="Mentor">Mentor</option>
</select>
</div>
<div class="col-lg-4">
<label for="image">Upload Profile Photo</label>
<input  id="image" placeholder="Not required..." type="file">
</div>

    </div>
</div>
 <h3>NAME</h3>
<input v-model="name" class="putting" placeholder="Type here..." type="text" required>
 <h3>NUMBER</h3>
<input v-model="contact" class="putting" placeholder="Type here..." type="number" required>
 <h3>EMAIL</h3>
<input v-model="email" class="putting" placeholder="Type here..." type="email">
 <h3>PASSWORD</h3>
<input v-model="password" class="putting" placeholder="Type here..." type="password">
<br><br>
      <button class="butt" type="submit">SUBMIT</button>
  </form>
  <p>Already registered? <router-link to="/login"> Click here</router-link></p>
</div>

</template>

<script>
export default {

}
</script>

<style scoped>
.register{
    height: max-content !important;
    overflow-y: hidden !important;
    background: rgb(17, 20, 64);
    width: 100%;
    padding-top: 7%;
    padding-bottom: 5%;
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
label{
    color: white;
}
.container{
    padding-right: 250px;
    padding-left: 350px;
    margin: 50px;
}
</style>