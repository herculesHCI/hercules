<template>
  <div id="loginOrSign-page">
    <img alt="Hercules logo" src="./assets/Hercules.png">
    <!--HelloWorld  msg="Hercules"/-->
    <h1 class="v-text">Hercules</h1>
    <div >
      <input type="text" placeholder="Username or email" v-model="message">
    </div>
    <div>
      <input type="text" placeholder="Password" v-model="message">
    </div>
    <div>
      <v-btn color="black"
             elevation="2"
             outlined
      >Log In</v-btn>
    </div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld
  }
}
</script>

<style>
#loginOrSign-page {
  font-family: "Dalek Pinpoint",Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}
</style>
