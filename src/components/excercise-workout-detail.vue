<template>
  <v-container>
    <div class="excercise-workout-detail">

      <div class="excercise-detail-top">
        <v-column>
          <p style="float: left" >Squat</p>
          <v-btn icon @click="getExercise(4)"><v-icon size=36px style="float: left; color:#000000;"> mdi-menu-down </v-icon></v-btn>
          <v-btn icon @click="deleteExercise(5)"><v-icon size=36px style="float: left; color:#000000;"> mdi-pencil-box </v-icon></v-btn>

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
import detailTextLine from "./excercise-detail-text-line";
import {mapActions} from "pinia";
import  {useExerciseStore} from "@/store/ExerciseStore";
import {Exercise} from "@/api/exercises";

export default {
  name: "excercise-workout-detail-img",
  components:{
    detailTextLine
  },

  methods: {
    ...mapActions(useExerciseStore, {
      $getAllExercises: 'getAll',
      $getExercise: 'get',
      $addExercise: 'add',
      $modifyExercise: 'modify',
      $deleteExercise: 'delete',
    }),

    setResult(result) {
      this.result = JSON.stringify(result, null, 2)
    },
    clearResult() {
      this.result = null
    },

    async getAllExercises() {
      try {
        const ret = await this.$getAllExercises();
        this.clearResult();
        return ret;
      } catch(e) {
        this.setResult(e);
      }
    },
    async getExercise(id) {
      try{
        const ret = await this.$getExercise(id);
        this.clearResult();
        return ret;
      } catch(e) {
        this.setResult(e);
      }
    },
    async addExercise(name, detail) {
      try {
        const exercise = new Exercise(name, detail);
        await this.$addExercise(exercise);
        this.clearResult();
      } catch(e) {
        this.setResult(e);
      }
    },
    async modifyExercise(id, name, detail){
      try{
        const exercise = new Exercise(name, detail);
        await this.$modifyExercise(id,exercise);
        this.clearResult();
      } catch(e) {
        this.setResult(e);
      }
    },
    async deleteExercise(id){
      try{
        await this.$deleteExercise(id);
        this.clearResult();
      } catch(e) {
        this.setResult();
      }
    }
  }
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