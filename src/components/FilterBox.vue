<!-- @format -->
<!-- Html내용물을 보내거나 데이터를 보내고 싶으면 간단하게 slot을 이용할수도 있습니다.. -->
<template>
  <div :class="`${name} filter-item`" :style="`background-image:url(${url})`">
    <slot class="filter"></slot>

    <button @click="fire">버튼</button>
  </div>
</template>

<script>
export default {
  name: "FilterBox",
  props: {
    url: String,
    name: String,
  },
  methods:{
    fire(){
        this.emitter.emit('작명','데이터') // 다른 컴퍼넌트에 쏴주는
    }
  },
  data() {
    return {
      msg: "hi",
    };
  },
};
</script>

<style>
.filter-box {
  display: flex;
  flex-direction: column;
  color: black;
}
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>
