<template>
  <div class="card my-3">
    <div class="card-header">Featured</div>
    <div class="card-body">
      <h5 class="card-title">{{ post.title }}</h5>
      <p class="card-text">
        {{ post.content }}
      </p>
    </div>
    <div class="card-footer text-muted">{{ post.updated_at }}</div>
  </div>
</template>

<script>
export default {
  name: "PostCard",
  props: ["post"],
};
</script>

<style>
</style>