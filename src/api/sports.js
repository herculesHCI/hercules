import { Api } from "./api"

export { SportApi, Sport }

class SportApi{
    static getUrl(slug) {
        return `${Api.baseUrl}/sports${ slug ? `/${slug}` : ""}`;
    }

    static async add(sport){
        return await Api.post(SportApi.getUrl(), true ,sport);
    }

    static async modify(sport){
        return await Api.put(SportApi.getUrl(sport.id), true , sport);
    }

    static async delete(id){
        return await Api.delete(SportApi.getUrl(id), true)
    }

    static async get(id){
        return await Api.get(SportApi.getUrl(id), true);
    }

    static async getAll(){
        return await Api.get(SportApi.getUrl(), true);
    }
}

class Sport{
    constructor(id, name, detail) {
        this.id = id;
        this.name = name;
        this.detail = detail;
    }
}