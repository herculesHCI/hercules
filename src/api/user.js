import { Api } from "./api"

export { UserApi, Credentials, createdCredentials }

class UserApi{
    static getUrl(slug){
        return `${Api.baseUrl}/users${ slug ? `/${slug}` : ""}`;
    }

    static async addUser(createdCredentials){
        return await Api.post(UserApi.getUrl(),false,createdCredentials);
    }


    static async verifyEmail(email,code){
        return await Api.post(UserApi.getUrl('verify_email'),false,{email,code})
    }

    static async login(credentials){
        return await Api.post(UserApi.getUrl('login'), false, credentials);
    }

    static async logout(){
        return await Api.post(UserApi.getUrl('logout'), true);
    }

    static async get(){
        return Api.get(UserApi.getUrl('current'), true);
    }
}

class Credentials {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

class createdCredentials{
    constructor(username,password,email,avatarUrl,metadata) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.avatarUrl = avatarUrl;
        this.metadata=metadata;
    }
}