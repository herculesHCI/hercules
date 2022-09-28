<template>
  <div id="loginOrSign-page">
    <img alt="Hercules logo" src="./assets/Hercules.png">
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
// const vuetify = new Vuetify({
//   theme: {
//     themes: {
//       light: {
//         primary: '#3f51b5',
//         secondary: '#b0bec5',
//         accent: '#8c9eff',
//         error: '#b71c1c',
//       },
//     },
//   },
// })

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
@font-face {
  font-family: "Dalek Pinpoint";
  src: local("DalekPinpointBold"),   url(./fonts/DalekPinpointBold.ttf) format("truetype");}

</style>
