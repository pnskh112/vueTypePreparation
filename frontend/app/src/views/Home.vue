<template>
  <div>
    <h1>Home</h1>
    <button @click="toUsers">Usersのページにいく</button>
    <p>{{ doubleCount }}</p>
    <p>{{ tripleCount }}</p>
    <input 
      type="text" 
      v-model="message"
    >
    <p>{{message}}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex';
export default Vue.extend({
  computed: {
    ...mapGetters("count",["doubleCount","tripleCount"]),
    // message(){
    //   return this.$store.getters.message;
    // }
    message: {
      get(){
        return this.$store.getters.message;
      },
      set(value){
        this.$store.dispatch("updateMessage",value);
      }
    }
  },
  methods: {
    toUsers() {
      this.message = "hello"
      this.$router.push({
        name: "users-id-profile",
        params: {id:1}
      });
    }
  }
})
</script>