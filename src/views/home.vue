<script setup>
import { RouterLink, useRouter } from "vue-router";

const router = useRouter();

const logout = () => {
  localStorage.removeItem("token"); //Hapus token dari localStorage
  router.push({ name: "login" }); //Redirect ke halaman login
};
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div
      class="carousel w-11/12 lg:w-1/2 rounded-2xl shadow-neutral-700 shadow-lg"
    >
      <div id="item1" class="carousel-item w-full h-[26rem]">
        <img src="@/assets/img/1.jpg" class="w-full" />
      </div>
      <div id="item2" class="carousel-item w-full h-[26rem]">
        <img src="@/assets/img/2.jpg" class="w-full" />
      </div>
      <div id="item3" class="carousel-item w-full h-[26rem]">
        <img src="@/assets/img/3.jpg" class="w-full" />
      </div>
      <div id="item4" class="carousel-item w-full h-[26rem]">
        <img src="@/assets/img/4.jpg" class="w-full" />
      </div>
      <div id="item5" class="carousel-item w-full h-[26rem]">
        <img src="@/assets/img/5.jpg" class="w-full" />
      </div>
    </div>
    <div class="flex justify-center gap-2 mt-6">
      <a
        href="#item1"
        class="btn btn-sm hover:bg-primary hover:text-primary-content"
        >1</a
      >
      <a
        href="#item2"
        class="btn btn-sm hover:bg-primary hover:text-primary-content"
        >2</a
      >
      <a
        href="#item3"
        class="btn btn-sm hover:bg-primary hover:text-primary-content"
        >3</a
      >
      <a
        href="#item4"
        class="btn btn-sm hover:bg-primary hover:text-primary-content"
        >4</a
      >
      <a
        href="#item5"
        class="btn btn-sm hover:bg-primary hover:text-primary-content"
        >5</a
      >
    </div>
    <div class="form-control mt-8">
      <RouterLink to="/"
        ><button class="btn btn-primary">Go Back</button></RouterLink
      >
    </div>
    <div class="form-control mt-4">
      <button class="btn text-error" @click="logout">Log Out</button>
    </div>
  </div>
</template>
