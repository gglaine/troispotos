<template>
<!-- Thrilling Interactive Homepage -->
<section class="homepage-experience relative overflow-hidden">
  <!-- Hero Section: Fullscreen Video Background with Interactive Elements -->
  <div class="hero-section relative h-screen bg-black text-white flex items-center justify-center">
  <video autoplay muted loop playsinline class="absolute top-0 left-0 w-full h-full object-cover">
    <source src="/top-o-pop.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="overlay absolute inset-0 bg-black opacity-50"></div>
  
  <!-- This is the text content stuck to the bottom -->
  <div class="z-10 text-center absolute bottom-10 left-0 right-0">
    <h1 class="text-6xl font-bold mb-4 animate-fade-in">Pototop, au coeur de la ville</h1>
    <p class="text-2xl mb-6 animate-fade-in delay-1s">Transformez vos espaces avec style et innovation</p>
    <a href="#features" class="text-lg px-8 py-4 border border-white rounded-lg hover:bg-white hover:text-black transition-all">
      Explorez les Possibilités
    </a>
  </div>
  
  <div class="scroll-indicator absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  </div>
</div>



<!-- Interactive Feature Section: Floating, Draggable Cards -->
<section id="features" class="relative py-20 bg-gray-100">
  <h2 class="text-5xl text-center font-bold mb-12">Découvrez Nos Solutions Modulaires</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    
    <!-- Table for Events -->
    <div class="card interactive-card bg-cover bg-center relative cursor-grab"
         style="background-image: url('/assets/table/clap.jpg'); height: 400px; background-size: cover; background-position: center;" draggable="true">
      <!-- Overlay for better text legibility -->
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <div class="overlay absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-all">
        <div class="text-center text-white z-10">
          <h3 class="text-3xl font-bold text-shadow">Table Haute pour Événements</h3>
          <p class="mt-2 text-shadow">Idéale pour les événements en extérieur, elle s'adapte aux espaces urbains tout en offrant une fonctionnalité optimale.</p>
        </div>
      </div>
    </div>

    <!-- Versatile Tabletop -->
    <div class="card interactive-card bg-cover bg-center relative cursor-grab"
         style="background-image: url('/assets/table/pontivy.jpg'); height: 400px; background-size: cover; background-position: center;" draggable="true">
      <!-- Overlay for better text legibility -->
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <div class="overlay absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-all">
        <div class="text-center text-white z-10">
          <h3 class="text-3xl font-bold text-shadow">Tablettes Polyvalentes</h3>
          <p class="mt-2 text-shadow">Fixez nos tablettes sur potelets pour un usage commercial ou récréatif, optimisant l’espace tout en captant l’attention.</p>
        </div>
      </div>
    </div>

    <!-- Interactive Game Table -->
    <div class="card interactive-card bg-cover bg-center relative cursor-grab"
         style="background-image: url('/assets/table/clac.jpg'); height: 400px; background-size: cover; background-position: center;" draggable="true">
      <!-- Overlay for better text legibility -->
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <div class="overlay absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-all">
        <div class="text-center text-white z-10">
          <h3 class="text-3xl font-bold text-shadow">Jeux et Sports</h3>
          <p class="mt-2 text-shadow">Transformez les espaces publics en aires de jeux grâce à des supports conçus pour le football, le rugby, et même le tennis.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Marketing Info Tooltip Section -->
  <div class="text-center mt-12 text-lg">
    <p>Glissez les cartes pour explorer nos offres modulaires. Chaque configuration est conçue pour optimiser votre espace et répondre à vos besoins.</p>
  </div>
</section>


  <!-- Parallax Scrolling Section: Storytelling through Layers -->
  <section class="parallax-section relative overflow-hidden h-screen bg-gray-900 text-white">
    <div class="layer-bg absolute top-0 left-0 w-full h-full bg-fixed" style="background-image: url('/assets/table/pontivy.jpg'); background-size: cover; background-position: center -500;"></div>
    <div class="content absolute z-10 top-1/2 transform -translate-y-1/2 text-center w-full">
      <h2 class="text-5xl font-bold mb-4">Créez l'Impact</h2>
      <p class="text-xl max-w-3xl mx-auto">Les espaces urbains sont bien plus que des lieux de passage. Nos solutions vous permettent de transformer les villes en expériences dynamiques et mémorables.</p>
    </div>
  </section>

  <!-- Creative Responsive Grid Section -->
<section class="image-grid-section py-20 bg-gray-100">
  <div class="container mx-auto">
    <h2 class="text-4xl font-bold text-center mb-12">Inspiration Visuelle</h2>
    <div class="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 grid-auto-rows">
      <!-- Image 1 -->
      <div class="relative overflow-hidden aspect-w-3 aspect-h-2 hover:scale-105 transform transition-all duration-300">
        <img src="/assets/table/bluediner.jpg" alt="Événements Communautaires" class="w-full h-full object-cover">
        <div class="overlay absolute inset-0 bg-black bg-opacity-25 opacity-0 hover:opacity-100 transition-all">
          <div class="flex items-center justify-center h-full">
            <p class="text-white text-lg font-bold">Événements</p>
          </div>
        </div>
      </div>

      <!-- Image 2 -->
      <div class="relative overflow-hidden aspect-w-4 aspect-h-3 hover:scale-105 transform transition-all duration-300">
        <img src="/assets/table/clap.jpg" alt="Pop-Up Stores" class="w-full h-full object-cover">
        <div class="overlay absolute inset-0 bg-black bg-opacity-25 opacity-0 hover:opacity-100 transition-all">
          <div class="flex items-center justify-center h-full">
            <p class="text-white text-lg font-bold">Pop-Up Stores</p>
          </div>
        </div>
      </div>

      <!-- Image 3 -->
      <div class="relative overflow-hidden aspect-w-1 aspect-h-1 hover:scale-105 transform transition-all duration-300">
        <img src="/assets/table/clac.jpg" alt="Points d'Information" class="w-full h-full object-cover">
        <div class="overlay absolute inset-0 bg-black bg-opacity-25 opacity-0 hover:opacity-100 transition-all">
          <div class="flex items-center justify-center h-full">
            <p class="text-white text-lg font-bold">Points d'Information</p>
          </div>
        </div>
      </div>

      <!-- Image 4 -->
      <div class="relative overflow-hidden aspect-w-16 aspect-h-9 hover:scale-105 transform transition-all duration-300">
        <img src="/assets/table/lightup.jpg" alt="Urban Art" class="w-full h-full object-cover">
        <div class="overlay absolute inset-0 bg-black bg-opacity-25 opacity-0 hover:opacity-100 transition-all">
          <div class="flex items-center justify-center h-full">
            <p class="text-white text-lg font-bold">Urban Art</p>
          </div>
        </div>
      </div>

      <!-- Image 5 -->
      <div class="relative overflow-hidden aspect-w-2 aspect-h-3 hover:scale-105 transform transition-all duration-300">
        <img src="/assets/table/montgolf.jpg" alt="Public Space" class="w-full h-full object-cover">
        <div class="overlay absolute inset-0 bg-black bg-opacity-25 opacity-0 hover:opacity-100 transition-all">
          <div class="flex items-center justify-center h-full">
            <p class="text-white text-lg font-bold">Public Space</p>
          </div>
        </div>
      </div>

      <!-- Image 6 -->
      <div class="relative overflow-hidden aspect-w-4 aspect-h-5 hover:scale-105 transform transition-all duration-300">
        <img src="/assets/table/pontivy.jpg" alt="Street Design" class="w-full h-full object-cover">
        <div class="overlay absolute inset-0 bg-black bg-opacity-25 opacity-0 hover:opacity-100 transition-all">
          <div class="flex items-center justify-center h-full">
            <p class="text-white text-lg font-bold">Street Design</p>
          </div>
        </div>
      </div>
         <!-- Image 7 -->
      <div class="relative overflow-hidden aspect-w-4 aspect-h-5 hover:scale-105 transform transition-all duration-300">
        <img src="/assets/table/yellowfred.jpg" alt="Street Design" class="w-full h-full object-cover">
        <div class="overlay absolute inset-0 bg-black bg-opacity-25 opacity-0 hover:opacity-100 transition-all">
          <div class="flex items-center justify-center h-full">
            <p class="text-white text-lg font-bold">Street Design</p>
          </div>
        </div>
      </div>
               <!-- Image  -->
               <div class="relative overflow-hidden aspect-w-4 aspect-h-5 hover:scale-105 transform transition-all duration-300">
        <img src="/assets/table/nina.jpg" alt="Street Design" class="w-full h-full object-cover">
        <div class="overlay absolute inset-0 bg-black bg-opacity-25 opacity-0 hover:opacity-100 transition-all">
          <div class="flex items-center justify-center h-full">
            <p class="text-white text-lg font-bold">Street Design</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  <!-- Immersive Founder Section: Personal Story with Video -->
  <section class="founder-section relative py-20 bg-gray-100">
    <div class="container mx-auto flex items-center justify-center">
      <div class="w-full md:w-1/2">
        <h2 class="text-4xl font-bold text-center mb-6">Une idée de Fred Margot</h2>
        <p class="text-lg text-center mb-6">"Je crois au pouvoir des espaces publics. C'est là que la magie de la ville se produit, et avec Pototop, je veux que chacun puisse y contribuer." - Fred Margot</p>
      </div>
    </div>
  </section>
  

  <!-- Call-to-Action Section: Vibrant Contact Block -->
  <section class="cta-section py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center">
    <h2 class="text-4xl font-bold mb-4">Prenez Contact avec Nous</h2>
    <p class="text-xl mb-6">Nous sommes prêts à transformer vos idées en réalité urbaine. Contactez-nous pour des solutions sur mesure.</p>
    <a href="tel:0670641722" class="text-lg px-10 py-4 bg-white text-black rounded-lg hover:bg-gray-300 transition-all">06.70.64.17.22</a>
  </section>

  <!-- Footer Section -->
  <footer class="footer-section py-8 bg-black text-white text-center">
    <p class="text-sm">Pototop© - Tous droits réservés - 2024</p>
    <p class="text-xs">Site par <a href="https://guillaumelaine.com" class="text-blue-400 hover:underline">Gui</a></p>
  </footer>
</section>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Home',
  setup() {
    function isEven(index) {
      return index % 2 === 1;
    }

    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    function hoverEffect(event) {
      event.currentTarget.style.borderColor = getRandomColor();
      event.currentTarget.style.borderWidth = '2px';
      event.currentTarget.style.borderStyle = 'solid';
    }

    function removeHoverEffect(event) {
      event.currentTarget.style.borderColor = '';
      event.currentTarget.style.borderWidth = '';
      event.currentTarget.style.borderStyle = '';
    }

    const getImagePath = (imageFileName) => `/assets/table/${imageFileName}`;
    const products = ref([

      { name: 'Pototop Classic', image: 'bluediner.jpg' },

      { name: 'Clic Clac', image: 'pontivy.jpg' },
      // { name: 'Pototop High Flyer', image: 'clap.jpg' },
      { name: 'Pototop Keith Me', image: 'clac.jpg' },
      { name: 'Poto rizon', image: 'lightup.jpg' },
      { name: 'Poto Splash', image: 'tennis.jpg' },
  
      { name: 'Poto Luncheon', image: 'nina.jpg' },
      { name: 'Poto Rose', image: 'yellowfred.jpg' },
      { name: 'Poto Air Jourdain', image: 'montgolf.jpg' },
    ]);

    return {
      products,
      getImagePath,
      hoverEffect,
      removeHoverEffect,
      isEven
    };
  },
};
</script>



<style>

/* Text Shadow for better readability */
.text-shadow {
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
}

/* Custom hover effect for modular interactivity */
.card:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease-in-out;
}

.card {
  transition: transform 0.3s ease-in-out;
}
/* Masonry Grid Layout */
.masonry-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 0px; /* Improved spacing for better readability */
}

/* Card General Styles */
.card {
  background: #fff;
  padding: 0px;
  margin: 0px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
}

/* Full Image Card */
.cover-full-div img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

/* Header and Info Card Span */
.header-card, .info-card {
  grid-column: span 2;
}

/* Product Info Hover Effect */
.product-info {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.9);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s, visibility 0.5s;
  padding: 1rem;
}

.product-card:hover .product-info {
  opacity: 1;
  visibility: visible;
}

/* Founder Card Styles */
.info-card {
  padding: 2rem;
}

.info-card h2, .info-card p {
  margin-bottom: 1rem;
  color: #333;
}

.info-card ul {
  list-style-position: inside;
  padding-left: 1rem;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .header-card, .info-card {
    grid-column: span 1;
  }
}

/* Video Card Styles */
.video-card {
  grid-column: span 2; /* Make the video card span two columns */
  padding: 0; /* No padding to make the video fully occupy the card */
  background-color: transparent; /* Optional: Make background transparent */
}

.video-card video {
  width: 100%;
  height: auto;
  border-radius: 0px; /* Optional: Add rounded corners to the video */
}
</style>
