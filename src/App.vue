<template>
  <div id="loginOrSign-page" style="background-color: #d9d9d9">
    <img alt="Hercules logo" src="./assets/Hercules.png">
    <h1 class="v-text">Hercules</h1>
    <div >
      <input type="text" class="v-file-input__text--placeholder" placeholder="Username or email" v-model="Username" >
    </div>
    <div>
      <input type="text" placeholder="Password" v-model="Password">
    </div>
    <div>
      <v-btn>Log In</v-btn>
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
  },
  data(){
    return {
      Username:'',
      Password:''
    }
  }
}
</script>

<style>
#loginOrSign-page {
  font-family: "Dalek Pinpoint","AbhayaLibre-ExtraBold",Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}
@font-face {
  font-family: "Dalek Pinpoint";
  src: local("DalekPinpointBold"),   url(./fonts/DalekPinpointBold.ttf) format("truetype");
}
@font-face {
  font-family: "AbhayaLibre-ExtraBold";
  src: local("AbhayaLibre-ExtraBold"), url(./fonts/AbhayaLibre-ExtraBold.ttf) format("truetype");
}
</style>

