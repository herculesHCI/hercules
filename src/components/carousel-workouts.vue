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
        <workout-element :routine="card"/>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
import {mapState} from "pinia";
import {useRoutineStore} from "@/store/RoutineStore";
import WorkoutElement from "@/components/workout-element";

export default {
  name: "carousel-workouts",
  components: {WorkoutElement},
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