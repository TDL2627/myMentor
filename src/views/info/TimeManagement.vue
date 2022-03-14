<template>
  <div class="timing">
       <Nav/>
<h1 class="heading">TIME MANAGEMENT</h1>
<router-link to="/advice" class="backie"><svg  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="50" height="50"
viewBox="0 0 172 172"
style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#3498db"><path d="M68.8,40.28813v-28.82147c-0.00069,-2.37313 -1.46335,-4.50056 -3.67889,-5.35093c-2.21554,-0.85037 -4.72599,-0.2479 -6.31431,1.51533l-51.6,57.33333c-1.88701,2.10152 -1.96243,5.26426 -0.17773,7.45333l51.6,63.06667c1.533,1.87394 4.0779,2.58292 6.359,1.77155c2.2811,-0.81137 3.80665,-2.96819 3.81194,-5.38928v-28.5692c45.29333,1.47347 73.55867,20.83493 86.29813,59.05333c0.78146,2.33804 2.97001,3.91482 5.4352,3.91587c0.30922,0.00083 0.61798,-0.0241 0.92307,-0.07453c2.77359,-0.45245 4.81039,-2.84855 4.81027,-5.6588c0,-67.51573 -40.6436,-117.1148 -97.46667,-120.2452zM63.06667,91.73333c-3.16643,0 -5.73333,2.5669 -5.73333,5.73333v18.34667l-38.31587,-46.8356l38.31587,-42.57v19.45893c0,3.16643 2.5669,5.73333 5.73333,5.73333c45.064,0 78.78747,31.1836 88.72907,78.76453c-18.4556,-25.6624 -48.17147,-38.6312 -88.72907,-38.6312z"></path></g></g></svg> </router-link>

 <div v-if="loading" >
 <div class="half-circle-spinner">
  <div class="circle circle-1"></div>
  <div class="circle circle-2"></div>
</div>
</div>

<div class="container">
  <div class="row"  v-for="timmy in time" :key="timmy.title">
    <div class="col-lg-6">
     <h3>{{timmy.title}}</h3>
     <p>{{timmy.details}}</p>
    </div>
    <div class="col-lg-6" >
       <img class="piks" :src="require('@/assets/'+ timmy.pic)">
    </div>
    <hr>
  </div>
</div>
</div>
 

</template>

<script>
import Nav from "@/components/Navbar.vue"
export default {
components:{
  Nav
},
data(){
  return{
    time:[],
    loading:false
  }
},
async created () {
    this.loading = true
    try {
      const res = await fetch('https://mymentor-server.herokuapp.com/info/time')
      this.time = await res.json()
      this.loading = false
    } catch (error) {
      console.log(error)
      this.loading = false
    }
  }
}
</script>

<style scoped>

h3,p{
  color:white;
}
h3{
  text-decoration: underline;
}
hr{
  color: white;
  margin: 10px;
  
}
.piks{
  height: 250px !important;
  width: 400px !important;
  object-fit: cover;
}
.timing{
   height: max-content !important;
    overflow-y: hidden !important;
    background: rgb(17, 20, 64);
  padding-top: 7%;
  padding-bottom: 7%;
}
.backie{
  position: fixed;
  right: 50px;
  top: 100px;
}
.row{
  margin-top: 5%;
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