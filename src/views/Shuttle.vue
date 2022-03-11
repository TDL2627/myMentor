<template>
<div class="shuttles">
  <Nav/>
<h1 class="heading">SHUTTLE TIMES</h1>
<table>
  <tr>
    <th>ROUTES</th>
    <th>SHUTTLE TIMES</th>
 
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
 
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
  
  </tr>
</table>
</div>
</template>

<script>
import Nav from "../components/Navbar.vue"
export default {
components:{
  Nav
}
}
</script>

<style scoped>
.shuttles{
  padding-top: 7%;
}
table,td,tr,th{
  color: white;
  border: 1px solid white;
}
table{
  width: 95%;
  margin: 2%;
}

</style>