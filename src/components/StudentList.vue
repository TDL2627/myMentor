<template>
  <div class="students">
      <h1>ALL STUDENTS</h1>

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

<style>

</style>