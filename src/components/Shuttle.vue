<template>
<div class="shuttles">
  <Nav/>
<h1 class="heading animate__animated animate__fadeInDown">SHUTTLE TIMES</h1>
<div v-if="loading" >
 <div class="half-circle-spinner">
  <div class="circle circle-1"></div>
  <div class="circle circle-2"></div>
</div>
</div>
<table>
  <tr>
    <th>ROUTES</th>
    <th>SHUTTLE TIMES</th>
 
  </tr>
  <tr  v-for="froms in from" :key="froms.time">
    <td>{{froms.path}}</td>
    <td>{{froms.time}}</td>
 
  </tr>
 
</table>
</div>
</template>

<script>
import Nav from "../components/Navbar.vue"
export default {
components:{
  Nav
},
data(){
  return{
    from:[],
    loading:false
  }
},
  mounted(){
      if (!localStorage.getItem("jwt")) {
        alert("User not logged in");
        return this.$router.push({ name: "Login" });
      }
      },
async created () {
    this.loading = true
    try {
      const res = await fetch('https://mymentor-server.herokuapp.com/shuttle/from')
      this.from = await res.json()
      this.loading = false
    } catch (error) {
      console.log(error)
      this.loading = false
    }
  }
}
</script>

<style scoped>
.shuttles{
  padding-top: 7%;
}
table,tr{
  color: white;
  border: 1px solid white;
}
th{
  color: white;
  background: black;
    border: 1px solid white;
}
td{
    color: black;
  background: white;
    border: 1px solid black;
}
table{
  width: 95%;
  margin: 2%;
}
@media only screen and (max-width: 600px) {
.shuttles{
  padding-top: 20%;
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
      top:45%;
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
      100%{
        transform: rotate(360deg);
      }
    }
</style>