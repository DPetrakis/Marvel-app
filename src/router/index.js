import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Character from "../components/Character.vue";
import NotFound from "../components/NotFound.vue";
import Comics from "../components/Comics.vue";
import Comic from "../components/Comic.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/character/:id",
    name: "Character",
    component: Character
  },
  {
    path: "/comics",
    name: "Comics",
    component: Comics
  },
  {
    path: "/comic/:id",
    name: "Comic",
    component: Comic
  },
  {
    path: "*",
    component: NotFound

  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
