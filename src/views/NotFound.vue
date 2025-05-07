<template>
  <div class="relative w-full h-screen overflow-hidden">
    <!-- 🎥 Video background (mobile only) -->
    <video
      autoplay
      muted
      loop
      playsinline
      class="absolute inset-0 w-full h-full object-cover block sm:hidden"
    >
      <source src="/assets/astrowalk-mobile.mp4" type="video/mp4" />
    </video>

    <!-- 🖼️ Fallback background (GIF + gradient for desktop) -->
    <div
      class="absolute inset-0 hidden sm:block"
      style="background-image: url('/assets/astrowalk.gif'), linear-gradient(45deg, #ff00cc, #3333ff, #00ffcc);
             background-size: cover, 100% 100%;
             background-repeat: no-repeat, no-repeat;
             background-blend-mode: screen;
             animation: wildGradient 15s ease infinite;"
    ></div>

    <!-- 🔤 Content -->
    <div class="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center px-6 bg-black/60 backdrop-blur-sm">
      <h1 class="text-[10rem] font-extrabold leading-none animate-pulse text-pink-500 drop-shadow-lg tracking-tight">
        404
      </h1>

      <p class="mt-6 text-4xl sm:text-5xl font-black tracking-wide text-white drop-shadow-md font-mono">
        Dommage, pas de Pototop ici...
      </p>

      <p class="mt-10 text-lg sm:text-xl text-gray-200 font-light">
        En attendant, retourne à l’accueil :
      </p>

      <router-link
        to="/"
        class="mt-4 inline-block bg-pink-500 hover:bg-pink-600 text-white text-lg sm:text-xl font-semibold px-8 py-4 rounded-full transition duration-300 shadow-lg"
      >
       Retour à l’accueil 🚀 
      </router-link>
    </div>
  </div>
</template>
