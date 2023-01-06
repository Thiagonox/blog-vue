<template>
    <div class="bg-principal pt-6">
        <main class="w-11/12 m-auto">
            <h1 class="ml-6 text-text text-6xl font-principal">
              Artigos
            </h1>
            <div class="snap-y snap-mandatory overflow-scroll scrollbar-hide w-full h-10 flex my-4">
                <Chip v-for=" artigo in listaArtigo.slice(0, 10)" :chip="artigo.tag"/>
            </div>
            <div class="w-full mt-6 grid md:grid-cols-4 gap-4">
                    <div class="md:col-span-2">
                        <Article v-for="artigo in listaArtigo.slice(0, 5)" :titulo="artigo.titulo" :tag="artigo.tag" :resumo="artigo.resumo" :link="artigo.id.toString()"/>
                    </div>
                    <div class="hidden md:block md:col-span-2">
                        <Article v-for="artigo in listaArtigo.slice(2, 5)" :titulo="artigo.titulo" :tag="artigo.tag" :resumo="artigo.resumo" :link="artigo.id.toString()"/>
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
        titulo: 'Home page',
        listaArtigo: [],
    }
    
  },
  head() {
      return {
        title: this.titulo,
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

  axios.get("https://d0xguy57.directus.app/items/Post")
  .then((res) => {
  this.listaArtigo = res.data.data
  })
},
}
</script>
