<template>
  <v-content>
    <header-comp/>
    <div id="home-landing">

    </div>
  </v-content>
</template>

<script>
import HeaderComp from "@/components/header-comp";
export default {
  components: {HeaderComp}
}

</script>

<style scoped>
#home-landing {
  font-family: "Dalek Pinpoint", "AbhayaLibre-ExtraBold", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background-Color: #d9d9d9;
}
</style>

