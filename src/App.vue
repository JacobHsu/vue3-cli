<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <SignupForm />
  <ReactionTimer/>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ReactionTimer from './components/ReactionTimer.vue'
import SignupForm from './components/SignupForm'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ReactionTimer,
    SignupForm 
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
