<template>
  <!-- Page d'Accueil Interactive -->
  <section class="homepage-experience relative overflow-hidden">
    <!-- Section Héros : Vidéo en Plein Écran avec Éléments Interactifs -->
    <div class="hero-section relative h-screen bg-black text-white flex items-center justify-center">
      
      <!-- Vidéo Version Bureau -->
      <video autoplay muted loop playsinline class="video-desktop absolute top-0 left-0 w-full h-full object-cover">
        <source src="/v92.mp4" type="video/mp4">
        Votre navigateur ne supporte pas la balise vidéo.
      </video>

      <!-- Vidéo Version Mobile -->
      <video autoplay muted loop playsinline class="video-mobile absolute top-0 left-0 w-full h-full object-cover">
        <source src="/pototop-google.mp4" type="video/mp4">
        Votre navigateur ne supporte pas la balise vidéo.
      </video>

      <div class="overlay absolute inset-0 bg-black opacity-10"></div>
      <div class="z-10 text-center absolute bottom-20 left-0 right-0">
  <h1 class="text-3xl md:text-6xl font-bold mb-4 animate-fade-in">
    <div class="w-full flex justify-center mb-4">
      <img src="/assets/POTOSMILE-w.png" class="w-[200px] mx-auto">
    </div>
    <div class="text-2xl mt-0 italic font-thin">Au cœur de la ville</div>
  </h1>
  <p class="text-xl md:text-2xl mb-8 animate-fade-in delay-1s mt-8 bg-white text-black h-12 w-full flex items-center justify-around">
    Mobilier urbain et design 
  </p>
  <a href="#features" class="text-lg font-bold px-8 py-4 border opacity-90 border-white rounded-lg hover:bg-white hover:text-black transition-all">
    Explorez les Possibilités
  </a>
</div>



      <div class="scroll-indicator absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
    </div>

    <!-- Section des Fonctionnalités Interactives -->
    <section id="features" class="relative py-20 bg-gray-100 p-4">
      <h2 class="text-3xl max-w-128 text-center font-bold mb-12">Une gamme de tables et supports design <br></br> fixables sur tous potelets en 2 clics </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Carte 1 -->
        <div class="card interactive-card bg-cover bg-center relative cursor-grab"
             style="background-image: url('/assets/table/clap.jpg'); height: 400px;" draggable="true">
          <div class="absolute inset-0 bg-black bg-opacity-20"></div>
          <div class="overlay absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-all">
            <div class="text-center text-white z-10">
              <h3 class="text-3xl font-bold text-shadow">Une Table pour tous vos Événements</h3>
              <p class="mt-2 text-shadow">Idéale pour les événements en extérieur, elle s'adapte aux espaces urbains tout en offrant une fonctionnalité optimale.</p>
            </div>
          </div>
        </div>
        <!-- Carte 2 -->
        <div class="card interactive-card bg-cover bg-center relative cursor-grab"
             style="background-image: url('/assets/table/pontivy.jpg'); height: 400px;" draggable="true">
          <div class="absolute inset-0 bg-black bg-opacity-20"></div>
          <div class="overlay absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-all">
            <div class="text-center text-white z-10">
              <h3 class="text-3xl font-bold text-shadow">Tablettes Polyvalentes</h3>
              <p class="mt-2 text-shadow">Fixez nos tablettes sur potelets pour un usage commercial ou récréatif, optimisant l’espace tout en captant l’attention.</p>
            </div>
          </div>
        </div>
        <!-- Carte 3 -->
        <div class="card interactive-card bg-cover bg-center relative cursor-grab"
             style="background-image: url('/assets/table/clac.webp'); height: 400px;" draggable="true">
          <div class="absolute inset-0 bg-black bg-opacity-20"></div>
          <div class="overlay absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-all">
            <div class="text-center text-white z-10">
              <h3 class="text-3xl font-bold text-shadow">Jeux et Sports</h3>
              <p class="mt-2 text-shadow">Transformez les espaces publics en aires de jeux grâce à des supports conçus pour le football, le rugby, et même le tennis.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

<!-- Section Parallaxe Améliorée -->
<section class="parallax-section relative overflow-hidden h-screen text-white">
  <!-- Image de Fond avec Effet Parallaxe -->
  <div
    class="parallax-background absolute top-0 left-0 w-full h-full"
    style="
      background-image: url('/assets/table/pontivy.jpg');
      background-size: cover;
      background-attachment: fixed;
      background-position: center;
    "
  ></div>

  <!-- Superposition pour l'effet d'assombrissement -->
  <div class="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-5"></div>

  <!-- Contenu au Premier Plan -->
  <div class="content relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
    <h2 class="text-5xl font-bold mb-4 animate-fade-in-up">Réinventez l'Espace Urbain</h2>
    <p class="text-xl max-w-3xl mx-auto animate-fade-in-up delay-1s">
      Avec Pototop, transformez chaque coin de rue en une expérience unique et mémorable. Redéfinissons ensemble les interactions en ville.
    </p>
    <a href="#contact" class="mt-8 text-lg px-8 py-4 border border-white rounded-lg hover:bg-white hover:text-black transition-all">
      Contactez-nous
    </a>
  </div>
</section>



    <!-- Section Grille d'Images -->
    <section class="image-grid-section py-20 bg-gray-100">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-12">Des créations pour manger, jouer, et partager des moments de ville  !</h2>
        <div class="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          <!-- Itération sur les images -->
          <div v-for="(image, index) in images" :key="index" class="relative overflow-hidden hover:scale-105 transform transition-all duration-300">
            <img :src="getImagePath(image.src)" :alt="image.alt" class="w-full h-full object-cover">
            <div class="overlay absolute inset-0 bg-black bg-opacity-25 opacity-0 hover:opacity-100 transition-all">
              <div class="flex items-center justify-center h-full">
                <p class="text-white text-lg font-bold">{{ image.caption }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- Section du Fondateur : Histoire Personnelle avec Vidéo -->
    <section class="founder-section relative py-20 bg-gray-100">
      <div class="container mx-auto flex items-center justify-center">
        <div class="w-full md:w-1/2 p-3">
          <h2 class="text-2xl md:text-4xl font-bold text-center mb-6">Une idée de Fred Margot</h2>
          <p class="text-lg text-center mb-6 p-2">"Je crois au pouvoir des espaces publics. C'est là que la magie de la ville se produit, et avec Pototop, je veux que chacun puisse y contribuer." - Fred Margot</p>
        </div>
      </div>
    </section>

    <!-- Section Appel à l'Action -->
    <!-- <section class="cta-section py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center p-3">
      <h2 class="text-2xl md:text-4xl font-bold mb-4">Prenez Contact avec Nous</h2>
      <p class="text-2xl mb-12">Nous sommes prêts à transformer vos idées en réalité urbaine. Contactez-nous pour des solutions sur mesure.</p>
      <a href="tel:0670641722" class="text-lg px-10 py-4 bg-white text-black rounded-lg hover:bg-gray-300 transition-all">06.70.64.17.22</a>
    </section> -->

    <div class="text-center mt-8">
  <a href="#contact" class="text-lg px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all">
    Demandez un Devis Gratuit
  </a>
</div>


    <!-- Section Pied de Page -->
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
    const images = ref([
      { src: 'clac.webp', alt: 'Points d\'Information', caption: 'Clic' },
      { src: 'clap.webp', alt: 'Pop-Up Stores', caption: 'Clac !' },
      { src: 'bluediner.jpg', alt: 'Événements Communautaires', caption: 'Table de restaurant' },
      { src: 'yellowfred.jpg', alt: 'Street Design', caption: 'Table Apéro' },
      { src: 'nightable.jpg', alt: 'Street Design', caption: 'Diner pour 2' },
      { src: 'nina.jpg', alt: 'Street Design', caption: 'Accessoires' },
      { src: 'shoot.jpg', alt: 'Street Design', caption: 'Bang' },
      { src: 'pontivy.jpg', alt: 'Street Design', caption: 'Série Paris 2024' },
      { src: 'montgolf.jpg', alt: 'Espace Public', caption: 'Esprit parisien' },
      { src: 'shotsmg.webp', alt: 'Street Design', caption: 'Festif' },
      { src: 'mgnight.webp', alt: 'Street Design', caption: 'Lift off' },
      { src: 'lightup.jpg', alt: 'Art Urbain', caption: 'Lihgt up the streets' },
    ]);

    // Fonction pour obtenir le chemin de l'image
    const getImagePath = (imageFileName) => `/assets/table/${imageFileName}`;

    const products = ref([
      { name: 'Pototop Classic', image: 'bluediner.jpg' },
      { name: 'Clic Clac', image: 'pontivy.jpg' },
      { name: 'Pototop Keith Me', image: 'clac.jpg' },
      { name: 'Poto Rizon', image: 'lightup.jpg' },
      { name: 'Poto Splash', image: 'tennis.jpg' },
      { name: 'Poto Luncheon', image: 'nina.jpg' },
      { name: 'Poto Rose', image: 'yellowfred.jpg' },
      { name: 'Poto Air Jourdain', image: 'montgolf.jpg' },
    ]);

    function isEven(index) {
      return index % 2 === 0;
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

    return {
      images,
      getImagePath,
      products,
      isEven,
      hoverEffect,
      removeHoverEffect,
    };
  },
};
</script>

<style>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 40px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 1s ease-out forwards;
}

.animate-fade-in-up.delay-1s {
  animation-delay: 1s;
}

@media (max-width: 768px) {
  .parallax-background {
    background-attachment: scroll;
  }
}

/* Ombre du Texte pour une Meilleure Lisibilité */
.text-shadow {
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
}

/* Effet de Survol Personnalisé pour l'Interactivité Modulaire */
.card:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease-in-out;
}

.card {
  transition: transform 0.3s ease-in-out;
}

/* Ajustements Responsifs */
@media (max-width: 768px) {
  .header-card,
  .info-card {
    grid-column: span 1;
  }
}

/* Responsivité de la Vidéo */
.video-mobile {
  display: none;
}

@media (max-width: 767px) {
  .video-desktop {
    display: none;
  }
  .video-mobile {
    display: block;
  }
}
</style>
