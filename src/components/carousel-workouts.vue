<template>
  <v-container id="carousel-style">
    <v-carousel
        hide-delimiter-background
        height="530"
        cycle
        show-arrows-on-hover
    >
      <template v-slot:prev="{on,attrs}">
        <v-btn
            color="d9d9d9"
            x-large
            icon
          v-bind="attrs"
          v-on="on">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </template>
      <template v-slot:next="{on,attrs}">
        <v-btn
            color="d9d9d9"
            x-large
            icon
            v-bind="attrs"
            v-on="on">
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </template>
      <v-carousel-item v-for="card in items.content" :key="card.id"
      transition="fade-transition">
        <v-card class="mx-auto my-12 workoutCardOutline"
                width="600"
                style="font-family:Inter2"
        >
          <template slot="progress">
            <v-progress-linear
                color="#204dee"
                height="10"
                indeterminate/>
          </template>

          <v-img max-height="250" :src="card.metadata" alt="txt kkita"/>

          <v-card-title style="padding-left: 20px">{{ card.name }}
            <v-spacer/>
            <v-icon>mdi-arrow-up-bold-circle</v-icon>
            {{ card.score }}
          </v-card-title>

          <v-card-text style="padding-left: 30px">
            <v-row align="center"
                   class="mx-0">
              <div class="black--text my-4 text-subtitle-1">
                {{ card.category.name }}
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
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
import {mapState} from "pinia";
import {useRoutineStore} from "@/store/RoutineStore";

export default {
  name: "carousel-workouts",
  data (){
    return {
      items: []
    }
  },
  methods: {

  },
  computed: {
    ...mapState(useRoutineStore, {
      $user: state => state.user,
    }),
  },
  async created() {
    const routineStore = useRoutineStore();
    this.items = await routineStore.mostUpvoted();
  }
}
</script>

<style scoped>
#carousel-style{
  font-family: Inter2;
}
@font-face {
  font-family: Inter2;
  src: local(Inter-VariableFont),url(@/fonts/static/Inter-Regular.ttf) format("truetype");
}
v-sheet{
  margin-bottom: 40px;
}
.workoutCardOutline {
  border: 1px solid black;
  border-radius: 10px;
  background-color: #ffffff;
  margin-right: 30px;
}
</style>