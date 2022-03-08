<template>
<div class="advice">
<h1 class="heading">GENERAL INFORMATION</h1>

<div class="container">
  <div class="row">
 <div class="col-lg-6">
   <router-link class="tabby" to="/time">TIME MANAGEMENT</router-link>
 </div>
 <div class="col-lg-6">
   <router-link class="tabby" to="/study">STUDY GUIDE</router-link>
 </div>
  </div>
  <div class="row">
    <div class="col-lg-6">
   <router-link class="tabby" to="/mental">MENTAL HELP</router-link>
 </div>
 <div class="col-lg-6">
   <router-link class="tabby" to="/exam">EXAM PREP</router-link>
 </div>

  </div>
</div>

</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.advice{
  padding-top: 7%;
}
.row{
    margin: 150px;
}
.tabby{
    text-decoration: none;
    color: rgb(52, 152, 235);
    padding: 50px;
    border: solid 5px  rgb(52, 152, 235);
}
</style>