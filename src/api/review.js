import { Api } from './api.js';

export {ReviewsApi,Review};

class ReviewsApi {
    static get url() {
        return `${Api.baseUrl}/reviews`;
    }

    static async addReview(routineId,rating,controller) {
        return await Api.post(`${ReviewsApi.url}/${routineId}/`,true,rating,controller);
    }
}

class Review{
    constructor(rating){
        this.score = rating;
        this.review = "";
    }
}