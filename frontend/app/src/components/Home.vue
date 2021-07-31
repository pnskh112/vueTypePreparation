<template>
  <div>
    <p v-border:solid.round.shadow="{width: '5px', color: 'red'}">{{tmpData}}</p>
    <h2>{{title | upperCase | lowerCase }}</h2>
    <p>{{ subTitle | lowerCase | upperCase }}</p>
    <p>{{ number }}</p>
    <button @click="number++">+1</button>
    <CountNumber></CountNumber>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CountNumber from './CountNumber.vue'
import { tokyoNumber } from "@/tokyoNumber";
export default Vue.extend({
  mixins: [tokyoNumber],
  data() {
    return {
      tmpData: "Hello",
    }
  },
  components: {
    CountNumber
  },
  computed: {
    upperCaseTitle() {
      return this.title.toUpperCase();
    },
  },
  directives: {
    border(el,binding,) {
      el.style.border = "solid black 2px";
      el.style.borderWidth = binding.value.width;
      el.style.borderWidth = binding.value.color;
      el.style.borderStyle = binding.arg;
      if (binding.modifiers.round) {
        el.style.borderRadius = "0.5rem";
      }
      if (binding.modifiers.shadow) {
        el.style.boxShadow = "0 2px 5px rgba(0,0,0,0.26)";
      }
    }
  }
})
</script>