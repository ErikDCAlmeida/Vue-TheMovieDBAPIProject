import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/favourites",
    name: "Favourites",
    component: () =>
      import(/* webpackChunkName: "favourites" */ "../views/Favourites.vue"),
  },
  {
    path: "/movie/:id",
    name: "MovieDetails",
    component: () =>
      import(
        /* webpackChunkName: "moviedetails" */ "../views/MovieDetails.vue"
      ),
  },
  {
    path: "/movies/popular",
    name: "PopularMovies",
    component: () =>
      import(
        /* webpackChunkName: "popularmovies" */ "../views/PopularMovies.vue"
      ),
  },
  {
    path: "/searchresults/:id",
    name: "SearchResults",
    component: () =>
      import(
        /* webpackChunkName: "searchmovies" */ "../views/SearchResults.vue"
      ),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () =>
      import(/* webpackChunkName: "notfound" */ "../views/NotFound.vue"),
  },
  {
    path: "/:pathMatch(.*)",
    name: "bad-not-found",
    component: () =>
      import(/* webpackChunkName: "notfound" */ "../views/NotFound.vue"),
  },
];

const router = createRouter({
  mode: "history",
  history: createWebHistory(),
  routes,
});

export default router;
