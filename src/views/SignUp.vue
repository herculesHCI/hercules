<template>
  <div id="loginOrSign-page">
    <signup-comp></signup-comp>
  </div>
</template>


<script>
import SignupComp from "@/components/signup-comp";
export default {
  name: "SignUp",
  components: {SignupComp},
}
</script>

<style scoped>
#loginOrSign-page {
  font-family: "Dalek Pinpoint", "AbhayaLibre-ExtraBold", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background-Color: #d9d9d9;
}

</style>