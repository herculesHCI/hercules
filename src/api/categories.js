import { Api } from "./api";

export {CategoriesApi,Category};

class CategoriesApi{
    static getUrl() {
        return `${Api.baseUrl}/categories`;
    }

    static async add(category){
        return await Api.post(CategoriesApi.getUrl(), true , category);
    }
}

class Category{
    constructor(name) {
        this.name = name;
        this.detail ="-";
    }
}