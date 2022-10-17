import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home-Landing.vue";
import Login from "@/views/Login.vue";
import SignUp from "@/views/SignUp";
import WorkoutsPage from "@/views/Workouts-Page";
import WorkoutsDetail from "@/views/Workouts-Detail";
import MyProfile from "@/views/MyProfile";
import main from "@/components/main-comp";
import accessDenied from "@/views/accessDenied";
import visualizeExcercises from "@/views/visualizeExcercises";
import modifyExercise from "@/views/modifyExercise";
import createNewExercise from "@/views/createNewExercise";
import modifyMyProfile from "@/views/modifyMyProfile";
import WorkoutsCreate from "@/views/Workouts-Create";
//require('vue-router').default;
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Login",
        component: Login
    },
    {
        path: "/signup",
        name: "signup",
        component: SignUp
    },
    {
        path:"/accessDenied",
        name:"accessDenied",
        component: accessDenied
    },
    {
        path:'/main',
        name:'main',
        component:main,
        children:[
            {
                path: "home",
                name: "Home-Landing",
                component: Home
            },    {
                path: "WorkoutsPage",
                name: "WorkoutsPage",
                component: WorkoutsPage
            },
            {
                path: "WorkoutsDetail",
                name: "WorkoutsDetail",
                component: WorkoutsDetail,
                props: true
            },{
                path:"WorkoutsCreate",
                name:"WorkoutsCreate",
                component: WorkoutsCreate
            },
            {
                path: "MyProfile",
                name: "My Profile",
                component: MyProfile,
            },
            {
                path: "visualizeExercises",
                name: "visualizeExercises",
                component: visualizeExcercises
            },
            {
                path: "modifyExercise",
                name: "modifyExercise",
                component: modifyExercise
            },
            {
                path: "createNewExercise",
                name: "createNewExercise",
                component: createNewExercise
            },
            {
                path: "modifyMyProfile",
                name: "modifyMyProfile",
                component: modifyMyProfile
            }

        ]},

];

const router = new VueRouter({
    mode: "history",
    routes,
});


export default router;
