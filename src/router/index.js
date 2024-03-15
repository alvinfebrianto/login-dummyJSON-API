import { createRouter, createWebHistory } from "vue-router";
import login from "../views/login.vue";
import { checkToken } from "../api/auth.js";

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
      //Fungsi yang dipanggil sebelum navigasi ke halaman home
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem("token"); //Mendapatkan token dari localStorage
        if (!token) {
          next({ name: "login" }); //Jika tidak ada token, redirect ke halaman login
        } else {
          checkToken(token) //Memeriksa validitas token dengan fungsi checkToken
            .then((valid) => {
              if (valid) {
                next(); //Jika token valid, lanjutkan navigasi
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
