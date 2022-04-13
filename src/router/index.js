import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Article from "../views/Stories/Articles.vue";
import Contact from "../views/Contact.vue";
import Notfound from "../views/Notfound.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/articles", name: "Article", component: Article },
  { path: "/contact", name: "Contact", component: Contact },
  //catchall 404
  {
    path: "/:catchAll(.*)",
    name: "Notfound",
    component: Notfound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
