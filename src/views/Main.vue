<template>
<Nav/>
<div class="main-ou">
<h1 class="heading">HOME</h1>


<!-- desktop -->
<div class="container desktop">
    <div class="row">
       <div class="col-lg-4">
                <router-link class="tabby" to="/mentors">MENTORS</router-link>
       </div>
        <div class="col-lg-4">
                <router-link class="tabby" to="/notepad">NOTE PAD</router-link>
       </div>
        <div class="col-lg-4">
               <router-link class="tabby" to="/times">TIME TABLE</router-link>
       </div>
    </div>

    <div class="row">
         <div class="col-lg-4">
                <router-link class="tabby" to="/shuttle">SHUTTLE</router-link>
       </div>
        <div class="col-lg-4">
                <router-link class="tabby" to="/advice">INFORMATION</router-link>
       </div>
        <div class="col-lg-4">
                <router-link class="tabby" to="/feedback">FEED BACK</router-link>
       </div>
    </div>
</div>


<div class="container mobile">
 <div class="row">
       <div class="col-sm-6">
                <router-link class="tabby" to="/mentors">MENTORS</router-link>
       </div>
        <div class="col-sm-6">
                <router-link class="tabby" to="/notepad">NOTE PAD</router-link>
       </div>
</div>

<div class="row">
        <div class="col-sm-6">
        <router-link class="tabby" to="/times">TIME TABLE</router-link>
       </div>
         <div class="col-sm-6">
         <router-link class="tabby" to="/shuttle">SHUTTLE</router-link>
       </div>
</div>

<div class="row">
        <div class="col-sm-6">
         <router-link class="tabby" to="/advice">INFORMATION</router-link>
       </div>
        <div class="col-sm-6">
         <router-link class="tabby" to="/feedback">FEED BACK</router-link>
       </div>
</div>
    
</div>


</div>
</template>

<script>
import Nav from "../components/Navbar.vue";
export default {
components:{
    Nav
}
}
</script>

<style scoped>
.main-ou{
    padding-top: 7%;
}
.tabby{
    text-decoration: none;
    color: rgb(52, 152, 235);
    padding: 50px;
    border: solid 5px  rgb(52, 152, 235);
}
.row{
    margin: 150px;
}
.mobile{
    display: none;
}

</style>