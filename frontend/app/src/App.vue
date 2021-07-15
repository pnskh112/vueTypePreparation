<template>
  <div id="app">
    <h3>投稿する</h3>
    <label for="test">テスト</label>
    <input 
      id="test" 
      type="text" 
      v-model="test"
    >
    <br><br>
    <!-- <label for="comment">コメント</label>
    <textarea 
      id="comment" 
      v-model="comment"
    ></textarea>
    <br><br> -->
    <button @click="createComment">コメントをサーバに送る</button>
    <h2>掲示板</h2>
    <div v-for="post in posts" :key="post">
      <div>名前：{{ post }}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      test: "",
      posts: []
    };
  },
  created() {
    axios.get(
      "http://localhost:3000/test",
    )
    .then(response => {
      this.posts = response.data;
      console.log(this.posts);
    });
  },
  methods: {
    createComment() {
      axios.post(
        "http://localhost:3000/test",
        {
          fields: {
            test: {
              stringValue: this.test
            }
          }
        }
      )
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
      console.log("hello");
      this.test = "";
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
