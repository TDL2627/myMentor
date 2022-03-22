<template>
  <div class="noteList">
      <div class="h1">Note List</div>

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