<template>
  <div class="dashboard">
      <div class="h1">
          Admin dashboard
      </div>
      <div class="container">
          <div class="row">
              <div class="col-lg-6">
                 <!-- <router-link>EVERYONES NOTES</router-link> -->

              </div>
               <div class="col-lg-6">
                  <!-- <router-link>EVERYONES PROFILES</router-link> -->
                  
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
 mounted(){
        if (!localStorage.getItem("role")) {
            alert("Not Admin");
            return this.$router.push({ name: "Admin" });
        }
      },

}
</script>

<style scoped>

</style>