<template>
  <div :class="`alert alert-${type || 'primary'}`" role="alert">
    <div class="d-flex justify-content-between align-items-center">
      <slot></slot>
      <span
        v-if="dismissable"
        class="h3 m-0"
        role="button"
        @click="$emit('on-alert-close')"
        >&times;</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: ["message", "type", "dismissable"],
};
</script>

<style>
</style>