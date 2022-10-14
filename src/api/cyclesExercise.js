import { Api } from "./api"

export { CyclesExercisesApi }

class CyclesExercisesApi{
    static getUrl(){
        return `${Api.baseUrl}/cycles`;
    }

    static async addCycleExercise(cycleId,exerciseId, exercise) {
        return await Api.post(`${CyclesExercisesApi.getUrl()}/${cycleId}/exercises/${exerciseId}`, true, exercise);
    }

    static async getCycleExercises(cycleId){
        return await Api.get(`${CyclesExercisesApi.getUrl()}/${cycleId}/exercises`, true,);
    }

    static async editCycleExercise(cycleId,exerciseId, exercise) {
        return await Api.put(`${CyclesExercisesApi.getUrl()}/${cycleId}/exercises/${exerciseId}`, true, exercise);
    }

    static async removeCycleExercise(cycleId,exerciseId) {
        return await Api.delete(`${CyclesExercisesApi.getUrl()}/${cycleId}/exercises/${exerciseId}`, true);
    }
}