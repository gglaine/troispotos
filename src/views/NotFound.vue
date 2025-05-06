<template>
  <div
    class="w-full h-screen"
    style="background-image: url('/assets/astrowalk.gif'), linear-gradient(45deg, #ff00cc, #3333ff, #00ffcc);
           background-size: cover, 100% 100%;
           background-repeat: no-repeat, no-repeat;
           background-blend-mode: screen;
           animation: wildGradient 15s ease infinite;"
  >
    <div class="flex flex-col items-center justify-center min-h-screen text-white text-center px-6 bg-black/60 backdrop-blur-sm">
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
        ↩ Retour à l’accueil
      </router-link>

      <div class="mt-16">
        <svg class="w-24 h-24 animate-bounce opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  </div>
</template>
