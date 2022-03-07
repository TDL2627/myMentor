<template>
  
  <router-view/>
  <Footer/>
</template>
<script>
import Footer from "./components/Footer.vue"
export default {
  components: {
    Footer
  }
}
</script>
<style >
*{
  font-family: 'Oswald', sans-serif;
}
#app {
  height: 100vh !important;
width: 100vw !important;
overflow: none !important;
  margin: 0 !important;
  padding: 10px;
font-family: 'Bebas Neue', cursive;
font-family: 'PT Serif', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: rgb(17, 20, 64);
}
h1{
  color: white
}
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=PT+Serif&display=swap');

</style>
//TDL2627