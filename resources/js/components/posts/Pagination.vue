<template>
  <nav class="d-flex justify-content-center">
    <ul class="pagination">
      <li
        class="page-item disabled"
        role="button"
        v-if="pagination.currentPage > 1"
        @click="$emit('on-page-change', pagination.currentPage - 1)"
      >
        <span class="page-link">Previous</span>
      </li>
      <li
        v-for="page in pagination.lastPage"
        :key="page"
        class="page-item"
        role="button"
        :class="{ active: page === pagination.currentPage }"
        @click="$emit('on-page-change', page)"
      >
        <span class="page-link" href="#">{{ page }}</span>
      </li>

      <li
        class="page-item"
        role="button"
        v-if="pagination.currentPage < pagination.lastPage"
        @click="$emit('on-page-change', pagination.currentPage + 1)"
      >
        <span class="page-link" href="#">Next</span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Pagination",
  props: ["pagination"],
};
</script>

<style>
</style>