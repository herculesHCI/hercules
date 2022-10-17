<template>
  <div id="modifyProfile-page">
    <modify-my-profile-comp></modify-my-profile-comp>
  </div>
</template>

<script>
import ModifyMyProfileComp from "@/components/modifyMyProfile-comp";

export default {
  name: "modifyMyProfile",
  components: {ModifyMyProfileComp},

}
</script>

<style scoped>
#modifyProfile-page {
  font-family: "Inter2", "AbhayaLibre-ExtraBold", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background-Color: #d9d9d9;
}

</style>