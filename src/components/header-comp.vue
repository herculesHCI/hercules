<template>
  <div>
    <v-card height="74px"
            color="#FFFFFF"
            flat
            tile>
      <v-toolbar extended extension-height="10px" elevation="2" >
        <v-img max-width="2em" src="@/assets/HerculesNegro.png"/>
        <v-btn text id="header-comp-style" style="font-size: 30px">Hercules</v-btn>
        <v-btn
            v-for="link in links"
            :key="link"
            color="#000000"
            text
            style="font-family: Inter2"
        >{{link}}
        </v-btn>
        <v-spacer></v-spacer>
        <v-row align-content="center"
                justify="right">
          <v-text-field append-icon="mdi-magnify"
                        placeholder="Search Workouts"
                        outlined
                        rounded
                        color="black"
                        class="align-searchbar"/>
          <v-btn icon color="#000000" x-large>
            <v-icon>mdi-account-circle-outline</v-icon>
          </v-btn>
          <v-btn icon color="#000000" x-large>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-row>
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
  size: 30px;
  color: #000000;
}
.align-searchbar{
  font-family: Inter2;
  max-height: 45px;
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