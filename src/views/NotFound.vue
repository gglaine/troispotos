<template>
    <div class="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center p-6">
      <h1 class="text-7xl font-bold animate-pulse text-pink-500">404</h1>
      <p class="mt-4 text-2xl">Oops! Page not found.</p>
      <p class="text-gray-400 mt-2">It seems you've wandered into the void.</p>
      <router-link to="/" class="mt-6 inline-block bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full transition duration-300">
        Go Home
      </router-link>
      <div class="mt-10">
        <svg class="w-24 h-24 animate-bounce opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFound'
  }
  </script>
  