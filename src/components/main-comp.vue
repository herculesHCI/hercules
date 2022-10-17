<template>
  <v-content>
    <header-comp></header-comp>
    <router-view></router-view>
  </v-content>
</template>

<script>
import HeaderComp from "@/components/header-comp";
import {useRoutineStore} from "@/store/RoutineStore";
import {Category} from "@/api/categories";
import {useSecurityStore} from "@/store/SecurityStore";
import {mapState} from "pinia";


export default {
  name: "main-comp",
  components: {HeaderComp},
  async created(){
    const securityStore = useSecurityStore();
    await securityStore.initialize();

    const routineStore = useRoutineStore();
    await routineStore.createCategory(new Category("Back"));
    await routineStore.createCategory(new Category("Legs"));
    await routineStore.createCategory(new Category("Push"));
    await routineStore.createCategory(new Category("Pull"));
    await routineStore.createCategory(new Category("Upper"));
    await routineStore.createCategory(new Category("Abs"));
    await routineStore.createCategory(new Category("Arms"));
    await routineStore.createCategory(new Category("Cardio"));
    await routineStore.createCategory(new Category("Full Body"));
  },
  computed: {
    ...mapState(useSecurityStore, {
      $user: state => state.user,
    }),
    ...mapState(useSecurityStore, {
      $isLoggedIn: 'isLoggedIn'
    })},
}
</script>

<style scoped>

</style>