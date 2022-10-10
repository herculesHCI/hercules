<template>
  <div>
    <h1>My analytics</h1>
    <v-card class="myAnalytics">
      <v-row>
        <v-col>
          <h3 style="color: #423C3C" class="myProgressTitle">Progress</h3>
          <v-progress-circular
              :rotate="90"
              :size="150"
              :width="20"
              :value="(workoutsDone*100)/totalWorkouts"
              color="#204DEE">
            {{ (workoutsDone * 100) / totalWorkouts }}%
          </v-progress-circular>
          <h5 style="color: #423C3C">{{ workoutsDone }} out of {{ totalWorkouts }} Workouts completed</h5>
        </v-col>
        <v-col>
          <h3 style="color: #423C3C">Activity</h3>
          <v-sparkline
              class="mt-6"
              :fill=true
              color="#204DEE"
              :line-width=2
              :padding=10
              :smooth="6 || false"
              :value="workoutsxDia"
              :labels="dias"
              :label-size="15"
              auto-draw>
          </v-sparkline>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "profileMyAnalytics",
  data:()=>({
    dias: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    workoutsxDia: [1, 2, 0, 1, 3, 0, 0],
    workoutsDone: 2,
    totalWorkouts: 4,
  })
}
</script>

<style scoped>

.myAnalytics {
  border: 3px solid white;
  background-color: #d9d9d9;
  padding: 15px;
  margin-right: 30px;
}

.myProgressTitle {
  margin-right: 300px;
}
</style>