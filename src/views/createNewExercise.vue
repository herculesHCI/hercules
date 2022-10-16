<template>
  <div id="createExercise-style">
    <create-new-exercise-comp></create-new-exercise-comp>
  </div>
</template>

<script>
import CreateNewExerciseComp from "@/components/createNewExercise-comp";

export default {
  name: "createNewExercise",
  components: {CreateNewExerciseComp}
}
</script>

<style scoped>
#createExercise-style {
  font-family: Inter2, "AbhayaLibre-ExtraBold", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background-Color: #d9d9d9;
}
</style>