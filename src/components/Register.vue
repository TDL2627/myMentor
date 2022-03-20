  <template>
<div class="register">
   <div v-if="loading" >
 <div class="half-circle-spinner">
  <div class="circle circle-1"></div>
  <div class="circle circle-2"></div>
</div>
</div>
  <h1 class="heading">REGISTER</h1>
  <form  @submit.prevent="register">
 
<h3>WHAT IS YOUR QUALIFICATION</h3>
<select required v-model="subject" name="subject" id="subject">
  <option value="Nautical Science">Nautical Science</option>
  <option value="Engineering">Engineering</option>
</select>



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
  data() {
    return {
      name: "",
      email: "",
      contact: "",
      password: "",
      subject:"",
      avatar:"",
      loading:false
    };
  },
   methods: {

   async register() {
     this.loading = true
     try{
    fetch('https://mymentor-server.herokuapp.com/students', {
  method: 'POST',
  body: JSON.stringify({
    email:this.email,
    password:this.password,
    name:this.name,
    contact:this.contact,
    subject:this.subject,
    avatar:this.avatar
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
        .then((user) => {
             localStorage.setItem("jwt", user.jwt);
               localStorage.setItem("id", user.student._id);
               localStorage.setItem("name", user.student.name);
               localStorage.setItem("email", user.student.email);
                localStorage.setItem("contact", user.student.contact);
               localStorage.setItem("subject", user.student.subject);
          this.loading = false
          this.$router.push({ name: "Main" });
     })
     }
      catch(err)  {
          alert(err);
          this.loading = false
        }
    }
  },
};

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
@media only screen and (max-width: 600px) {
.register{
    padding-bottom: 30%;
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