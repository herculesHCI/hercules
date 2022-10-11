<template>
  <v-container>
    <div class="excercise-workout-detail">

      <div class="excercise-detail-top">
        <v-column>
          <p style="float: left" >Squat</p>
          <v-icon size=36px style="float: left; color:#000000;"> mdi-menu-down </v-icon>
          <v-icon size=36px style="float: right; color:#000000; padding-right: 20px"> mdi-pencil-box </v-icon>
        </v-column>
      </div>


      <div class="excercise-detail-header">
        <p>Set </p>
        <p>Previous</p>
        <p>Weight</p>
        <p>Repetitions</p>
        <p> </p>

      </div>

      <div>

        <detail-text-line></detail-text-line>
        <detail-text-line></detail-text-line>
        <detail-text-line></detail-text-line>
        <detail-text-line></detail-text-line>

      </div>
    </div>
  </v-container>
</template>

<script>
  import detailTextLine from "./excercise-detail-text-line"
export default {
    components:{
      detailTextLine
    },
    name: "excercise-workout-detail-img"
}
</script>

<style>

.v-icon{
  cursor:pointer;
}

.excercise-workout-detail{
  width: 400px;
  font-family: Inter2;
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