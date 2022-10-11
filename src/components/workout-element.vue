<template>
  <v-container>
    <div class="workout-element">
      <img alt="workout-image" src="../assets/flexiones.png" class="workout-element-image"
           width="610" height="250" style="object-fit: cover;">
      <div class="workout-element-text">
        <p>3 x Bench Press<p/>
        <p>3 x Lateral Raise<p/>
        <p>3 x Incline Bench Press<p/>
        <p>3 x Arnold Press<p/>
        <p>2 x Triceps Pushdowns<p/>
      </div>
      <div class="workout-element-icon" >
        <v-icon
            color="#F0BE0E" size=42px
            style="display: flex ; justify-content: right; height: 0; padding: 25px 20px; " >
          mdi-star
        </v-icon>

        <v-icon
            color="#204dee" size=62px style=" padding-top: 100px; padding-right: 25px" >
          mdi-play-circle
        </v-icon>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "workout-element"
}
</script>

<style scoped>

.workout-element{
  height: auto;
  width: 1215px;
  display: grid;
  grid-template-columns: 1fr 1fr 72px;
  padding: 0.25rem 0.25rem;
  background: white;
  border-style: solid;
  border-width: 3px;
  border-color: black;
  border-radius: 5px;
  padding:0 0;
}
.workout-element-image{
  object-fit: cover;
  object-position: 50% 30%;
  padding: 0 0;
  margin: 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.workout-element-text{
  text-align: left;
  padding-top: 30px;
  padding-left: 30px ;
  padding-right: 0px;
  font-size: 30px ;
}
.workout-element-icon{
  display: grid;
  grid-template-rows: auto;
}
</style>