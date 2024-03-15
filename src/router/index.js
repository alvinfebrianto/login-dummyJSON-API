import { createRouter, createWebHistory } from "vue-router";
import login from "../views/login.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: login,
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/home.vue"),
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem("token");
        if (!token) {
          next({ name: "login" }); //Jika tidak ada token, redirect ke halaman login
        } else {
          //Lakukan pengecekan token di API menggunakan fetch
          fetch("https://dummyjson.com/users", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
            .then((response) => {
              if (response.ok) {
                next(); //Jika token valid, biarkan user masuk
              } else {
                next({ name: "login" }); //Jika token tidak valid, redirect ke halaman login
              }
            })
            .catch((error) => {
              console.error("Error checking token:", error);
              next({ name: "login" }); //Jika terjadi kesalahan, redirect ke halaman login
            });
        }
      },
    },
  ],
});

export default router;
