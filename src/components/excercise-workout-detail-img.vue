<template>
  <v-container>
    <div class="excercise-workout-detail">

      <div class="excercise-detail-top">
        <v-column>
          <p style="float: left" >Squat</p>
          <v-icon size=36px style="float: left; color:#000000;"> mdi-menu-up </v-icon>
          <v-icon size=36px style="float: right; color:#000000; padding-right: 20px"> mdi-pencil-box </v-icon>
        </v-column>
      </div>

      <div class="excercise-detail-image">
        <v-img src="../assets/flexiones.png"
               style="width:100%;height:100%;object-fit:cover; align-items: end">
          <v-icon size=40px color="#204dee" style="padding-left: 120px;padding-bottom: 8px">mdi-play-circle</v-icon>
        </v-img>
      </div>

      <div class="excercise-detail-header">
        <p>Set </p>
        <p>Previous</p>
        <p>Weight</p>
        <p>Repetitions</p>
        <p> </p>

      </div>

      <div>

        <div class="excercise-detail-content">
          <p>1</p>
          <p>30kg x 5</p>
          <p>30kg</p>
          <p>6</p>
          <v-icon size=32px style="color:#204dee;">mdi-checkbox-marked</v-icon>
        </div>
        <div class="excercise-detail-content">
          <p>1</p>
          <p>30kg x 5</p>
          <p>30kg</p>
          <p>6</p>
          <v-icon size=32px style="color:#204dee;">mdi-checkbox-marked</v-icon>
        </div>
        <div class="excercise-detail-content">
          <p>1</p>
          <p>30kg x 5</p>
          <p>30kg</p>
          <p>6</p>
          <v-icon size=32px style="color:#204dee;">mdi-checkbox-marked</v-icon>
        </div>

      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "excercise-workout-detail"
}
</script>

<style>



.excercise-workout-detail{
  width: 400px;
  font-family: Inter2;
}


.excercise-detail-image{
  border-style: solid;
  border-radius: 3px;
  border-width: 2px;
  width:90%;
  height: 150px;
}

.excercise-detail-top{
  padding: 15px 0 15px 15px;
  height: 61px;
  font-size: 30px;
}

.excercise-detail-header{
  display: grid;
  gap: 1px;
  grid-template-columns: 50px 100px 80px 70px 80px;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 17px;
}

.excercise-detail-content{
  display: grid;
  gap: 1px;
  grid-template-columns: 50px 100px 80px 68px 80px;
  padding-left: 20px;
  font-size: 16px;
  padding-top: 5px;
}


</style>