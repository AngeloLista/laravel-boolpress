<template>
  <section id="posts-list" class="my-3">
    <Loader v-if="isLoading" />
    <h2>Posts</h2>
    <div v-if="posts.length">
      <PostCard :post="post" v-for="post in posts" :key="post.id" />
    </div>
    <p v-else>Non ci sono post.</p>

    <Pagination @on-page-change="getPosts" :pagination="pagination" />
  </section>
</template>

<script>
import axios from "axios";
import PostCard from "./PostCard.vue";
import Pagination from "./Pagination.vue";
import Loader from "../Loader.vue";
export default {
  name: "PostsList",
  components: {
    PostCard,
    Pagination,
    Loader,
  },
  data() {
    return {
      posts: [],
      pagination: {},
      isLoading: false,
    };
  },
  methods: {
    getPosts(page = 1) {
      this.isLoading = true;
      axios
        .get("http://localhost:8000/api/posts?page=" + page)
        .then((res) => {
          const { data, current_page, last_page } = res.data;

          this.posts = data;
          this.pagination = {
            currentPage: current_page,
            lastPage: last_page,
          };
        })
        .catch((err) => {
          console.log(err);
        })
        .then(() => {
          console.log("Chiamata terminata");
          this.isLoading = false;
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