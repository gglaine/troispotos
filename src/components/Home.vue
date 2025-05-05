<template>
  <main class="homepage-experience relative overflow-hidden">
    <!-- Hero Manifesto Section -->
    <header class="hero-section relative h-screen bg-black text-white flex flex-col items-center justify-end text-center px-4 pb-12">
      <video autoplay muted loop playsinline class="absolute top-0 left-0 w-full h-full object-cover opacity-70" aria-label="Background urban environment video">
        <source src="/v92.mp4" type="video/mp4" />
      </video>
      <div class="relative z-10">
        <img src="/assets/POTOSMILE-w.png" alt="Logo Pototop" class="w-[200px] mx-auto mb-6" />
        <h2 class="text-2xl md:text-3xl italic font-light animate-fade-in-up">
          Hackez le mobilier urbain. Recréez la ville. Partagez l’espace.
        </h2>
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

    <!-- Pourquoi Pototop Section -->
    <section class="py-20 bg-black text-white px-4 text-center">
      <h2 class="text-3xl md:text-5xl font-bold mb-6">Pourquoi Pototop&nbsp;?</h2>
      <p class="max-w-3xl mx-auto text-lg font-light">
        Aujourd’hui, les potelets dessinent nos rues. Pototop les détourne pour créer des <strong>espaces conviviaux, inclusifs et éphémères</strong>.
        Avec son système breveté, ses objets design, et sa vision ludique de l’espace public, Pototop transforme le mobilier urbain en terrain de jeu citoyen.
      </p>
    </section>


<!-- Accessibility Section -->
<section class="py-20 bg-gray-100 px-6">
  <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    
    <!-- 📸 Image à gauche -->
    <div class="w-full">
      <img
        src="/assets/PMRfriendly.jpg"
        alt="Table Pototop accessible aux fauteuils roulants"
        class="max-w-56 h-auto rounded-lg shadow-md"
      />
    </div>

    <!-- 📝 Texte à droite -->
    <div class="text-center md:text-left">
      <h2 class="text-3xl font-bold mb-6">♿ Accessibilité sans compromis</h2>

      <p class="text-lg mb-4 text-gray-700">
        Nos tables innovantes sont conçues <strong>sans pieds gênants</strong>, permettant aux personnes en <strong>fauteuil roulant</strong> de s’installer confortablement.
        Chaque module favorise une <strong>mobilité fluide</strong> et une <strong>accessibilité urbaine inclusive</strong>. ✅
      </p>

      <p class="text-lg mb-4 text-gray-700">
        Déjà adoptées devant 
        <strong><a href="https://www.mondesbohemes.com/" target="_blank" rel="noopener noreferrer" class="underline hover:text-blue-600">Les Mondes Bohèmes</a></strong>, 
        rue des Vignoles à Paris, par une cliente en fauteuil roulant ravie de pouvoir partager un moment convivial. 🌆🪑
      </p>

      <p class="text-md text-gray-700">
        Pototop, c’est aussi ça : <strong>rendre la rue accessible à toutes et tous</strong>.  
        Nous réconcilions <strong>mobilité réduite</strong>, <strong>confort</strong> et <strong>design citoyen</strong>. 🌍✨
      </p>
    </div>

  </div>
</section>


    <!-- Gallery Section -->

    <section id="gallery" class="py-20 bg-white p-4 text-center">
  <h2 class="text-3xl md:text-5xl font-bold mb-12">Nos Réalisations Pototop</h2>
  <p class="max-w-3xl mx-auto text-lg font-light text-gray-700 mb-12">
  Chaque installation Pototop est une scène à ciel ouvert, un geste urbain partagé, un détournement joyeux du quotidien.  
  Découvrez comment nos modules transforment les potelets en tables, les rues en places, et les idées en espaces vivants.
</p>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-3">

    <div class="rounded-lg overflow-hidden shadow-md">
      <img src="/assets/table/compressed_clac.webp" alt="Installation Pototop Clac" class="w-full h-full object-cover">
    </div>
    <div class="rounded-lg overflow-hidden shadow-md">
      <img src="/assets/table/compressed_clap.webp" alt="Installation Pototop Clap" class="w-full h-full object-cover">
    </div>

  
    <div class="rounded-lg overflow-hidden shadow-md">
      <img src="/assets/table/compressed_bluediner.webp" alt="Installation Pototop Bluediner" class="w-full h-full object-cover">
    </div>
    <div class="rounded-lg overflow-hidden shadow-md">
      <img src="/assets/table/compressed_greenred.webp" alt="Installation Pototop Greenred" class="w-full h-full object-cover">
    </div>
    <div class="rounded-lg overflow-hidden shadow-md">
      <img src="/assets/table/compressed_orangeboheme.webp" alt="Installation Pototop Orange Bohème" class="w-full h-full object-cover">
    </div>
    <div class="rounded-lg overflow-hidden shadow-md">
      <img src="/assets/table/compressed_nightable.webp" alt="Installation Pototop Nightable" class="w-full h-full object-cover">
    </div>
    <div class="rounded-lg overflow-hidden shadow-md">
      <img src="/assets/table/compressed_nina.webp" alt="Installation Pototop Nina" class="w-full h-full object-cover">
    </div>



    <div class="rounded-lg overflow-hidden shadow-md">
      <img src="/assets/table/compressed_fredatable.webp" alt="Installation Pototop Fredatable" class="w-full h-full object-cover">
    </div>
    <div class="rounded-lg overflow-hidden shadow-md">
      <img src="/assets/table/compressed_yellowfred.webp" alt="Installation Pototop Yellow Fred" class="w-full h-full object-cover">
    </div>
    <div class="rounded-lg overflow-hidden shadow-md">
      <img src="/assets/table/compressed_fredgarance.webp" alt="Installation Pototop Fredgarance" class="w-full h-full object-cover">
    </div>
   
</div>  
  
</section>



<!-- Section Lumières & Ambiances Nocturnes -->
<section id="luminaires" class="py-20 bg-black text-white px-6 text-center">
  <h2 class="text-3xl md:text-5xl font-bold mb-6">💡 Luminaires & Ambiances Nocturnes</h2>
  <p class="max-w-3xl mx-auto text-lg font-light mb-12 text-gray-300">
    Quand la nuit tombe, Pototop s’illumine. Nos modules deviennent des balises poétiques,  
    offrant des <strong>espaces lumineux partagés</strong>, sécurisants et spectaculaires.  
    Parfaits pour les festivals, rues animées ou événements d’été. ✨🌃
  </p>

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
    <div class="rounded-lg overflow-hidden shadow-lg">
      <img src="/assets/table/compressed_lightup.webp" alt="Installation Pototop Lightup nocturne" class="w-full h-full object-cover" />
    </div>
    <div class="rounded-lg overflow-hidden shadow-lg">
      <img src="/assets/table/compressed_shotsmg.webp" alt="Installation Pototop Shots MG lumière" class="w-full h-full object-cover" />
    </div>
    <div class="rounded-lg overflow-hidden shadow-lg">
      <img src="/assets/table/compressed_mgnight.webp" alt="Installation Pototop MG de nuit" class="w-full h-full object-cover" />
    </div>
    <div class="rounded-lg overflow-hidden shadow-lg">
      <img src="/assets/table/compressed_montgolf.webp" alt="Installation Pototop Montgolf lumineuse" class="w-full h-full object-cover" />
    </div>
  </div>
</section>


<!-- Section Olympique : Jeux de Tables Paris 2024 -->
<section id="paris2024" class="py-20 bg-white text-center px-6">
  <h2 class="text-3xl md:text-5xl font-bold mb-6">🏅 Pototop x Paris 2024</h2>
  <p class="max-w-3xl mx-auto text-lg font-light mb-12 text-gray-700">
    À l’occasion des Jeux Olympiques de Paris 2024, Pototop réinvente la rue en **terrain de jeu citoyen**.  
    Nos modules deviennent **tables de ping-pong urbaines**, **zones de tir** et **espaces ludiques partagés**.  
    Une célébration du sport, de la créativité et de la convivialité dans l’espace public. 🏓🎯🇫🇷
  </p>

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  <div class="rounded-lg overflow-hidden shadow-lg h-64">
    <img src="/assets/table/compressed_pontivy.webp" alt="Installation Pototop Pontivy - Paris 2024" class="w-full h-full object-cover" />
  </div>
  <div class="rounded-lg overflow-hidden shadow-lg h-64">
    <img src="/assets/table/compressed_shoot.webp" alt="Installation Pototop Shoot - Jeux citoyens" class="w-full h-full object-cover" />
  </div>
  <div class="rounded-lg overflow-hidden shadow-lg h-64">
    <img src="/assets/table/compressed_tennis.webp" alt="Installation Pototop Tennis urbain" class="w-full h-full object-cover" />
  </div>
</div>


</section>


    <!-- Section Manifeste Product Founder -->
    <section class="bg-gray-900 text-white text-center px-6 py-20">
      <h2 class="text-3xl md:text-5xl font-bold mb-6">Manifeste du Fondateur</h2>
      <div class="flex flex-col items-center justify-center gap-8">
   
      <div>
        <p class="max-w-3xl mx-auto text-lg italic mb-4">
        Nous ne vendons pas simplement des tables ou des objets urbains. Nous proposons une <strong>nouvelle façon de vivre la rue</strong> : libre, partagée, expressive.
      </p>
      <p class="max-w-3xl mx-auto text-lg mb-4">
        Chaque module Pototop est un <strong>acte poétique et politique</strong>. Une invitation à reprendre possession de l’espace public par le design, le jeu et la créativité. Chaque potelet devient un point d’ancrage pour un usage détourné, joyeux, utile.
      </p>
      <p class="max-w-3xl mx-auto text-lg">
        En tant que fondateur, je reste à l’écoute du terrain, au contact de la ville, à l’écoute de vos idées. <strong>Pototop est vivant</strong> – et vous en êtes les co-auteurs.
      </p>
      </div>
     
      </div>



     
    </section>


    <!-- Partners Section -->
    <section class="bg-white py-16 text-center px-4">
      <h2 class="text-3xl md:text-4xl font-bold mb-6">Vous êtes une collectivité, un lieu ou un mécène&nbsp;?</h2>
      <p class="text-lg mb-6 max-w-2xl mx-auto">
        Pototop est un projet ouvert aux collaborations : installations en ville, projets culturels, expérimentations sur l’espace public.
      </p>
      <p class="text-md mb-8 max-w-xl mx-auto">
        Nous cherchons des partenaires engagés pour inventer la ville de demain avec nous. Contactez-nous ou découvrez comment nous soutenir :
      </p>
      <router-link
        to="/dossier"
        class="inline-block bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
      >
        ➤ En savoir plus / Nous soutenir
      </router-link>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-gray-100">
      <h2 class="text-3xl md:text-5xl font-bold text-center mb-8">Votre projet urbain commence ici</h2>
      <div class="max-w-full mx-auto bg-white p-8 rounded-lg shadow-md">
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
      <p class="text-sm mt-4 italic">Partagez vos installations Pototop avec <strong>#Pototop</strong> sur Instagram pour apparaître sur notre page !</p>
    </footer>
  </main>
</template>