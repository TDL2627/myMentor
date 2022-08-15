<template>
  <div class="main-ou area">
    <Nav />
    <h1 class="heading animate__animated animate__tada animate__delay-1s">
      HOME
    </h1>
    <h2 class="welcome animate__animated animate__fadeInDown animate__delay-2s">
      Welcome {{ name }}
    </h2>
    <ul class="circles">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <!-- desktop -->
    <div class="container desktop animate__animated animate__zoomInDown">
      <div class="row">
        <div class="col-lg-4">
          <router-link to="/mentors"> <p class="tabby">MENTORS</p></router-link>
        </div>
        <div class="col-lg-4">
          <router-link to="/notepad"><p class="tabby">NOTE PAD</p></router-link>
        </div>
        <div class="col-lg-4">
          <router-link to="/about"><p class="tabby">ABOUT</p> </router-link>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-4">
          <router-link to="/shuttle"><p class="tabby">SHUTTLE</p></router-link>
        </div>
        <div class="col-lg-4">
          <router-link to="/advice"
            ><p class="tabby">INFORMATION</p></router-link
          >
        </div>
        <div class="col-lg-4">
          <router-link to="/feedback"
            ><p class="tabby">FEED BACK</p></router-link
          >
        </div>
      </div>
    </div>

    <!-- for mobile -->
    <div class="container mobile">
      <div class="row d-flex">
        <div class="col-sm-12 animate__animated animate__lightSpeedInRight">
          <router-link to="/mentors"> <p class="tabby">MENTORS</p></router-link>
          <router-link to="/notepad"> <p class="tabby">NOTEPAD</p></router-link>
        </div>

        <div class="col-sm-12 animate__animated animate__lightSpeedInLeft">
          <router-link to="/about"> <p class="tabby">ABOUT</p></router-link>
          <router-link to="/shuttle"> <p class="tabby">SHUTTLE</p></router-link>
        </div>

        <div class="col-sm-12 animate__animated animate__lightSpeedInRight">
          <router-link to="/advice">
            <p class="tabby">INFORMATION</p></router-link
          >
          <router-link to="/feedback">
            <p class="tabby">FEED BACK</p></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Navbar.vue";
export default {
  data() {
    return {
      name: localStorage.getItem("name"),
    };
  },
  components: {
    Nav,
  },
  mounted() {
    console.log(localStorage.getItem("jwt"));
    if (!localStorage.getItem("jwt")) {
      alert("User not logged in");
      return this.$router.push({ name: "Login" });
    }
  },
  methods: {
    logout() {
      localStorage.removeItem("jwtToken");
      this.$router.push({
        name: "Home",
      });
    },
  },
};
</script>

<style scoped>
.main-ou {
  padding-top: 7%;
  height: max-content !important;
  overflow: hidden !important;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    rgb(17, 20, 64);
  width: 100%;
}
.tabby {
  text-decoration: none;
  border-radius: 25px;
  color: rgb(52, 152, 235);
  padding: 50px;
  border: solid 5px rgb(52, 152, 235);
}
.tabby:hover {
  color: black;
  border: solid 5px black;
  background: rgb(52, 152, 235);
}
.row {
  margin: 50px;
}
.mobile {
  display: none;
}
a {
  text-decoration: none;
}
.welcome {
  color: white;
}
/* new circles */

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

/* media query */
@media only screen and (max-width: 600px) {
  .main-ou {
    padding-top: 20%;
    padding-bottom: 20%;
  }
  .desktop {
    display: none;
  }
  .mobile {
    display: initial;
  }
  .tabby {
    padding: 10px;
    margin: 20px;
    border: solid 5px rgb(52, 152, 235);
  }
  .row {
    margin: 0px;
  }
  /* .col-sm-12{
    margin-bottom: 100px;
} */
  .heading {
    margin-bottom: 15%;
  }
  .account {
    position: fixed;
    left: 20px;
    right: none;
    top: 5px;
    background: white;
    border-radius: 25px;
    padding: 5px;
    border: solid 1px rgb(63, 72, 204);
    width: 100px;
  }
  .nav-logo {
    display: none;
  }
  .outtie {
    width: 100px;
  }
}
</style>
