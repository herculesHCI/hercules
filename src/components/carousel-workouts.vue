<template>
  <v-container id="carousel-style">
    <v-carousel
        hide-delimiter-background
        height="400"
        cycle
    >
      <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          reverse-transition="fade-transition"
          transition="fade-transition"
          :src="item.src" class="imageOutline">
        <v-sheet color="#FFFFFF" height="10%">
          <v-row
              class="fill-height"
              align="center"
              justify="center"
          >
            <v-icon>mdi-star-outline</v-icon>
            <p>
              {{item.rating}} {{item.workoutName}}
            </p>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
export default {
  name: "carousel-workouts",
  data (){
    return {
      items: [
        {
          src:'https://i.imgur.com/ehUD0.jpeg',
          workoutName: "El Nono's Workout",
          rating: 4.3
        },
        {
          src:'https://i.imgur.com/su14xrQ.png',
          workoutName: "Diego's Workout",
          rating: 4.9
        },
        {
          src:'https://i.imgur.com/gncEZZ8.jpeg',
          workoutName: "Olympic WL",
          rating: 4.7
        }
      ]
    }
  }
}
</script>

<style scoped>
#carousel-style{
  font-family: Inter2;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  size: 20px;
  color: #000000;
}
@font-face {
  font-family: Inter2;
  src: local(Inter-VariableFont),url(@/fonts/static/Inter-Regular.ttf) format("truetype");
}
v-sheet{
  margin-bottom: 40px;
}
.imageOutline {
  border: 3px solid black;
}
</style>