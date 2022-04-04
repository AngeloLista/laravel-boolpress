<template>
  <section id="posts-list" class="my-3">
    <h2>Posts</h2>
    <div v-if="posts.length">
      <PostCard :post="post" v-for="post in posts" :key="post.id" />
    </div>
    <p v-else>Non ci sono post.</p>
  </section>
</template>

<script>
import axios from "axios";
import PostCard from "./PostCard.vue";
export default {
  name: "PostsList",
  components: {
    PostCard,
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    getPosts() {
      axios
        .get("http://localhost:8000/api/posts")
        .then((res) => {
          this.posts = res.data;
        })
        .catch((err) => {
          console.log(err);
        })
        .then(() => {
          console.log("Chiamata terminata");
        });
    },
  },
  mounted() {
    this.getPosts();
  },
};
</script>

<style>
</style>