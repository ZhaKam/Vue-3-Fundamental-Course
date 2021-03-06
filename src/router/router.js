import Main from "@/pages/Main";
import About from "@/pages/About";
import PostPage from "@/pages/PostPage";
import PostIdPage from "@/pages/PostIdPage";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/pages",
    component: PostPage,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/pages/:id",
    component: PostIdPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(process.env.BASE_URL),
});

export default router;
