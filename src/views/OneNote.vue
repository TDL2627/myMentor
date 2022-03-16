<template>
  <div v-if="note">
    <div class="note">
      <div class="note-details">
        <h2>{{ note.title }}</h2>
        <p>{{ note.body }}</p>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      note: null,
    };
  },
  mounted() {
      if(this.id, localStorage.getItem("jwt")){
  fetch("http://localhost:2627/note/" + this.id, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((response) => response.json())
      .then( (json) => {
        this.note = json;
      });
      }
  
  },
};
</script>

<style>

</style>