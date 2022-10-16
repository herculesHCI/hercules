<template>
  <v-container>
    <v-card class="mx-auto my-12 workoutCardOutline"
            width="1000"
            style="font-family:Inter2"
    >
      <template slot="progress">
        <v-progress-linear
            color="#204dee"
            height="10"
            indeterminate/>
      </template>

      <v-img max-height="250" :src="workout.metadata" alt="txt kkita"/>

      <v-card-title style="padding-left: 20px">{{ workout.name }}
        <v-spacer/>
        <v-icon>mdi-arrow-up-bold-circle</v-icon>
        {{ workout.score }}
      </v-card-title>

      <v-card-text style="padding-left: 30px">
        <v-row align="center"
               class="mx-0">
          <div class="black--text my-4 text-subtitle-1">
            {{ workout.category.name }}
          </div>
        </v-row>
      </v-card-text>
      <v-btn
          class="blue darken-3  white--text"
          style="margin: 20px"
      >
        See Workout
      </v-btn>
    </v-card>
  </v-container>
</template>

<script>
import {mapState} from "pinia";
import {useRoutineStore} from "@/store/RoutineStore";

export default {
  name: "workout-element",
  data(){
    return{
      workout:{}
    }
  },
  props:{
    routine:Object,
  },
  computed: {
    ...mapState(useRoutineStore, {
      $user: state => state.user,
    }),
  },
  async created() {
    this.workout = this.routine;
  }
}
</script>

<style scoped>

.workout-element{
  height: auto;
  width: 1215px;
  display: grid;
  grid-template-columns: 1fr 1fr 72px;
  padding: 0.25rem 0.25rem;
  background: white;
  border-style: solid;
  border-width: 3px;
  border-color: black;
  border-radius: 5px;
  padding:0 0;
}
.workout-element-image{
  object-fit: cover;
  object-position: 50% 30%;
  padding: 0 0;
  margin: 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.workout-element-text{
  text-align: left;
  padding-top: 30px;
  padding-left: 30px ;
  padding-right: 0px;
  font-size: 30px ;
}
.workout-element-icon{
  display: grid;
  grid-template-rows: auto;
}
</style>