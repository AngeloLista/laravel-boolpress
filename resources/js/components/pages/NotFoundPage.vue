<template>
  <section
    id="not-found"
    class="d-flex flex-column justify-content-center align-items-center"
  >
    <h3 class="h1">404 | Not Found</h3>
    <button class="btn btn-primary mt-3" @click="$router.back()">
      Go back
    </button>
  </section>
</template>

<script>
export default {
  name: "NotFoundPage",
};
</script>

<style lang="scss" scoped>
#not-found {
  height: calc(100vh - 55px);
}
</style>