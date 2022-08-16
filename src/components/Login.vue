<template>
  <div class="login area">
    <div v-if="loading">
      <div class="half-circle-spinner">
        <div class="circle circle-1"></div>
        <div class="circle circle-2"></div>
      </div>
    </div>
    <div>
      <h1 class="heading animate__slow animate__animated animate__jackInTheBox">
        LOGIN
      </h1>
      <form @submit.prevent="login">
        <h3>EMAIL</h3>
        <input
          class="putting"
          v-model="email"
          required
          placeholder="Type here email..."
          type="email"
        />
        <h3>PASSWORD</h3>
        <input
          class="putting"
          v-model="password"
          required
          placeholder="Type here  password..."
          type="password"
        />
        <br /><br />
        <button class="butt subby" type="submit">SUBMIT</button>
      </form>
      <p>
        Not registered? <router-link to="/register"> Click here</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      loading: false,
    };
  },
  methods: {
    async login() {
      this.loading = true;
      try {
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
          .then((user) => {
            if (user.jwt) {
              localStorage.setItem("jwt", user.jwt);
              localStorage.setItem("id", user.student._id);
              localStorage.setItem("name", user.student.name);
              localStorage.setItem("email", user.student.email);
              localStorage.setItem("contact", user.student.contact);
              localStorage.setItem("subject", user.student.subject);
              localStorage.setItem("password", user.student.password);
              this.loading = false;
            }

            if (localStorage.getItem("jwt")) {
              this.$router.push({ name: "Main" });
              this.loading = false;
            } else {
              this.$router.push({ name: "Login" });
              alert("Incorrect Details");
              this.loading = false;
            }
          });
      } catch (err) {
        this.$router.push({ name: "Login" });

        alert(err);
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.login {
  padding-top: 7%;
  overflow: hidden;
}
h3 {
  color: white;
  margin: 20px;
}
p {
  color: white;
}
.putting {
  border-radius: 25px;
  padding-left: 1%;
  height: 50px;
  width: 50%;
  color: rgb(52, 152, 235);
  border: solid 1px rgb(52, 152, 235);
}
.butt {
  background: transparent;
  border: 2px solid rgb(52, 152, 235);
  color: rgb(52, 152, 235);
  border-radius: 25px;
  padding-left: 50px;
  margin: 50px;
  padding-right: 50px;
  padding-bottom: 20px;
  padding-top: 20px;
}

/* loader */

.half-circle-spinner,
.half-circle-spinner * {
  box-sizing: border-box;
}

.half-circle-spinner {
  z-index: 2627;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  position: fixed;
  bottom: 20%;
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
  100% {
    transform: rotate(360deg);
  }
}

.circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  animation: animate 25s linear infinite;
  bottom: -150px;
}

.circles li:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}

.circles li:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles li:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles li:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.circles li:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9) {
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}

@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}
</style>
