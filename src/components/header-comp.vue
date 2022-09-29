<template>
  <div>
    <v-card height="200px"
            color="#FFFFFF"
            flat
            tile>
      <v-toolbar extension-height="300px">
        <v-img
                      src="@/assets/HerculesNegro.png"
                      max-height="65" max-width="45"/>
        <v-toolbar-title id="header-comp-style" >Hercules</v-toolbar-title>
        <v-toolbar-items>
          <v-btn
                        v-for="link in links"
                        :key="link"
                        color="#000000"
                        text
                        style="font-family: Inter2"
                    >{{link}}
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "header-comp",
  data: () => ({
    links: [
      'Discover',
      'My Workouts',
    ],
  }),
}
</script>

<style scoped>
#header-comp-style{
  font-family: "Dalek Pinpoint",Inter2;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  size: 20px;
  color: #000000;
}
@font-face {
  font-family: "Dalek Pinpoint";
  src: local("DalekPinpointBold"), url(@/fonts/DalekPinpointBold.ttf) format("truetype");
}
@font-face {
  font-family: Inter2;
  src: local(Inter-VariableFont),url(@/fonts/Inter-VariableFont.ttf) format("truetype");
}

</style>