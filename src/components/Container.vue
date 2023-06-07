<!-- @format -->

<template>
  <ul v-if="current == 0" class="post-container">
    <Post :post="posts[i]" v-for="(p, i) in posts" :key="i" class="list">
      <template v-slot:name>
        {{ p.name }}
      </template>
      <template v-slot:content>
        {{ p.content }}
      </template>
    </Post>
  </ul>

  <div v-if="current == 1">
    <div class="upload-image" :style="{ backgroundImage: `url(${url})` }"></div>
    <div class="filters">
      <FilterBox
        :url="url"
        :name="filter"
        v-for="filter in filters"
        :key="filter"
      >
        <span style="color: black">
          {{ filter }}
        </span>
      </FilterBox>
    </div>
  </div>

  <div v-if="current == 2">
    <!-- 글작성페이지 -->
    <div class="upload-image" :style="{ backgroundImage: `url(${url})` }"></div>
    <div class="write">
      <textarea class="write-box" @input="posting">
        write!
      </textarea>
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";
import FilterBox from "./FilterBox.vue";

export default {
  name: "PostContainer",
  data() {
    return {
      filters: [
        "aden",
        "_1977",
        "brannan",
        "brooklyn",
        "clarendon",
        "earlybird",
        "gingham",
        "hudson",
        "inkwell",
        "kelvin",
        "lark",
        "lofi",
        "maven",
        "mayfair",
        "moon",
        "nashville",
        "perpetua",
        "reyes",
        "rise",
        "slumber",
        "stinson",
        "toaster",
        "valencia",
        "walden",
        "willow",
        "xpro2",
      ],
    };
  },
  props: {
    current: Number,
    url: String,
    posts: Array,
    text: String,
  },
  components: {
    Post,
    FilterBox,
  },
  methods: {
    posting(e) {
      console.log(e.target.value);
      this.$emit("text-content", e.target.value);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.post-container {
  width: 100%;
  padding: 2px;
}
.list {
  width: 100%;
  height: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>
