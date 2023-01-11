import Vue from "vue";
import Router from "vue-router";
import  DemoForm from "./components/DemoForm"
import  DemoForm2 from "./components/DemoForm2"
import HelloWorld from "./components/HelloWorld"

Vue.use(Router);
export default new Router({
    mode: "history",
    routes: [
        {
            path: "/demoform", name: "demoform", component: DemoForm
        },
        {
            path: "/demoform2", name: "demoform2", component: DemoForm2
        },
        {
            path: "/helloWorld", name: "helloWorld", component: HelloWorld
        }
    ]
});