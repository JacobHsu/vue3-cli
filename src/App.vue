<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <SignupForm />
  <ReactionTimer/> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div v-if="posts.length">
    <PostList :posts="posts" />
  </div>
  <div v-else>Loading...</div>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'
import ReactionTimer from './components/ReactionTimer.vue'
import SignupForm from './components/SignupForm.vue'
import PostList from './components/PostList.vue'
import getPosts from './api/getPosts'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ReactionTimer,
    SignupForm,
    PostList 
  },
  setup() {
    const { posts, error, load } = getPosts()
console.log(1111, posts)
    load()

    return { posts, error } 
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
