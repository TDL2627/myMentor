<template>
<Nav/>
<div class="feedback">
  <h1 class="heading">Feed Back</h1>

  <br><br>
<form @submit.prevent="feedBack">
  <h3>Enter your name</h3>
  <input v-model="name" type="text" required>

<h3>How are you feeling?</h3>

<select v-model="feels" name="feels" id="feels">
  <option  value="very sad">Very sad😞</option>
  <option  value="sad">Sad🙁</option>
  <option  value="average">Normal😐</option>
  <option  value="happy">Happy🙂</option>
  <option  value="very happy">Very Happy😄</option>
</select>
<br> <br>
<h3>Rate your past two week experience</h3>
<select v-model="exp" name="rate" id="rate">
  <option class="emo-1" value="1">1</option>
  <option class="emo-2" value="2">2</option>
  <option class="emo-3" value="3">3</option>
  <option class="emo-4" value="4">4</option>
  <option class="emo-5" value="5">5</option>
</select>
<br> <br>
<h3>Have you been having any issues? (Academic or Personal)</h3>
<textarea v-model="issue" name="issues" id="issue" cols="50" rows="1"></textarea>
<br><br>
<h3>Is there anything you'd like to ask or say?</h3>
<textarea  v-model="say" name="say" id="say" cols="50" rows="1"></textarea>
<br><br>
      <button class="butt" type="submit">SUBMIT</button>
</form>

</div>
</template>

<script>
import Nav from "../components/Navbar.vue"
export default {
components:{Nav},
  data(){
    return{
  name:"",
  feels:"",
  exp:"",
  say:"",
  issue:""
    }

  },
  methods:{
    feedBack(){
      fetch('https://mymentor-server.herokuapp.com/contact', {
  method: 'POST',
  body: JSON.stringify({
    name: this.name,
    feels: this.feels,
    exp: this.exp,
    say: this.say,
    issue: this.issue
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})


  .then((json) => {
    console.log(json)
    console.log(json.msg)
    alert("Feed Back Sent")
  });
    }
  }

}
</script>

<style scoped>
.feedback{
  padding-top: 5%;
  padding-bottom: 5%;
   height: max-content !important;
    overflow-y: hidden !important;
    background: rgb(17, 20, 64);
    width: 100%;
}
h3{
  color: white;
}
.emo-1{
  background-color: rgb(97, 24, 24);
}
.emo-2{
  background-color: red;
}
.emo-3{
  background-color: yellow;
}
.emo-4{
  background-color: yellowgreen;
}
.emo-5{
  background-color: green;
}
#feels{
  width: 200px;
  padding-left: 4%;
  background: white;
}
#rate{
   width: 200px;
  padding-left: 6%;
  background: white;
}
.butt{
    background: transparent;
    border: 2px solid rgb(52, 152, 235);
    color: rgb(52, 152, 235);
    border-radius: 25px;
    padding-left: 20px;
    margin: 10px;
    padding-right: 20px;
}


</style>