import { Api } from "./api"

export { RoutinesApi, Routine, Cycle }

class RoutinesApi{
    static getUrl(slug) {
        return `${Api.baseUrl}/routines${ slug ? `/${slug}` : ""}`;
    }

    static async add(routine){
        return await Api.post(RoutinesApi.getUrl(), true , routine);
    }

    static async modify(routine){
        return await Api.put(RoutinesApi.getUrl(routine.id), true , routine);
    }

    static async delete(routine){
        return await Api.delete(RoutinesApi.getUrl(routine.id), true,routine.id)
    }

    static async get(routineId){
        return await Api.get(RoutinesApi.getUrl(routineId), true,routineId);
    }

    static async getAll(pageNum,orderBy,size,direction,query,filter,filterVal,controller){
        let finalUrl = `${RoutinesApi.getUrl()}?page=${pageNum-1}&size=${size}&orderBy=${orderBy}&direction=${direction}`
        if(query.length >= 3){
            finalUrl += `search=${query}`;
        }
        if(filter.filterActualName){
            finalUrl+=`&${filter.filterActualName}=${filterVal}`;
        }
        return await Api.get(finalUrl, true,controller);
    }

    static async addCycle(routineId,cycle,controller) {
        return await Api.post(`${RoutinesApi.getUrl()}/${routineId}/cycles`, true, cycle, controller);
    }

    static async deleteCycle(routineId,cycleId,controller) {
        return await Api.delete(`${RoutinesApi.getUrl()}/${routineId}/cycles/${cycleId}`, true, controller);
    }
    static async editCycle(routineId,cycleId,cycle,controller) {
        return await Api.put(`${RoutinesApi.getUrl()}/${routineId}/cycles/${cycleId}`, true,cycle, controller);
    }

    static async getCycles(routineId,controller) {
        return await Api.get(`${RoutinesApi.getUrl()}/${routineId}/cycles`, true, controller);
    }

    static async getUserRoutines(){
        return await Api.get(`${RoutinesApi.getUrl()}?page=0&size=20&orderBy=date&direction=asc`,true,"");
    }
}

class Routine{
    constructor(name,category,src) {
        this.name = name;
        this.detail ="";
        this.isPublic = true;
        this.metadata=src;
        this.category = category;
        this.difficulty = "rookie"
    }
}

class Cycle{
    constructor(name,type,order,repetitions) {
        this.name = name;
        this.type = type;
        this.order = order;
        this.repetitions = repetitions;
        this.detail ='';
    }
}