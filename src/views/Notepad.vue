<template>
<div class="notepad">
  <Nav/>
<h1 class="heading">Note Pad</h1>
<div class="notez" v-for="note in notes" :key="note._id">
<h3>{{note.title}}</h3>
<p>{{note.body}}</p>
</div>

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
    notes:null
  }
},
 created(){
    fetch('http://localhost:2627/note')
    .then((res) => res.json())
    .then(data => this.notes = data )
    .catch(err => console.log(err.message))
  }
}
</script>

<style scoped>
.notepad{
  padding-top: 7%;
}
</style>