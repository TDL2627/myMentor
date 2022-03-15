<template>
<div class="times">
  <Nav/>
  <h1 class="heading">TIME TABLE</h1>
  <img src="@/assets/0.png" class="img-fluid" alt="img">
    <img src="@/assets/0.png" class="img-mob" alt="img">
</div>
</template>

<script>
import Nav from "../components/Navbar.vue"
export default {
components:{
  Nav
}
}
</script>

<style scoped>
.times{
  height: max-content !important;
    overflow-y: hidden !important;
    background: rgb(17, 20, 64);
    width: 100%;
  padding-top: 7%;
  padding-bottom:7%
}
.img-fluid{
  display: initial;
}
.img-mob{
  display: none;
}
@media only screen and (max-width: 600px) {
.times{
    padding-top: 20%;
    padding-bottom: 20%;
}
.img-fluid{
  display: none;
}
.img-mob{
  display: initial;
  margin: 50px;
}

}
</style>