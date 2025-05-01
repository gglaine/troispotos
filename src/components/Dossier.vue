<template>
    <main class="min-h-screen bg-white text-gray-800 px-4 py-16">
      <section class="max-w-2xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Rejoignez l’Aventure Pototop</h1>
        <p class="text-lg mb-8">
          Pototop est une initiative urbaine innovante pour transformer les potelets et l’espace public en surfaces utiles, poétiques et adaptables.
        </p>
        <p class="mb-6">
          Nous recherchons des partenaires, des financeurs, des institutions et des collectivités pour co-construire les prochaines installations.
        </p>
        <ul class="text-left list-disc list-inside mb-8">
          <li>📅 Prototypes disponibles</li>
          <li>🏛️ Installations éphémères ou permanentes</li>
          <li>🛍️ Dispositifs adaptables pour événements, festivals, centres-villes, lieux culturels</li>
        </ul>
        <p class="text-lg font-semibold mb-4">
          📄 Recevez notre dossier complet PDF
        </p>
      </section>
  
      <section class="max-w-xl mx-auto bg-gray-50 p-6 rounded-lg shadow-md mt-8">
        <form
  name="lead-form"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
  class="flex flex-col space-y-4"
>
  <input type="hidden" name="form-name" value="lead-form" />
  <!-- Honeypot field -->
  <p class="hidden">
    <label>Ne pas remplir : <input name="bot-field" /></label>
  </p>

  <!-- Real fields -->
  <input type="text" name="first-name" required />
  <input type="text" name="last-name" required />
  <input type="email" name="email" required />
  <textarea name="message" required></textarea>

  <button type="submit">Recevoir le dossier PDF</button>
</form>

      </section>
    </main>
  </template>
  
  <script>
  export default {
    name: 'DossierPage'
  };
  </script>
  
  <style scoped>
  main {
    font-family: 'Inter', sans-serif;
  }
  </style>
  