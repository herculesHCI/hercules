import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home-Landing.vue";
import Login from "@/views/Login.vue";
import SignUp from "@/views/SignUp";
import WorkoutsPage from "@/views/Workouts-Page";
import WorkoutsDetail from "@/views/Workouts-Detail";
import MyProfile from "@/views/MyProfile";

//require('vue-router').default;
Vue.use(VueRouter);

const routes = [
    {
        path: "/home",
        name: "Home-Landing",
        component: Home
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/",
        name: "signup",
        component: SignUp
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
    },
    {
        path: "/MyProfile",
        name: "My Profile",
        component: MyProfile
    }
];

const router = new VueRouter({
    mode: "history",
    routes,
});


export default router;
