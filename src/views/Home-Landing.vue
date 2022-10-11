<template>
  <div id="home-landing">
    <h1 class="font-weight-medium" style="font-family: Inter2">Trending Routines</h1>
    <div>
      <carousel-workouts/>
    </div>
    <h1 style="font-family: Inter2">Categories</h1>
    <div>
      <grid-category/>
    </div>
  </div>
</template>

<script>
import CarouselWorkouts from "@/components/carousel-workouts";
import GridCategory from "@/components/grid-category";
export default{
  components:{
    GridCategory,
    CarouselWorkouts,
  }
}
</script>

<style>
#home-landing {
  font-family: "Dalek Pinpoint", "AbhayaLibre-ExtraBold", Avenir, Helvetica, Arial, sans-serif,Inter2;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  background-Color: #d9d9d9;
}
h1 {
  margin: 30px 50px 0;
}
</style>