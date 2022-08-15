<template>
<div class="mentors">
   <div v-if="loading" >
 <div class="half-circle-spinner">
  <div class="circle circle-1"></div>
  <div class="circle circle-2"></div>
</div>
</div>

 <h1 class="heading animate__animated animate__fadeInDown">Mentors</h1>
 <div class="container">
   <div class="row">
  <div class="col-lg-5  mentor animate__animated animate__lightSpeedInLeft"  v-for="mentor in mentors" :key="mentor.name">

           <img class="piks" :src="require('@/assets/mentors/'+ mentor.pic)">


    <h3 class="name">{{mentor.name}}</h3>
    <h4>{{mentor.qualification}}</h4>

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
  mounted(){
      if (!localStorage.getItem("jwt")) {
        alert("User not logged in");
        return this.$router.push({ name: "Login" });
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
  background:linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), rgb(17, 20, 64);
    width: 100%;
    padding-bottom: 7%;
}
.name{
      margin: 25px;
}
.mentor{
       background: rgba( 4, 166, 251, 0.5 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
   padding: 20px;
   margin: 4%;
}
img{
    height: 150px;
    width: 40%;
    border-radius: 50%;

}
h3,p,h4{
    color: white;
}

@media only screen and (max-width: 600px) {
  .mentors{
    padding-top:20% ;
    padding-bottom: 25%;
 
  }
  .mentor{
    width: 80%;
   margin-left:10%;
   margin-left:10%;
  }
  img{
    height: 150px;
    width: 90%;
    border-radius: 50%;
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