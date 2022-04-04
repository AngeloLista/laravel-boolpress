<template>
  <nav class="navbar navbar-dark bg-dark">
    <span class="navbar-brand mb-0 h1">{{ title }}</span>
  </nav>
</template>

<script>
export default {
  name: "Header",
  props: ["title"],
};
</script>

<style lang="scss" scoped>
</style>