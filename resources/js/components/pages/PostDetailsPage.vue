<template>
  <section id="post-details" class="my-3">
    <h1>Post Details</h1>
    <Loader v-if="isLoading && !post" />
    <PostCard hide-link="true" v-else :post="post" />
  </section>
</template>

<script>
import Loader from "../Loader.vue";
import PostCard from "../posts/PostCard.vue";
export default {
  name: "PostDetailsPage",
  components: {
    PostCard,
    Loader,
  },
  data() {
    return {
      post: null,
      isLoading: false,
    };
  },
  methods: {
    getPost() {
      this.isLoading = true;
      axios
        .get("http://localhost:8000/api/posts/" + this.$route.params.slug)
        .then((res) => {
          this.post = res.data;
        })
        .catch((err) => {
          console.error(err);
        })
        .then(() => {
          this.isLoading = false;
        });
    },
  },
  mounted() {
    this.getPost();
  },
};
</script>

<style>
</style>