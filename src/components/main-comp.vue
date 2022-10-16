<template>
  <v-content>
    <header-comp></header-comp>
    <router-view></router-view>
  </v-content>
</template>

<script>
import HeaderComp from "@/components/header-comp";

export default {
  name: "main-comp",
  components: {HeaderComp},
}


</script>

<style scoped>

</style>