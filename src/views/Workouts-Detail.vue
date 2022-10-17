<template>

  <div class="Workouts-Details-out">
    <v-icon @click="back()" color="#00000" size="52px" left style="margin-bottom: 25px; margin-top:25px; margin-left:25px">
      mdi-arrow-left
    </v-icon>
    <div class="Workouts-Details" id="Workouts-Details" align="center" >


      <div class="Individual-Workout-Details" >
        <v-img   :src="routine.metadata"  class="workout-element-image"/>



        <v-container v-for="x in routineCycle" :key="x.cycleRoutine.id" class="routine-cycles" style="padding-bottom: 40px">
            <v-text-field class="input" v-model="editRoutineSectionName" :label="x.cycleRoutine.name" style="width: 200px"></v-text-field>
            <v-btn @click="changeNameSection(x.cycleRoutine)">Save Name</v-btn>
            <v-btn @click="deleteSection(x.cycleRoutine)" style="color: red">Delete Section</v-btn>

          <div class="workout-details-exercises">


            <div v-for="y in x.cycleExercises" :key="y.id" class="excercise-workout-detail">

              <div class="excercise-detail-top">
                <v-column>
                  <p style="float: left" >{{y.exercise.name}}</p>
                  <v-btn icon @click="editButton(y.exercise, y, x.cycleRoutine.id)" style="float:right; padding-right: 30px">
                    <v-icon size=36px style="color:#204DEE;" > mdi-pencil-box </v-icon>
                  </v-btn>
                </v-column>
              </div>
              <div class="excercise-detail-header">
                <p></p>
                <p>Duration</p>
                <p> </p>
              </div>

              <div v-for="index in  y.repetitions " :key="index">
                <div class="excercise-detail-content">
                  <p>{{ index }}</p>
                  <p>{{ y.duration }}</p>

                </div>

              </div>

            </div>
          </div>
          <v-btn @click="exerciseListToggle(); editCycle = x.cycleRoutine ">Add excercise</v-btn>
        </v-container >
        <v-btn @click="addRoutineSection()">Add Routine Section</v-btn>





      </div>

      <v-overlay v-if="this.exerciseChange" class="list-exercises">
      <v-list  >
        <v-subheader>EXERCISES</v-subheader>
        <v-list-item v-for="exercise in exerciseList" :key="exercise.id" @click="changeExercise(exercise)">{{exercise.name}}</v-list-item>
        <v-list-item style="color : red ;" @click="exerciseListToggle()">Cancel</v-list-item>
      </v-list>
      </v-overlay>

      <v-overlay v-if="editBtn" class="workouts-edit" >
        <v-icon @click="closeEditWithoutSave()" style="float:right">mdi-close</v-icon>
        <div style="">
          <h1>{{editExercise.name}}</h1>
          <v-icon @click="exerciseListToggle()">mdi-arrow-down-drop-circle-outline</v-icon>
        </div>
        <p style="padding-top: 40px">Duration</p>
        <p>{{currentDurationAmount}}</p>
        <div>
        <v-icon @click="editDuration(1)">mdi-plus-circle-outline</v-icon>
        <v-icon @click="editDuration(-1)">mdi-minus-circle-outline</v-icon>
        </div>
        <p style="padding-top: 40px">Amount of Series</p>
        <p>{{currentSeriesAmount}}</p>
        <div>
        <v-icon @click="editSeriesAmount(1)">mdi-plus-circle-outline</v-icon>
        <v-icon @click="editSeriesAmount(-1)">mdi-minus-circle-outline</v-icon>
        </div><div style="padding-top: 40px">
          <v-btn @click="closeEditWithSave()">Save Changes</v-btn>
          <v-btn @click="removeExerciseFromRoutine()" style="color:red">Remove</v-btn>
        </div>
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
import router from "@/router";


export default{
  components:{

  },
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
      editRoutineSection: [],
      editRoutineSectionName: null,
      image: null,

    }
  },
  props:{
    routineId2 : Number
  },
  async created(){
    await this.initialize();

  },
  methods: {
    async initialize(){
      this.routineID = this.routineId2;
      let aux;
      this.routine = (await this.$getRoutine(this.routineID));
      aux = await this.$getCycle(this.routineID);
      for( let i=0 ; i < aux.totalCount ; i++ ){
        this.routineCycle.push( new Cycle(aux.content[i]) ) ;
        const auxEx = await this.$getCycleExercise(aux.content[i].id);
        for(let j=0 ; j < auxEx.totalCount ; j ++ ){
          this.routineCycle[i].cycleExercises.push( auxEx.content[j] );
        }
      }
      this.exerciseList = (await this.$getAllExercises()).content;
      if(this.routine.metadata === null ){
        this.image = '@/assets/HerculesNegro.png';
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
        this.exerciseListToggle=false;
      }
      this.refresh();
    },
    async removeExerciseFromRoutine(){
      await this.$removeCycleExercise(this.cycleRoutineid,this.editExercise.id);
      this.refresh();
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
      this.refresh();
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
      this.refresh();
    },
    async changeNameSection(cycle){
      const aux= await this.$getCycle(this.routineID);
      const toSend = aux.content[0];
      toSend.name = this.editRoutineSectionName;
      await this.$editCycle(this.routineID, cycle.id ,toSend)
    },
    async deleteSection(cycle){
      await this.$removeCycle(this.routineID, cycle.id);
      this.refresh();
    },
    back(){
      router.push('home')
    },
    refresh(){
      window.location.reload();
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

  margin-left: -30px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 17px;
}

.excercise-detail-content{
  display: grid;
  gap: 1px;
  grid-template-columns: 20px 270px 0;
  padding-left: 20px;
  font-size: 16px;
  padding-top: 5px;
}

.workouts-edit{
  padding: 0 0 0 0;
  position: fixed;
  border-radius: 4px;
  border-width: 2px;
  border-style: solid;
  border-color: white;
  width: 20%;
  height: 40%;
  background-size:100%;
  color: white;
  background-color: black;
  align-self: center;
  margin-left:40%;
  margin-top:10%;
}

.list-exercises{
  position: fixed;
  align-items: center;
  color: white;
}


</style>