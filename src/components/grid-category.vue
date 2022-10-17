<template>
  <div id="grid-style">
    <v-container >
      <v-row align="center">
        <v-col v-for="item in items.content" :key="item.id">
          <v-card class="mx-auto my-12 workoutCardOutline"
                  width="300"
                  style="font-family:Inter2"
          >
            <template slot="progress">
              <v-progress-linear
                  color="#204dee"
                  height="10"
                  indeterminate/>
            </template>

            <v-img max-height="250" :src="item.metadata" alt="Image not fount :/"/>

            <v-card-title style="padding-left: 20px">{{ item.name }}
              <v-spacer/>
              <v-icon>mdi-arrow-up-bold-circle</v-icon>
              {{ item.score }}
            </v-card-title>

            <v-card-text style="padding-left: 30px">
              <v-row align="center"
                     class="mx-0">
                <div class="black--text my-4 text-subtitle-1">
                  {{ item.category.name }}
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
        </v-col>
      </v-row>
    </v-container>
  </div>

</template>

<script>
import {useRoutineStore} from "@/store/RoutineStore";

export default {
  name: "grid-category",
  data(){
    return {
      items:[]
    }
  },
  async created(){
    const routineStore = useRoutineStore();
    this.items = await routineStore.mostRecent();
  }
}
</script>

<style scoped>
#grid-style{
  font-family: Inter2;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
}
@font-face {
  font-family: Inter2;
  src: local(Inter-VariableFont),url(@/fonts/static/Inter-Regular.ttf) format("truetype");
}
.imageOutline {
  border: 2px solid black;
}
</style>