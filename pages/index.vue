<template>
    <div class="bg-principal pb-6">
        <header></header>
        <main class="">
            <div class="w-full m-auto pt-4 px-2">
              <div class="lg:w-2/3 absolute ml-10 mt-6 text-text font-principal">
                <h1 class="text-6xl md:text-8xl">
                    Dicas de jardinagem
                </h1>
                <h2 class="text-2xl md:text-xl">
                    Jardinagem
                </h2>
              </div>
              <img class="w-full md:h-60 md:object-cover rounded-3xl" src="https://photo-cdn2.icons8.com/_yZJWIh2uk3UDtFzvPrapRNHPJxnI8PBXwCVVHm2Pu8/rs:fit:1608:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi83YjExYzc0MGYz/MWY0NzgwOTdjNGY0/Nzc0NmU0YWI4MC5q/cGc.jpg" alt="">
            </div>
            <div class="w-11/12 mx-auto">
                <h2 class="mt-6 text-text text-5xl font-principal">
                    Artigos
                </h2>
                <div class="w-full mt-6 grid md:grid-cols-4 gap-4">
                    <div id="sobre" class="col-span-2">
                        <Article v-for="artigo in listaArtigo.slice(0, 2)" :titulo="artigo.titulo" :tag="artigo.tag" :resumo="artigo.resumo"/>
                    </div>
                    <div id="sobre" class="col-span-2">
                        <Article v-for="artigo in listaArtigo.slice(2, 4)" :titulo="artigo.titulo" :tag="artigo.tag" :resumo="artigo.resumo"/>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
<script>

import Article from '../components/article.vue'

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
    created() {
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
async function oi(){src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5673700186739436"
     crossorigin="anonymous"}
</script>
