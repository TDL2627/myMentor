<template>
  <div v-if="note">
    <div class="note">
      <div class="note-details">
        <h2>{{ note.title }}</h2>
        <p>{{ note.body }}</p>
      </div>
    </div>
  </div>
  <div v-else>Loading the note...</div>
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
    fetch("http://localhost:2627/note/" + this.id, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((response) => response.json())
      .then(async (json) => {
        this.note = json;
        await fetch(
          "http://localhost:2627/students/" + json._id,
          {
            method: "GET",
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
          }
        )
          .then((response) => response.json())
          .then((json) => {
            this.note.author = json._id;
          });
      });
  },
};
</script>

<style>

</style>