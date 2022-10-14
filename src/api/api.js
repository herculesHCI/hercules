export { Api }

class Api {
    static token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjksImlhdCI6MTY2NTc3NzU4OTE3OSwiZXhwIjoxNjY1NzgwMTgxMTc5fQ.fRcuQ1UBP4cbT3unjFWkLDMuBe3OvvrwAB19OKAV8gw";

    static get baseUrl() {
        return "http://localhost:8080/api" // "http://127.0.0.1.8080/api"
    }

    static get timeout(){
        return 60 * 1000;
    }

    static async myFetch(url, secure, init={} ){
        if(secure && Api.token){
            if(!init.headers){
                init.headers= {};
            }
            init.headers['Authorization'] = `bearer ${Api.token}`;
        }

        const controller = new AbortController();
        init.signal = controller.signal;
        const timer = setTimeout( () => controller.abort() , Api.timeout);

        try{
            const response = await fetch(url, init);
            const text = await response.text();
            const result = text ? JSON.parse(text) : {};
            if(result.code){
                throw result;
            }
            return result;
        } catch(error){
            if(error.code){
                throw error;
            }
            else if(error.name === "AbortError" ){
                throw {"code":98, "description": error.message.toLowerCase() };
            }
            else if(error.name === "TypeError" ){
                throw {"code":99, "description": error.message.toLowerCase() };
            }
        } finally {
            clearTimeout(timer);
        }

    }

    static async get(url, secure){
        return await Api.myFetch(url, secure);
    }

    static async post(url,secure,data){
        return await Api.myFetch(url, secure,{
            method: "POST",
            headers:{
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(data)
        });
    }

    static async put(url, secure, data){
        return await Api.myFetch(url, secure, {
            method: "PUT",
            headers:{
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(data)
        });
    }

    static async delete(url, secure){
        return await Api.myFetch(url, secure, {
            method: "DELETE",
        });
    }
}