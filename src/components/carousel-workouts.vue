<template>
  <v-container>
    <v-carousel
        hide-delimiter-background
        height="400"
    >
      <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          reverse-transition="fade-transition"
          transition="fade-transition">
        <v-row
            class="fill-height"
            align="center"
            justify="center"
        >
          <v-img :src="item.src" max-width="20em"/>
          <div class="display-3" id="carousel-style">
            <v-icon>mdi-star</v-icon>
            <v-text  >
              {{item.rating}} {{item.workoutName}}
            </v-text>
          </div>
        </v-row>
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
  src: local(Inter-VariableFont),url(@/fonts/Inter-VariableFont.ttf) format("truetype");
}
</style>