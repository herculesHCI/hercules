import {defineStore} from "pinia";
import {RoutinesApi} from "@/api/routines";
import {ReviewsApi} from "@/api/review";
import filterTypes from "@/api/filter";

export const useRoutineStore = defineStore("routine", {
    state: () => ({ items: [] }),
    getters: {
        findIndex() {
            return (routine) => {
                return this.items.findIndex(item => item.id === routine.id)
            }
        },
    },
    actions: {
        push(routine) {
            this.items.push(routine);
        },
        replace(index, routine) {
            this.items[index] = routine;
        },
        splice(index) {
            this.items.splice(index, 1);
        },
        replaceAll(routines) {
            this.items = routines;
        },
        async create(routine) {
            const result = await RoutinesApi.add(routine);
            if (!this.findIndex(result))
                this.push(result);
            return result;
        },
        async modify(routine) {
            const result = await RoutinesApi.modify(routine);
            const index = this.findIndex(result);
            if (index >= 0)
                this.replace(index, result);
            return result;
        },
        async delete(routine) {
            await RoutinesApi.delete(routine.id);
            const index = this.findIndex(routine);
            if (index >= 0)
                this.splice(index);
        },
        async get(routine) {
            const index = this.findIndex(routine);
            if (index >= 0)
                return this.items[index];

            const result = await RoutinesApi.get(routine);
            this.push(result);
            return result;
        },
        async getAll(pageNum,orderBy,direction,query,filter,filterVal,controller) {
            return await RoutinesApi.getAll(pageNum,orderBy,direction,query,filter,filterVal,controller);
        },
        async mostUpvoted() {//Muestra el top 4 con mas upvotes
            const filter = filterTypes;
            filter.filterActualName="";
            return await RoutinesApi.getAll(1,"score",4,"desc","",filter,"","");
        },
        async rateWorkout(routineId,rating){
            return await ReviewsApi.addReview(routineId,rating,"");
        }
    },
});