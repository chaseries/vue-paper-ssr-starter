import Vue from "vue";
import VueRouter from "vue-router";

const PageIndex = () => import(/* webpackChunkName: "pageIndex" */ "VUE_PAGE/Index.vue");


Vue.use(VueRouter);

const routes = [
  { path: "/", component: PageIndex }
];

export const createRouter = function createRouter() {
  return new VueRouter({
    mode: "history",
    routes: routes
  });
};
