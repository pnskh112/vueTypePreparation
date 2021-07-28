<template>
  <div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  data(){
    return {
      user: {
        firstName: "Jack",
        lastName: "Donald",
      }
    }
  }
};
</script>



