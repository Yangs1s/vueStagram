<!-- @format -->

<template>
  <div class="post">
    <div class="profile-info">
      <div
        class="profile-img"
        v-bind:style="{
          backgroundImage: `url(${post.userImage})`,
        }"
      >
        &nbsp;
      </div>
      <span class="profile-names">
        <slot name="name"></slot>
      </span>
    </div>
    <div class="main">
      <div class="main-img">
        <div
          class="post-img"
          v-bind:style="{
            backgroundImage: `url(${post.postImage})`,
          }"
        />
      </div>
      <div class="content-box">
        <div class="icons">
          <div class="icon">♡</div>
          <div class="icon">✏️</div>
          <div class="icon">📄</div>
        </div>
        <div class="main-content-box">
          <h4 class="like">좋아요 {{ post.likes }}개</h4>
          <div class="box">
            <h5 class="user" :style="{ fontSize: '15px' }">{{ post.name }}</h5>
            <p class="content">
              <slot name="content"></slot>
            </p>
          </div>
          <div>
            {{ post.date }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostComponent",
  props: {
    post: Object,
  },
};
</script>

<style>
/*-------------- 포스팅 헤더 부분----------------- */
.post {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  border-top: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
}
.profile-info {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px;
}
.profile-names {
  font-size: medium;
  font-weight: bold;
}
.profile-img {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 40px;
  height: 40px;
  border-radius: 100%;
}
/* --------------포스팅 내용 부분-------------- */
.main {
  widows: 100%;
  height: 100%;
  margin-top: 3px;
}
.main-img {
  width: auto;
  height: 100%;
}
.post-img {
  width: auto;
  height: 400px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto;
  margin: 15px;
}
.content-box {
  padding: 5px;
}
.icons {
  display: flex;
  flex-direction: row;
  gap: 2px;
  padding: 1px;
}
.icon {
  width: 30px;
  height: 30px;
  font-size: 30px;
}
.main-content-box {
  padding: 10px;
}
.box {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
