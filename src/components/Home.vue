<template>
  <!-- Main Content -->
  <main class="homepage-experience relative overflow-hidden">
    <!-- Hero Section -->
    <header class="hero-section relative h-screen bg-black text-white flex items-center justify-center">
      <!-- Desktop Video -->
      <video
        autoplay
        muted
        loop
        playsinline
        class="video-desktop absolute top-0 left-0 w-full h-full object-cover"
        aria-label="Background urban environment video"
      >
        <source src="/v92.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la balise vidéo.
      </video>

      <!-- Mobile Video -->
      <video
        autoplay
        muted
        loop
        playsinline
        class="video-mobile absolute top-0 left-0 w-full h-full object-cover"
        aria-label="Background urban environment video"
      >
        <source src="/pototop-google.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la balise vidéo.
      </video>

      <div class="overlay absolute inset-0 bg-black opacity-10"></div>

      <div class="z-10 text-center absolute bottom-20 left-0 right-0">
        <h1 class="text-3xl md:text-6xl font-bold mb-4 animate-fade-in">
          <div class="w-full flex justify-center mb-4">
            <img
              src="/assets/POTOSMILE-w.png"
              alt="Logo Pototop"
              class="w-[200px] mx-auto"
            />
          </div>
          <span class="text-2xl mt-0 italic font-thin">Au cœur de la ville</span>
        </h1>
        <p
          class="text-xl md:text-2xl mb-8 animate-fade-in delay-1s mt-8 bg-white text-black h-12 w-full flex items-center justify-around"
        >
          Mobilier urbain et design
        </p>
        <a
          href="#features"
          class="text-lg font-bold px-8 py-4 border opacity-90 border-white rounded-lg hover:bg-white hover:text-black transition-all"
        >
          Explorez les Possibilités
        </a>
      </div>

      <div
        class="scroll-indicator absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
    </header>

    <!-- Features Section -->
    <section id="features" class="relative py-20 bg-gray-100 p-4">
      <h2 class="text-3xl max-w-128 text-center font-bold mb-12">
        Une gamme de tables et supports design<br />
        fixables sur tous potelets en 2 clics
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Feature Cards -->
        <article
          class="card interactive-card bg-cover bg-center relative cursor-pointer"
          style="background-image: url('/assets/table/compressed_clap.webp'); height: 400px;"
          role="article"
          aria-label="Une Table pour tous vos Événements"
        >
          <div class="absolute inset-0 bg-black bg-opacity-20"></div>
          <div
            class="overlay absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-all"
          >
            <div class="text-center text-white z-10">
              <h3 class="text-3xl font-bold text-shadow">
                Une Table pour tous vos Événements
              </h3>
              <p class="mt-2 text-shadow">
                Idéale pour les événements en extérieur, elle s'adapte aux
                espaces urbains tout en offrant une fonctionnalité optimale.
              </p>
            </div>
          </div>
        </article>

        <article
          class="card interactive-card bg-cover bg-center relative cursor-pointer"
          style="background-image: url('/assets/table/compressed_pontivy.webp'); height: 400px;"
          role="article"
          aria-label="Tablettes Polyvalentes"
        >
          <div class="absolute inset-0 bg-black bg-opacity-20"></div>
          <div
            class="overlay absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-all"
          >
            <div class="text-center text-white z-10">
              <h3 class="text-3xl font-bold text-shadow">
                Tablettes Polyvalentes
              </h3>
              <p class="mt-2 text-shadow">
                Fixez nos tablettes sur potelets pour un usage commercial ou
                récréatif, optimisant l’espace tout en captant l’attention.
              </p>
            </div>
          </div>
        </article>

        <article
          class="card interactive-card bg-cover bg-center relative cursor-pointer"
          style="background-image: url('/assets/table/compressed_clac.webp'); height: 400px;"
          role="article"
          aria-label="Jeux et Sports"
        >
          <div class="absolute inset-0 bg-black bg-opacity-20"></div>
          <div
            class="overlay absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-all"
          >
            <div class="text-center text-white z-10">
              <h3 class="text-3xl font-bold text-shadow">Jeux et Sports</h3>
              <p class="mt-2 text-shadow">
                Transformez les espaces publics en aires de jeux grâce à des
                supports conçus pour le football, le rugby, et même le tennis.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- Parallax Section -->
    <section
      class="parallax-section relative overflow-hidden h-screen text-white"
    >
      <div
        class="parallax-background absolute top-0 left-0 w-full h-full bg-fixed bg-center bg-cover"
        style="background-image: url('/assets/table/compressed_pontivy.webp');"
      ></div>

      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-5"></div>

      <div
        class="content relative z-10 flex flex-col items-center justify-center h-full px-4 text-center"
      >
        <h2 class="text-5xl font-bold mb-4 animate-fade-in-up">
          Réinventez l'Espace Urbain
        </h2>
        <p
          class="text-xl max-w-3xl mx-auto animate-fade-in-up delay-1s"
        >
          Avec Pototop, transformez chaque coin de rue en une expérience unique
          et mémorable. Redéfinissons ensemble les interactions en ville.
        </p>
        <a
          href="#contact"
          class="mt-8 text-lg px-8 py-4 border border-white rounded-lg hover:bg-white hover:text-black transition-all"
        >
          Contactez-nous
        </a>
      </div>
    </section>

    <!-- Image Grid Section -->
    <section class="image-grid-section py-20 bg-gray-100">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-12">
          Des créations pour manger, jouer, et partager des moments de ville !
        </h2>
        <div
          class="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        >
          <!-- Image Grid -->
          <div
            v-for="(image, index) in images"
            :key="index"
            class="relative overflow-hidden hover:scale-105 transform transition-all duration-300"
          >
            <img
              :src="getImagePath(image.src)"
              :alt="image.alt"
              class="w-full h-full object-cover"
            />
            <div
              class="overlay absolute inset-0 bg-black bg-opacity-25 opacity-0 hover:opacity-100 transition-all"
            >
              <div class="flex items-center justify-center h-full">
                <p class="text-white text-lg font-bold">{{ image.caption }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Founder Section -->
    <section class="founder-section relative py-20 bg-gray-100">
      <div class="container mx-auto flex items-center justify-center">
        <div class="w-full md:w-1/2 p-3">
          <h2 class="text-2xl md:text-4xl font-bold text-center mb-6">
            Une idée de Fred Margot
          </h2>
          <p class="text-lg text-center mb-6 p-2">
            "Je crois au pouvoir des espaces publics. C'est là que la magie de
            la ville se produit, et avec Pototop, je veux que chacun puisse y
            contribuer." - Fred Margot
          </p>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section
      class="cta-section py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center p-3"
    >
      <h2 class="text-2xl md:text-4xl font-bold mb-4">
        Prenez Contact avec Nous
      </h2>
      <p class="text-2xl mb-12">
        Nous sommes prêts à transformer vos idées en réalité urbaine. Contactez-nous
        pour des solutions sur mesure.
      </p>
      <a
        href="tel:0670641722"
        class="text-lg px-10 py-4 bg-white text-black rounded-lg hover:bg-gray-300 transition-all"
      >
        06.70.64.17.22
      </a>
    </section>

    <!-- Footer -->
    <footer class="footer-section py-8 bg-black text-white text-center">
      <p class="text-sm">Pototop© - Tous droits réservés - 2024</p>
      <p class="text-xs">
        Site par
        <a
          href="https://guillaumelaine.com"
          class="text-blue-400 hover:underline"
        >
          Gui
        </a>
      </p>
    </footer>
  </main>
</template>

<script>
import { ref } from 'vue';
    import { useHead } from '@vueuse/head'
export default {
  name: 'Home',
  setup() {


    useHead({
  title: 'Pototop - Mobilier Urbain Innovant pour la Ville',
  meta: [
    { name: 'description', content: 'Découvrez Pototop : tables et accessoires design pour transformer l’espace urbain en lieux de rencontre et d’événements.' },
    { property: 'og:title', content: 'Pototop - Mobilier Urbain Innovant' },
    { property: 'og:description', content: 'Tables et supports modulaires fixables sur potelets, pour créer des espaces dynamiques et conviviaux.' },
    { property: 'og:image', content: '/assets/POTOSMILE-w.png' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://pototop.fr/' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: `
      {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Pototop - Mobilier Urbain et Supports pour Potelets",
        "image": [
          "https://pototop.fr/assets/POTOSMILE-w.png",
          "https://pototop.fr/assets/table/compressed_clap.webp",
          "https://pototop.fr/assets/table/compressed_pontivy.webp"
        ],
        "description": "Découvrez Pototop : mobilier urbain innovant avec tables et accessoires design fixables sur potelets en 2 clics pour transformer l'espace urbain.",
        "brand": {
          "@type": "Brand",
          "name": "Pototop"
        },
        "offers": {
          "@type": "Offer",
          "url": "https://pototop.fr/",
          "priceCurrency": "EUR",
          "price": "Custom",
          "availability": "https://schema.org/InStock"
        }
      }
      `,
    }
  ]
})


    const getImagePath = (imageFileName) => `/assets/table/${imageFileName}`;

    return {
      images,
      images,
      getImagePath,
    };
  },
};
</script>

<style scoped>
/* Animations */
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
  .parallax-background {
    background-attachment: scroll;
  }
}

/* Text Shadow for Better Readability */
.text-shadow {
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
}

/* Hover Effect for Cards */
.card:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease-in-out;
}

.card {
  transition: transform 0.3s ease-in-out;
}

/* Video Responsiveness */
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
