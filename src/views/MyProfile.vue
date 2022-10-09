<template>
  <v-app>
  <div id="myProfile-style">
    <h1 class="myProfileTitle">My Profile</h1>
    <div>
      <v-icon icon color="#000000" size="280px">mdi-account-circle-outline</v-icon>
      <v-btn icon color="#204DEE" fab bottom right>
        <v-icon size="80">mdi-pencil-circle</v-icon>
      </v-btn>
    </div>
      <v-card class="textfields" rounded max-width="344" te>Username</v-card>
      <v-card class="textfields" rounded max-width="344" height="60">Frase motivadora</v-card>
  </div>
  </v-app>
</template>

<script>
export default {
  name: "MyProfile"
}
</script>

<style scoped>
#myProfile-style {
  font-family: Inter2;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  background-Color: #d9d9d9;

}

.myProfileTitle {
  font-family: Inter2;
  text-align: left;
  size: 30px;
}

.textfields {
  border: 1px solid grey;
  background-color: white;
  color: grey;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 5px;
}



</style>