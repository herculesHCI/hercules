<template>
  <v-app class="" style="background-color: #d9d9d9">
    <header-comp></header-comp>
    <v-content>
    <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import HeaderComp from "@/components/header-comp";

export default{
  components:{
    HeaderComp,


  }
}
</script>

<style>

</style>