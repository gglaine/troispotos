<template>
  <main class="homepage-experience relative overflow-hidden">
    <!-- Hero Manifesto Section -->
    <header class="hero-section relative h-screen bg-black text-white flex flex-col items-center justify-center text-center px-4">
      <video autoplay muted loop playsinline class="absolute top-0 left-0 w-full h-full object-cover opacity-30" aria-label="Background urban environment video">
        <source src="/v92.mp4" type="video/mp4" />
      </video>
      <div class="relative z-10">
        <img src="/assets/POTOSMILE-w.png" alt="Logo Pototop" class="w-[200px] mx-auto mb-6" />
        <h1 class="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">Pototop</h1>
        <h2 class="text-2xl md:text-3xl italic font-light animate-fade-in-up">Réinventez la Rue. Libérez l'Espace Public. Inspirez la Ville.</h2>
        <div class="mt-8 flex flex-col md:flex-row gap-4 justify-center">
          <a href="#features" class="px-6 py-3 bg-white text-black rounded-lg font-bold hover:bg-gray-200 transition">Explorez les Possibilités</a>
          <a href="#contact" class="px-6 py-3 border border-white rounded-lg font-bold hover:bg-white hover:text-black transition">Démarrez Votre Projet Urbain</a>
        </div>
      </div>
    </header>

    <!-- Features Section -->
    <section id="features" class="py-20 bg-gray-100 p-4 text-center">
      <h2 class="text-3xl md:text-5xl font-bold mb-12">Une gamme design pour transformer chaque coin de rue</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="feature-card bg-cover bg-center h-80 rounded-lg shadow-lg" style="background-image: url('/assets/table/compressed_clap.webp');"></div>
        <div class="feature-card bg-cover bg-center h-80 rounded-lg shadow-lg" style="background-image: url('/assets/table/compressed_pontivy.webp');"></div>
        <div class="feature-card bg-cover bg-center h-80 rounded-lg shadow-lg" style="background-image: url('/assets/table/compressed_clac.webp');"></div>
      </div>
    </section>

    <section class="py-16 px-6 text-center bg-gray-100">
  <h2 class="text-3xl font-bold mb-4">Accessibilité sans compromis</h2>
  <p class="max-w-xl mx-auto text-lg mb-6">
    Nos tables innovantes sont conçues sans pieds gênants, permettant aux personnes en fauteuil roulant de s'installer confortablement en glissant leur fauteuil sous la table.
  </p>
  <p class="max-w-xl mx-auto text-lg">
    Déjà appréciées devant <strong>Les Mondes Bohèmes</strong>, rue des Vignoles à Paris, par une cliente en fauteuil roulant.
  </p>
</section>

<section id="gallery" class="py-20 bg-white p-4 text-center">
  <h2 class="text-3xl md:text-5xl font-bold mb-12">Nos Réalisations Pototop</h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    
    <div class="rounded-lg overflow-hidden shadow-md">
      <img src="/assets/table/compressed_bluediner.webp" alt="Installation Pototop Bluediner" class="w-full h-full object-cover">
    </div>
    <div class="rounded-lg overflow-hidden shadow-md">
      <img src="/assets/table/compressed_clac.webp" alt="Installation Pototop Clac" class="w-full h-full object-cover">
    </div>
    <div class="rounded-lg overflow-hidden shadow-md">
      <img src="/assets/table/compressed_clap.webp" alt="Installation Pototop Clap" class="w-full h-full object-cover">
    </div>
    <div class="rounded-lg overflow-hidden shadow-md">
      <img src="/assets/table/compressed_fred.webp" alt="Installation Pototop Fred" class="w-full h-full object-cover">
    </div>
    <div class="rounded-lg overflow-hidden shadow-md">
      <img src="/assets/table/compressed_fredatable.webp" alt="Installation Pototop Fredatable" class="w-full h-full object-cover">
    </div>
    <div class="rounded-lg overflow-hidden shadow-md">
      <img src="/assets/table/compressed_fredgarance.webp" alt="Installation Pototop Fredgarance" class="w-full h-full object-cover">
    </div>
    <div class="rounded-lg overflow-hidden shadow-md">
      <img src="/assets/table/compressed_greenred.webp" alt="Installation Pototop Greenred" class="w-full h-full object-cover">
    </div>
    <div class="rounded-lg overflow-hidden shadow-md">
      <img src="/assets/table/compressed_lightup.webp" alt="Installation Pototop Lightup" class="w-full h-full object-cover">
    </div>
    <div class="rounded-lg overflow-hidden shadow-md">
      <img src="/assets/table/compressed_mgnight.webp" alt="Installation Pototop MG Night" class="w-full h-full object-cover">
    </div>
    <div class="rounded-lg overflow-hidden shadow-md">
      <img src="/assets/table/compressed_montgolf.webp" alt="Installation Pototop Montgolf" class="w-full h-full object-cover">
    </div>
    <div class="rounded-lg overflow-hidden shadow-md">
      <img src="/assets/table/compressed_nightable.webp" alt="Installation Pototop Nightable" class="w-full h-full object-cover">
    </div>
    <div class="rounded-lg overflow-hidden shadow-md">
      <img src="/assets/table/compressed_nightgolf.webp" alt="Installation Pototop Nightgolf" class="w-full h-full object-cover">
    </div>
    <div class="rounded-lg overflow-hidden shadow-md">
      <img src="/assets/table/compressed_nina.webp" alt="Installation Pototop Nina" class="w-full h-full object-cover">
    </div>
    <div class="rounded-lg overflow-hidden shadow-md">
      <img src="/assets/table/compressed_orangeboheme.webp" alt="Installation Pototop Orange Bohème" class="w-full h-full object-cover">
    </div>
    <div class="rounded-lg overflow-hidden shadow-md">
      <img src="/assets/table/compressed_pontivy.webp" alt="Installation Pototop Pontivy" class="w-full h-full object-cover">
    </div>
    <div class="rounded-lg overflow-hidden shadow-md">
      <img src="/assets/table/compressed_shoot.webp" alt="Installation Pototop Shoot" class="w-full h-full object-cover">
    </div>
    <div class="rounded-lg overflow-hidden shadow-md">
      <img src="/assets/table/compressed_shotsmg.webp" alt="Installation Pototop Shots MG" class="w-full h-full object-cover">
    </div>
    <div class="rounded-lg overflow-hidden shadow-md">
      <img src="/assets/table/compressed_table-isometric.webp" alt="Installation Pototop Table Isométrique" class="w-full h-full object-cover">
    </div>
    <div class="rounded-lg overflow-hidden shadow-md">
      <img src="/assets/table/compressed_tablejungle.webp" alt="Installation Pototop Table Jungle" class="w-full h-full object-cover">
    </div>
    <div class="rounded-lg overflow-hidden shadow-md">
      <img src="/assets/table/compressed_tennis.webp" alt="Installation Pototop Tennis" class="w-full h-full object-cover">
    </div>
    <div class="rounded-lg overflow-hidden shadow-md">
      <img src="/assets/table/compressed_yellowfred.webp" alt="Installation Pototop Yellow Fred" class="w-full h-full object-cover">
    </div>

  </div>
</section>


    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-gray-100">
      <h2 class="text-3xl md:text-5xl font-bold text-center mb-8">Votre projet urbain commence ici</h2>
      <div class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" class="flex flex-col gap-4">
          <input type="hidden" name="form-name" value="contact" />
          <p class="hidden">
            <label>Ne pas remplir : <input name="bot-field" /></label>
          </p>
          <input type="text" name="name" placeholder="Votre nom" required class="p-2 border rounded" />
          <input type="email" name="email" placeholder="Votre email" required class="p-2 border rounded" />
          <select name="type" required class="p-2 border rounded">
            <option value="">Type de projet...</option>
            <option>Evénement</option>
            <option>Aménagement Urbain</option>
            <option>Festival</option>
            <option>Autre</option>
          </select>
          <textarea name="message" placeholder="Votre projet en quelques mots..." required class="p-2 border rounded"></textarea>
          <button type="submit" class="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">Envoyer ma demande</button>
        </form>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer-section py-8 bg-black text-white text-center">
      <p class="text-lg font-bold">Pototop — Transformer l'espace public, créer des légendes urbaines.</p>
      <p class="text-sm mt-2">Mobilier urbain design | Solutions événementielles | Aménagement sur mesure</p>
      <p class="text-xs mt-4">
        Site par <a href="https://guillaumelaine.com" class="text-blue-400 hover:underline">Gui</a>
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
    const images = ref([
  {
    src: 'compressed_clac.webp',
    alt: "Points d'Information",
    caption: 'Clic',
  },
  {
    src: 'compressed_clap.webp',
    alt: 'Pop-Up Stores',
    caption: 'Clac !',
  },
  {
    src: 'compressed_bluediner.webp',
    alt: 'Événements Communautaires',
    caption: 'Table de restaurant',
  },
  {
    src: 'compressed_yellowfred.webp',
    alt: 'Design Urbain',
    caption: 'Table Apéro',
  },
  {
    src: 'compressed_nightable.webp',
    alt: 'Dîner pour deux',
    caption: 'Diner pour 2',
  },
  {
    src: 'compressed_nina.webp',
    alt: 'Accessoires',
    caption: 'Accessoires',
  },
  {
    src: 'compressed_shoot.webp',
    alt: 'Street Art',
    caption: 'Bang',
  },
  {
    src: 'compressed_pontivy.webp',
    alt: 'Série Paris 2024',
    caption: 'Série Paris 2024',
  },
  {
    src: 'compressed_montgolf.webp',
    alt: 'Esprit parisien',
    caption: 'Esprit parisien',
  },
  {
    src: 'compressed_shotsmg.webp',
    alt: 'Moments Festifs',
    caption: 'Festif',
  },
  {
    src: 'compressed_mgnight.webp',
    alt: 'Décollage',
    caption: 'Lift off',
  },
  {
    src: 'compressed_lightup.webp',
    alt: 'Illuminez les rues',
    caption: 'Light up the streets',
  },
]);


    useHead({
  title: 'Pototop - Mobilier Urbain Innovant pour la Ville',
  meta: [
  { 
  name: 'description', 
  content: "Découvrez Pototop : mobilier urbain innovant, supports design pour potelets et événements. Réinventez votre espace public dès aujourd'hui." 
},
        { 
  property: 'og:title', 
  content: "Pototop — Réinventez la Ville avec un Mobilier Urbain d'Exception" 
}
,
{ 
  property: 'og:description', 
  content: "Transformez potelets et espaces publics avec Pototop : mobilier urbain créatif pour vos événements et aménagements." 
}
,        { property: 'og:image', content: '/assets/POTOSMILE-w.png' },
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
  "@graph": [
    {
      "@type": "Organization",
      "name": "Pototop",
      "url": "https://pototop.fr",
      "logo": "https://pototop.fr/assets/POTOSMILE-w.png",
      "description": "Pototop est un créateur de mobilier urbain innovant, spécialisé dans les supports design pour potelets et événements en extérieur.",
      "founder": "Fred Margot",
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "contact@pototop.fr",
        "contactType": "customer support",
        "areaServed": "FR",
        "availableLanguage": ["fr", "en"]
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "FR"
      }
    },
    {
      "@type": "Product",
      "name": "Tables et Supports Urbains Pototop",
      "image": [
        "https://pototop.fr/assets/POTOSMILE-w.png",
        "https://pototop.fr/assets/table/compressed_clap.webp",
        "https://pototop.fr/assets/table/compressed_pontivy.webp"
      ],
      "description": "Mobilier urbain innovant pour transformer l'espace public en lieux de rencontre : tables pour potelets, supports événementiels.",
      "brand": {
        "@type": "Brand",
        "name": "Pototop"
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "url": "https://pototop.fr/"
      }
    }
  ]
}
      `,
    }
  ]
})

const formSubmitted = ref(false);

const handleSubmit = async (event) => {
  const form = event.target;
  const formData = new FormData(form);

  try {
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams([...formData]).toString(), // IMPORTANT: URL encode!
    });
    formSubmitted.value = true;
    form.reset(); // Reset form fields if you want
  } catch (error) {
    alert('Erreur d’envoi du formulaire. Merci de réessayer.');
  }
};

    const getImagePath = (imageFileName) => `/assets/table/${imageFileName}`;

    return {
      images,
      getImagePath,
      formSubmitted,
      handleSubmit,
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
