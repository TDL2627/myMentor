<template>
  <div class="about">
    <Nav/>
    <Mentors/>
  </div>
</template>
<script>
// @ is an alias to /src
import Mentors from '@/components/Mentors.vue'
import Nav from "../components/Navbar.vue"
export default {

  components: {
    Mentors,Nav
  }
}
</script>