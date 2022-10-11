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
      <v-carousel-item v-for="card in items" :key="card"
      transition="fade-transition">
        <v-card :loading="loading"
                class="mx-auto my-12 workoutCardOutline"
                width="600"
                style="font-family:Inter2"
        >
          <template slot="progress">
            <v-progress-linear
                color="#204dee"
                height="10"
                indeterminate/>
          </template>

          <v-img max-height="250" :src="card.src"/>

          <v-card-title style="padding-left: 20px">{{ card.workoutName }}
            <v-spacer/>
            <v-icon>mdi-star-outline</v-icon>
            {{ card.rating }} ({{ card.reviewAmount }})
          </v-card-title>

          <v-card-text style="padding-left: 30px">
            <v-row align="center"
                   class="mx-0">
              <div class="black--text my-4 text-subtitle-1">
                {{ card.category }}
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
export default {
  name: "carousel-workouts",
  data (){
    // this.setTrendingRoutines(this.data().items)
    return {
      items: [
        {
          src:'https://i.imgur.com/ehUD0.jpeg',
          workoutName: "El Nono's Workout",
          rating: 4.3,
          reviewAmount: 56,
          category: 'Cardio',
        },
        {
          src:'https://i.imgur.com/su14xrQ.png',
          workoutName: "Diego's Workout",
          rating: 4.9,
          reviewAmount: 89,
          category: 'Full Body',
        },
        {
          src:'https://i.imgur.com/gncEZZ8.jpeg',
          workoutName: "Olympic WL",
          rating: 4.7,
          reviewAmount: 32,
          category: 'Back',
        }
      ]
    }
  },
  // methods: {
  //   setTrendingRoutines :(items)=> {
  //     //aca iria a buscar al store pero hardcodeo los de items
  //     for(let i=0;i < items.length;i++){
  //       cardsWorkout[i] = new CardWorkout;
  //       cardsWorkout[i].setWorkout(items[i].workoutName,items[i].category,items[i].rating,items[i].reviewAmount,items[i].src);
  //     }
  //   }
  // },
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