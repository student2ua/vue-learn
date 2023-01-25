import Vue from "vue";
import Router from "vue-router";
import  V_validate2 from "./components/V_validate2"
import  V_validate from "./components/V_validate"
import Html5ValidationAPI from "./components/Html5ValidationAPI"

Vue.use(Router);
export default new Router({
    mode: "history",
    routes: [
        {
            path: "/vvalidate2", name: "vee-validating", component: V_validate2
        },
        {
            path: "/vvalidate", name: "V_validate", component: V_validate
        },
        {
            path: "/Html5ValidationAPI", name: "Html5ValidationAPI", component: Html5ValidationAPI
        }
    ]
});