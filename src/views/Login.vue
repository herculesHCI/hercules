<template>
  <div>
    <login-comp id="login-page"></login-comp>
  </div>
</template>

<script>


import LoginComp from "@/components/login-comp";
export default {
  name: 'Login-view',
  components: {LoginComp},
}
</script>

<style>
#login-page {
  font-family: "Dalek Pinpoint", "AbhayaLibre-ExtraBold", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background-Color: #d9d9d9;
}
</style>


