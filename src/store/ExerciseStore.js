import { Api } from "@/api/api";
import { defineStore } from "pinia";
import { ExercisesApi,} from "@/api/exercises";


export const useExerciseStore = defineStore("exercise", {
    state: () => ({
        items:[],
    }),
    getters: {
        findIndex() {
            return(exercise) => {
                return this.items.findIndex(item => item.id === exercise.id)
            }
        },
    },
    actions:{
        push(sport) {
            this.items.push(sport);
        },
        replace(index, sport) {
            this.items[index] = sport;
        },
        splice(index){
            this.items.splice(index, 1);
        },
        replaceAll(sports) {
            this.items = sports;
        },
        async add(exercise){
          console.log(Api.token);
          const result = await ExercisesApi.addExercise(exercise);
          if(!this.findIndex(result)){
              this.push(result);
          }
          return result;
        },
        async getAll(){
            return await ExercisesApi.getAllExercises();
        },
        async get(id){
            return await ExercisesApi.getExercise(id);
        },
        async modify(id, exercise){
            return await ExercisesApi.modifyExercise(id, exercise);
        },
        async delete(id){
            return await ExercisesApi.deleteExercise(id);
        }
    }
})