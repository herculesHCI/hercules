<template>
  <div id="visualize-style">
    <visualize-exercises></visualize-exercises>
  </div>
</template>

<script>

import VisualizeExercises from "@/components/visualize-exercises-comp";
export default {
  components: {VisualizeExercises}


}
</script>

<style scoped>
#visualize-style {
  font-family: Inter2, "AbhayaLibre-ExtraBold", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background-Color: #d9d9d9;
}


</style>