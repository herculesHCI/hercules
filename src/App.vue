<template>
  <v-app class="" style="background-color: #d9d9d9">
    <header-comp></header-comp>
    <login-view></login-view>
<!--    <v-content>-->
<!--    <router-view></router-view>-->
<!--    </v-content>-->
  </v-app>
</template>

<script>
import HeaderComp from "@/components/header-comp";
import LoginView from "@/views/Login";

export default{
  components:{
    LoginView,
    HeaderComp,


  }
}
</script>

<style>

</style>