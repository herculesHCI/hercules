<template>
  <div id="editExercise-style">
    <modify-exercise-comp></modify-exercise-comp>
  </div>
</template>

<script>


import ModifyExerciseComp from "@/components/modify-Exercise-comp";
export default {
  name: "editExercise",
  components: {ModifyExerciseComp},
}
</script>

<style scoped>
#editExercise-style {
  font-family: Inter2, "AbhayaLibre-ExtraBold", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background-Color: #d9d9d9;
}

</style>