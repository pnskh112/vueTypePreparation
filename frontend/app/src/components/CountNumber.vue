<template>
  <div>
    <h2>{{title | upperCase | lowerCase }}</h2>
    <p>{{ subTitle | lowerCase | upperCase }}</p>
    <p>{{ number }}</p>
    <button @click="number++">+1</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { tokyoNumber } from "@/tokyoNumber"
export default Vue.extend({
  mixins: [tokyoNumber],
  created() {
    console.log("created in component")
  }
})
</script>