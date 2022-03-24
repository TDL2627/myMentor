<template>
  <div class="noteList">
      <h1 class="heading animate__animated animate__fadeInDown">NOTE LIST</h1>
   <div v-if="loading" >
 <div class="half-circle-spinner">
  <div class="circle circle-1"></div>
  <div class="circle circle-2"></div>
</div>
</div>
            <button class="outtie" @click="logout()">LOG OUT</button>
      <router-link to="/admin/dashboard">DASH BOARD</router-link>
 <div class="container">
   <div class="row">
  <div class="col-lg-5  note"  v-for="note in notes" :key="note._id">
    <h3 class="name">{{note.title}}</h3>
   <p>{{note.body}}</p>
    <p>{{note.date}}</p>
  </div>

   </div>
 </div>

  </div>
</template>

<script>
export default {
    data(){
        return{
            notes:[],
            loading:false
        }
    },
 mounted(){
        if (!localStorage.getItem("role")) {
            alert("Not Admin");
            return this.$router.push({ name: "Admin" });
        }
      },
      async created () {
    this.loading = true
    try {
      const res = await fetch('https://mymentor-server.herokuapp.com/note/admin')
      this.notes = await res.json()
      this.loading = false
    } catch (error) {
      console.log(error)
      this.loading = false
    }
  }
  ,
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
.noteList{
      padding-top: 7%;
   height: max-content !important;
    overflow-y: hidden !important;
  background:linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), rgb(17, 20, 64);
    width: 100%;
    padding-bottom: 7%;
}
.note{
  border: solid 2px whitesmoke;
  color: white;
  margin: 20px;

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