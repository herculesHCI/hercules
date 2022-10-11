<template>
  <div class="excercise-detail-content">
    <p>1</p>
    <p>30kg x 5</p>
    <v-text-field placeholder="30kg" style="width: 70px; height:30px;padding-top: 0px;margin-top: -7px;padding-left: 15px"></v-text-field>
    <v-text-field placeholder="6" style="width: 70px; height:30px;padding-top: 0px;margin-top: -7px;padding-left: 15px"></v-text-field>
    <v-btn icon style="margin-left: 20px">
      <v-icon size=32px >mdi-checkbox-marked</v-icon></v-btn>
  </div>
</template>

<script>
export default {
  name: "excercise-detail-text-line",
}


</script>

<style scoped>
.excercise-detail-content{
  display: grid;
  gap: 1px;
  grid-template-columns: 50px 100px 80px 68px 80px;
  padding-left: 20px;
  font-size: 16px;
  padding-top: 5px;
}
</style>