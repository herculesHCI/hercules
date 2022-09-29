<template>
  <v-app>
    <v-content>

      <div id="loginOrSign-page">

        <img alt="Hercules logo" src="@/assets/Hercules.png" width="500">
        <h1 class="v-text" style="font-size: 100px">Hercules</h1>
        <div>
          <input type="text" class='input' style="font-family: AbhayaLibre-ExtraBold" placeholder="Username or email"
                 v-model="username">
        </div>
        <div>
          <input type="text" class='input' style="font-family: AbhayaLibre-ExtraBold" placeholder="Password"
                 v-model="password">
        </div>
        <div>
          <v-btn x-large
                 class="btn black white--text"
                 width="150px"
                 style="font-family: 'Dalek Pinpoint'"
          >Log In
          </v-btn>
        </div>
        <v-row align="center">
          <v-divider></v-divider>
          OR
          <v-divider></v-divider>
        </v-row>
        <div>
          <v-btn x-large
                 width="150px"
                 class="btn white 10px black--text"
                 style="font-family: 'Dalek Pinpoint'"
          >Sign Up
          </v-btn>
        </div>
      </div>
    </v-content>
  </v-app>

</template>

<script>


export default {
  name: 'App',
  components: {
    //HelloWorld
  },
  data() {
    return {
      username: '',
      password: ''
    }
  }
}
</script>

<style>
#loginOrSign-page {
  font-family: "Dalek Pinpoint", "AbhayaLibre-ExtraBold", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background-Color: #d9d9d9;
}

.input {
  border: 1px solid grey;
  background-color: white;
  color: grey;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 5px;
}

.btn {
  margin: 15px;
}


@font-face {
  font-family: "Dalek Pinpoint";
  src: local("DalekPinpointBold"), url(@/fonts/DalekPinpointBold.ttf) format("truetype");
}

@font-face {
  font-family: "AbhayaLibre-ExtraBold";
  src: local("AbhayaLibre-ExtraBold"), url(@/fonts/AbhayaLibre-ExtraBold.ttf) format("truetype");
}


</style>


