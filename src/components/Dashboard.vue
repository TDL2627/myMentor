<template>
  <div class="dashboard">
  <h1 class="heading animate__animated animate__fadeInDown"> Admin dashboard</h1>
         
           <router-link to="/main"><img class="nav-logo" src="@/assets/mentlogo.png" alt="logo"></router-link> 

            <button class="outtie" @click="logout()">LOG OUT</button>

      <div class="container">
          <div class="row">
              <div class="col-lg-6">
                 <router-link  to="/dashboard/notelist"><h3 class="tabby">STUDENTS NOTES</h3></router-link>

              </div>
               <div class="col-lg-6">
                  <router-link  to="/dashboard/studentlist"> <h3 class="tabby">EVERYONES PROFILES</h3></router-link>
                  
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
.container{
  margin-top: 20%;
}
.outtie{
    position: fixed;
    top: 5px;
    right: 10px;
    text-decoration: none;
    color: red;
    background: white;
    border: solid red 2px;
    border-radius: 25px;
    padding: 5px;
}
.nav-logo{
   position: fixed;
    top: 0px;
    left: 5px;
  height: 40px;
  background: white;
  border-radius: 50%;
  margin: 5px;
}
.tabby{
    text-decoration: none;
    border-radius: 25px;
    color: rgb(52, 152, 235);
    padding: 50px;
    border: solid 5px  rgb(52, 152, 235);
}
.tabby:hover{
    color:black;
    border: solid 5px black;
    background: rgb(52, 152, 235);
}
</style>