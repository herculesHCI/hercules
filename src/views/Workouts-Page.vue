<template>

  <div class="Workouts-page" id="Workouts-page">
    <div class="Workouts">

      <v-row class="header-container">
        <h1>My Workouts</h1>
        <v-btn icon>
          <v-icon
              color="#000000" size="48px">
            mdi-filter-variant
          </v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon
              color="#204dee" size="48px">
            mdi-plus-circle
          </v-icon>
        </v-btn>
      </v-row>

      <v-container >
        <v-row align="center" v-show="!emptyFlag">
          <div>
            <v-col v-for="item in userWorkouts" :key="item.id">
              <workout-element :routine="item"/>
            </v-col>
          </div>
        </v-row>
        <v-row v-show="emptyFlag">
          <div>
            <h2>You don't have any routines...</h2>
          </div>
        </v-row>
      </v-container>



    </div>
  </div>
</template>

<script>
import workoutElement from "@/components/workout-element"
import {useSecurityStore} from "@/store/SecurityStore";
import {useRoutineStore} from "@/store/RoutineStore";
export default{
  data(){
    return {
      userWorkouts:[],
      emptyFlag:false
  }},
  components:{
    workoutElement
  },
  async created(){
    const securityStore = useSecurityStore();
    const routineStore = useRoutineStore();
    await securityStore.initialize();
    const user =  await securityStore.getCurrentUser();
    this.userWorkouts = await routineStore.getUserRoutines(user.username);
    if(Array.isArray(this.userWorkouts) && this.userWorkouts.length === 0){
      this.emptyFlag=true;
    }
  }
}
</script>

<style scoped>

.Workouts-page{
  margin: 0 auto;
  font-family: Inter2;

}

.Workouts{
  margin-top: 0 ;
  padding: 50px 79px;
  width: 100%;
  background-size:100%;
  background-color: #d9d9d9 ;
}

.header-container{
  margin: 0 0 0 0;
  width:90%;
  grid-template-columns: 85% 10% 5%;
  display: grid;
}
</style>
