import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home-Landing.vue";
import Login from "@/views/Login.vue";
import WorkoutsPage from "@/views/Workouts-Page";
import WorkoutsDetail from "@/views/Workouts-Detail";

//require('vue-router').default;
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home-Landing",
        component: Home
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/WorkoutsPage",
        name: "WorkoutsPage",
        component: WorkoutsPage
    },
    {
        path: "/WorkoutsDetail",
        name: "WorkoutsDetail",
        component: WorkoutsDetail
    }
];

const router = new VueRouter({
    mode: "history",
    routes,
});


export default router;
