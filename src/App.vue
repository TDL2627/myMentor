<template>
  
  <router-view/>
  <Footer/>
</template>
<script>
import Nav from "./components/Navbar.vue"
import Footer from "./components/Footer.vue"
export default {
  components: {
    Footer,Nav
  }
  
}
</script>
<style >
*{
  font-family: 'Oswald', sans-serif;
}
body{
  overflow: initial !important;;
}
#app {
  height: 100vh !important;
width: 100% !important;
overflow: none !important;
  margin: 0 !important;
 
font-family: 'Bebas Neue', cursive;
font-family: 'PT Serif', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background:linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), rgb(17, 20, 64);

}
h1{
  color: white
}
.heading{
   color: rgb(52, 152, 235);
   text-decoration: underline;
}
/* width */
::-webkit-scrollbar {
  width: 15px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(52, 152, 235); 
  border-radius: 25px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(29, 7, 228); 
}
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=PT+Serif&display=swap');

</style>
//TDL2627