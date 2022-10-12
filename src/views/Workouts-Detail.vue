<template>
  <div class="Workouts-Details-out">
    <div class="Workouts-Details" id="Workouts-Details" align="center">

      <v-icon color="#00000" size="52px" left style="margin-bottom: 25px; float: left">
        mdi-arrow-left
      </v-icon>

      <div class="Individual-Workout-Details" >
        <img alt="workout-details-image" src="../assets/flexiones.png" class="workout-element-image">

        <div class="workout-details-exercises">
          <excercise-workout-detail></excercise-workout-detail>
          <excercise-workout-detail-img></excercise-workout-detail-img>
          <excercise-workout-detail></excercise-workout-detail>
          <excercise-workout-detail></excercise-workout-detail>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import exerciseWorkoutDetail from "@/components/excercise-workout-detail"
import exerciseWorkoutDetailImg from "@/components/excercise-workout-detail-img"
export default{
  components:{
    excerciseWorkoutDetail: exerciseWorkoutDetail,
    excerciseWorkoutDetailImg: exerciseWorkoutDetailImg
  }
}

</script>

<style scoped>

.Workouts-Details{
  margin-top: 0 ;
  padding: 50px 79px;
  width: 100%;
  height:100%;
  background-size:100%;
  background-color: #d9d9d9;
}

.Individual-Workout-Details{
  background: white;
  border-style: solid;
  border-width: 3px;
  border-color: black;
  border-radius: 5px;
  width: 1300px;
}

.workout-element-image{
  width: 100% ;
  height: 300px ;
  object-fit: cover;
}

.workout-details-exercises{
  display: grid;
  gap: 1px;
  grid-template-columns: repeat(3, 1fr);
}
</style>
