<template>
  <div class="container">
    <PostList />
  </div>
</template>

<script>
import PostsList from "../posts/PostsList.vue";
export default {
  name: "HomePage",
  component: {
    PostsList,
  },
};
</script>

<style>
</style>