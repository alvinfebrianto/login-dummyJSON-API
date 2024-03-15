<template>
  <RouterView />
  <div class="hero min-h-screen">
    <div class="hero-content flex-col lg:flex-row">
      <div class="lg:card text-center lg:text-left">
        <div class="lg:card-body lg:max-w-md">
          <h1 class="text-5xl font-bold">Login</h1>
          <p class="py-6 w-full lg:text-lg">
            Welcome back!<br />Please sign in to access your account
          </p>
        </div>
      </div>
      <div
        class="card shrink-0 w-full max-w-sm border border-slate-200 dark:bg-zinc-800 shadow-2xl bg-base-100"
      >
        <form class="card-body" @submit.prevent="login">
          <div class="form-control bg-base-100 dark:bg-zinc-800 mb-3">
            <div class="relative bg-inherit">
              <input
                v-model="loginEmail"
                type="username"
                id="username"
                class="peer bg-transparent w-full px-4 py-3 rounded-md border-2 placeholder:text-neutral-800/50 outline-none dark:placeholder:text-neutral-400 dark:bg-zinc-800 border-neutral-400 focus:border-neutral-600 ring-neutral-100 dark:border-neutral-600 dark:focus:border-white dark:ring-0"
                placeholder="Username"
                required
              /><label
                for="username"
                class="absolute cursor-text left-2 -top-3 text-sm text-neutral-800/50 dark:text-neutral-300 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-800/50 dark:peer-placeholder-shown:text-neutral-400 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-sky-600 dark:peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                >Username</label
              >
            </div>
          </div>
          <div class="form-control bg-base-100 dark:bg-zinc-800">
            <div class="relative bg-inherit">
              <input
                v-model="loginPassword"
                type="password"
                id="password"
                class="peer bg-transparent w-full px-4 py-3 rounded-md border-2 placeholder:text-neutral-800/50 outline-none dark:placeholder:text-neutral-400 dark:bg-zinc-800 border-neutral-400 focus:border-neutral-600 ring-neutral-100 dark:border-neutral-600 dark:focus:border-white dark:ring-0"
                placeholder="Password"
                required
              /><label
                for="password"
                class="absolute cursor-text left-2 -top-3 text-sm text-neutral-800/50 dark:text-neutral-300 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-800/50 dark:peer-placeholder-shown:text-neutral-400 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-sky-600 dark:peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                >Password</label
              >
            </div>
            <a class="label-text-alt link link-hover mt-2">Forgot password?</a>
          </div>
          <div class="mt-6">
            <button type="submit" class="btn btn-accent w-80">Login</button>
          </div>
          <div class="flex flex-col text-center">
            <p v-if="loginError" class="text-red-500">{{ loginError }}</p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { loginUser } from "../api/auth.js"; //Impor fungsi loginUser dari modul autentikasi API

const router = useRouter();
const loginEmail = ref("");
const loginPassword = ref("");
const loginError = ref(null);

const login = async () => {
  const response = await loginUser(loginEmail.value, loginPassword.value); //Memanggil fungsi loginUser dan menunggu responsenya
  if (response.success) {
    //Jika login berhasil, redirect ke halaman home
    router.push("/home");
  } else {
    //Jika login gagal, tampilkan pesan kesalahan
    loginError.value = response.error;
  }
};
</script>
