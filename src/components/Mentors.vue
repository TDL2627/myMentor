<template>
<div class="mentors">
 <h1 class="heading">Mentors</h1>
  <div class="mentor"  v-for="mentor in mentors" :key="mentor.name">
     <img class="piks" :src="require('@/assets/'+ mentor.pic)">
    <h3 class="name">{{mentor.name}}</h3>
    <p>{{mentor.email}}</p>
     <div class="div" v-html="mentor.number"></div>
  </div>
</div>
 

</template>

<script>
export default {
data(){
  return{
    mentors:[]
  }
},
 created(){
    fetch('https://mymentor-server.herokuapp.com/mentors')
    .then((res) => res.json())
    .then(data => this.mentors = data )
    .catch(err => console.log(err.message))
  }
}
</script>

<style scoped>
.mentors{
  padding-top: 7%;
}
.name{
      margin: 25px;
}
.mentor{
    border: solid 2px black;
   padding: 20px;
}
img{
    height: 100px;
    margin: 20px;
}
h3,p{
    color: white;
}


</style>