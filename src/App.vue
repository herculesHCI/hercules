<template>
  <v-app class="" style="background-color: #d9d9d9">
    <header-comp></header-comp>
    <MyProfile></MyProfile>
  </v-app>
</template>

<script>



import MyProfile from "@/views/MyProfile";
import HeaderComp from "@/components/header-comp";

export default{
  components:{
    HeaderComp,
    MyProfile,


  }
}
</script>

<style>

</style>