<template>
  <div>
    <h1>Users</h1>
    <router-link to="/users/1">ユーザー１</router-link>
    <router-link to="/users/2">ユーザー２</router-link>
    <hr>
    <h1>User No. {{ id }}</h1>
    <router-link :to="'/users/' + (Number(id) + 1) + '/profile?lang=ja#next-user'">次のユーザー</router-link>
    <router-link 
      id="next-user" 
      :to="{ name: 'users-id-profile', params: { id: Number(id) + 1 }, 
      query: { lang: 'ja', page: 2}, hash: '#next-user' }"
    >次のユーザー</router-link>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: ["id"],
})
</script>