<template>

  <div class="Workouts-page" id="Workouts-page">
    <headerComp/>

    <div class="Workouts">

      <div class="header-container">
        <h1 style="font-size: 50px">My Workouts</h1>
        <v-icon
            color="#000000" size="52px">
          mdi-filter-variant
        </v-icon>
        <v-icon
            color="#204dee" size="52px">
          mdi-plus-circle
        </v-icon>
      </div>

      <div class="workouts-container">
        <workout-element></workout-element>
        <workout-element></workout-element>
        <workout-element></workout-element>
        <workout-element></workout-element>
      </div>

    </div>
  </div>
</template>

<script>
import headerComp from "@/components/header-comp"
import workoutElement from "@/components/workout-element"
export default{
  components:{
    headerComp,
    workoutElement
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

.workouts-container{
  padding-top: 15px;
  position:relative;
  object-position: center;
}
</style>
