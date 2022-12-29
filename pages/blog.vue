<template>
    <div class="bg-principal pt-6">
        <main class="w-11/12 m-auto">
            <h1 class="ml-6 text-text text-6xl font-principal">
              Artigos
            </h1>
            <div class="snap-y snap-mandatory overflow-scroll scrollbar-hide w-full h-10 flex my-4">
                <Chip v-for="artigo in listaArtigo.slice(0, 10)" :chip="artigo.tag"/>
            </div>
            <div class=" mt-6 grid md:grid-cols-4 gap-4">
                    <div class="md:col-span-2">
                        <Article v-for="artigo in listaArtigo.slice(0, 3)" :titulo="artigo.titulo" :tag="artigo.tag" :resumo="artigo.resumo" :href="artigo.id.toString()" :key="artigo.id"/>
                    </div>
                    <div class="hidden md:block md:col-span-2">
                        <Article v-for="artigo in listaArtigo.slice(3, 6)" :titulo="artigo.titulo" :tag="artigo.tag" :href="artigo.id.toString()" :key="artigo.id"/>
                    </div>
                </div>
        </main>
    </div>
</template>
<script>

import axios from 'axios'

export default {
  
  data() {
    return {
        title: 'Home page',
        listaArtigo: [],
    }
    
  },
  head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Home page description'
          }
        ]
      }
    },
    async asyncData() {
      axios.interceptors.request.use(function (config) {
          config.headers['apikey'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhremluZHFpanV2cnFmcWh0ZmR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzAxNjE3NzQsImV4cCI6MTk4NTczNzc3NH0.Pmr3Q3-bA26YyddjqkD0gG9w4laU9YJCYjSrUoEv03Q';
          config.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhremluZHFpanV2cnFmcWh0ZmR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzAxNjE3NzQsImV4cCI6MTk4NTczNzc3NH0.Pmr3Q3-bA26YyddjqkD0gG9w4laU9YJCYjSrUoEv03Q';
          return config;
        });

      axios.get("https://xkzindqijuvrqfqhtfdy.supabase.co/rest/v1/Artigo")
  .then((res) => {
    this.listaArtigo = res.data
  })
},
}
</script>
