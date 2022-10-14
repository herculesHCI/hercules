import { Api } from "./api"

export { ExercisesApi, Exercise }

class ExercisesApi{
    static getUrl(slug){
        return `${Api.baseUrl}/exercises${ slug ? `/${slug}` : ""}`;
    }

    static async getAllExercises(){
        return await Api.get(ExercisesApi.getUrl(), true);
    }

    static async addExercise(exercise){
        return await Api.post(ExercisesApi.getUrl(), true, exercise);
    }

    static async getExercise(id){
        return await Api.get(ExercisesApi.getUrl(id), true);
    }

    static async modifyExercise(id, exercise){
        return await Api.put(ExercisesApi.getUrl(id), true, exercise);
    }

    static async deleteExercise(id){
        return await Api.delete(ExercisesApi.getUrl(id), true);
    }


}

class Exercise{
    constructor(name, detail){
        this.name = name;
        this.detail = detail;
        this.type = "exercise";
    }
}