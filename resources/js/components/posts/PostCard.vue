<template>
  <div class="card my-3">
    <!-- Header -->
    <div class="card-header d-flex justify-content-between">
      <div>
        <span>{{ updatedAt }}</span>
        <em class="ml-3">{{ post.author.name }}</em>
      </div>
      <div>
        <!-- Show More Link -->
        <router-link
          v-if="!hideLink"
          class="btn btn-sm btn-primary"
          :to="{ name: 'post-details', params: { id: post.id } }"
          >Show more</router-link
        >
      </div>
    </div>
    <!-- Body -->
    <div class="card-body">
      <h5 class="card-title">{{ post.title }}</h5>
      <p class="card-text">
        {{ post.content }}
      </p>
    </div>
    <!-- Footer -->
    <div
      class="
        card-footer
        text-muted
        d-flex
        justify-content-between
        align-items-center
      "
    >
      <span :class="`badge badge-pill badge-${post.category.color}`">{{
        post.category.label
      }}</span>
      <div>
        <span
          v-for="tag in post.tags"
          :key="tag.id"
          class="badge mr-1"
          :style="`background-color: ${tag.color}; color: white;`"
          >{{ tag.label }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostCard",
  props: ["post", "hide-link"],
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