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

      <v-img max-height="250" :src="workout.metadata" alt="Image not found :/"/>

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
      <router-link to="/main/WorkoutsDetail" :routineId="workout.id">
        <v-btn
            class="blue darken-3  white--text"
            style="margin: 20px"
        >
          See Workout
        </v-btn>
      </router-link>
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

</style>