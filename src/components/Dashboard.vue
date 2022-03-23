<template>
  <div class="dashboard">
  <h1 class="heading animate__animated animate__fadeInDown"> Admin dashboard</h1>
         
     
            <button class="outtie" @click="logout()">LOG OUT</button>

      <div class="container">
          <div class="row">
              <div class="col-lg-6">
                 <router-link to="/dashboard/notelist">EVERYONES NOTES</router-link>

              </div>
               <div class="col-lg-6">
                  <router-link to="/dashboard/studentlist">EVERYONES PROFILES</router-link>
                  
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
       methods: {
      logout() {
        localStorage.clear()
        this.$router.push({
          name: 'Admin'
        })
      }
    }

}
</script>

<style scoped>

</style>