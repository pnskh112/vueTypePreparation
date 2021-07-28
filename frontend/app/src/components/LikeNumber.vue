<template>
  <div>
    <p>いいね{{ halfNumber }}</p>
    <button @click="increment()">+1</button>
  </div>
</template>

<script lang="ts">
export default {

  // data() {
  //   return {
  //     number: 5,
  //   };
  // },
  props: ["totalNumber"],
  computed: {
    halfNumber():number {
      return this.totalNumber / 2;
    }
  },
  methods: {
    increment():void {
      this.$emit("my-click", this.totalNumber + 1);
    }
  }
};
</script>
