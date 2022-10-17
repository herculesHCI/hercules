<template>
  <div class="Workouts-Details-out">
    <div class="Workouts-Details" id="Workouts-Details" align="center">

      <v-icon color="#00000" size="52px" left style="margin-bottom: 25px; float: left">
        mdi-arrow-left
      </v-icon>

      <div class="Individual-Workout-Details" >
        <v-img alt="workout-details-image" :src="routine.metadata" class="workout-element-image"/>



        <v-container v-for="x in routineCycle" :key="x.cycleRoutine.id" class="routine-cycles" >
          <div style="display:grid; grid-auto-columns: auto  " >
            <h1 style="font-family: Inter2; ">{{x.cycleRoutine.name}} </h1>
            <v-icon @click="editRoutinSectionToggle()">mdi-pencil</v-icon>
          </div>
          <div v-if="editRoutineSection" class="workouts-edit" >
            <p >New Name:</p>
            <v-text-field class="input" v-model="editRoutineSectionName"></v-text-field>
            <v-btn @click="changeNameSection(x.cycleRoutine)">Save Name</v-btn>
            <v-btn @click="deleteSection(x.cycleRoutine)">Delete Section</v-btn>
          </div>
          <div class="workout-details-exercises">


            <div v-for="y in x.cycleExercises" :key="y.id" class="excercise-workout-detail">

              <div class="excercise-detail-top">
                <v-column>
                  <p style="float: left" >{{y.exercise.name}}</p>
                  <v-btn icon @click="editButton(y.exercise, y, x.cycleRoutine.id)" style="float:right; padding-right: 30px"><v-icon size=36px style="color:#000000;"> mdi-pencil-box </v-icon></v-btn>
                </v-column>
              </div>
              <div class="excercise-detail-header">
                <p>Set </p>
                <p>Duration</p>
                <p> </p>
              </div>

              <div>
                <div class="excercise-detail-content">
                  <p>1</p>
                  <p>{{ y.duration }}</p>
                  <v-btn icon style="margin-left: 20px">
                    <v-icon size=32px >mdi-checkbox-marked</v-icon></v-btn>
                </div>

              </div>

            </div>
          </div>
          <v-btn @click="exerciseListToggle(); editCycle = x.cycleRoutine ">Add excercise</v-btn>
        </v-container >
        <v-btn @click="addRoutineSection()">Add Routine Section</v-btn>


        <v-list v-if="this.exerciseChange">
          <v-subheader>EXERCISES</v-subheader>
          <v-list-item v-for="exercise in exerciseList" :key="exercise.id" @click="changeExercise(exercise)">{{exercise.name}}</v-list-item>
        </v-list>


      </div>
      <v-overlay v-if="editBtn" class="workouts-edit" >
        <v-icon @click="closeEditWithoutSave()">mdi-close</v-icon>
        <h1>{{editExercise.name}}</h1>
        <v-icon @click="exerciseListToggle()">mdi-arrow-down-drop-circle-outline</v-icon>
        <p>Duration</p>
        <p>{{currentDurationAmount}}</p>
        <v-icon @click="editDuration(1)">mdi-plus-circle-outline</v-icon>
        <v-icon @click="editDuration(-1)">mdi-minus-circle-outline</v-icon>
        <p>Amount of Series</p>
        <p>{{currentSeriesAmount}}</p>
        <v-icon @click="editSeriesAmount(1)">mdi-plus-circle-outline</v-icon>
        <v-icon @click="editSeriesAmount(-1)">mdi-minus-circle-outline</v-icon>
        <v-btn @click="closeEditWithSave()">Save Changes</v-btn>
        <v-btn @click="removeExerciseFromRoutine()">Remove</v-btn>
      </v-overlay>

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
      editBtn: false,
      editExercise: null,
      editCycle: null,
      currentSeriesAmount: null,
      currentDurationAmount: null,
      cycleRoutineid: null,
      exerciseChange: false,
      exerciseList: null,
      editRoutineSection: false,
      editRoutineSectionName: null,

    }
  },
  props:{
    routineIDReceived : Number,
  },
  async created(){
    await this.initialize();

  },
  methods: {
    async initialize(){
      this.routineID = this.routineIDReceived;
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
      this.exerciseList = (await this.$getAllExercises()).content;
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
      $modifyRoutine: 'modify',
      $editCycle: 'editCycle',
      $addCycle: 'addCycle',
      $removeCycle: 'deleteCycle'
    }),
    ...mapActions(useCyclesExerciseStore,{
      $getCycleExercise: 'get',
      $editCycleExercise: 'edit',
      $addCycleExercise: 'add',
      $removeCycleExercise: 'remove'
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
    editButton(exercise, cycle, cycleRoutineID){
      this.editBtn = true;
      this.editExercise = exercise;
      this.editCycle = cycle;
      this.currentSeriesAmount = cycle.repetitions;
      this.currentDurationAmount = cycle.duration;
      this.cycleRoutineid = cycleRoutineID;

    },
    closeEditWithoutSave(){
      this.editBtn=false;
      this.exerciseChange=false;
    },
    closeEditWithSave(){
      this.editCycle.repetitions = this.currentSeriesAmount;
      this.editCycle.duration = this.currentDurationAmount;
      this.$editCycleExercise(this.cycleRoutineid, this.editExercise.id, this.editCycle);
      this.editExercise = null;
      this.editCycle = null;
      this.currentSeriesAmount = null;
      this.currentDurationAmount = null;
      this.editBtn=false;
      this.exerciseChange=false;
    },
    editDuration(amount){
      this.currentDurationAmount += amount;
    },
    editSeriesAmount(amount){
      this.currentSeriesAmount += amount;
    },
    exerciseListToggle() {
      if (this.exerciseChange) {
        this.exerciseChange = false;
      } else {
        this.exerciseChange = true;
      }
    },
    async changeExercise(exercise){
      if(!this.editBtn){
        await this.addExerciseToRoutine(exercise);
        return;
      }
      await this.$removeCycleExercise(this.cycleRoutineid,this.editExercise.id);
      const aux = this.editCycle.exercise;
      this.editCycle.exercise=exercise;
      try{
        await this.$addCycleExercise(this.cycleRoutineid, exercise.id, this.editCycle);
      }catch(e){
        this.editCycle.exercise = aux;
        await this.$addCycleExercise(this.cycleRoutineid, this.editCycle.exercise.id, this.editCycle);
        this.editCycle = aux;
      }
    },
    async removeExerciseFromRoutine(){
      await this.$removeCycleExercise(this.cycleRoutineid,this.editExercise.id);
    },
    async addExerciseToRoutine(exercise){
      const aux = await this.$getCycleExercise(this.editCycle.id);
      let order = 0;
      if(aux.totalCount===0){
        order = 1;
      } else{
        order = aux.content[aux.totalCount-1].order + 1;
      }
      const toSend ={
        duration : 20,
        order : order,
        repetitions : 1,
        exercise : aux ,
      }
      await this.$addCycleExercise(this.editCycle.id, exercise.id, toSend );
    },
    async addRoutineSection(){
      const cont = await this.$getCycle(this.routine.id);
      let order;
      if(cont.totalCount===0){
        order = 1;
      } else{
        order = cont.content[cont.totalCount-1].order + 1;
      }
      const aux ={
        name: "Routine Section",
        detail: "Fast Warmup",
        type: "warmup",
        order: order,
        repetitions: 1,
        "metadata": null
      }
      await this.$addCycle(this.routineID,aux);
    },
    editRoutinSectionToggle(){
      if (this.editRoutineSection) {
        this.editRoutineSection = false;
      } else {
        this.editRoutineSection = true;
      }
    },
    async changeNameSection(cycle){
      const aux= await this.$getCycle(this.routineID);
      const toSend = aux.content[0];
      toSend.name = this.editRoutineSectionName;
      await this.$editCycle(this.routineID, cycle.id ,toSend)
    },
    async deleteSection(cycle){
      await this.$removeCycle(this.routineID, cycle.id)
    }
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
  grid-template-columns: 0px 200px 100px;
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

.workouts-edit{
  position: fixed;
  border-radius: 3px;
  border-width: 2px;
  border-style: solid;
  border-color: black;
  width: 40%;
  height: 40%;
  background-size:100%;
  background-color: #d9d9d9;
  align-self: center;
}

</style>