<template>
  <div class="Workouts-Details-out">
    <div class="Workouts-Details" id="Workouts-Details" align="center">

      <v-icon color="#00000" size="52px" left style="margin-bottom: 25px; float: left">
        mdi-arrow-left
      </v-icon>

      <div class="Individual-Workout-Details" >
        <v-img alt="workout-details-image" :src="routine.metadata" class="workout-element-image"/>



        <v-container v-for="x in routineCycle" :key="x.cycleRoutine.id" class="routine-cycles" >
          <h1 style="font-family: Inter2; ">{{x.cycleRoutine.name}} </h1>
          <div class="workout-details-exercises">


            <div v-for="y in x.cycleExercises" :key="y.id" class="excercise-workout-detail">

              <div class="excercise-detail-top">
                <v-column>
                  <p style="float: left" >{{y.exercise.name}}</p>
                  <v-btn icon @click="initialize()" style="float:right; padding-right: 30px"><v-icon size=36px style="color:#000000;"> mdi-pencil-box </v-icon></v-btn>
                </v-column>
              </div>
              <div class="excercise-detail-header">
                <p>Set </p>
                <p>Repetitions</p>
                <p> </p>
              </div>

              <div>
                <div class="excercise-detail-content">
                  <p>1</p>
                  <p>{{ y.repetitions }}</p>
                  <v-btn icon style="margin-left: 20px">
                    <v-icon size=32px >mdi-checkbox-marked</v-icon></v-btn>
                </div>

              </div>

            </div>
          </div>
        </v-container >


      </div>

    </div>
  </div>
</template>

<script>
import {mapActions} from "pinia";
import  {useExerciseStore} from "@/store/ExerciseStore";
import {useRoutineStore} from "@/store/RoutineStore";
import {Exercise} from "@/api/exercises";
import {Cycle} from '@/backend/workouts-details-back.mjs'
import {useCyclesExerciseStore} from "@/store/CyclesExercisesStore";


export default{
  data() {
    return{
      routineID : 1,
      routine: null,
      routineCycle: [],
    }
  },
  async created(){
    await this.initialize();
    console.log(this.routine.metadata);

  },
  methods: {
    async initialize(){
      let aux;
      this.routine = (await this.$getRoutine(this.routineID)).content[0];
      aux = await this.$getCycle(this.routineID);
      for( let i=0 ; i < aux.totalCount ; i++ ){
        this.routineCycle.push( new Cycle(aux.content[i]) ) ;
        const auxEx = await this.$getCycleExercise(aux.content[i].id);
        for(let j=0 ; j < auxEx.totalCount ; j ++ ){
          this.routineCycle[i].cycleExercises.push( auxEx.content[j] );
        }
      }

    },
    ...mapActions(useExerciseStore, {
      $getAllExercises: 'getAll',
      $getExercise: 'get',
      $addExercise: 'add',
      $modifyExercise: 'modify',
      $deleteExercise: 'delete',
    }),
    ...mapActions(useRoutineStore, {
      $getCycle: 'getCycle',
      $getRoutine: 'get',
    }),
    ...mapActions(useCyclesExerciseStore,{
      $getCycleExercise: 'get',
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
    },
  }

}

</script>



<style scoped>

.Workouts-Details{
  margin-top: 0 ;
  padding: 50px 79px;
  width: 100%;
  height:100%;
  background-size:100%;
  background-color: #d9d9d9;
}

.Individual-Workout-Details{
  background: white;
  border-style: solid;
  border-width: 3px;
  border-color: black;
  border-radius: 5px;
  width: 75%;
  min-width: 1300px;
}

.workout-element-image{
  width: 100% ;
  height: 300px ;
  object-fit: cover;
}

.workout-details-exercises{
  display: grid;
  gap: 1px;
  grid-template-columns: repeat(3, 1fr);
}


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
  grid-template-columns: 0px 320px 100px;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 17px;
}

.excercise-detail-content{
  display: grid;
  gap: 1px;
  grid-template-columns: 20px 270px 0px;
  padding-left: 20px;
  font-size: 16px;
  padding-top: 5px;
}

</style>