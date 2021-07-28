<template>
  <div id="app">
    <LikeHeader>
        <h3>初めまして</h3>
    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber>
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    <div style="padding: 10rem;">
      <h2>イベントのフォーム</h2>

      <EventTitle v-model="eventData.title"></EventTitle>

      <label for="maxNumber">最大人数</label>
      <input 
        id="maxNumber" 
        type="number"
        v-model.number="eventData.maxNumber"
      >
      <p>{{ eventData.maxNumber }}</p>

      <label for="host">主催者</label>
      <input 
        id="host" 
        type="text"
        v-model.trim="eventData.host"
      >
      <pre>{{ eventData.host }}</pre>

      <label for="detail">イベントの内容</label>
      <textarea 
        id="detail" 
        cols="30" 
        rows="10" 
        v-model="eventData.detail"
      ></textarea>
      <p style="white-space: pre">{{eventData.detail}}</p>
      <input 
        type="checkbox" 
        id="isPrivate"
        v-model="eventData.isPrivate"
      >
      <label for="isPrivate">非公開</label>
      <p>{{ eventData.isPrivate }}</p>
      <p>参加条件</p>
      <input 
        type="checkbox" 
        id="10" 
        value="10代"
        v-model="eventData.target"
      >
      <label for="10">10代</label>

      <input 
        type="checkbox" 
        id="20" 
        value="20代"
        v-model="eventData.target"
      >
      <label for="20">20代</label>

      <input 
        type="checkbox" 
        id="30" 
        value="30代"
        v-model="eventData.target"
      >
      <label for="30">30代</label>
      <p>{{ eventData.target }}</p>

      <p>参加費</p>
      <input 
        type="radio" 
        id="free" 
        value="無料" 
        v-model="eventData.price"
      >
      <label for="free">無料</label>

      <input 
        type="radio" 
        id="paid" 
        value="有料" 
        v-model="eventData.price"
      >
      <label for="paid">有料</label>

      <p>{{ eventData.price }}</p>


      <p>開催場所</p>
      <select v-model="eventData.location">
        <option 
          v-for="location in locations"
          :key="location"
        >{{location}}</option>
      </select>
      <p>{{eventData.location}}</p>

    </div>
    <h3>投稿する</h3>
    <label for="test">テスト</label>
    <input 
      id="test" 
      type="text"
      v-model="test"
    >
    <br><br>

    <button @click="createComment">コメントをサーバに送る</button>
    <h2>掲示板</h2>
    <div v-for="(post,key,index) of posts" :key="post">
      <button @click="ok = !ok">名前表示ボタン</button>
      <template v-if="ok">
        <div>index：{{index}}</div>
        <div>キー名：{{key}}</div>
        <div>名前：{{ post }}</div>
      </template>
    </div>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";
import About from "./components/About.vue"
import Home from "./components/Home.vue"
import EventTitle from "./components/EventTitle.vue"
import axios from "axios";
export default {
  data() {
    return {
      number: 14,
      locations: ["東京","大阪","名古屋"],
      currentComponent: "Home",
      eventData: {
        title: "",
        maxNumber: 0,
        host: "",
        detail: "",
        isPrivate: false,
        target: ["10代","20代","30代"],
        price: "無料",
        location: "東京"
      },
      test: "",
      posts: [],
      ok: true
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
    incrementNumber(value) {
      this.number = value;
    },
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
  },
  components: {
    LikeHeader,
    About,
    Home,
    EventTitle,
  }
}
</script>
