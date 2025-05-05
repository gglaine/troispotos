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

    <section class="max-w-xl mx-auto bg-white border border-gray-200 p-8 rounded-xl shadow-lg mt-8 text-center">
      <div v-if="formSubmitted" class="text-green-700 text-lg font-medium">
        ✅ Merci ! Vous recevrez bientôt notre dossier dans votre boîte mail.
      </div>

      <form
        v-else
        name="lead-form"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        @submit.prevent="handleSubmit"
        class="space-y-6 text-left"
      >
        <input type="hidden" name="form-name" value="lead-form" />
        <p class="hidden">
          <label>Ne pas remplir : <input name="bot-field" /></label>
        </p>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
          <input type="text" name="first-name" required
            class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black" />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Nom</label>
          <input type="text" name="last-name" required
            class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black" />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" name="email" required
            class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black" />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Votre message</label>
          <textarea name="message" rows="4" required
            class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"></textarea>
        </div>

        <button type="submit"
          class="w-full bg-black text-white font-semibold py-3 rounded-lg hover:bg-gray-800 transition">Recevoir le dossier PDF</button>
      </form>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const formSubmitted = ref(false)

const handleSubmit = async (event) => {
  const form = event.target
  const formData = new FormData(form)

  try {
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams([...formData]).toString(),
    })
    formSubmitted.value = true
    form.reset()
  } catch (error) {
    alert('Erreur lors de l’envoi. Merci de réessayer.')
  }
}
</script>

<style scoped>
main {
  font-family: 'Inter', sans-serif;
}
</style>
