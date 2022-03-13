<template>
<div class="mentors">
   <div v-if="loading" >
 <div class="half-circle-spinner">
  <div class="circle circle-1"></div>
  <div class="circle circle-2"></div>
</div>
</div>

 <h1 class="heading">Mentors</h1>
 <div class="container">
   <div class="row">
  <div class="col-lg-5 mentor"  v-for="mentor in mentors" :key="mentor.name">
     <img class="piks" :src="require('@/assets/'+ mentor.pic)">
    <h3 class="name">{{mentor.name}}</h3>
    <h4>{{mentor.qualification}}</h4>
    <p>{{mentor.email}}</p>
     <div class="div" v-html="mentor.number"></div>
  </div>

   </div>
 </div>

</div>
 

</template>

<script>
export default {
data(){
  return{
    mentors:[],
    loading:false
  }
},
async created () {
    this.loading = true
    try {
      const res = await fetch('https://mymentor-server.herokuapp.com/mentors')
      this.mentors = await res.json()
      this.loading = false
    } catch (error) {
      console.log(error)
      this.loading = false
    }
  }
}
</script>

<style scoped>
.mentors{
  padding-top: 7%;
   height: max-content !important;
    overflow-y: hidden !important;
    background: rgb(17, 20, 64);
    width: 100%;
    padding-top: 7%;
    padding-bottom: 7%;
}
.name{
      margin: 25px;
}
.mentor{
    border: solid 2px black;
   padding: 20px;
   margin: 4%;
}
img{
    height: 100px;
    margin: 20px;
}
h3,p,h4{
    color: white;
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