<template>
<div class="foot">


  <div class="footer pc">
      <p>2021</p>
      <p>myMentor</p>
   <p class="tdl">©TDL2627</p>
  </div>

   <div class="footer mobile">
   
      <p class="mentor">myMentor - 2021</p>
   <p class="tdl">©TDL2627</p>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.mobile{
    display: none;
}
.footer{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgb(63, 72, 204);
    color: white;
}
.tdl{
    position: fixed;
    bottom: 10px;
    right: 30px;
}
@media only screen and (max-width:700px) {
    .mobile{
        display: initial;
        height: 50px;
        padding: 10px;
    }
    .mentor{
    position: fixed;
    bottom: 10px;
    left: 30px;
}
    .pc{
        display: none;
    }
    
}
</style>