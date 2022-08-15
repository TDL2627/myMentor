<template>
  <div class="mentors area">
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
    <div v-if="loading">
      <div class="half-circle-spinner">
        <div class="circle circle-1"></div>
        <div class="circle circle-2"></div>
      </div>
    </div>

    <h1 class="heading animate__animated animate__fadeInDown">Mentors</h1>
    <div class="container">
      <div class="row">
        <div
          class="col-lg-5 mentor animate__animated animate__lightSpeedInLeft"
          v-for="mentor in mentors"
          :key="mentor.name"
        >
          <img class="piks" :src="require('@/assets/mentors/' + mentor.pic)" />

          <h3 class="name">{{ mentor.name }}</h3>
          <h4>{{ mentor.qualification }}</h4>

          <div class="div" v-html="mentor.number"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mentors: [],
      loading: false,
    };
  },
  mounted() {
    if (!localStorage.getItem("jwt")) {
      alert("User not logged in");
      return this.$router.push({ name: "Login" });
    }
  },
  async created() {
    this.loading = true;
    try {
      const res = await fetch("https://mymentor-server.herokuapp.com/mentors");
      this.mentors = await res.json();
      this.loading = false;
    } catch (error) {
      console.log(error);
      this.loading = false;
    }
  },
};
</script>

<style scoped>
.mentors {
  background-image: url("@/assets/exam1.jpg");
  padding-top: 7%;
  height: max-content !important;
  overflow-y: hidden !important;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    rgb(17, 20, 64);
  width: 100%;
  padding-bottom: 7%;
}
.name {
  margin: 25px;
}
.mentor {
  background: rgba(4, 166, 251, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 20px;
  margin: 4%;
}
img {
  height: 150px;
  width: 40%;
  border-radius: 50%;
}
h3,
p,
h4 {
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
@media only screen and (max-width: 600px) {
  .mentors {
    padding-top: 20%;
    padding-bottom: 25%;
  }

  .mentor {
    width: 80%;
    margin-left: 10%;
    margin-left: 10%;
  }
  img {
    height: 150px;
    width: 90%;
    border-radius: 50%;
  }
}

/* loader */
.half-circle-spinner,
.half-circle-spinner * {
  box-sizing: border-box;
}

.half-circle-spinner {
  width: 60px;
  height: 60px;
  border-radius: 100%;
  position: fixed;
  top: 45%;
  left: 50%;
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
</style>
