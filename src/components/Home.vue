<template>
  <div class="min-h-screen bg-blue-500 p-8">
    <div class="masonry-grid">
      <!-- Header Card -->
      <div class="card header-card larger bg-black" :style="{ backgroundImage: 'url(' + headerImageUrl + ')', backgroundColor: 'red', backgroundSize: '142%' }">
        <div class=" text-white text-center p-8 rounded-lg">
          <img src="/assets/POTOSMILE-B.png" alt="Pototop Logo" class="mx-auto mb-1 w-48">
          <p class="text-2xl text-slate-800 font-light mb-4">La ville est belle</p>
        </div>
      </div>
      <!-- Produits et sections intercalées -->
      <template v-for="(product, index) in products" :key="product.name">
        <div class="card product-card">
          <img :src="getImagePath(product.image)" :alt="product.name" class="w-full">
          <div class="p-6">
            <h3 class="font-bold text-lg mb-2">{{ product.name }}</h3>
            <p class="text-gray-700 text-base">{{ product.description }}</p>
          </div>
        </div>
        <div v-if="index === 3" class="card info-card larger p-4">
          <h2 class="text-4xl font-bold mb-4">À propos de Pototop</h2>
          <p>Pototop a pour mission d'apporter l'art de vivre à la française dans les rues avec notre design de table innovant et modulaire, parfait pour les explorateurs urbains et les amateurs de plein air.</p>
        </div>
        <div v-if="index === 7" class="card info-card larger p-4">
          <h2 class="text-4xl font-bold text-center mb-4">1,2,3 ... Poto rentrant !</h2>
          <p>Notre design breveté vous permet de clipser et sécuriser nos tables autour des poteaux de rue de Paris, offrant une surface stable et élégante en quelques secondes.</p>
        </div>
        <div v-if="index === 9" class="card info-card larger p-4">
          <h2 class="text-4xl font-bold text-center mb-4">Personnalisez-le</h2>
        <p class="highlight">Notre design breveté vous permet de clipser et sécuriser nos tables autour des poteaux de rue de Paris, offrant une surface stable et élégante en quelques secondes.</p>
        </div>
      </template>

      <div class="card info-card p-8 flex items-center larger">
        <img src="/assets/fred.jpg" alt="Avatar du fondateur" class="w-48 h-64 rounded-sm mr-4">
        <div>
          <p class="text-xl max-w-48  font-bold">Fred Margot, créateur de pototop</p>
          <p class="text-xl max-w-64 text-slate-800  font-medium"><q>Lancer POTOTOP a été un parcours d'innovation et de passion. Notre objectif est de révolutionner les espaces de vie urbains, un meuble à la fois."</q></p>
        </div>
      </div>

      <!-- Discover the T20 Card -->
      <div class="card info-card bg-white w-full rounded-lg shadow-md p-8 mb-4 transform transition-all duration-300 ease-in-out overflow-hidden hover:shadow-lg">
        <h2 class="text-3xl font-bold mb-4">Découvrez la T20</h2>
        <div class="text-xl">
          <div class="flex items-center">
            <div class="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-2"></div>
            Plateau customisable
          </div>
          <div class="flex items-center">
            <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
            <strong>Montage 10s</strong>
          </div>
          <div class="flex items-center">
            <div class="w-2 h-2 bg-blue-500 rounded-full animate-pulse mr-2"></div>
            <strong>Livraison gratuite</strong>
          </div>
          <div class="flex items-center">
            <div class="w-2 h-2 bg-yellow-500 rounded-full animate-pulse mr-2"></div>
            Disponible à la vente ou en location-vente
          </div>
          <!-- Phone Number on Separate Line -->
          <div class="mt-12 flex flex-col justify-center p-4">
            <div class="text-xl font-medium text-gray-900 mb-2">Demande de devis et renseignement :</div>
            <div class="text-2xl font-bold text-gray-900"> 📞 <span class="ml-2">06.13.13.12.12</span></div>
          </div>
        </div>
      </div>
      <!-- Additional Cards for Features -->
      <div class="card product-card p-8">
        <img src="/assets/POTOSMILE-B.png" alt="Pototop Logo" class="mx-auto mb-12 w-32 mt-4">
        <h2 class="text-xl font-bold mb-12">Conçu et fabriqué en France</h2>
        <p>Pototop© est une marque déposée</p>
        <p>tous droits réservés - 2024</p>
        <p class="font-sm">Site par GUI.</p>
      </div>
      
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Home',
  setup() {
 

    // Method to generate a random color
    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    // Method to apply the hover effect
    function hoverEffect(event) {
      event.currentTarget.style.borderColor = getRandomColor();
      event.currentTarget.style.borderWidth = '2px';
      event.currentTarget.style.borderStyle = 'solid';
    }

    // Method to remove the hover effect
    function removeHoverEffect(event) {
      event.currentTarget.style.borderColor = '';
      event.currentTarget.style.borderWidth = '';
      event.currentTarget.style.borderStyle = '';
    }

    const getImagePath = (imageFileName) => `/assets/table/${imageFileName}`;
    const headerImageUrl = ref('/assets/paris.webp');

    const products = ref([
{ name: 'Pototop High Flyer', description: 'A versatile table for urban spaces.', image: 'orangeboheme.jpg' },
{ name: 'Pototop Keith Me', description: 'Pop, Top, Urbain, inspiré du travail de keith Haring', image: 'pototop-keith.png' },
{ name: 'Pototop Classic', description: 'Combinaison d\'élégance et de fonctionnalité', image: 'pototop 2.png' },
{ name: 'Pototop Eye', description: 'Tapez lui dans l\'oeil', image: 'pototop-eye.png' },
{ name: 'Poto Splash', description: 'Attention, ca va mouiller', image: 'poto-splash.png' },
{ name: 'Poto rizon', description: 'On va où aujourd\'hui', image: 'poto-solar.png' },
{ name: 'Poto Pool', description: 'A la fraiche, décontracté', image: 'poto-pool.png' },
{ name: 'Poto Top Striker', description: 'Plutôt 4-4-2 ou 4-3-3 ?', image: 'poto-platoche.png' },
{ name: 'Poto Rose', description: 'Découvrez le avant tout le monde', image: 'poto-pink.png' },
{ name: 'Poto Air Jourdain', description: 'Inspiré par la légende du basker', image: 'poto-michael.png' },
{ name: 'Poto NFL', description: 'Yeeeha !', image: 'poto-gridiron.png' },
{ name: 'Poto Noir', description: 'En avant, direction l\'infini', image: 'poto-blackhole.png' }
]);

    return {
      products,
      headerImageUrl,
      getImagePath,
      hoverEffect,
      removeHoverEffect,
    };
  },
};
</script>




<style>
/* Masonry Grid Layout */
.masonry-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
}

/* Card General Styles */
.card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-bottom: 16px;
  transition: transform 0.3s ease;
  overflow: hidden; /* Ensures content fits within the rounded corners */
}

/* Specific Card Styles */
.header-card, .info-card {
  grid-column: span 2;
}

.product-card {
  display: flex;
  flex-direction: column;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .header-card, .info-card {
    grid-column: span 1;
  }
}

/* Info Card Styles */
.info-card {
  padding: 2rem; /* Increased padding for readability */
}

.info-card h2, .info-card p, .info-card ul {
  margin-bottom: 1rem;
}

.info-card ul {
  list-style-type: disc;
  list-style-position: inside;
  padding-left: 1rem;
}

/* Highlighting Important Information */
.highlight {
  color: #007BFF; /* Highlight color */
  font-weight: bold;
}

/* Hover Effect for Cards */
.card:hover {
  transform: translateY(-5px); /* Lift effect on hover */
}

/* Styling for Important List Items */
.info-card li strong {
  font-weight: bold; /* Emphasize key points */
}

/* Testimonial Card Styles */
.testimonial-card {
  display: flex;
  align-items: center;
}

.testimonial-card img {
  flex-shrink: 0; /* Prevent avatar from shrinking */
  border-radius: 50%; /* Circle avatar */
  margin-right: 1rem;
}

/* Social Links Styles */
.social-links a img {
  transition: transform 0.3s ease;
}

.social-links a:hover img {
  transform: scale(1.1); /* Enlarge icons on hover */
}

/* Text and List Styles */
.info-card h2 {
  color: #333;
}

.info-card p, .info-card ul {
  color: #666;
  font-size: 14px;
}

.info-card ul {
  list-style-position: inside;
}
</style>
