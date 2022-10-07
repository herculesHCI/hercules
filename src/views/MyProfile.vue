<template>
  <div id="myProfile-style">
    <h1 style="font-size: 30px" >My Profile</h1>
    <div>
      <v-icon icon color="#000000" size="400px">mdi-account-circle-outline</v-icon>
      <v-fab-transition>
      <v-btn icon color="#204DEE" fab bottom right>
        <v-icon size="100px">mdi-pencil-circle</v-icon>
      </v-btn>
      </v-fab-transition>
    </div>
  </div>
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
}

</style>