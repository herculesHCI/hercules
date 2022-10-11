<template>
  <div id="setting-style">
    <v-btn large class="back-btn">
      <v-icon>mdi-arrow-left-bold</v-icon>
    </v-btn>
    <settings-comp></settings-comp>
  </div>
</template>

<script>
import SettingsComp from "@/components/settings-comp";
export default {
  name: "Settings-view",
  components: {SettingsComp},
}
</script>

<style scoped>
#setting-style {
  font-family: Inter2;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  background-Color: #d9d9d9;
}

.back-btn {
  alignment: left;
  margin: 50px auto auto 150px;
  size: 10px;
}
</style>