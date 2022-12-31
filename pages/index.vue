<template>
    <div class="bg-principal pb-6">
        <header></header>
        <main class="">
            <div class="w-full m-auto pt-4 px-2">
              <div class="lg:w-2/3 absolute ml-10 mt-6 text-text font-principal">
                <h1 class="text-6xl md:text-8xl">
                    Jardinagem
                </h1>
                <h2 class="text-2xl md:text-xl">
                    Jardinagem
                </h2>
              </div>
              <img class="w-full md:h-60 md:object-cover rounded-3xl" src="https://photo-cdn2.icons8.com/_yZJWIh2uk3UDtFzvPrapRNHPJxnI8PBXwCVVHm2Pu8/rs:fit:1608:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi83YjExYzc0MGYz/MWY0NzgwOTdjNGY0/Nzc0NmU0YWI4MC5q/cGc.jpg" alt="">
            </div>
            <div class="w-11/12 m-auto">
              <div class="my-6">
                <h2 class="mt-6 text-text text-5xl font-principal">
                  Categorias
                </h2>
              </div>
              <Categories> </Categories>
            </div>
            <div class="w-11/12 mx-auto">
                <h2 class="mt-6 text-text text-5xl font-principal">
                    Artigos
                </h2>
                <div class=" mt-6 grid md:grid-cols-4 gap-4">
                    <div class="md:col-span-2">
                        <Article v-for="artigo in listaArtigo.slice(0, 2)" :titulo="artigo.titulo" :tag="artigo.tag" :resumo="artigo.resumo" :link="artigo.id.toString()"/>
                    </div>
                    <div class="hidden md:block md:col-span-2">
                        <Article v-for="artigo in listaArtigo.slice(2, 4)" :titulo="artigo.titulo" :tag="artigo.tag" :resumo="artigo.resumo" :link="artigo.id.toString()"/>
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
     
      axios.get("https://d0xguy57.directus.app/items/Post")
  .then((res) => {
    this.listaArtigo = res.data
  })
},
}
</script>
