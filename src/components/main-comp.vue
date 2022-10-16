<template>
  <v-content>
    <header-comp></header-comp>
    <router-view></router-view>
  </v-content>
</template>

<script>
import HeaderComp from "@/components/header-comp";
import {useSecurityStore} from "@/store/SecurityStore";
import router from "@/router";
import {mapState} from "pinia";


export default {
  name: "main-comp",
  components: {HeaderComp},
  computed: {
    ...mapState(useSecurityStore, {
      $user: state => state.user,
    }),
    ...mapState(useSecurityStore, {
      $isLoggedIn: 'isLoggedIn'
    })},
  async created(){
    const securityStore = useSecurityStore();
    await securityStore.initialize();
    if(!this.$isLoggedIn){
      router.push("/accessDenied")
      return;
    }
  }
 }


</script>

<style scoped>

</style>