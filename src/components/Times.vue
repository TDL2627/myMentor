<template>
  <div class="times">
    <Nav />
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
    <h1 class="heading animate__animated animate__fadeInDown">TIME TABLE</h1>
    <img src="@/assets/0.png" class="img-fluid" alt="img" />
    <img src="@/assets/0.png" class="img-mob" alt="img" />
  </div>
</template>

<script>
import Nav from "../components/Navbar.vue";
export default {
  components: {
    Nav,
  },
  mounted() {
    if (!localStorage.getItem("jwt")) {
      alert("User not logged in");
      return this.$router.push({ name: "Login" });
    }
  },
};
</script>

<style scoped>
.times {
  height: max-content !important;
  overflow-y: hidden !important;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    rgb(17, 20, 64);
  width: 100%;
  padding-top: 7%;
  padding-bottom: 7%;
}
.img-fluid {
  display: initial;
}
.img-mob {
  display: none;
}
@media only screen and (max-width: 600px) {
  .times {
    padding-top: 20%;
    padding-bottom: 20%;
  }
  .img-fluid {
    display: none;
  }
  .img-mob {
    display: initial;
    margin: 50px;
  }
}
</style>
