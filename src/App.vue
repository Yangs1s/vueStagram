<!-- @format -->

<template>
  <div class="header">
    <ul class="header-button-left">
      <li @click="currentPage--">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="currentPage === 1" @click="currentPage++">Next</li>
      <li class="postBtn" v-if="currentPage === 2" @click="publish">
        작성완료
      </li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container
    :current="currentPage"
    :url="fileUrl"
    :posts="posts"
    @text-content="text = $event"
  />
  <button v-if="currentPage === 0" @click="moreview">more</button>
  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
  <!-- <div class="tabs">
    <button v-for="i in isTabs" :key="i.id" @click="moveTab(i.id)" :id="i.id">
      {{ i.name }}
    </button>
  </div>
  <div class="tab-contents">
    <span id="content1" v-if="currentId === 0">내용1</span>
    <span id="content2" v-if="currentId === 1">내용2</span>
    <span id="content3" v-if="currentId === 2">내용3</span>
  </div> -->
</template>

<script>
import Container from "@/components/Container.vue";
import mockdata from "./assets/mock";

import axios from "axios";
export default {
  name: "App",
  components: { Container },
  data() {
    return {
      currentPage: 0,
      fileUrl: "",
      posts: mockdata,
      count: 0,
      text: "",

      // isTabs: [
      //   {
      //     id: 0,
      //     name: "버튼1",
      //     enable: true,
      //   },
      //   {
      //     id: 1,
      //     name: "버튼2",
      //     enable: false,
      //   },
      //   {
      //     id: 2,
      //     name: "버튼3",
      //     enable: false,
      //   },
      // ],
    };
  },
  methods: {
    // moveTab(tabId) {
    //   console.log(this.currentId);
    //   this.currentId = tabId;
    // },
    upload(e) {
      let file = e.target.files;

      console.log(file[0]);
      this.currentPage++;
      let url = URL.createObjectURL(file[0]);
      this.fileUrl = url;
    },

    publish() {
      let myPost = {
        name: "Minny",
        userImage: "https://placeimg.com/100/100/animals",
        postImage: this.fileUrl,
        likes: 49,
        date: "Apr 4",
        liked: false,
        content: this.text,
        filter: "lofi",
      };
      this.posts.unshift(myPost);
      this.currentPage = 0;
      console.log(this.text);
    },
    moreview() {
      axios
        .get(`https://codingapple1.github.io/vue/more${this.count}.json`)
        .then(post => {
          this.count++;
          this.posts = [...this.posts, post.data];
        });
    },
  },
  mounted() {
    this.emitter.on("작명", a => {
      console.log(a);
    });
  },
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
.tabs {
  display: flex;
  flex-direction: row;
}
.tab-contents {
  display: flex;
  flex-direction: row;
}
.postBtn {
  outline: 0;
  border: 0;
  background-color: inherit;
  font-size: 12px;
  color: skyblue;
}
</style>
