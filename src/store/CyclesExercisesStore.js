import { defineStore } from "pinia"
import { CyclesExercisesApi } from "@/api/cyclesExercise";

export const useCyclesExerciseStore = defineStore( "cyclesExercise", {
    state: () => ({
        items:[],
    }),
    getters:{
        findIndex() {
            return(cyclesExercise) => {
                return this.items.findIndex(item => item.id === cyclesExercise.id)
            }
        },
    },
    actions:{
        push(cyclesExercise) {
            this.items.push(cyclesExercise);
        },
        replace(index, cyclesExercise) {
            this.items[index] = cyclesExercise;
        },
        splice(index){
            this.items.splice(index, 1);
        },
        replaceAll(cyclesExercise) {
            this.items = cyclesExercise;
        },
        async add(cycleID, exerciseID, exercise){
            return await CyclesExercisesApi.addCycleExercise(cycleID, exerciseID, exercise);
        },
        async get(cycleID){
            return await CyclesExercisesApi.getCycleExercises(cycleID);
        },
        async edit(cycleID, exerciseID, exercise){
            return await CyclesExercisesApi.editCycleExercise(cycleID, exerciseID, exercise);
        },
        async remove(cycleID, exerciseID){
            return await CyclesExercisesApi.removeCycleExercise(cycleID, exerciseID);
        }
    }
})