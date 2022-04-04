<template>
  <div class="card my-3">
    <div class="card-header"></div>
    <div class="card-body">
      <h5 class="card-title">{{ post.title }}</h5>
      <p class="card-text">
        {{ post.content }}
      </p>
    </div>
    <div class="card-footer text-muted">{{ updatedAt }}</div>
  </div>
</template>

<script>
export default {
  name: "PostCard",
  props: ["post"],
  computed: {
    updatedAt() {
      const postDate = new Date(this.post.updated_at);
      let day = postDate.getDate();
      let month = postDate.getMonth() + 1;
      let year = postDate.getFullYear();

      if (day < 10) day = "0" + day;
      if (month < 10) month = "0" + month;

      let hours = postDate.getHours();
      let minutes = postDate.getMinutes();
      let seconds = postDate.getSeconds();

      if (hours < 10) hours = "0" + hours;
      if (minutes < 10) minutes = "0" + minutes;
      if (seconds < 10) seconds = "0" + seconds;

      return `${day}/${month}/${year} - ${hours}:${minutes}:${seconds}`;
    },
  },
};
</script>

<style>
</style>